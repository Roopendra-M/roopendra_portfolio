import {
  mobile,
  backend,
  creator,
  web,
  school,
  puc,
  clg,
  Diabets,
  expense,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  python,
  nodejs,
  mongodb,
  git,
  ai,
  java,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon:web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Artificial Intelligence",
    icon: ai,
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
    name: "Artificial Intelligence",
    icon: ai,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Bachelor of Technology in Computer Science",
    company_name: "RGUKT RK Valley",
    icon: clg, // You can use any existing icon like `meta` or import a custom one
    iconBg: "#E6DEDD",
    date: "2022 - 2026 (Expected)",
    points: [
      "CGPA: 9.01",
      "Studied core subjects like Data Structures, DBMS, AI, Machine Learning, Web Development, etc.",
      "Built academic projects like AI Chatbot, Heart Disease Prediction Model, and Personal Finance Tracker.",
    ],
  },
  {
    title: "Pre-University Course (PUC)",
    company_name: "RGUKT RK Valley",
    icon: puc,
    iconBg: "#383E56",
    date: "2020 - 2022",
    points: [
      "CGPA: 9.77",
      "Focused on Mathematics, Physics, and Computer Science.",
      "Prepared foundation for engineering and programming skills.",
    ],
  },
  {
    title: "Secondary School (SSC)",
    company_name: "Srinivasa Teja High School, Tirupati",
    icon: school,
    iconBg: "#E6DEDD",
    date: "2020",
    points: [
      "Percentage: 98%",
      "Strong academic performance and interest in technology from early school days.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Roopendra is a dedicated and highly skilled student who consistently delivers quality work. His AI chatbot project showcased both technical depth and creativity.",
    name: "Dr. S. Lakshmi",
    designation: "Professor",
    company: "RGUKT RK Valley",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    testimonial:
      "Working with Roopendra on our web development project was a great experience. His knowledge of React and Firebase really strengthened our team output.",
    name: "Kiran Kumar",
    designation: "Teammate",
    company: "University Project Group",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    testimonial:
      "Roopendra's ability to quickly grasp machine learning concepts and apply them in real projects like the heart disease and diabetes prediction models is impressive.",
    name: "Anjali Devi",
    designation: "Mentor",
    company: "Machine Learning Lab",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
  },
];


const projects = [
  {
    name: "AI Chatbot for University",
    description:
      "An AI-powered chatbot built with Firebase and NLP techniques to assist students with academic queries. Supports intent classification and message history tracking for context-aware responses.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "nlp", color: "pink-text-gradient" },
    ],
    image: carrent, // Replace with your own image
    source_code_link: "https://github.com/", // Add your repo
  },
  {
    name: "Heart Disease Prediction",
    description:
      "Built a predictive ML model using logistic regression and decision trees to detect heart disease from patient health data. Provides actionable health insights.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "green-text-gradient" },
      { name: "ml", color: "pink-text-gradient" },
    ],
    image: jobit, // Replace with your own image
    source_code_link: "https://github.com/", // Add your repo
  },
  {
    name: "Personal Finance Tracker",
    description:
      "A full-stack expense tracking app built with React and Firebase. Offers AI-generated saving tips, real-time dashboards, and secure authentication for seamless user experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "chartjs", color: "pink-text-gradient" },
    ],
    image: expense, // Replace with your own image
    source_code_link: "https://github.com/Roopendra-M/Expenses-Tracker.git", // Add your repo
  },
  {
    name: "Destination Planner Web App",
    description:
      "An itinerary planner built using HTML, CSS, JS, and SQL. Helps users organize trips with day-wise planning, location-based suggestions, and dynamic form inputs.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "sql", color: "pink-text-gradient" },
    ],
    image: carrent, // Replace with your own image
    source_code_link: "https://github.com/", // Add your repo
  },
  {
    name: "Diabetes Prediction App",
    description:
      "A machine learning-based diabetes prediction system built with Streamlit and Scikit-learn. Users input basic health metrics to receive instant risk predictions in a user-friendly web interface.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "ml", color: "pink-text-gradient" },
    ],
    image: Diabets, // Replace with your own image
    source_code_link: "https://github.com/Roopendra-M/diabetes-prediction.git", // Add your repo
  },
];


export { services, technologies, experiences, testimonials, projects };
