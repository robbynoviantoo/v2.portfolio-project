export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution dengan fitur cart, checkout, dan payment integration.",
    image: "/image/project-1.png",
    link: "#",
    category: "Web Development",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "Aplikasi manajemen tugas real-time dengan kolaborasi tim dan notifikasi push.",
    image: "/image/project-1.png",
    link: "#",
    category: "Web Application",
  },
  {
    id: "project-3",
    title: "Social Media Dashboard",
    description: "Dashboard untuk mengelola multiple social media accounts dengan analytics.",
    image: "/image/project-1.png",
    link: "#",
    category: "Dashboard",
  },
  {
    id: "project-4",
    title: "AI Chatbot Interface",
    description: "Interface chatbot dengan AI-powered responses dan conversation history.",
    image: "/image/project-1.png",
    link: "#",
    category: "AI/ML",
  },
  {
    id: "project-5",
    title: "Music Streaming Service",
    description: "Platform streaming musik dengan playlist management dan recommendations.",
    image: "/image/project-5.jpg",
    link: "#",
    category: "Entertainment",
  },
  {
    id: "project-6",
    title: "Fitness Tracking App",
    description: "Aplikasi tracking fitness dengan workout history dan progress analytics.",
    image: "/image/project-6.jpg",
    link: "#",
    category: "Health & Fitness",
  },
  {
    id: "project-7",
    title: "Real Estate Portal",
    description: "Portal real estate dengan virtual tours, listings, dan agent management.",
    image: "/image/project-7.jpg",
    link: "#",
    category: "Real Estate",
  },
  {
    id: "project-8",
    title: "Learning Management System",
    description: "Platform pembelajaran online dengan course management dan student tracking.",
    image: "/image/project-8.jpg",
    link: "#",
    category: "Education",
  },
];
