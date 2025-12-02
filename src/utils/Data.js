
import { Menu, X, ArrowDown, Briefcase, ChevronRight, User, Aperture, Globe, MapPin, Calendar, Mail, Linkedin, Twitter } from 'lucide-react';
import  img1 from "../assets/profile.png"
import  img2 from "../assets/Fooddelivery.jpg"
import  img3 from "../assets/Ecommerce.jpg"
import  img4 from "../assets/saas.jpg"

// --- Mock Data ---
const Data = {
  name: "Amanuel_A",
  image: img1,
  title: "Ux designer who builds useful and eye pleasing design",
  bio: "I am a front-end developer with over 3 years of experience building responsive, user-friendly web applications. I specialize in modern web technologies such as React, Next.js, Tailwind CSS, and JavaScript, turning designs into pixel-perfect, high-performance interfaces. I am passionate about creating intuitive user experiences and writing clean, maintainable code that scales.",
  currentRole: "Currently working at Aquila Ict Tech.",
  location: "Based in Ethiopia, Addis Ababa",
  companies: [
    { name: "Google", classes: "text-white/70 hover:text-[#4285F4] transition duration-300" },
    { name: "YouTube", classes: "text-white/70 hover:text-[#FF0000] transition duration-300" },
    { name: "CHEVROLET", classes: "text-white/70 hover:text-[#0A376F] transition duration-300" },
    { name: "slack", classes: "text-white/70 hover:text-[#E01E5A] transition duration-300" },
    { name: "Spotify", classes: "text-white/70 hover:text-[#1DB954] transition duration-300" },
    { name: "HBO", classes: "text-white/70 hover:text-[#B38E14] transition duration-300" },
  ],
  // store icon component references and optional props (render with: const Icon = item.icon; <Icon {...item.iconProps} />)
  socials: [
    { icon: Linkedin, iconProps: { className: "w-6 h-6" }, href: "#", label: "LinkedIn" },
    { icon: Twitter, iconProps: { className: "w-6 h-6" }, href: "#", label: "Twitter" },
    { icon: Mail, iconProps: { className: "w-6 h-6" }, href: "mailto:anders@example.com", label: "Email" },
  ],
  projects: [
    {
      id: 1,
      title: "E-Shopify - E-commerce Platform",
      description: "A responsive e-commerce web application built with React and Tailwind CSS. Features include product listing, filtering, shopping cart, and Stripe payment integration.",
      tags: ["Web Apps", "Front-End Development"],
      location: "USA",
      duration: "3 months",
      year: "2024",
      image: img2,
    },
    
    {
      id: 2,
      title: "Dashlytics - SaaS Analytics Dashboard",
      description: "A real-time dashboard for data analytics using React, Redux, and Chart.js. Displays user data, analytics charts, and notifications with role-based access control.",
      tags: ["Web Apps", "Dashboard"],
      location: "UK",
      duration: "4 months",
      year: "2024",
      image: img3,
    },
    {
      id: 3,
      title: "Foodora - Food Delivery App UI",
      description: "Designed a mobile-first food delivery app UI using React and Tailwind CSS. Includes menu browsing, ordering flow, and smooth interactive components for enhanced UX.",
      tags: ["Mobile Apps", "UI Design"],
      location: "Canada",
      duration: "2 months",
      year: "2025",
      image: img4
    }
  ],
  experience: [
    {
      role: "Junior UI/UX Designer",
      company: "Nile Shopal",
      location: "Ethiopia,Bahir Dar",
      years: "2022 - 2023"
    },
    {
      role: "Front end developer",
      company: "Goha Sftware.",
      location: "Ethiopia,Bahir Dar",
      years: "2022 - 2024"
    },
    {
      role: "Web Developer",
      company: "InnovaTech Solutions",
      location: "Ethiopia, A.A",
      years: "2016 - 2021"
    },
    {
      role: "Front-End developer",
      company: "Aquila Ict Solution",
      location: "Ethiopia, A.A",
      years: "2021 - Present"
    }
  ],
  skillsIcons: [
    { icon: Aperture, iconProps: { className: "w-8 h-8 text-yellow-400" }, label: "Figma" },
    { icon: User, iconProps: { className: "w-8 h-8 text-red-400" }, label: "Sketch" },
    { icon: Briefcase, iconProps: { className: "w-8 h-8 text-blue-400" }, label: "AE" },
    { icon: Globe, iconProps: { className: "w-8 h-8 text-green-400" }, label: "AI" },
    { icon: ChevronRight, iconProps: { className: "w-8 h-8 text-purple-400" }, label: "HTML/CSS" },
    { icon: Calendar, iconProps: { className: "w-8 h-8 text-pink-400" }, label: "React" },
    { icon: MapPin, iconProps: { className: "w-8 h-8 text-cyan-400" }, label: "Prototyping" },
    { icon: ArrowDown, iconProps: { className: "w-8 h-8 text-orange-400" }, label: "Wireframing" },
  ]
};

export default Data;