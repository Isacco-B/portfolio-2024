import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, MailPlus } from "lucide-react";

export const DATA = {
  name: "Isacco Bertoli - Full Stack & Blockchain Developer Bergamo, Italy",
  initials: "IB",
  url: "https://isaccobertoli.com",
  location: "Telgate, BG",
  locationLink: "https://www.google.com/maps/place/bergamo",
  description:
    "Full Stack & Blockchain Developer | Building Digital Solutions in Bergamo, Italy",
  summary:
    "With a background in **industrial automation as an electrician**, I decided to shift my career path to follow my **passion for technology**. After years of hands-on experience and studies, I specialized as a **Full Stack and Blockchain Developer**. I’ve developed strong skills in building both **web and decentralized applications**, and I am excited to apply these new abilities to **solve real-world problems** and create **innovative solutions**. I’m now ready for **new challenges and opportunities** in the tech industry, where I can contribute with my **analytical approach and dedication**.",
  avatarUrl: "/me.png",
  services: [
    {
      logoUrl: "/website.png",
      title: "Web Development",
      description:
        "From concept to deployment, I create responsive, high-performance web applications using modern frameworks like React, Node.js, and Express.",
    },
    {
      logoUrl: "/blockchain.png",
      title: "Blockchain Development",
      description:
        "I specialize in building decentralized applications (dApps) and integrating blockchain into existing systems.",
    },
    {
      logoUrl: "/api.png",
      title: "API Development & Integration",
      description:
        "Need to connect your app with external services? I design and implement robust APIs that ensure seamless data flow and communication across platforms.",
    },
    {
      logoUrl: "/automation.png",
      title: "Automation & IoT Solutions",
      description:
        "Leveraging my background in industrial automation, I can develop IoT-based solutions for remote monitoring and control.",
    },
  ],
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
      company: "AiSent",
      href: "https://aisent.io/en",
      badges: [],
      location: "Gorle, BG",
      title: "Software Developer",
      logoUrl: "/aisentsrl.jpeg",
      start: "January 2025",
      end: null,
      description:
        "Computer vision, Industrial Intelligence, Machine learning, Inspection, control and tracking.",
    },
    {
      company: "Elettronica Installata",
      href: "https://www.elettronicainstallata.com/",
      badges: [],
      location: "Telgate, BG",
      title: "Electrical contractor",
      logoUrl: "/elettronicaInstallata.png",
      start: "May 2018",
      end: "Oct 2022",
      description:
        "Civil and industrial electrical systems, power and automation panel wiring. Machine edges and PLC programming.",
    },
  ],
  education: [
    {
      school: "Ikaros",
      href: "https://www.istitutopolitecnico.org/percorsi/elettronica/",
      degree: "Electrical Engineering",
      logoUrl: "/ikaros.svg",
      start: "2015",
      end: "2018",
    },
    {
      school: "Start2Impact",
      href: "https://www.start2impact.it/master/full-stack-development/",
      degree: "FullStack Developer | Blockchain Developer",
      logoUrl: "/start2impact.png",
      start: "2022",
      end: "2024",
    },
  ],
  certificate: [
    {
      image: "/certificatoBlockChain.png",
      title: "BlockChain Development",
      date: "Oct 2023",
    },
    {
      image: "/certificatoFullStack.png",
      title: "Full Stack Development",
      date: "May 2024",
    },
    {
      image: "/certificatoFrontEnd.png",
      title: "Front End Development",
      date: "Oct 2024",
    },
    {
      image: "/certificatoBackEnd.png",
      title: "Back End Development",
      date: "Dec 2024",
    },
  ],
  projects: [
    {
      title: "java-notes",
      href: "https://github.com/Isacco-B/java-notes",
      dates: "17/12/2024",
      active: true,
      description:
        "Java Notes is a cross-platform application that enables users to securely create, manage, and organize their personal notes.",
      technologies: ["Java", "Javalin", "MongoDB", "JavaFX", "Atlantafx UI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Isacco-B/java-notes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/javaNotes.png",
      video: "",
    },
    {
      title: "owly",
      href: "https://github.com/Isacco-B/Owly",
      dates: "10/11/2024",
      active: true,
      description:
        "Owly Courses API is a RESTful service designed to support the management of cross-functional courses. These courses combine multiple subjects to foster curiosity and enhance learning experiences.",
      technologies: ["PHP", "MySQL", "RESTful JSON API", "PDO"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Isacco-B/Owly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/PHPLogo.png",
      video: "",
    },
    {
      title: "global-warming",
      href: "https://demo6.isaccobertoli.com",
      dates: "25/10/2024",
      active: true,
      description:
        "A website that provide clear, comprehensive data visualization and analysis of key climate indicators that shape our understanding of global warming.",
      technologies: [
        "React",
        "Typescript",
        "Tailwind",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://demo6.isaccobertoli.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Isacco-B/global-warming",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/globalWarming.png",
      video: "",
    },
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
      href: "https://github.com/Isacco-B/esp32-automatic-irrigation-api",
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
      image: "/irrigation.jpg",
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
      href: "https://github.com/Isacco-B/web3-auction",
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
      href: "https://demo5.isaccobertoli.com/",
      dates: "2/03/2023",
      active: true,
      description:
        "News-Website is a platform that displays the latest and most popular news, built using only HTML, CSS, and JavaScript.",
      technologies: ["Javascript", "Html", "Scss", "WebPack"],
      links: [
        {
          type: "Website",
          href: "https://demo5.isaccobertoli.com/",
          icon: <Icons.globe className="size-3" />,
        },
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
