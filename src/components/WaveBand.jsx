// Decorative wave divider. `color` sets the wave fill (defaults to white) so a
// section can blend into whatever sits below it. `flip` puts it at the top.
export default function WaveBand({ flip, color }) {
  return (
    <div
      className={`waveband ${flip ? "waveband-flip" : ""}`}
      style={color ? { color } : undefined}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path className="wb-back" d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,50 L1440,120 L0,120 Z" />
        <path className="wb-front" d="M0,70 C220,30 440,100 720,70 C1000,40 1220,100 1440,70 L1440,120 L0,120 Z" />
      </svg>
    </div>
  );
}
