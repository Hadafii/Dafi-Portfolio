export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize Fun collaboration and open communication! ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-3 lg:row-span-6   ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/awikwok.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Seamless teamwork, no matter where you are, and where you live!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always learning and sharpening my skills!",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A tech enthusiast who loves to explore, build, and grow!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2", // Sebelumnya 1 → sekarang 2 supaya lebih tinggi
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Exploring advanced web development techniques",
    description: "What am I up to?",
    className: "md:col-span-3 md:row-span-5", // Sebelumnya 2 → sekarang 3 agar proporsional
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Got an awesome project idea? Let’s talk!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3", // Sebelumnya 1 → sekarang 2 agar lebih besar
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "PlayPurse - Smart Ticket Booking System",
    des: "PlayPurse is a ticket booking platform for entertainment venues that helps users find the best solutions based on their budget and available time. Utilizing Backtracking and Greedy algorithms, the app provides optimal recommendations for an efficient entertainment experience.",
    img: "./Playpurse SS.png",
    iconLists: [
      "./html.svg",
      "./css.svg",
      "./javascript.svg",
      "./bootstrap.svg",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://hadafii.github.io/Web-Development",
    toShow: "PlayPurse",
  },
  {
    id: 2,
    title: "MamSchool - School Management System",
    des: "A web-based school management system built using Object-Oriented Programming (OOP). It is designed to improve efficiency in managing student, teacher, schedule, and grade data with CRUD features and a Role-Based Access Control (RBAC) system.",
    img: "./Mamschool SS.png",
    iconLists: [
      "./java.svg",
      "./mysql.svg",
      "./javascript.svg",
      "./bootstrap.svg",
    ],
    techStack: ["Java", "MySQL", "JavaScript", "Bootstrap"],
    link: "https://github.com/putrikhairamulyaR/MamSchool",
    toShow: "MamSchool",
  },
  {
    id: 3,
    title: "Budgetin - Personal Finance Management App",
    des: "Budgetin is a personal finance management app powered by Node.js, React.js, and Express.js. It helps users track income and expenses, manage monthly budgets, and view real-time financial reports with an intuitive and user-friendly interface.",
    img: "./Budgetin SS.png",
    iconLists: [
      "./re.svg",
      "./node.svg",
      "./express.svg",
      "./mysql.svg",
      "./bootstrap.svg",
      "./recharts.svg",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Bootstrap",
      "Recharts",
    ],
    link: "http://budgetin.dafiutomo.com/",
    toShow: "Budgetin",
  },
  {
    id: 4,
    title: "DafiUtomo Portfolio - Personal Website",
    des: "Currently developing a portfolio website using Next.js 15 and Tailwind CSS to create a modern, responsive, and optimized design. The project leverages Turbopack for efficient builds and plans to integrate interactive animations using Framer Motion for an enhanced user experience.",
    img: "./porto SS.png",
    iconLists: [
      "./next.svg",
      "./tail.svg",
      "./ts.svg",
      "./three.svg",
      "./framer.svg",
    ],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Three.js", "Framer"],
    link: "http://dafiutomo.com/",
    toShow: "DafiUtomo",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
