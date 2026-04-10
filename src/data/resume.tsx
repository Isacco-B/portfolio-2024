import { Icons } from "@/components/icons";
import { HomeIcon, MailPlus, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Isacco Bertoli - Full Stack Developer & Industrial Automation | Bergamo, Italy",
  initials: "IB",
  url: "https://isaccobertoli.com",
  location: "Telgate, BG",
  locationLink: "https://www.google.com/maps/place/bergamo",
  description:
    "Full Stack Developer & Industrial Automation Specialist | Building Digital and Industrial Solutions in Bergamo, Italy",
  summary:
    "With a solid background in **industrial automation as an electrician and PLC programmer**, I evolved my career to combine hardware expertise with modern software development. I specialize in **Full Stack web development** and **industrial automation systems**, designing and building **human-machine interfaces**, managing the complete machine production lifecycle, and developing **IoT solutions for remote monitoring and control**. I bridge the gap between the physical and digital worlds, creating effective solutions that address real needs in the **industrial sector**.",
  avatarUrl: "/me.png",
  services: [
    {
      logoUrl: "/website.png",
      title: "Web Development",
      description:
        "From concept to deployment, I create responsive, high-performance web applications using modern frameworks like React, Node.js, and Express.",
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
        "Leveraging my background in industrial automation and PLC programming, I develop IoT-based solutions for remote monitoring, control, and custom HMI interfaces for industrial machinery.",
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
      title: "Programmer | Electrician",
      logoUrl: "/aisentsrl.jpeg",
      start: "January 2025",
      end: null,
      description:
        "Custom HMI programming for industrial machinery, PLC programming (Siemens, Wago), mechanical and electrical design, creation and modification of electrical schematics, supplier and warehouse management, wiring, assembly, testing and on-site installation.",
    },
    {
      company: "Elettronica Installata",
      href: "",
      badges: [],
      location: "Telgate, BG",
      title: "Electrical contractor",
      logoUrl: "/elettronicaInstallata.png",
      start: "May 2018",
      end: "Oct 2022",
      description:
        "Civil and industrial electrical systems, automation panel wiring, machine edges and testing. MV/LV electrical cabinets, power and distribution panels, and lighting systems.",
    },
  ],
  education: [
    {
      school: "Ikaros",
      href: "https://www.istitutopolitecnico.org/percorsi/elettronica/",
      degree: "Electrical Engineering (Domotics, Electrical Systems, CAD)",
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
  certificate: [
    {
      image: "/cerificates/certificatoFullStack.png",
      title: "Full Stack Development",
      date: "May 2024",
    },
    {
      image: "/cerificates/certificatoFrontEnd.png",
      title: "Front End Development",
      date: "Oct 2024",
    },
    {
      image: "/cerificates/certificatoBackEnd.png",
      title: "Back End Development",
      date: "Dec 2024",
    },
  ],
  projects: [
    {
      title: "automatic-gate-app-v2",
      href: "https://github.com/Isacco-B/automatic-gate-app-v2",
      dates: "2025",
      active: true,
      description: "Rebuilt version of the automatic gate React Native app.",
      technologies: [
        "React-Native",
        "Typescript",
        "Expo",
        "Expo-Router",
        "Mqtt",
        "EAS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Isacco-B/automatic-gate-app-v2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/gateApp2.png",
      video: "",
    },
    {
      title: "automatic-watertank-app",
      href: "https://github.com/Isacco-B/automatic-watertank-app",
      dates: "2025",
      active: true,
      description:
        "React Native mobile app to monitor and control an automatic water tank system via MQTT and ESP32.",
      technologies: [
        "React-Native",
        "Typescript",
        "Expo",
        "Expo-Router",
        "Mqtt",
        "React Native Paper",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Isacco-B/automatic-watertank-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/watertank.jpg",
      video: "",
    },
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
      image: "/projects/javaNotes.png",
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
      image: "/projects/PHPLogo.png",
      video: "",
    },
    {
      title: "global-warming",
      href: "https://github.com/Isacco-B/global-warming",
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
          type: "Source",
          href: "https://github.com/Isacco-B/global-warming",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/globalWarming.png",
      video: "",
    },
    {
      title: "form-endpoints",
      href: "https://github.com/Isacco-B/form-endpoints",
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
          type: "Source",
          href: "https://github.com/Isacco-B/form-endpoints",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/formEndpoints.png",
      video: "",
    },
    {
      title: "safe-note",
      href: "https://github.com/Isacco-B/safe-note",
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
          type: "Source",
          href: "https://github.com/Isacco-B/safe-note",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/safeNote.png",
      video: "",
    },
    {
      title: "bg-remover",
      href: "https://github.com/Isacco-B/bg-remover",
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
          type: "Source",
          href: "https://github.com/Isacco-B/bg-remover",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/bgRemover.png",
      video: "",
    },
    {
      title: "flea-market",
      href: "https://github.com/Isacco-B/flea-market-landing-page",
      dates: "5/06/2024",
      active: true,
      description:
        "Landing page for a traveling markets and festivals business, built with HTML, CSS, and TailwindCSS",
      technologies: ["Html", "Tailwind", "Javascript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Isacco-B/flea-market-landing-page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/fleaMarket.png",
      video: "",
    },
    {
      title: "courseopia-online-course",
      href: "https://github.com/Isacco-B/courseopia-online-course-platform",
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
          type: "Source",
          href: "https://github.com/Isacco-B/courseopia-online-course-platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/courseOnline.png",
      video: "",
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
      href: "https://github.com/Isacco-B/vegetarian-recipe",
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
          type: "Source",
          href: "https://github.com/Isacco-B/vegetarian-recipe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/vegetarianRecipe.png",
      video: "",
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
      title: "news-website",
      href: "https://github.com/Isacco-B/news-website",
      dates: "2/03/2023",
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
