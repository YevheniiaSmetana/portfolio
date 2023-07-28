import {
  react,
  design,
  uxui,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  code,
  itcoty,
  harpfestivalwebsite,
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
    title: "Contacts",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Responsive Design",
    icon: design,
  },
  {
    title: "UX/UI Developer",
    icon: uxui,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Junior Front-end Web Developer",
    company_name: "A14A B.V.",
    icon: code,
    iconBg: "#383E56",
    date: "Dec 2022 - Jul 2023",
    points: [
      "Worked collaboratively in a cross-functional team consisting of designers, project managers, developers, and sales representatives",
      "Contributed to the creation of a new product by implementing front-end designs and user interfaces",
      "Assisted in coding and maintaining responsive web pages using HTML, CSS, JavaScript, TypeScript and React",
      "Collaborated with designers to ensure seamless integration of design assets into the development proces",
    ],
  },
  {
    title: "UX/UI Designer",
    company_name: "A14A B.V.",
    icon: code,
    iconBg: "#383E56",
    date: "Apr 2022 - Nov 2022",
    points: [
      "Worked closely with developers to implement designs and ensure design integrity throughout the development process",
      "Collaborated with cross-functional teams, including product  managers and developers, to align design solutions with business goals and technical feasibility",
    ],
  },
  {
    title: "Internship UX/UI designer",
    company_name: "IT-Coty",
    icon: itcoty,
    iconBg: "#383E56",
    date: "Oct 2021 - Feb 2022",
    points: [
      "Collaborated with the design team to create wireframes, prototypes, and user interface designs for various web and mobile applications",
      "Contributed to the development of interactive prototypes using Figma",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product.",
//     name: "Sara",
//     designation: "---",
//     company: "Abc Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
// ];

const projects = [
  {
    name: "Harp Festival 2024",
    description:
      "Harp Festival 2024 is a real project for an upcoming online harp festival website in 2024. Currently in the design and pages development phase, it aims to be a web-based platform that offers visitors the ability to explore, register for events, and engage with various harp-related activities. Prior to this stage, I was responsible for crafting the entire design and animation based on the client's vision. The Harp Festival platform seeks to provide a seamless and captivating experience for all participants and enthusiasts of the event.",
    tags: [
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: harpfestivalwebsite,
    source_code_link: "https://github.com/YevheniiaSmetana/Harp-Fest-web-site",
    website_link: "https://yevheniiasmetana.github.io/Harp-Fest-web-site/",
  },
];

export { services, technologies, experiences, projects };
