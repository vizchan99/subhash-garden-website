// The entire site's CSS, kept as one undivided unit (not split per component).
// App.jsx injects it once via <style>{css}</style>.
export const css = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

:root{
  --deep:#073B6E; --ocean:#0A5BB5; --blue:#1E88E5; --bright:#2EA8F0;
  --aqua:#6FD3F2; --pale:#CDEBFB; --mist:#EAF6FE; --white:#FFFFFF;
  --ink:#0B2A4A; --ink-soft:#3A5A78; --line:#D9ECF9;
  --shadow:0 14px 40px -18px rgba(7,59,110,.45);
}
*{box-sizing:border-box;margin:0;padding:0}
.app{font-family:'Inter',system-ui,sans-serif;color:var(--ink);background:var(--white);
  -webkit-font-smoothing:antialiased;min-height:100vh;overflow-x:hidden}
h1,h2,h3,h4,.brand-name{font-family:'Fredoka','Inter',sans-serif;font-weight:600;line-height:1.08}
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}
a{color:inherit;text-decoration:none}
main{min-height:60vh}

.btn{display:inline-flex;align-items:center;gap:.5rem;font-weight:600;font-size:1rem;
  padding:.85rem 1.5rem;border-radius:999px;transition:transform .15s ease,box-shadow .15s ease,background .15s ease}
.btn:active{transform:translateY(1px)}
.btn-primary{background:linear-gradient(135deg,var(--blue),var(--ocean));color:#fff;
  box-shadow:0 10px 24px -10px rgba(10,91,181,.7)}
.btn-primary:hover{box-shadow:0 14px 30px -10px rgba(10,91,181,.85);transform:translateY(-1px)}
.btn-primary:disabled{opacity:.6;cursor:default;transform:none}
.btn-ghost{background:var(--mist);color:var(--ocean);border:1px solid var(--line)}
.btn-ghost:hover{background:var(--pale)}
.btn-full{width:100%;justify-content:center;margin-top:.5rem}
.btn-sm{padding:.55rem 1rem;font-size:.9rem}
.link-btn{color:var(--ocean);font-weight:600;text-decoration:underline;margin-top:1.2rem}

