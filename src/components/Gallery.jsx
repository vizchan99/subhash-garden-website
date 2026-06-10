// Photo gallery used on the home page and each attraction page.
//
// To replace a placeholder with a real photo, set the `src` of a gallery item
// (in src/data/attractions.js) to your image path or URL, e.g.
//   { label: "The Cyclone", src: "/images/slides-cyclone.jpg" }
// In a Vite project, files in the `public/` folder are served from "/", so
// public/images/slides-cyclone.jpg => src: "/images/slides-cyclone.jpg".

export function placeholder(label = "Photo") {
  const text = String(label).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0' stop-color='#CDEBFB'/><stop offset='1' stop-color='#6FD3F2'/>
    </linearGradient></defs>
    <rect width='400' height='300' fill='url(#g)'/>
    <g fill='none' stroke='#0A5BB5' stroke-width='2' opacity='0.65'>
      <rect x='150' y='112' width='100' height='72' rx='10'/>
      <rect x='172' y='102' width='30' height='14' rx='4'/>
      <circle cx='200' cy='150' r='21'/>
    </g>
    <text x='200' y='222' text-anchor='middle' font-family='Inter,Arial,sans-serif' font-size='18' font-weight='600' fill='#073B6E'>${text}</text>
    <text x='200' y='246' text-anchor='middle' font-family='Inter,Arial,sans-serif' font-size='12' fill='#0A5BB5'>Replace this placeholder</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export default function Gallery({ title, images = [] }) {
  if (!images || images.length === 0) return null;
  return (
    <div className="gallery-block">
      {title && <h2 className="block-title">{title}</h2>}
      <div className="gallery-grid">
        {images.map((img, i) => {
          const label = img.label || img.alt || `Photo ${i + 1}`;
          const src = img.src || placeholder(label);
          return (
            <figure className="gallery-item" key={i}>
              <img
                src={src}
                alt={img.alt || label}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = placeholder(label);
                }}
              />
              {img.caption && <figcaption>{img.caption}</figcaption>}
            </figure>
          );
        })}
      </div>
    </div>
  );
}
