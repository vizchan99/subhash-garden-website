import { useState } from "react";
import { Droplet, Menu, X, ArrowRight } from "lucide-react";
import config from "../config.js";
import { ATTRACTIONS } from "../data/attractions.js";

export default function Nav({ route, go, onEnquire }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <button className="brand" onClick={() => { go("home"); close(); }}>
        <span className="brand-mark"><Droplet size={22} fill="currentColor" /></span>
        <span className="brand-name">{config.park.name}</span>
      </button>

      <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`nav-links ${open ? "is-open" : ""}`}>
        <button className="home-link" onClick={() => { go("home"); close(); }} data-active={route === "home"}>Home</button>
        {ATTRACTIONS.map((a) => (
          <button key={a.id} onClick={() => { go(a.id); close(); }} data-active={route === a.id}>{a.nav}</button>
        ))}
        <button onClick={() => { go("pricing"); close(); }} data-active={route === "pricing"}>Pricing</button>
        <button className="enquire-btn" onClick={() => { onEnquire(null); close(); }}>Enquire <ArrowRight size={16} /></button>
      </nav>
    </header>
  );
}
