import css from "../assets/tech/css.png";
import figma from "../assets/tech/figma.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import nodejs from "../assets/tech/nodejs.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import threejs from "../assets/tech/threejs.svg";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const person = {
  name: "Yamkela Magayiyana",
  alias: "Jaden Dev",
  role: "Agri-Tech Developer",
  location: "KwaZulu-Natal, South Africa",
  tagline: "Building digital tools rooted in the soil.",
  bio: [
    "I'm Yamkela Magayiyana — a developer and agri-tech creator from KwaZulu-Natal, South Africa. I blend a deep passion for crop farming and field work with a drive to build practical digital tools that make agriculture smarter.",
    "From mobile field reporting systems and logistics workflows to chili product landing pages, farm logos and app development — I create end-to-end solutions that serve the people who grow our food.",
    "Currently growing my skills in AI Automation and Cyber Security. I specialise in Flutter, Python, JavaScript and agri-data systems, while actively building real tools for real farms.",
  ],
  email: "magayiyanayamkelainnocent@gmail.com",
  phone: "+27623176893",
  phoneDisplay: "+27 62 317 6893 · +27 60 258 7475",
  github: "https://github.com/YamkelaDev",
  instagram: "https://instagram.com/innoc_entmag",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.KSI.chilli_grower&pcampaignid=web_share",
};

export const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "🌶", label: "Agri Products Branded" },
  { value: "📱", label: "Google Play App" },
  { value: "KZN", label: "KwaZulu-Natal Based" },
  { value: "∞", label: "Ideas Growing" },
];

export const skills = [
  "Field Reporting",
  "Agro-Logistics",
  "Farm Branding",
  "App Development",
  "Product Pages",
  "AI Automation (Learning)",
  "Logo Design",
  "Flutter",
  "Python",
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Three JS", icon: threejs },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Mobile Field Reporting Workflow",
    description:
      "A mobile-first filing system and showcase portal for agricultural field data. Bridges the gap between on-ground observation and digital record-keeping — with an admin panel, data folder structure, upload system and a public-facing reporting showcase.",
    tags: ["HTML", "CSS", "Field Tech", "Mobile"],
    link: "https://github.com/YamkelaDev/Mobile-field-reporting-workflow",
    linkLabel: "View on GitHub",
    featured: true,
  },
  {
    name: "Agrotechnical Logistics Assister",
    description:
      "Systematic tool for agricultural logistics and supply correlation — tracking farm outputs and coordinating field-to-market distribution workflows.",
    tags: ["Logistics", "Agri-Tech"],
    link: "https://github.com/YamkelaDev/agrotechnical-logistics-assister",
    linkLabel: "GitHub",
  },
  {
    name: "Chilli Grower App",
    description:
      "Mobile application helping chilli farmers with crop management, growth monitoring, GPS land registration and smart farming support.",
    tags: ["Google Play", "Flutter", "AgriTech"],
    link: person.googlePlay,
    linkLabel: "Google Play",
  },
  {
    name: "Chili Product Landing Pages",
    description:
      "Fire-themed, conversion-focused marketing pages and animated posters for Red Cayenne Chili Mash — designed to market and sell agri-products online.",
    tags: ["Design", "HTML/CSS", "Marketing"],
    link: person.github,
    linkLabel: "Design Work",
  },
  {
    name: "Farm Logos, App & Brand Design",
    description:
      "Visual identities, farm logos and an app built for agricultural businesses in KwaZulu-Natal — covering print and digital brand presence end-to-end.",
    tags: ["Branding", "Logo Design", "App Dev"],
    link: person.github,
    linkLabel: "Branding Projects",
  },
];

export const quote = {
  text: "The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale — and pays the freight both ways. Technology changes that.",
  author: "The Agri-Tech Ethos · Yamkela Magayiyana",
};
