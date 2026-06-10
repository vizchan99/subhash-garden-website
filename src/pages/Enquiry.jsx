import { useState, useEffect } from "react";
import { Check, MessageCircle, Phone, Mail, Calendar, Users, ArrowRight } from "lucide-react";
import config from "../config.js";
import { submitEnquiry } from "../api.js";
import { ATTRACTIONS } from "../data/attractions.js";
import WaveBand from "../components/WaveBand.jsx";

const EMPTY_FORM = { name: "", phone: "", email: "", date: "", group: "", interest: "", message: "" };

export default function Enquiry({ prefill }) {
  const { park } = config;
  const [form, setForm] = useState({ ...EMPTY_FORM, interest: prefill || "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | saving | done | error
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => { setForm((f) => ({ ...f, interest: prefill || f.interest })); }, [prefill]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please tell us your name.";
    if (!form.phone.trim() && !form.email.trim()) er.phone = "Add a phone or email so we can reply.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "That email doesn't look right.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    setStatus("saving");
    setErrMsg("");
    try {
      await submitEnquiry({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        date: form.date,
        group: form.group,
        interest: form.interest || "General",
        message: form.message.trim(),
      });
      setStatus("done");
    } catch (e) {
      setErrMsg(e.message);
      setStatus("error");
    }
  };

  const waText = encodeURIComponent(
    `Hi ${park.name}, I'd like to enquire about a visit.` + (form.interest ? ` Interested in: ${form.interest}.` : "")
  );

  if (status === "done") {
    return (
      <div className="page">
        <section className="section narrow">
          <div className="success">
            <span className="success-mark"><Check size={34} /></span>
            <h1>Enquiry received</h1>
            <p>Thanks, {form.name.split(" ")[0] || "there"} — your enquiry is on its way to the team and they'll get back to you soon. Want a faster reply? Message us directly.</p>
            <div className="success-actions">
              <a className="btn btn-primary" href={`https://wa.me/${park.whatsapp}?text=${waText}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Message on WhatsApp</a>
              <a className="btn btn-ghost" href={`tel:${park.phone.replace(/\s/g, "")}`}><Phone size={18} /> Call us</a>
            </div>
            <button className="link-btn" onClick={() => { setForm({ ...EMPTY_FORM }); setStatus("idle"); }}>Send another enquiry</button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="enquiry-hero">
        <div className="detail-hero-inner">
          <span className="label label-light">We'd love to have you</span>
          <h1>Make an enquiry</h1>
          <p className="enquiry-sub">Tell us a little about your visit and we'll be in touch.</p>
        </div>
        <WaveBand />
      </section>

      <section className="section narrow">
        <div className="form">
          <div className="field">
            <label>Full name *</label>
            <input value={form.name} onChange={set("name")} placeholder="Jordan Rivers" />
            {errors.name && <span className="err">{errors.name}</span>}
          </div>

          <div className="field-row">
            <div className="field">
              <label>Phone</label>
              <input value={form.phone} onChange={set("phone")} placeholder="+1 555 010 2020" />
              {errors.phone && <span className="err">{errors.phone}</span>}
            </div>
            <div className="field">
              <label>Email</label>
              <input value={form.email} onChange={set("email")} placeholder="you@example.com" />
              {errors.email && <span className="err">{errors.email}</span>}
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label><Calendar size={14} /> Preferred date</label>
              <input type="date" value={form.date} onChange={set("date")} />
            </div>
            <div className="field">
              <label><Users size={14} /> Group size</label>
              <input type="number" min="1" value={form.group} onChange={set("group")} placeholder="e.g. 12" />
            </div>
          </div>

          <div className="field">
            <label>Interested in</label>
            <select value={form.interest} onChange={set("interest")}>
              <option value="">No preference</option>
              {ATTRACTIONS.map((a) => (<option key={a.id} value={a.title}>{a.title}</option>))}
              <option value="Whole park">Whole park</option>
              <option value="Group / event booking">Group / event booking</option>
            </select>
          </div>

          <div className="field">
            <label>Message</label>
            <textarea rows={4} value={form.message} onChange={set("message")} placeholder="Anything you'd like us to know…" />
          </div>

          {status === "error" && (
            <div className="form-error">
              {errMsg || "Couldn't send your enquiry just now."} You can also message us on WhatsApp below.
            </div>
          )}

          <button className="btn btn-primary btn-full" onClick={submit} disabled={status === "saving"}>
            {status === "saving" ? "Sending…" : "Send enquiry"} <ArrowRight size={18} />
          </button>

          <div className="direct">
            <span>Prefer to reach us directly?</span>
            <div className="direct-links">
              <a href={`https://wa.me/${park.whatsapp}?text=${waText}`} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
              <a href={`tel:${park.phone.replace(/\s/g, "")}`}><Phone size={16} /> {park.phone}</a>
              <a href={`mailto:${park.email}`}><Mail size={16} /> {park.email}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
