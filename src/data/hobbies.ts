import { write } from "fs";
import { Music, Camera, Mountain, BookOpen, Plane, Coffee, Mic, Pen, Dumbbell } from "lucide-react";

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
    slug: "music",
    icon: Music,
    label: "Music",
    note: "It's my escape and my inspiration, I have 5 ways to experience it.",
    hero: "Without music, life would be a mistake.",
    description:
      "I have an explore and exploit approach to music, where I'm 15% exploring and 85% exploiting. Some songs I don't think I'll ever get over are 'Tere Bina' by A.R. Rahman, 'Ek Dil Ek Jaan' by Shivam Pathan, 'Don't smile' by Sabrina Carpenter and 'F1' by Hanz Zimmer. If you have songs that I should explore and won't stop exploiting, please please share.",
    highlights: [
      "Love playing Mia and Sebastian's Theme on Piano",
      "My Heart Will Go On from Titanic on my Bamboo Flute sounds heavenly",
      "Trying to learn drums from my dad",
    ],
    gallery: [
      { caption: "Summit sunrise, Mt. Washington" },
      { caption: "Ridge walk in the Dolomites" },
      { caption: "Fog rolling through Glacier NP" },
    ],
  },
  {
    slug: "debating-and-public-speaking",
    icon: Mic,
    label: "Debating & Public Speaking",
    note: "It makes me think and meet other thinkers.",
    hero: "You don't get fed with your mouth closed",
    description:
      "Debating has sharpened my ability to think on my feet and articulate my thoughts clearly. It's pushed me to think from different perspectives and horizons. It fires up my curiosity and makes me a better communicator. I can sell and defend my thoughts but I like to believe that I'm built on counterarguments that have changed how I think. And most importantly, it has taught me to listen.",
    highlights: [
      "Travelled to Paris and Taiwan for competitions by Harvard",
      "Thoroughly enjoyed being part of Junto (Discussion Group on Society, Technology, Language, AI) at Brown",
      "Got invited to speak at TEDx talk at a university in Mumbai",
    ],
    gallery: [
      { caption: "Rain-soaked streets of Tokyo" },
      { caption: "Long exposure, Icelandic coast" },
      { caption: "Golden hour in Providence" },
    ],
  },
  {
    slug: "poetry",
    icon: Pen,
    label: "Poetry",
    note: "When everything fails, I write.",
    hero: "The best words in the best order",
    description:
      "I've been writing poems since forever, and it comes from my obsession with music and making music. But my father who also writes poetry has been a huge influence on me, he bought me my first poetry book, which is my most valued possession. With every page that turns, everything changes, I am a different person in every poem and it's a great record of my feelings and growth over the years.",
    highlights: [
      "Ran a very personal poetry blog for 10 years that organically reached 3 countries and very few viewers (thank god)",
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
    note: "and I love bookstores!",
    hero: "Just leave me alone with a book, and I'll be happy.",
    description:
      "I read widely — from self help, philosophy (western and Indian), mythologies, architecture, poetry, history, economics to cognitive science. Currently reading a lot of textbooks, last read: Algorithms for Decision Making (https://algorithmsbook.com/decisionmaking/#)",
    highlights: [
      "Favorite place to read in Providence: The Providence Athenaeum",
      "Favorite place to read in Mumbai: Granth",
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
    note: "Serial postcard collector",
    hero: "A nice way to touch some grass",
    description:
      "I love travelling and planning trips, I try to do unique and authentic experiences and love immersing myself in the history and culture of each place. Places I really want to visit are Morocco, Egypt and Greece",
    highlights: [
      "I love cities! Big fan of New York, Paris and Mumbai",
      "I love road trips! Big Sur and Scotland have been my all-time favorites road trips.",
      "I love water and mountains and all activities related to them. Surfing has been very humbling and exhilarating for me",
    ],
    gallery: [
      { caption: "Fushimi Inari at dawn" },
      { caption: "Midnight sun in Tromsø" },
      { caption: "Street food in Bangkok" },
    ],
  },
  {
    slug: "Fitness",
    icon: Dumbbell,
    label: "Fitness",
    note: "Just trying to be able to do a pull-up xD",
    hero: "Strong body = Strong mind",
    description:
      "In all honesty, while I have a long way to go, I'm enjoying the little progress I make every day. Always inspired at the gym, especially at Brown, the energy is contagious.",
    highlights: [
      "None yet but I'm hoping to update this in a few months!",
    ],
    gallery: [
      { caption: "Morning V60 ritual" },
      { caption: "Cupping session at home" },
      { caption: "Roaster visit in Portland" },
    ],
  },
];
