import { useState, useEffect } from "react";
import { placeholder } from "./Gallery.jsx";

// Auto-advancing background carousel for the hero. Uses placeholder images until
// real ones are set in HERO_GALLERY (src/data/attractions.js).
export default function HeroCarousel({ images = [], interval = 4500 }) {
  const [i, setI] = useState(0);
  const n = images.length;

  useEffect(() => {
    if (n <= 1) return undefined;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    const t = setInterval(() => setI((x) => (x + 1) % n), interval);
    return () => clearInterval(t);
  }, [n, interval]);

  if (!n) return null;

  return (
    <div className="hero-carousel" aria-hidden="true">
      <div className="hero-track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {images.map((img, idx) => (
          <div
            className="hero-slide"
            key={idx}
            style={{ backgroundImage: `url("${img.src || placeholder(img.label || `Photo ${idx + 1}`)}")` }}
          />
        ))}
      </div>
      {n > 1 && (
        <div className="hero-dots">
          {images.map((_, idx) => (
            <span key={idx} className={idx === i ? "on" : ""} />
          ))}
        </div>
      )}
    </div>
  );
}
