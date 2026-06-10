// Frontend configuration.
//
// ⚠️ SAFE-TO-SHIP ONLY. Everything here is bundled into the browser and is
// visible to anyone who opens the site. NEVER put passwords, the JWT secret,
// database credentials, or SMTP/Twilio API keys here. Those are server-only and
// live in the backend's .env (read by backend/src/config.js).

const fromEnv = (key) =>
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env[key]) || undefined;

export const config = {
  // Backend API base URL. Set VITE_API_URL in your .env to override per environment.
  apiBase: fromEnv("VITE_API_URL") || "http://localhost:4000",

  // API endpoint paths (these match the backend routes).
  endpoints: {
    submitEnquiry: "/api/enquiries",
    login: "/api/auth/login",
    enquiries: "/api/enquiries",
    export: "/api/enquiries/export",
  },

  // Public park details shown around the site.
  park: {
    name: "Subhash Garden",
    tagline: "Where the city comes to make a splash.",
    phone: "+91 9603 884444",
    whatsapp: "9603884444", // digits only, country code, no + or spaces
    email: "",
    location: "Madanapalle Village, Makloor Mandal, Nizamabad",
    hours: "Open daily · 10:00 AM – 6:00 PM",
  },
};

export default config;
