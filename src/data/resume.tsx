import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, MailPlus } from "lucide-react";

export const DATA = {
  name: "Isacco Bertoli",
  initials: "IB",
  url: "https://isaccobertoli.com",
  location: "Telgate, BG",
  locationLink: "https://www.google.com/maps/place/bergamo",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "After years of working as an electrician worker in the industrial automation field, I decided to change career and embark on the path to becoming a web developer. I have recently completed my studies as a Full Stack and Blockchain Developer, and I am excited to start a new work experience in this sector putting my new skills to good use.",
  avatarUrl: "/me.png",
  skills: [
    "Javascript",
    "HTML",
    "CSS",
    "Typescript",
    "React",
    "Node.js",
    "Express",
    "Next.js",
    "React-Native",
    "Python",
    "Django",
    "SQL",
    "NoSQL",
    "Windows",
    "Linux",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/contact", icon: MailPlus, label: "Contact" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "info@isaccobertoli.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Isacco-B",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/isacco-bertoli-10aa16252/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Elettronica Installata",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/elettronicaInstallata.png",
      start: "May 2018",
      end: "Oct 2022",
      description:
        "Impianti civili e industriali, cablaggio quadri di potenza e automazione. Bordi macchina e programmazione PLC.",
    },
  ],
  education: [
    {
      school: "Ikaros",
      href: "https://www.istitutopolitecnico.org/percorsi/elettronica/",
      degree: "Elettronica Elettrotecnica",
      logoUrl: "/ikaros.svg",
      start: "2015",
      end: "2018",
    },
    {
      school: "Start2Impact",
      href: "https://www.start2impact.it/master/full-stack-development/",
      degree: "FullStack Developer",
      logoUrl: "/start2impact.png",
      start: "2022",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "form-endpoints",
      href: "https://demo14.isaccobertoli.com",
      dates: "15/09/2024",
      active: true,
      description:
        "Simple form endpoints for HTML forms. Receive submissions via email without the need for PHP, JavaScript, or backend code.",
      technologies: [
        "React",
        "Typescript",
        "Tailwind",
        "Shadcn UI",
        "Node",
        "Express",
        "Nodemailer",
        "SQLite",
      ],
      links: [
        {
          type: "Website",
          href: "https://demo14.isaccobertoli.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Isacco-B/form-endpoints",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cloud.isaccobertoli.com/s/5RJkYwnx3fDFWsj/download/Peek%202024-09-30%2011-10.mp4",
    },
    {
      title: "safe-note",
      href: "https://demo11.isaccobertoli.com/",
      dates: "23/08/2024",
      active: true,
      description:
        "Private messaging platform with end-to-end encryption and expiring links for secure sharing of notes and messages.",
      technologies: [
        "React",
        "Typescript",
        "Tailwind",
        "React Quill",
        "Shadcn UI",
        "Node",
        "Express",
        "SQLite",
      ],
      links: [
        {
          type: "Website",
          href: "https://demo11.isaccobertoli.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Isacco-B/safe-note",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cloud.isaccobertoli.com/s/ZaieLJwKiKJdCap/download/Peek%202024-09-30%2011-17.mp4",
    },
    {
      title: "bg-remover",
      href: "https://demo10.isaccobertoli.com/",
      dates: "12/07/2024",
      active: true,
      description:
        "Full-stack application for removing image backgrounds using Node.js, Express, and React with seamless UI/UX",
      technologies: [
        "React",
        "Typescript",
        "Tailwind",
        "Shadcn UI",
        "Magic UI",
        "Aceternity UI",
        "Node",
        "Express",
        "Multer",
        "SQLite",
      ],
      links: [
        {
          type: "Website",
          href: "https://demo10.isaccobertoli.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Isacco-B/bg-remover",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cloud.isaccobertoli.com/s/ZpqCbx8jEj2dxpi/download/Peek%202024-09-30%2011-23.mp4",
    },
    {
      title: "flea-market",
      href: "https://demo2.isaccobertoli.com/",
      dates: "5/06/2024",
      active: true,
      description:
        "Landing page for a traveling markets and festivals business, built with HTML, CSS, and TailwindCSS",
      technologies: ["Html", "Tailwind", "Javascript"],
      links: [
        {
          type: "Website",
          href: "https://demo2.isaccobertoli.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Isacco-B/flea-market-landing-page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cloud.isaccobertoli.com/s/WBxDSgztmcBn3nZ/download/Peek%202024-09-30%2011-30.mp4",
    },
    {
      title: "courseopia-online-course",
      href: "https://demo8.isaccobertoli.com/",
      dates: "8/05/2024",
      active: true,
      description:
        "Online platform for creating and managing courses. Participants can enroll, complete lessons, submit projects, and receive feedback.",
      technologies: [
        "React",
        "Typescript",
        "Tailwind",
        "Redux Toolkit",
        "Shadcn UI",
        "Node",
        "Express",
        "Multer",
        "JWT Auth",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://demo8.isaccobertoli.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Isacco-B/courseopia-online-course-platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cloud.isaccobertoli.com/s/oDzxk6GPaMFFxD9/download/Peek%202024-09-30%2011-28.mp4",
    },
    {
      title: "esp32-automatic-gate",
      href: "https://github.com/Isacco-B/esp32-automatic-gate-api",
      dates: "14/04/2024",
      active: true,
      description:
        "MQTT API running on an ESP32 that allows remote control and status monitoring of a gate. The ESP32 communicates with an Arduino via I2C to send and receive data, enabling remote gate control through the MQTT API.",
      technologies: ["Python", "Mqtt", "Esp32", "Api"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Isacco-B/esp32-automatic-gate-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gate.jpg",
      video: "",
    },
    {
      title: "automatic-gate-app",
      href: "https://github.com/Isacco-B/automatic-gate-app",
      dates: "7/04/2024",
      active: true,
      description:
        "A React Native application for controlling an automatic gate using the MQTT APIs",
      technologies: ["React", "React-native", "NativeWind", "Mqtt", "Expo-go"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Isacco-B/automatic-gate-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gateApp.png",
      video: "",
    },
    {
      title: "esp32-automatic-watertank",
      href: "https://github.com/Isacco-B/esp32-automatic-watertank-api",
      dates: "20/03/2024",
      active: true,
      description:
        "MQTT API running on an ESP32 that allows remote control and status monitoring of a water tank. It enables control of a pump, deactivation of an alarm, and provides real-time operational status.",
      technologies: ["Python", "Mqtt", "Esp32", "Api"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Isacco-B/esp32-automatic-watertank-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/watertank.jpg",
      video: "",
    },
    {
      title: "esp32-automatic-irrigation",
      href: "https://github.com/Isacco-B/news-website",
      dates: "17/02/2024",
      active: true,
      description:
        "MQTT API on ESP32 for remote control and monitoring of an irrigation system, enabling zone activation, automated schedules, and real-time status",
      technologies: ["Python", "Mqtt", "Esp32", "Api"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Isacco-B/esp32-automatic-irrigation-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/irrigation1.jpg",
      video: "",
    },
    {
      title: "vegetarian-recipe",
      href: "https://demo4.isaccobertoli.com/",
      dates: "17/01/2024",
      active: true,
      description:
        "A vegetarian recipe website built with React, utilizing the Spoonacular API. Features a responsive design for a seamless user experience.",
      technologies: [
        "React",
        "Tailwind",
        "Lodash",
        "Axios",
        "React Router DOM",
      ],
      links: [
        {
          type: "Website",
          href: "https://demo4.isaccobertoli.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Isacco-B/vegetarian-recipe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cloud.isaccobertoli.com/s/2N2HMcaJaBqkp4E/download/Peek%202024-09-30%2011-34.mp4",
    },
    {
      title: "express-project",
      href: "https://github.com/Isacco-B/node-express-project",
      dates: "30/11/2023",
      active: true,
      description:
        "A Node.js RESTful API platform for managing users, products, and orders, featuring Swagger documentation and unit testing.",
      technologies: [
        "Javascript",
        "Swagger",
        "Nodejs",
        "Express",
        "MongoDB",
        "Mongoose",
        "UnitTesting",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Isacco-B/node-express-project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/expressProject.png",
      video: "",
    },
    {
      title: "web3-auction",
      href: "https://demo6.isaccobertoli.com/",
      dates: "10/09/2023",
      active: true,
      description:
        "A platform for managing the sale of electric vehicles through a charity auction for a micromobility company. Users can register and place bids, with completed transactions recorded on the blockchain.",
      technologies: [
        "Django",
        "Django-rest-framework",
        "Javascript",
        "TailwindCSS",
        "Postgresql",
        "Redis",
        "Web3",
      ],
      links: [
        {
          type: "Website",
          href: "https://demo6.isaccobertoli.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Isacco-B/web3-auction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/web3Auction.png",
      video: "",
    },
    {
      title: "parking-web3",
      href: "https://github.com/Isacco-B/parking-web3",
      dates: "26/08/2023",
      active: true,
      description:
        "Parking Web3 is an online platform for booking or renting parking spaces. It interacts with a custom smart contract, ensuring secure transactions through the use of blockchain technology.",
      technologies: ["React", "Javascript", "Html", "Css", "Solidity", "Web3"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Isacco-B/parking-web3",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/parkingWeb3.png",
      video: "",
    },
    {
      title: "bitcoin-exchange",
      href: "https://github.com/Isacco-B/bitcoin-exchange",
      dates: "15/05/2023",
      active: true,
      description:
        "An online Bitcoin exchange platform created with Django. It implements authentication, automatically assigns Bitcoin values, and allows users to create buy and sell orders. Completed orders are recorded on the blockchain.",
      technologies: ["Django", "Djongo", "Mongodb", "Python", "HTML", "CSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Isacco-B/bitcoin-exchange",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bitcoinExchange.png",
      video: "",
    },
    {
      title: "migrant-school",
      href: "https://github.com/Isacco-B/migrantSchool",
      dates: "20/03/2023",
      active: true,
      description:
        "Web platform for creating educational certificates for migrants, securely recorded on the blockchain through a transaction.",
      technologies: ["Django", "Redis", "HTML", "CSS", "Python", "Goerli"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Isacco-B/migrantSchool",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/migrantSchool.png",
      video: "",
    },
    {
      title: "news-website",
      href: "https://github.com/Isacco-B/news-website",
      dates: "5/06/2024",
      active: true,
      description:
        "News-Website is a platform that displays the latest and most popular news, built using only HTML, CSS, and JavaScript.",
      technologies: ["Javascript", "Html", "Scss", "WebPack"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Isacco-B/news-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/newsWebsite.png",
      video: "",
    },
  ],
} as const;
