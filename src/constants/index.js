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
  powerbi,
  tailwind,
  nodejs,
  uml,
  figma,
  sql,
  lib,
  pacman,
  bigdata,
  moji,
  giftshop,
  hadoop,
  hotel,
  threejs,
  pacueh,
  dreamnest,
  dash,
  ai,
  pts,
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
    title: "Requirements Gathering",
    icon: web,
  },
  {
    title: "Data-driven Decision Support",
    icon: mobile,
  },
  {
    title: "Process Improvement",
    icon: backend,
  },
  {
    title: "Stakeholder Engagement",
    icon: creator,
  },
];

const technologies = [
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
    name: "Power BI",
    icon: powerbi,
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
    name: "HTML",
    icon: html,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "UML",
    icon: uml,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Adobe Illustrator",
    icon: ai,
  },
  {
    name: "Adobe Photoshop",
    icon: pts,
  },

];

const experiences = [
  {
    title: "Game Developer",
    company_name: "Pac-Man Clone (C# Desktop Game)",
    icon: pacman,
    iconBg: "#383E56",
    date: "Sep 2024 – Dec 2024",
    points: [
      "Designed and built a playable Pac-Man game clone using C# and WinForms.",
      "Applied object-oriented programming and MVC principles to structure game logic and UI.",
      "Implemented player logic, enemy AI, level transitions, and a custom leaderboard system.",
    ],
  },
  {
    title: "Big Data Analytics",
    company_name: "Steam Games.",
    icon: bigdata,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Analyzed game behavior and user engagement using open data from Steam; queried and processed large datasets using Spark SQL on Hadoop HDFS.",
      "Used Python (Pandas, Matplotlib) to clean, analyze, and visualize game features and player activity trends.",
      "Identified key game features linked to user interest and satisfaction; built an interactive Streamlit dashboard to present insights for product decision-making.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Gift Shop Sales Management App",
    icon: moji,
    iconBg: "#FFFFFF",
    date: "Mar 2025 – May 2025",
    points: [
      "Designed user interface screens in Figma based on feature requirements",
      "Developed a full-stack web app using the MERN stack.",
      "Built front-end components using React.js.",
      "Connected to the back-end API using Node.js and managed data with MongoDB.",
    ],
  },
  {
    title: "Desktop Developer",
    company_name: "Library Management System",
    icon: lib,
    iconBg: "#E6DEDD",
    date: "Mar 2025 – May 2025",
    points: [
      "Collected functional requirements and translated them into UML diagrams using Visual Paradigm",
      "Designed user interfaces in Figma with a focus on layout clarity and user-friendly navigation",
      "Developed a working desktop application in Visual Studio (C# WinForms), using object-oriented programming (OOP) and the MVC architectural pattern",
    ],
  },
];

const projects = [
  {
    name: "Gift Shop Sales Management",
    description:
      "Built a full-stack MERN web application to manage gift shop sales. Includes UI screens, product CRUD, and order management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "figma",
          color: "orange-text-gradient",
        },
    ],
    image: giftshop,
    source_code_link: "https://quatructuyen.com/",
  },
  {
    name: "Big Data Analytics on Steam Games",
    description:
      "Analyzed game features and user engagement using Spark SQL on Hadoop. Built a Streamlit dashboard to visualize key features and trends for product decisions.",
      tags: [
        {
          name: "spark",
          color: "yellow-text-gradient",
        },
        {
          name: "hadoop",
          color: "orange-text-gradient",
        },
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "streamlit",
          color: "green-text-gradient",
        },
    ],
    image: hadoop,
    source_code_link: "https://github.com/hhcuong0/bigdata-insights.git",
  },
  {
    name: "E-commerce Mobile App",
    description:
      "Developed an e-commerce platform for home decor and furniture products with product browsing, shopping cart, and user authentication. Focused on creating a user-friendly interface and seamless shopping experience.",
      tags: [
        {
          name: "figma",
          color: "orange-text-gradient",
        },
        {
          name: "ui/ux",
          color: "blue-text-gradient",
        },
        {
          name: "wireframe",
          color: "green-text-gradient",
        },
        {
          name: "userflow",
          color: "pink-text-gradient",
        },
    ],
    image: dreamnest,
    source_code_link: "https://github.com/",
  },
    {
    name: "Hotel Management System",
    description:
      "Conducted system analysis and design for a hotel management system using UML diagrams, ERD, and wireframes. Translated business requirements into structured documentation and visual system models.",
      tags: [
        {
          name: "uml",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "visual paradigm",
          color: "pink-text-gradient",
        },
    ],
    image: hotel,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pacman C# Game",
    description:
      "Built a console-based Pacman game with multiple levels, ghosts, and score-saving features using C# threading, object-oriented design, and file handling.",
    tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "console",
        color: "pink-text-gradient",
      },
    ],
    image: pacueh, // nhớ import ở đầu file
    source_code_link: "https://github.com/lucianguyenthi310z/Nhom09_Pac-Ueher/tree/main/Nhom09",
  },
  {
    name: "Sales Performance Dashboard",
    description:
      "Designed and developed an interactive Power BI dashboard to visualize sales performance by product, region, and time period. Enabled dynamic filtering and drill-down analysis for decision-making.",
    tags: [
      {
        name: "powerbi",
        color: "blue-text-gradient",
      },
      {
        name: "data visualization",
        color: "green-text-gradient",
      },
      {
        name: "dax",
        color: "pink-text-gradient",
      },
      {
        name: "excel",
        color: "orange-text-gradient",
      },
    ],
    image: dash, //
    source_code_link: "", // 
  }
];

export { services, technologies, experiences, projects };