.nav{position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;
  padding:.85rem 6vw;background:rgba(255,255,255,.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.brand{display:flex;align-items:center;gap:.55rem}
.brand-mark{display:grid;place-items:center;width:34px;height:34px;border-radius:11px;
  background:linear-gradient(135deg,var(--bright),var(--ocean));color:#fff}
.brand-name{font-size:1.18rem;color:var(--deep)}
.nav-toggle{display:none;color:var(--ocean)}
.nav-links{display:flex;align-items:center;gap:.35rem}
.nav-links button{padding:.5rem .8rem;border-radius:8px;font-weight:500;color:var(--ink-soft);font-size:.95rem}
.nav-links button:hover{color:var(--ocean);background:var(--mist)}
.nav-links button[data-active="true"]{color:var(--ocean);font-weight:600}
.enquire-btn{background:linear-gradient(135deg,var(--blue),var(--ocean))!important;color:#fff!important;
  font-weight:600!important;padding:.55rem 1.1rem!important;border-radius:999px!important;margin-left:.4rem}
.enquire-btn:hover{color:#fff!important}

.hero{position:relative;display:flex;flex-direction:column;justify-content:center;min-height:80vh;padding:6rem 6vw 8.5rem;text-align:center;color:#fff;overflow:hidden;background:var(--deep)}
.hero-carousel{position:absolute;inset:0;z-index:0}
.hero-track{display:flex;width:100%;height:100%;transition:transform 1s ease}
.hero-slide{flex:0 0 100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat}
.hero-scrim{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(0,0,0,.45),rgba(0,0,0,.25) 42%,rgba(0,0,0,.6))}
.hero-dots{position:absolute;left:0;right:0;bottom:calc(90px + 1.1rem);z-index:4;display:flex;gap:.45rem;justify-content:center}
.hero-dots span{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.45);transition:background .2s}
.hero-dots span.on{background:#fff}
.hero-inner{position:relative;z-index:3;max-width:760px;margin:0 auto}
.eyebrow{display:inline-flex;align-items:center;gap:.4rem;font-size:.85rem;font-weight:600;
  letter-spacing:.03em;background:rgba(255,255,255,.16);padding:.4rem .9rem;border-radius:999px;margin-bottom:1.4rem}
.hero-title{font-size:clamp(2.6rem,7vw,4.6rem);font-weight:700;text-shadow:0 4px 30px rgba(7,59,110,.4)}
.hero-tag{font-size:clamp(1.05rem,2.4vw,1.4rem);margin-top:1rem;opacity:.95;font-weight:400}
.hero-cta{display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap;margin-top:2.2rem}
.hero .btn-ghost{background:rgba(255,255,255,.16);color:#fff;border-color:rgba(255,255,255,.3)}
.hero .btn-ghost:hover{background:rgba(255,255,255,.26)}

.bubbles{position:absolute;inset:0;z-index:1;pointer-events:none}
.bubbles span{position:absolute;bottom:-30px;border-radius:50%;
  background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.85),rgba(255,255,255,.12));
  animation:rise linear infinite;opacity:.5}
@keyframes rise{0%{transform:translateY(0) scale(.8);opacity:0}15%{opacity:.55}85%{opacity:.4}100%{transform:translateY(-120vh) scale(1.1);opacity:0}}

.waveband{position:absolute;left:0;right:0;bottom:-1px;line-height:0;z-index:2;color:#fff}
.waveband svg{width:100%;height:90px;display:block}
.waveband .wb-back{fill:rgba(255,255,255,.45)}
.waveband .wb-front{fill:currentColor;animation:slide 9s ease-in-out infinite alternate}
.waveband-flip{top:-1px;bottom:auto;transform:rotate(180deg)}
@keyframes slide{from{transform:translateX(-30px)}to{transform:translateX(30px)}}

.section{padding:4.5rem 6vw;max-width:1180px;margin:0 auto}
.section.narrow{max-width:680px}
.section-head{text-align:center;max-width:640px;margin:0 auto 3rem}
.label{display:inline-block;font-size:.8rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--bright);margin-bottom:.7rem}
.label-light{color:rgba(255,255,255,.85)}
.section-head h2{font-size:clamp(1.8rem,4vw,2.6rem);color:var(--deep)}
.lede{color:var(--ink-soft);margin-top:.9rem;font-size:1.05rem;line-height:1.6}

.card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.3rem}
.att-card{text-align:left;background:#fff;border:1px solid var(--line);border-radius:22px;padding:1.8rem;
  transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;display:flex;flex-direction:column;gap:.5rem}
.att-card:hover{transform:translateY(-5px);box-shadow:var(--shadow);border-color:var(--aqua)}
.att-icon{display:grid;place-items:center;width:52px;height:52px;border-radius:15px;
  background:linear-gradient(135deg,var(--pale),var(--aqua));color:var(--ocean);margin-bottom:.4rem}
.att-card h3{font-size:1.3rem;color:var(--deep)}
.att-card p{color:var(--ink-soft);font-size:.95rem;line-height:1.5;flex:1}
.att-more{display:inline-flex;align-items:center;gap:.25rem;color:var(--ocean);font-weight:600;font-size:.92rem;margin-top:.6rem}

.feature-band{position:relative;overflow:hidden;color:#fff;padding:5.5rem 6vw 7rem;
  background:radial-gradient(120% 120% at 50% -10%,var(--bright) 0%,var(--ocean) 45%,var(--deep) 100%)}
.feature-inner{position:relative;z-index:3;max-width:1180px;margin:0 auto}
.feature-band .section-head{margin-bottom:3rem}
.feature-band .label{color:#d3f0ff}
.feature-band .section-head h2{color:#fff}
.feature-band .lede{color:rgba(255,255,255,.92)}

.cta-band{position:relative;background:linear-gradient(135deg,var(--ocean),var(--deep));color:#fff;padding:6rem 6vw 4.5rem;text-align:center;margin-top:2rem}
.cta-band-inner{position:relative;z-index:3;max-width:600px;margin:0 auto}
.cta-band h2{font-size:clamp(1.7rem,4vw,2.4rem)}
.cta-band p{margin:1rem 0 2rem;opacity:.92;font-size:1.05rem}

.detail-hero,.enquiry-hero{position:relative;padding:4.5rem 6vw 7rem;color:#fff;overflow:hidden;
  background:radial-gradient(120% 130% at 30% -20%,var(--bright),var(--ocean) 55%,var(--deep))}
.detail-hero-inner{position:relative;z-index:2;max-width:720px;margin:0 auto;text-align:center}
.detail-icon{display:grid;place-items:center;width:62px;height:62px;border-radius:18px;background:rgba(255,255,255,.18);margin:0 auto 1rem}
.detail-hero-inner h1{font-size:clamp(2.2rem,5.5vw,3.4rem)}
.detail-thrill{display:inline-flex;align-items:center;gap:.6rem;margin-top:1.2rem;font-weight:600;background:rgba(255,255,255,.14);padding:.5rem 1rem;border-radius:999px}
.thrill{display:inline-flex;gap:.15rem}
.thrill-on{color:#fff}.thrill-off{color:rgba(255,255,255,.35)}
.intro{font-size:1.2rem;line-height:1.7;color:var(--ink);max-width:760px}
.stat-row{display:flex;flex-wrap:wrap;gap:1rem;margin:2.5rem 0}
.stat{flex:1;min-width:130px;background:var(--mist);border:1px solid var(--line);border-radius:18px;padding:1.4rem;text-align:center}
.stat strong{display:block;font-family:'Fredoka';font-size:1.9rem;color:var(--ocean);line-height:1}
.stat span{display:block;margin-top:.4rem;color:var(--ink-soft);font-size:.85rem}
.block-title{font-size:1.5rem;color:var(--deep);margin:1rem 0 1.3rem}
.feature-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.1rem;margin-bottom:2.5rem}
.feature{background:#fff;border:1px solid var(--line);border-radius:18px;padding:1.4rem}
.feature h3{font-size:1.1rem;color:var(--ocean);margin-bottom:.4rem}
.feature p{color:var(--ink-soft);font-size:.95rem;line-height:1.55}
.tips{list-style:none;display:flex;flex-direction:column;gap:.8rem;margin-bottom:2.5rem}
.tips li{display:flex;gap:.7rem;align-items:flex-start;color:var(--ink-soft);line-height:1.5}
.tips svg{color:var(--bright);flex-shrink:0;margin-top:.15rem}
.detail-cta{text-align:center}

.enquiry-sub{margin-top:.8rem;opacity:.92}
.form{display:flex;flex-direction:column;gap:1.1rem}
.field{display:flex;flex-direction:column;gap:.4rem}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:1.1rem}
.field label{font-size:.85rem;font-weight:600;color:var(--ink);display:flex;align-items:center;gap:.35rem}
.field input,.field select,.field textarea{font-family:inherit;font-size:1rem;color:var(--ink);
  padding:.8rem .95rem;border:1.5px solid var(--line);border-radius:12px;background:#fff;transition:border-color .15s,box-shadow .15s}
.field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:var(--bright);box-shadow:0 0 0 4px rgba(46,168,240,.15)}
.field textarea{resize:vertical}
.err{color:#d63b3b;font-size:.82rem}
.form-error{background:#fdeaea;color:#b02a2a;border:1px solid #f3c6c6;padding:.8rem 1rem;border-radius:12px;font-size:.9rem}
.direct{margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid var(--line);text-align:center;color:var(--ink-soft)}
.direct-links{display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;margin-top:.8rem}
.direct-links a{display:inline-flex;align-items:center;gap:.35rem;color:var(--ocean);font-weight:600;font-size:.95rem}
.direct-links a:hover{text-decoration:underline}

.success{text-align:center;padding:2rem 0}
.success-mark{display:inline-grid;place-items:center;width:74px;height:74px;border-radius:50%;background:linear-gradient(135deg,var(--bright),var(--ocean));color:#fff;margin-bottom:1.4rem}
.success h1{font-size:2rem;color:var(--deep)}
.success p{color:var(--ink-soft);margin-top:.8rem;line-height:1.6}
.success-actions{display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap;margin-top:1.8rem}

.login{max-width:380px;margin:2rem auto;text-align:center;display:flex;flex-direction:column;gap:.8rem;
  background:#fff;border:1px solid var(--line);border-radius:22px;padding:2.5rem;box-shadow:var(--shadow)}
.login-mark{display:inline-grid;place-items:center;width:60px;height:60px;border-radius:16px;background:linear-gradient(135deg,var(--pale),var(--aqua));color:var(--ocean);margin:0 auto}
.login h1{font-size:1.6rem;color:var(--deep)}
.login-sub{color:var(--ink-soft);font-size:.95rem;margin-bottom:.5rem}
.login input{font-size:1rem;padding:.8rem 1rem;border:1.5px solid var(--line);border-radius:12px;text-align:center}
.login input:focus{outline:none;border-color:var(--bright);box-shadow:0 0 0 4px rgba(46,168,240,.15)}
.login-note{font-size:.78rem;color:var(--ink-soft);opacity:.8;margin-top:.4rem;line-height:1.4}

.admin{max-width:1240px}
.admin-head{display:flex;justify-content:space-between;align-items:flex-end;gap:1rem;flex-wrap:wrap;margin-bottom:1.5rem}
.admin-head h1{font-size:2rem;color:var(--deep)}
.admin-sub{color:var(--ink-soft);margin-top:.3rem}
.admin-sub strong{color:var(--ocean)}
.admin-actions{display:flex;gap:.6rem;flex-wrap:wrap}
.filters{display:flex;gap:.4rem;margin-bottom:1.2rem}
.filters button{padding:.45rem 1rem;border-radius:999px;font-weight:600;font-size:.9rem;color:var(--ink-soft);background:var(--mist);border:1px solid var(--line)}
.filters button[data-active="true"]{background:var(--ocean);color:#fff;border-color:var(--ocean)}

.table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:18px}
table{width:100%;border-collapse:collapse;font-size:.9rem;min-width:900px}
thead th{text-align:left;background:var(--mist);color:var(--deep);font-weight:600;padding:.9rem 1rem;font-size:.8rem;text-transform:uppercase;letter-spacing:.04em;white-space:nowrap}
tbody td{padding:.85rem 1rem;border-top:1px solid var(--line);color:var(--ink-soft);vertical-align:top}
tbody tr:hover{background:var(--mist)}
td.strong{color:var(--ink);font-weight:600}
td.nowrap{white-space:nowrap;font-size:.82rem;display:flex;align-items:center;gap:.3rem}
td.muted{color:#8aa5bd}
td .muted{color:#8aa5bd;font-size:.85rem}
td.msg{max-width:260px;min-width:200px}
.status{padding:.3rem .7rem;border-radius:999px;font-size:.78rem;font-weight:700}
.status-New{background:#fff3d6;color:#9a6b00}
.status-Responded{background:#dcf5e4;color:#1d7a3e}
.icon-btn{display:grid;place-items:center;width:32px;height:32px;border-radius:9px;color:#b06;background:transparent}
.icon-btn:hover{background:#fdeaea}
.empty{text-align:center;padding:4rem 1rem;color:var(--ink-soft);display:flex;flex-direction:column;align-items:center;gap:1rem}
.spin{animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}

.footer{position:relative;background:linear-gradient(135deg,var(--deep),#04284d);color:#cfe6f8;padding:6rem 6vw 1.5rem;margin-top:3rem}
.footer-inner{position:relative;z-index:2;max-width:1100px;margin:0 auto;display:flex;flex-wrap:wrap;justify-content:space-between;gap:2.5rem}
.footer-brand{display:flex;align-items:center;gap:.6rem;font-family:'Fredoka';font-size:1.25rem;color:#fff}
.footer-cols{display:flex;flex-wrap:wrap;gap:3rem}
.footer-cols h4{color:#fff;font-size:.95rem;margin-bottom:.9rem}
.footer-cols p{display:flex;align-items:center;gap:.5rem;font-size:.9rem;margin-bottom:.5rem;color:#a9cce6}
.footer-link{display:block;color:#a9cce6;font-size:.9rem;margin-bottom:.5rem;text-align:left}
.footer-link:hover{color:#fff}
.footer-base{position:relative;z-index:2;max-width:1100px;margin:3rem auto 0;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.12);display:flex;justify-content:space-between;align-items:center;font-size:.85rem;color:#82a9c9;flex-wrap:wrap;gap:.5rem}
.admin-link{margin:0;opacity:.7;font-size:.85rem}

@media(max-width:820px){
  .nav-toggle{display:block}
  .nav-links{position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:stretch;
    background:#fff;border-bottom:1px solid var(--line);padding:.8rem 6vw 1.2rem;gap:.2rem;
    transform:translateY(-12px);opacity:0;pointer-events:none;transition:.18s ease}
  .nav-links.is-open{transform:translateY(0);opacity:1;pointer-events:auto}
  .nav-links button{text-align:left;padding:.7rem .6rem}
  .enquire-btn{margin:.5rem 0 0!important;justify-content:center}
  .field-row{grid-template-columns:1fr}
  .admin-head{align-items:flex-start}
}
.gallery-block{margin-top:1.5rem}
.gallery-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1rem}
.gallery-item{margin:0;border-radius:18px;overflow:hidden;border:1px solid var(--line);background:var(--mist);box-shadow:0 8px 24px -16px rgba(7,59,110,.4)}
.gallery-item img{display:block;width:100%;height:200px;object-fit:cover;transition:transform .3s ease}
.gallery-item:hover img{transform:scale(1.05)}
.gallery-item figcaption{padding:.55rem .8rem;font-size:.85rem;color:var(--ink-soft)}

@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
`;

export default css;
