import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Python Programmer",
    icon: mobile,
  },
  {
    title: "Hardware Enthusiast",
    icon: backend,
  },
  {
    title: "Creative Coder",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: javascript, // Using javascript icon as placeholder for Python
  },
  {
    name: "C++",
    icon: typescript, // Using typescript icon as placeholder for C++
  },
  {
    name: "Unity",
    icon: threejs, // Using threejs icon as placeholder for Unity
  },
  {
    name: "Linux (Arch)",
    icon: docker, // Using docker icon as placeholder for Linux
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "Manim-AI-Code-Generator",
    description:
      "Generate beautiful Manim animations directly from natural language using the power of AI. A creative tool that bridges the gap between ideas and visual mathematics.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "manim",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Using existing image as placeholder
    sourceCodeLink: "https://github.com/SabhyaAggarwal/Manim-AI-Code-Generator",
  },
  {
    name: "Stock Market Simulator",
    description:
      "A dynamic web-based simulator designed to help users explore and understand stock market dynamics and investment strategies through interactive learning.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Using existing image as placeholder
    sourceCodeLink: "https://github.com/SabhyaAggarwal/Stock-Market-Simulator",
  },
  {
    name: "VAC with Camera",
    description:
      "A project which connects a virtual cable between your input microphone and your output speakers with an addition camera functionality for enhanced communication.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "audio",
        color: "green-text-gradient",
      },
      {
        name: "video",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // Using existing image as placeholder
    sourceCodeLink: "https://github.com/SabhyaAggarwal/VAC-with-Camera",
  },
  {
    name: "Food to Recipe Convertor",
    description:
      "A smart application that converts food images into detailed recipes with ingredients and cooking instructions using advanced AI technology.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Using existing image as placeholder
    sourceCodeLink: "https://github.com/SabhyaAggarwal/Food-to-Recipe-Convertor",
  },
  {
    name: "Tambola",
    description:
      "A tambola/housie counter application for managing and playing the popular Indian bingo game with friends and family.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Using existing image as placeholder
    sourceCodeLink: "https://github.com/SabhyaAggarwal/Tambola",
  },
];

export { services, technologies, experiences, testimonials, projects };
