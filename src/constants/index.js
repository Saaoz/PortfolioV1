import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  cefim,
  idk,
  codebackend,
  forum,
  tripguide,
  threejs,
  cloudshot,
  prisma,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Minecraft Mod Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "MySql",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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

const experiences = [
  {
    title: "Web developer fullstack Javascript",
    company_name: "Cefim",
    icon: cefim,
    iconBg: "#383E56",
    date: "Dec 2022 - Sep 2023",
    points: [
      "Learning and completing mini projects based on HTML, CSS, and JavaScript.",
      "Learning and creating relational and non-relational databases based on MySQL and MongoDB.",
      "Discovering and creating a backend based on NodeJS, including CRUD, authentication, websockets, etc.",
      "Code sharing among students to facilitate the understanding of non-personal code.",
      "Discovering a framework (React) for the development of a full-stack project.",
    ],
  },
  {
    title: "Intranet Application Developer",
    company_name: "General Contractor",
    icon: cloudshot,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Designing a specification document.",
      "Communicating with the team to understand their expectations in terms of functionality.",
      "Implementing a current/future functionality log.",
      "Installing dependencies on a local Linux server.",
      "Setting up a Symfony back-end with EasyAdmin.",
      "Creating tickets on the GitLab repository for each page/feature to be developed.",
      "Implementing features according to the expected guidelines",

    ],
  },
  {
    title: "Application Developer",
    company_name: "looking for one",
    icon: idk,
    iconBg: "#383E56",
    date: "?",
    points: [
      "After completing my training as a web developer, I am now seeking a substantive opportunity to work as a web developer or to engage in an apprenticeship as an application developer. This would complement my training and allow me to gain practical experience in developing mobile and desktop applications using Java, React Native, and other technologies",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Blog Back-end",
    description:
      "This repository contains the backend for a blog, featuring full CRUD capabilities (create, read, update, delete) and a search function, along with authentication. It uses Prisma to secure all data in transit, ensuring efficient and secure management of information. This project demonstrates my ability to integrate advanced technologies for backend development.",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
    ],
    image: codebackend,
    source_code_link: "https://github.com/Saaoz/Forum_B",
  },
  {
    name: "Nexus",
    description:
      "This repository contains an ambitious small forum, currently at version 0.1, which will provide updates on all games, servers, tech, and other new developments, all centralized in a single forum.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Not defined",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: forum,
    source_code_link: "https://github.com/Saaoz/NexusForum",
  },
  {
    name: "not defined",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "not defined",
        color: "blue-text-gradient",
      },
      {
        name: "not defined",
        color: "green-text-gradient",
      },
      {
        name: "not defined",
        color: "pink-text-gradient",
      },
    ],
    image : codebackend,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
