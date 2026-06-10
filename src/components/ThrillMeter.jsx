import { Droplet } from "lucide-react";

export default function ThrillMeter({ level }) {
  return (
    <div className="thrill" aria-label={`Thrill level ${level} of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Droplet
          key={n}
          size={18}
          className={n <= level ? "thrill-on" : "thrill-off"}
          fill={n <= level ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}
