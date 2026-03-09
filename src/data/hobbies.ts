import { Music, Camera, Mountain, BookOpen, Plane, Coffee } from "lucide-react";

export interface HobbyData {
  slug: string;
  icon: typeof Mountain;
  label: string;
  note: string;
  hero: string;
  description: string;
  highlights: string[];
  gallery: { caption: string }[];
}

export const hobbies: HobbyData[] = [
  {
    slug: "hiking",
    icon: Mountain,
    label: "Hiking",
    note: "Chasing summits & sunsets",
    hero: "There's nothing like earning a view.",
    description:
      "From the White Mountains of New Hampshire to the volcanic ridges of Iceland, hiking is how I reset. It's the perfect balance of physical challenge and mental clarity — a reminder that the best things in life require effort.",
    highlights: [
      "Completed the Presidential Traverse in a single push",
      "Hiked 200+ miles across 5 national parks",
      "Favorite trail: Kalalau Trail, Kauai",
    ],
    gallery: [
      { caption: "Summit sunrise, Mt. Washington" },
      { caption: "Ridge walk in the Dolomites" },
      { caption: "Fog rolling through Glacier NP" },
    ],
  },
  {
    slug: "photography",
    icon: Camera,
    label: "Photography",
    note: "Street & landscape",
    hero: "Seeing the world one frame at a time.",
    description:
      "Photography taught me to slow down and really look. Whether it's the geometry of a city street or the drama of golden hour on a mountain lake, I love capturing moments that make people pause.",
    highlights: [
      "Shot on Fujifilm X-T4 & iPhone 15 Pro",
      "Featured in university art exhibition",
      "Editing workflow: Lightroom + VSCO film presets",
    ],
    gallery: [
      { caption: "Rain-soaked streets of Tokyo" },
      { caption: "Long exposure, Icelandic coast" },
      { caption: "Golden hour in Providence" },
    ],
  },
  {
    slug: "music",
    icon: Music,
    label: "Music",
    note: "Guitar & vinyl collector",
    hero: "Life's too short for bad playlists.",
    description:
      "I've been playing guitar for over a decade — mostly fingerstyle acoustic and the occasional blues jam. My vinyl collection is a curated mess of jazz, indie rock, and film scores.",
    highlights: [
      "10+ years of guitar, self-taught",
      "150+ vinyl records and counting",
      "Favorite album: In Rainbows by Radiohead",
    ],
    gallery: [
      { caption: "Late night practice session" },
      { caption: "Vinyl corner setup" },
      { caption: "Live at campus open mic" },
    ],
  },
  {
    slug: "reading",
    icon: BookOpen,
    label: "Reading",
    note: "Sci-fi & philosophy",
    hero: "Books are the closest thing to telepathy.",
    description:
      "I read widely — from hard sci-fi and speculative fiction to philosophy and cognitive science. Reading keeps my thinking flexible and gives me ideas that show up in unexpected places in my work.",
    highlights: [
      "~40 books per year",
      "Favorite author: Ted Chiang",
      "Currently reading: Gödel, Escher, Bach",
    ],
    gallery: [
      { caption: "Reading nook at home" },
      { caption: "Dog-eared copy of Exhalation" },
      { caption: "Library haul, Brown University" },
    ],
  },
  {
    slug: "travel",
    icon: Plane,
    label: "Travel",
    note: "12 countries & counting",
    hero: "The world is too interesting to stay in one place.",
    description:
      "Travel is how I collect perspectives. I'm drawn to places where old meets new — ancient temples next to neon signs, fishing villages beside tech hubs. Every trip reshapes how I think about design and systems.",
    highlights: [
      "12 countries across 4 continents",
      "Favorite city: Kyoto, Japan",
      "Next destination: Patagonia",
    ],
    gallery: [
      { caption: "Fushimi Inari at dawn" },
      { caption: "Midnight sun in Tromsø" },
      { caption: "Street food in Bangkok" },
    ],
  },
  {
    slug: "coffee",
    icon: Coffee,
    label: "Coffee",
    note: "Pour-over enthusiast",
    hero: "Great code starts with great coffee.",
    description:
      "What started as a caffeine habit turned into a genuine craft obsession. I roast small batches at home, dial in pour-over recipes, and hunt for specialty roasters wherever I travel.",
    highlights: [
      "Home roasting with a Behmor 2000",
      "Daily driver: Hario V60",
      "Favorite origin: Ethiopian Yirgacheffe",
    ],
    gallery: [
      { caption: "Morning V60 ritual" },
      { caption: "Cupping session at home" },
      { caption: "Roaster visit in Portland" },
    ],
  },
];
