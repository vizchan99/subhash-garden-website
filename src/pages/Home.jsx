import { Sparkles, ArrowRight, ChevronRight } from "lucide-react";
import config from "../config.js";
import { ATTRACTIONS, HOME_GALLERY, HERO_GALLERY } from "../data/attractions.js";
import Bubbles from "../components/Bubbles.jsx";
import WaveBand from "../components/WaveBand.jsx";
import Gallery from "../components/Gallery.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";

export default function Home({ go, onEnquire }) {
  const { park } = config;
  return (
    <div className="page">
      {/* Hero: auto-scrolling photos behind the title */}
      <section className="hero">
        <HeroCarousel images={HERO_GALLERY} />
        <div className="hero-scrim" />
        <div className="hero-inner">
          <span className="eyebrow"><Sparkles size={14} /> {park.hours}</span>
          <h1 className="hero-title">{park.name}</h1>
          <p className="hero-tag">{park.tagline}</p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => onEnquire(null)}>Plan your visit <ArrowRight size={18} /></button>
            <button className="btn btn-ghost" onClick={() => go("slides")}>See the rides</button>
          </div>
        </div>
        <WaveBand color="var(--bright)" />
      </section>

      {/* Feature band: now carries the animated bubble + blue backdrop */}
      <section className="feature-band">
        <Bubbles />
        <div className="feature-inner">
          <div className="section-head">
            <span className="label">Four ways to get wet</span>
            <h2>Everything in one park</h2>
            <p className="lede">Pick a ride or splash through all of them. Tap any attraction for hours, heights and the good-to-know details before you go.</p>
          </div>
          <div className="card-grid">
            {ATTRACTIONS.map((a) => {
              const Icon = a.icon;
              return (
                <button key={a.id} className="att-card" onClick={() => go(a.id)}>
                  <span className="att-icon"><Icon size={26} /></span>
                  <h3>{a.title}</h3>
                  <p>{a.kicker}</p>
                  <span className="att-more">Explore <ChevronRight size={16} /></span>
                </button>
              );
            })}
          </div>
        </div>
        <WaveBand />
      </section>

      <section className="section">
        <Gallery title="The park in photos" images={HOME_GALLERY} />
      </section>

      <section className="cta-band">
        <WaveBand flip />
        <div className="cta-band-inner">
          <h2>Bringing a group?</h2>
          <p>Schools, birthdays, corporate days — tell us your date and headcount and we'll sort the rest.</p>
          <button className="btn btn-primary" onClick={() => onEnquire(null)}>Send an enquiry <ArrowRight size={18} /></button>
        </div>
      </section>
    </div>
  );
}
