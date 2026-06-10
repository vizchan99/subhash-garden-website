import { Droplet, MapPin, Clock, Phone, Mail } from "lucide-react";
import config from "../config.js";
import WaveBand from "./WaveBand.jsx";
import { ATTRACTIONS } from "../data/attractions.js";

export default function Footer({ go }) {
  const { park } = config;
  return (
    <footer className="footer">
      <WaveBand flip />
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-mark"><Droplet size={20} fill="currentColor" /></span>
          <span>{park.name}</span>
        </div>
        <div className="footer-cols">
          <div>
            <h4>Visit</h4>
            <p><MapPin size={14} /> {park.location}</p>
            <p><Clock size={14} /> {park.hours}</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p><Phone size={14} /> {park.phone}</p>
            <p><Mail size={14} /> {park.email}</p>
          </div>
          <div>
            <h4>Park</h4>
            {ATTRACTIONS.map((a) => (<button key={a.id} className="footer-link" onClick={() => go(a.id)}>{a.title}</button>))}
          </div>
        </div>
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} {park.name}</span>
        <button className="footer-link admin-link" onClick={() => go("admin")}>Staff login</button>
      </div>
    </footer>
  );
}
