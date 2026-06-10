# Water Park — Frontend (React + Vite)

The public site (home, attraction pages, enquiry form) plus the staff admin area.
Yes — this is a standard React app: function components, hooks, and JSX.

## Structure

```
index.html               Vite entry
vite.config.js
.env.example             VITE_API_URL (the only thing the frontend needs)
src/
  main.jsx               React entry (mounts <App/>)
  App.jsx                Routing + layout; injects the stylesheet once
  config.js              API URL, endpoint paths, public park details (NO secrets)
  api.js                 fetch client for the backend
  styles.js              The ENTIRE stylesheet, kept as one unit (not split)
  data/
    attractions.js       Attraction content
  components/
    Nav.jsx  Footer.jsx  WaveBand.jsx  Bubbles.jsx  ThrillMeter.jsx
  pages/
    Home.jsx  AttractionPage.jsx  Enquiry.jsx  Admin.jsx
```

The CSS lives in one file (`styles.js`) on purpose and is applied app-wide via a
single `<style>` tag in `App.jsx`, so styling is not fragmented across components.

## Run

```bash
npm install
npm run dev               # http://localhost:5173
```


## Editing park details

Change name, phone, WhatsApp, email, location, and hours in `src/config.js`
under `park`. Attraction copy lives in `src/data/attractions.js`.

## Photo galleries

The home page and each attraction page show a photo gallery. Until you add real
photos, each tile renders a labelled placeholder. To use a real image, set the
`src` on a gallery item in `src/data/attractions.js` (per-attraction `gallery`
arrays and the `HOME_GALLERY` export). In Vite, put files in `public/images/`
and reference them as `/images/your-photo.jpg`.
