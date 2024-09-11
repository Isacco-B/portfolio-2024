import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

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
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express",
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
      title: "Test",
      href: "https://test.com",
      dates: "",
      active: true,
      description:
        "",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
