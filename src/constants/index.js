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
  jetatech,
  pcsb,
  converso,
  cognify,
  volcntrl,
  prodstore,
  threejs,
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
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "Data Science",
    icon: mobile,
  },
  {
    title: "Artificial Intelligence",
    icon: backend,
  },
  {
    title: "Problem Solving",
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
    title: "Software Developer Intern",
    company_name: "Jetatech Infoservices Pvt Ltd",
    icon: jetatech,
    iconBg: "#383E56",
    date: "March 2025 - June 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "PICT CSI Student Body",
    icon:pcsb, 
    iconBg:"#383E56",
    date:"September 2023-Present",
    points:[
      "Developing and maintaining the official website of PICT CSI Student Body using React.js and other related technologies.",
      "Designing and implementing new features to enhance user experience.",
      "Collaborating with the team to ensure the website meets the needs of the student body.",
      "Optimizing website performance and ensuring cross-browser compatibility.",
    ]
  }
 
 
];

const testimonials = [
  
];

const projects = [
  {
    name: "Converso",
    description:
      "A full stack Teaching SaaS application that allows creation of voice companions for students",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "vapi api",
        color: "pink-text-gradient",
      },
    ],
    image: converso,
    source_code_link: "https://github.com/AyushA9rawal/Converso",
    live_link: "https://converso-eta.vercel.app",
  },
  {
    name: "Cognify",
    description:
      "An advanced AI-powered tool to automate the Mini Mental State Examination (M.M.S.E), designed to assist in the early detection of dementia and cognitive impairments",
    tags: [
      {
        name: "nlp",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "gemini api",
        color: "pink-text-gradient",
      },
      {
        name: "mern stack",
        color: "red-text-gradient",
      },
    ],
    image: cognify,
    source_code_link: "https://github.com/AyushA9rawal/Cognify",
    live_link: "https://cognify-ivory.vercel.app", // TODO: Replace with actual live URL
  },
  {
    name: "Hands Up-Down",
    description:
      "Control your PC Volume with the help of finger gestures(basically) detecting the distance between two fingers and adjusting the volume accordingly",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mediapipe",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: volcntrl,
    source_code_link: "https://github.com/AyushA9rawal/Volume_Control_OpenCV",
    // live_link: "", // TODO: Replace with actual live URL
  },
  // {
  //   name: "Product Store",
  //   description:
  //     "A CRUD application that allows users to manage a product store, including adding, updating, and deleting products, with a user-friendly interface and responsive design.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: prodstore,
  //   source_code_link: "https://github.com/AyushA9rawal/Product-Store",
  // },
  
];

export { services, technologies, experiences, testimonials, projects };
