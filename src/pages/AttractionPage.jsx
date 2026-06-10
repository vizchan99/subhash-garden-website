import { Check, ArrowRight } from "lucide-react";
import Bubbles from "../components/Bubbles.jsx";
import WaveBand from "../components/WaveBand.jsx";
import ThrillMeter from "../components/ThrillMeter.jsx";
import Gallery from "../components/Gallery.jsx";

export default function AttractionPage({ data, onEnquire }) {
  const Icon = data.icon;
  return (
    <div className="page">
      <section className="detail-hero">
        <Bubbles />
        <div className="detail-hero-inner">
          <span className="detail-icon"><Icon size={30} /></span>
          <span className="label label-light">{data.kicker}</span>
          <h1>{data.title}</h1>
          <div className="detail-thrill"><span>Thrill</span> <ThrillMeter level={data.thrill} /></div>
        </div>
        <WaveBand />
      </section>

      <section className="section">
        <p className="intro">{data.intro}</p>

        <div className="stat-row">
          {data.stats.map((s) => (
            <div key={s.k} className="stat"><strong>{s.v}</strong><span>{s.k}</span></div>
          ))}
        </div>

        <h2 className="block-title">What you'll find</h2>
        <div className="feature-grid">
          {data.features.map((f) => (
            <div key={f.name} className="feature"><h3>{f.name}</h3><p>{f.desc}</p></div>
          ))}
        </div>

        <h2 className="block-title">Good to know</h2>
        <ul className="tips">
          {data.tips.map((t, i) => (<li key={i}><Check size={18} /> <span>{t}</span></li>))}
        </ul>

        <Gallery title={`${data.title} in photos`} images={data.gallery} />

        <div className="detail-cta">
          <button className="btn btn-primary" onClick={() => onEnquire(data.title)}>Enquire about {data.title} <ArrowRight size={18} /></button>
        </div>
      </section>
    </div>
  );
}
