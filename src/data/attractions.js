import { Droplet, Waves, CloudRain, Grid3x3 } from "lucide-react";

// Each attraction has a `gallery` of placeholder photos. To use a real image,
// set an item's `src` (e.g. "/images/slides-1.jpg"). Empty src => placeholder.

export const ATTRACTIONS = [
  {
    id: "slides",
    nav: "Slides",
    icon: Droplet,
    title: "Water Slides",
    kicker: "Six rides, one stomach-drop after another",
    intro:
      "From gentle family glides to a near-vertical plunge, our slide complex stacks six rides onto one tower so you can climb once and ride for hours. Lifeguards station every landing pool and dispatch lane lights keep the queues moving.",
    thrill: 5,
    stats: [
      { k: "Tallest drop", v: "21 m" },
      { k: "Longest run", v: "180 m" },
      { k: "Rides", v: "4" },
    ],
    features: [
      { name: "The Cyclone", desc: "A single open flume with a 21 m near-vertical first drop. Our steepest ride — minimum height 1.3 m." },
      { name: "Racer Slides", desc: "Side-by-side racing slides. Grab a mat, lie flat, and settle who's fastest the honest way." },
      { name: "Splash Coaster", desc: "Uphill water jets push your raft up the climbs — a real coaster feel, no chains required." },
      { name: "Lazy Drift", desc: "A wide, slow chute for first-timers and younger riders who want the slide without the scream." },
      { name: "Kiddie Splash", desc: "A pair of low, gentle slides into 30 cm water, built for under-7s with a parent alongside." },
    ],
    tips: [
      "Ride heavier slides early — queues build after noon.",
      "Tubes are stacked at each landing; you don't carry them up.",
      "Minimum height for The Cyclone and Black Hole is 1.3 m.",
    ],
    gallery: [
      { label: "The Cyclone drop", src: "" },
      { label: "Twin Twisters race", src: "" },
      { label: "Black Hole tube", src: "" },
      { label: "Splash Coaster climb", src: "" },
      { label: "Landing pool splash", src: "" },
      { label: "Slide tower view", src: "" },
    ],
  },
  {
    id: "rain-dance",
    nav: "Rain Dance",
    icon: CloudRain,
    title: "Rain Dance",
    kicker: "A DJ, an overhead monsoon, and a floor full of people",
    intro:
      "Three times a day the rain-dance arena opens up: a tiled dance floor under a canopy of programmable sprinklers, scored by a live DJ. Jets pulse in time with the set while colour-wash lights turn the spray into something you can see as well as feel.",
    thrill: 3,
    stats: [
      { k: "Sessions / day", v: "3" },
      { k: "Floor capacity", v: "200" },
      { k: "Session length", v: "45 min" },
    ],
    features: [
      { name: "Overhead monsoon", desc: "Hundreds of nozzles in zones that the operator sweeps across the floor, from light mist to full downpour." },
      { name: "Live DJ sets", desc: "A resident DJ runs each session; weekend evenings bring guest acts and themed nights." },
      { name: "Colour-wash lighting", desc: "Synced lighting rigs catch the spray so the rain itself becomes part of the show after dark." },
      { name: "Non-slip floor", desc: "Textured, drained tiling keeps footing safe even at full flow." },
    ],
    tips: [
      "Sessions run at 12:00, 3:00 and 5:30 — arrive a few minutes early for a spot.",
      "Leave phones in a locker; the spray reaches every corner.",
      "Evening sessions are the busiest and the most fun.",
    ],
    gallery: [
      { label: "Monsoon in full flow", src: "" },
      { label: "DJ booth", src: "" },
      { label: "Colour-wash lights", src: "" },
      { label: "Packed dance floor", src: "" },
      { label: "Evening session", src: "" },
    ],
  },
  {
    id: "wave-pool",
    nav: "Wave Pool",
    icon: Waves,
    title: "Wave Pool",
    kicker: "Open ocean, dropped into the middle of town",
    intro:
      "Our wave pool runs on a cycle: ten minutes of rolling surf, then five minutes of calm. The floor slopes from a dry beach edge to 1.8 m at the deep end, so toddlers paddle at the shallows while stronger swimmers ride the swell further out.",
    thrill: 4,
    stats: [
      { k: "Wave height", v: "up to 1.2 m" },
      { k: "Deep end", v: "1.8 m" },
      { k: "Cycle", v: "10 on / 5 off" },
    ],
    features: [
      { name: "Beach-entry floor", desc: "A gradual slope replaces steps, so there's a comfortable depth for every age and confidence level." },
      { name: "Programmed swell", desc: "Wave patterns change through the day — long rollers, choppy sets, and gentle ripple cycles." },
      { name: "Tube hire", desc: "Single and double rings to drift on; included with most group passes." },
      { name: "Full lifeguard cover", desc: "Elevated chairs cover the whole basin, with a wave-off horn before every active cycle." },
    ],
    tips: [
      "Listen for the horn — it signals waves are about to start.",
      "Strongest waves break in the deep third; keep little ones near the beach edge.",
      "Calm cycles are the best window for a relaxed float.",
    ],
    gallery: [
      { label: "Rolling waves", src: "" },
      { label: "Beach-entry shallows", src: "" },
      { label: "Floating on tubes", src: "" },
      { label: "Lifeguard tower", src: "" },
      { label: "Sunset over the pool", src: "" },
    ],
  },
  {
    id: "multistation",
    nav: "Multistation",
    icon: Grid3x3,
    title: "Multistation",
    kicker: "A water playground with a mind of its own",
    intro:
      "The Multistation is a multi-level splash fort built for families: a climbing structure threaded with mini-slides, water cannons, tipping mechanisms and fountains. The centrepiece is a giant bucket that fills over a few minutes and then dumps on everyone below — you'll hear the countdown bell across the park.",
    thrill: 2,
    stats: [
      { k: "Play stations", v: "14" },
      { k: "Giant bucket", v: "1,000 L" },
      { k: "Best for", v: "ages 3–12" },
    ],
    features: [
      { name: "The big bucket", desc: "A 1,000-litre tipping bucket that fills, rings, and soaks the whole base — the park's loudest cheer." },
      { name: "Mini-slides", desc: "Short, gentle slides woven through the structure for kids not yet tall enough for the main tower." },
      { name: "Water cannons", desc: "Aimable jets on every level so the chaos is entirely in your hands." },
      { name: "Fountains & sprays", desc: "Ground-level jets and arches for the smallest visitors to splash safely on the flat." },
    ],
    tips: [
      "The bucket tips roughly every 4 minutes — listen for the bell.",
      "Shallow throughout, so it's the most relaxed spot for parents.",
      "Shaded seating rings the structure if you'd rather watch than get soaked.",
    ],
    gallery: [
      { label: "The big bucket tipping", src: "" },
      { label: "Kids on mini-slides", src: "" },
      { label: "Water cannons", src: "" },
      { label: "Fountain splash zone", src: "" },
      { label: "Whole structure view", src: "" },
    ],
  },
];

export const ATTRACTION_BY_ID = Object.fromEntries(ATTRACTIONS.map((a) => [a.id, a]));

// Gallery shown on the home page. Replace each `src` with a real image later.
export const HOME_GALLERY = [
  { label: "Aerial view of the park", src: "/img_1.jpg" },
  { label: "Wave pool in action", src: "" },
  { label: "Slide tower", src: "" },
  { label: "Rain dance arena", src: "" },
  { label: "Multistation fun", src: "/img_2.jpg" },
  { label: "Poolside relaxation", src: "" },
];

// Auto-scrolling hero carousel images. Replace each `src` with a wide, high-res
// photo (landscape works best behind the title).
export const HERO_GALLERY = [
  { label: "Splashing down the slides", src: "/img_3.jpg" },
  { label: "Waves rolling in", src: "/img_1.jpg" },
  { label: "Rain dance party", src: "/img_4.jpg" },
  { label: "Family day at the park", src: "/img_6.jpg" },
];
