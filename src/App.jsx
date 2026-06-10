import { useState, useEffect, useCallback } from "react";
import css from "./styles.js";
import { ATTRACTION_BY_ID } from "./data/attractions.js";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AttractionPage from "./pages/AttractionPage.jsx";
import Enquiry from "./pages/Enquiry.jsx";
import Admin from "./pages/Admin.jsx";

const ROUTES = ["home", "slides", "rain-dance", "wave-pool", "multistation", "enquiry", "admin"];

export default function App() {
  const [route, setRoute] = useState("home");
  const [prefill, setPrefill] = useState(null);

  const applyHash = useCallback(() => {
    const h = window.location.hash.replace("#", "") || "home";
    setRoute(ROUTES.includes(h) ? h : "home");
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [applyHash]);

  const go = (r) => { window.location.hash = r; };
  const onEnquire = (attractionTitle) => { setPrefill(attractionTitle); go("enquiry"); };

  let content;
  if (route === "home") content = <Home go={go} onEnquire={onEnquire} />;
  else if (route === "enquiry") content = <Enquiry prefill={prefill} />;
  else if (route === "admin") content = <Admin />;
  else if (ATTRACTION_BY_ID[route]) content = <AttractionPage data={ATTRACTION_BY_ID[route]} onEnquire={onEnquire} />;
  else content = <Home go={go} onEnquire={onEnquire} />;

  return (
    <div className="app">
      <style>{css}</style>
      <Nav route={route} go={go} onEnquire={onEnquire} />
      <main>{content}</main>
      <Footer go={go} />
    </div>
  );
}
