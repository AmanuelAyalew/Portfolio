
import { Menu, X, ArrowDown, Briefcase, ChevronRight, User, Aperture, Globe, MapPin, Calendar, Mail, Linkedin, Twitter } from 'lucide-react';

// --- Mock Data ---
const Data = {
  name: "Amanuel_A",
  title: "Ux designer who builds useful and eye pleasing design",
  bio: "With over 15 years of expertise in innovative ventures, I've collaborated with brands like Google, Slack, YouTube, Sony, Blizzard entertainment, Volkswagen, Chevrolet, Spotify, Procter & Gamble, HBO, and LG, to name a few. I consider myself a versatile and practical visual designer, specializing in design systems, impactful visuals, and brand identity.",
  currentRole: "Currently working at Zigma.",
  location: "Based in Edinburgh, Scotland.",
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
      title: "MoonWave - Crypto Investment Mobile Apps",
      description: "A sleek and modern dark-mode mobile application design project focusing on usability and security for cryptocurrency investment. Includes comprehensive design system and interaction documentation.",
      tags: ["Mobile Apps", "UX Design"],
      location: "Germany",
      duration: "2 months",
      year: "2025",
      image: "https://placehold.co/400x600/1e1e2e/999999?text=Mobile+Mockup+1"
    },
    {
      id: 2,
      title: "KraftG - Creative Agency Logo and Brand Guideline",
      description: "Developed a modern, clean identity system for KraftG, including logo design, color palette, typography, and a comprehensive brand guideline document for internal and external use.",
      tags: ["Branding", "Visual Design"],
      location: "Denmark",
      duration: "1 month",
      year: "2025",
      image: "https://placehold.co/400x600/1e1e2e/999999?text=Mobile+Mockup+2"
    },
    {
      id: 3,
      title: "Urbinex - Architecture Service Landing Page",
      description: "A sleek and modern landing page designed for Urbinex, showcasing architectural services with bold visuals, clear structure, and a user-focused layout that highlights expertise and inspires trust.",
      tags: ["Frontend", "Web Design"],
      location: "Australia",
      duration: "3 months",
      year: "2025",
      image: "https://placehold.co/400x600/1e1e2e/999999?text=Mobile+Mockup+3"
    }
  ],
  experience: [
    {
      role: "Junior UI/UX Designer",
      company: "Nano Blocks Studio",
      location: "Copenhagen, Denmark",
      years: "2011 - 2014"
    },
    {
      role: "Product Designer",
      company: "Digital Edge Inc.",
      location: "Edinburgh, Scotland",
      years: "2014 - 2016"
    },
    {
      role: "Lead Product Designer",
      company: "InnovaTech Solutions",
      location: "London, UK",
      years: "2016 - 2021"
    },
    {
      role: "Principal Visual Designer",
      company: "Zigma Ventures",
      location: "Edinburgh, Scotland",
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