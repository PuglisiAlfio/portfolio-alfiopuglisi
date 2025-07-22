import cssLogo from "../assets/stacks/css.png";
import figmaLogo from "../assets/stacks/figma.png";
import gitLogo from "../assets/stacks/git.png";
import htmlLogo from "../assets/stacks/html.png";
import jsLogo from "../assets/stacks/javascript.png";
import mysqlLogo from "../assets/stacks/mysql.png";
import nodejsLogo from "../assets/stacks/nodejs.png";
import postgreLogo from "../assets/stacks/postgre.png";
import reactLogo from "../assets/stacks/reactjs.png";
import reduxLogo from "../assets/stacks/redux.png";
import tailwindLogo from "../assets/stacks/tailwind.png";
import tsLogo from "../assets/stacks/typescript.png";
import wordpressLogo from "../assets/stacks/wordpress.webp";

export const TECH_STACK = [
  {
    id: "html",
    label: "HTML",
    src: htmlLogo,
    url: "https://www.html.it/",
    category: ["frontend"],
  },
  {
    id: "css",
    label: "CSS",
    src: cssLogo,
    url: "https://www.w3schools.com/css/",
    category: ["frontend"],
  },
  {
    id: "figma",
    label: "Figma",
    src: figmaLogo,
    url: "https://www.figma.com",
    category: ["tool"],
  },
  {
    id: "git",
    label: "Git",
    src: gitLogo,
    url: "https://git-scm.com/",
    category: ["tool"],
  },
  {
    id: "javascript",
    label: "JavaScript",
    src: jsLogo,
    url: "https://www.javascript.com/",
    category: ["frontend"],
  },
  {
    id: "mysql",
    label: "MySQL",
    src: mysqlLogo,
    url: "https://www.mysql.com/it",
    category: ["backend"],
  },
  {
    id: "nodejs",
    label: "Node.js",
    src: nodejsLogo,
    url: "https://nodejs.org/en/",
    category: ["backend"],
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    src: postgreLogo,
    url: "https://www.postgresql.org/",
    category: ["backend"],
  },
  {
    id: "react",
    label: "React",
    src: reactLogo,
    url: "https://react.dev",
    category: ["frontend"],
  },
  {
    id: "redux",
    label: "Redux",
    src: reduxLogo,
    url: "https://redux.js.org/",
    category: ["frontend"],
  },
  {
    id: "tailwind",
    label: "TailwindCSS",
    src: tailwindLogo,
    url: "https://tailwindcss.com",
    category: ["frontend"],
  },
  {
    id: "typescript",
    label: "TypeScript",
    src: tsLogo,
    url: "https://www.typescriptlang.org",
    category: ["frontend", "backend"], // fullstack
  },
  {
    id: "wordpress",
    label: "WordPress",
    src: wordpressLogo,
    url: "https://wordpress.com/it/",
    category: ["frontend", "backend"], // fullstack
  },
];
