import { useRef } from "react";

export default function Bubbles() {
  const bubbles = useRef(
    Array.from({ length: 14 }, (_, i) => ({
      left: Math.round((i * 7.3 + 4) % 96),
      size: 6 + ((i * 13) % 22),
      delay: (i * 1.7) % 9,
      dur: 9 + ((i * 5) % 8),
    }))
  ).current;
  return (
    <div className="bubbles" aria-hidden="true">
      {bubbles.map((b, i) => (
        <span
          key={i}
          style={{ left: `${b.left}%`, width: b.size, height: b.size, animationDelay: `${b.delay}s`, animationDuration: `${b.dur}s` }}
        />
      ))}
    </div>
  );
}
