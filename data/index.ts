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
    title: "MarketPlace Store Web Design",
    des: "A responsive online marketplace design built with React.js, offering smooth navigation and a modern interface.",
    img: "./project12.png",
    iconLists: ["./re.svg", "./tail.svg", "./ts.svg"],
    link: "https://github.com/ahmadaljabawi/MarketPlace_ReactJS",
    toShow: "MarketPlace",
  },
  {
    id: 2,
    title: "Video Sharing Mobile App",
    des: "A mobile app for seamless video sharing, featuring an intuitive interface and smooth playback.",
    img: "./project22.png",
    iconLists: ["./re.svg", "./tail.svg", "./ts.svg", "./stream.svg"],
    link: "https://github.com/ahmadaljabawi/react_native_AI_videos_sharing_app",
    toShow: "MobileApp",
  },
  {
    id: 3,
    title: "Anime Hub Web Design",
    des: "A dynamic web design for an anime platform, offering easy navigation and a visually appealing interface.",
    img: "./project32.png",
    iconLists: ["./next.svg", "./re.svg", "./tail.svg", "./ts.svg"],
    link: "https://github.com/ahmadaljabawi/Simple-Infinite-Scroll-NextJs-App",
    toShow: "AnimeWeb",
  },
  {
    id: 4,
    title: "Personal Portfolio Web Design.",
    des: "A sleek and modern portfolio website design to showcase projects, skills, and experience with a user-friendly interface.",
    img: "./project41.png",
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./re.svg"],
    link: "https://github.com/ahmadaljabawi/portfolio_project",
    toShow: "Portfolio",
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
