import { useState, useEffect, useCallback } from "react";
import { Lock, Download, RefreshCw, LogOut, Inbox, Clock, Trash2 } from "lucide-react";
import { login, listEnquiries, setEnquiryStatus, deleteEnquiry, downloadEnquiriesExcel } from "../api.js";

export default function Admin() {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all"); // all | New | Responded

  const load = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError("");
    try {
      setRows(await listEnquiries(token, filter));
    } catch (e) {
      setError(e.message);
      if (/expired|sign in/i.test(e.message)) setToken(null);
    } finally {
      setLoading(false);
    }
  }, [token, filter]);

  useEffect(() => { if (token) load(); }, [token, filter, load]);

  const tryLogin = async () => {
    if (!email.trim() || !pw) { setLoginErr("Enter your email and password."); return; }
    setLoggingIn(true);
    setLoginErr("");
    try {
      const res = await login(email.trim(), pw);
      setPw("");
      setToken(res.token);
    } catch (e) {
      setLoginErr(e.message);
    } finally {
      setLoggingIn(false);
    }
  };

  const toggleStatus = async (row) => {
    const next = row.status === "New" ? "Responded" : "New";
    setRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, status: next } : r)));
    try { await setEnquiryStatus(token, row.id, next); } catch (e) { setError(e.message); load(); }
  };

  const removeRow = async (row) => {
    if (!window.confirm(`Delete enquiry from ${row.name}? This can't be undone.`)) return;
    setRows((rs) => rs.filter((r) => r.id !== row.id));
    try { await deleteEnquiry(token, row.id); } catch (e) { setError(e.message); load(); }
  };

  const exportExcel = async () => {
    try { await downloadEnquiriesExcel(token, filter); } catch (e) { setError(e.message); }
  };

  if (!token) {
    return (
      <div className="page">
        <section className="section narrow">
          <div className="login">
            <span className="login-mark"><Lock size={28} /></span>
            <h1>Staff sign in</h1>
            <p className="login-sub">Sign in to view and download enquiries.</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && tryLogin()}
              placeholder="Email"
              autoComplete="username"
            />
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && tryLogin()}
              placeholder="Password"
              autoComplete="current-password"
            />
            {loginErr && <span className="err">{loginErr}</span>}
            <button className="btn btn-primary btn-full" onClick={tryLogin} disabled={loggingIn}>
              {loggingIn ? "Signing in…" : "Sign in"}
            </button>
            <p className="login-note">Credentials are checked by the server; sessions expire automatically.</p>
          </div>
        </section>
      </div>
    );
  }

  const newCount = rows.filter((r) => r.status === "New").length;

  return (
    <div className="page">
      <section className="section admin">
        <div className="admin-head">
          <div>
            <h1>Enquiries</h1>
            <p className="admin-sub">
              {rows.length} {filter === "all" ? "total" : "shown"}
              {filter === "all" && <> · <strong>{newCount} new</strong></>}
            </p>
          </div>
          <div className="admin-actions">
            <button className="btn btn-ghost btn-sm" onClick={load} disabled={loading}>
              <RefreshCw size={16} className={loading ? "spin" : ""} /> Refresh
            </button>
            <button className="btn btn-primary btn-sm" onClick={exportExcel} disabled={!rows.length}>
              <Download size={16} /> Download Excel
            </button>
            <button className="btn btn-ghost btn-sm" onClick={() => { setToken(null); setRows([]); }}>
              <LogOut size={16} /> Sign out
            </button>
          </div>
        </div>

        <div className="filters">
          {["all", "New", "Responded"].map((f) => (
            <button key={f} data-active={filter === f} onClick={() => setFilter(f)}>
              {f === "all" ? "All" : f}
            </button>
          ))}
        </div>

        {error && <div className="form-error" style={{ marginBottom: "1rem" }}>{error}</div>}

        {loading ? (
          <div className="empty"><RefreshCw size={28} className="spin" /><p>Loading enquiries…</p></div>
        ) : rows.length === 0 ? (
          <div className="empty">
            <Inbox size={32} />
            <p>No enquiries here yet. Submissions from the enquiry page will appear in this list.</p>
          </div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Received</th><th>Name</th><th>Contact</th><th>Date</th>
                  <th>Group</th><th>Interest</th><th>Message</th><th>Status</th><th></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id}>
                    <td className="nowrap"><Clock size={13} /> {new Date(r.created_at).toLocaleString()}</td>
                    <td className="strong">{r.name}</td>
                    <td>
                      {r.phone && <div>{r.phone}</div>}
                      {r.email && <div className="muted">{r.email}</div>}
                    </td>
                    <td>{r.visit_date || "—"}</td>
                    <td>{r.group_size ?? "—"}</td>
                    <td>{r.interest}</td>
                    <td className="msg">{r.message || "—"}</td>
                    <td>
                      <button className={`status status-${r.status}`} onClick={() => toggleStatus(r)}>{r.status}</button>
                    </td>
                    <td>
                      <button className="icon-btn" onClick={() => removeRow(r)} aria-label="Delete"><Trash2 size={15} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
