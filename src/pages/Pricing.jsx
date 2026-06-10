import { Ticket, Shirt, Check, Info, ArrowRight } from "lucide-react";
import Bubbles from "../components/Bubbles.jsx";
import WaveBand from "../components/WaveBand.jsx";

/* ---- Edit your prices here (all amounts in ₹) ---- */
const CURRENCY = "₹";
const TICKETS = [
  { name: "Children", note: "Under 10 years", price: 500 },
  { name: "Adults & teens", note: "10 years and above", price: 700, popular: true },
];
const DRESS_RENTAL = 100;
/* -------------------------------------------------- */

export default function Pricing({ onEnquire }) {
  const enquire = () => (onEnquire ? onEnquire(null) : (window.location.hash = "enquiry"));

  return (
    <div className="page">
      <section className="detail-hero">
        <Bubbles />
        <div className="detail-hero-inner">
          <span className="detail-icon"><Ticket size={30} /></span>
          <span className="label label-light">Tickets & entry</span>
          <h1>Pricing</h1>
          <p className="enquiry-sub">One ticket covers everything — slides, rain dance, wave pool and the multistation.</p>
        </div>
        <WaveBand />
      </section>

      <section className="section">
        <div className="price-grid">
          {TICKETS.map((t) => (
            <div key={t.name} className={`price-card ${t.popular ? "popular" : ""}`}>
              {t.popular && <span className="price-badge">Ages 10+</span>}
              <h3>{t.name}</h3>
              <p className="price-note">{t.note}</p>
              <div className="price-amount">{CURRENCY}{t.price}</div>
              <p className="price-period">per person · full day</p>
              <button className="btn btn-primary btn-full" onClick={enquire}>Plan a visit</button>
            </div>
          ))}
        </div>

        <div className="price-notice">
          <span className="price-notice-icon"><Shirt size={22} /></span>
          <div>
            <h3>Nylon swimwear is mandatory</h3>
            <p>For safety and pool hygiene, nylon dresses must be worn on all water rides. Don't have one? Rent a nylon dress at the entrance for {CURRENCY}{DRESS_RENTAL}.</p>
          </div>
        </div>

        <h2 className="block-title">What your ticket covers</h2>
        <ul className="tips">
          <li><Check size={18} /> <span>Entry to every attraction — the water slides, rain dance, wave pool and the multistation.</span></li>
          <li><Check size={18} /> <span>Lifeguard supervision at every pool and landing.</span></li>
          <li><Check size={18} /> <span>Full-day access — move between the rides as much as you like.</span></li>
        </ul>

        <h2 className="block-title">Good to know</h2>
        <ul className="tips">
          <li><Info size={18} /> <span>Children under 10 enter at {CURRENCY}500; everyone 10 and above is {CURRENCY}700.</span></li>
          <li><Info size={18} /> <span>Nylon swimwear is required on the rides — rentals are {CURRENCY}{DRESS_RENTAL} if you forget yours.</span></li>
        </ul>

        <div className="detail-cta">
          <button className="btn btn-primary" onClick={enquire}>Enquire about group rates <ArrowRight size={18} /></button>
        </div>
      </section>

      <style>{`
        .price-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.3rem;margin-bottom:2.5rem}
        .price-card{position:relative;background:#fff;border:1.5px solid var(--line);border-radius:22px;padding:2.2rem 1.6rem;text-align:center;box-shadow:0 10px 30px -20px rgba(7,59,110,.45)}
        .price-card.popular{border-color:var(--bright);box-shadow:0 16px 40px -18px rgba(10,91,181,.55)}
        .price-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,var(--blue),var(--ocean));color:#fff;font-size:.72rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:.3rem .8rem;border-radius:999px;white-space:nowrap}
        .price-card h3{font-size:1.3rem;color:var(--deep)}
        .price-note{color:var(--ink-soft);font-size:.9rem;margin-top:.2rem}
        .price-amount{font-family:'Fredoka','Inter',sans-serif;font-weight:700;font-size:2.8rem;color:var(--ocean);line-height:1;margin:1rem 0 .2rem}
        .price-period{color:var(--ink-soft);font-size:.85rem;margin-bottom:1.3rem}
        .price-notice{display:flex;gap:1rem;align-items:flex-start;background:var(--mist);border:1px solid var(--line);border-left:4px solid var(--bright);border-radius:16px;padding:1.3rem 1.4rem;margin-bottom:2.5rem}
        .price-notice-icon{display:grid;place-items:center;flex-shrink:0;width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,var(--pale),var(--aqua));color:var(--ocean)}
        .price-notice h3{font-size:1.1rem;color:var(--deep);margin-bottom:.3rem}
        .price-notice p{color:var(--ink-soft);font-size:.95rem;line-height:1.55}
      `}</style>
    </div>
  );
}