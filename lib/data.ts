import React from "react";
import { LuBriefcase } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Founder & Product Owner – Nepali Homestays",
    location: "Kathmandu, Nepal",
    description:
      "Currently building the trusted marketplace for authentic homestays in Nepal. Full-stack product leader handling everything from product strategy and user research to multi-payment gateway integration (Stripe, Khalti, OnePG), AI features, and mobile app development.",
    icon: React.createElement(LuBriefcase),
    date: "2024 – Present",
  },
  {
    title: "Principal Project Manager",
    location: "WEPAY Pvt Ltd, Kathmandu",
    description:
      "Led company vision and cross-functional teams to build regulated digital payment products including mobile wallets, QR payments, and agent banking. Acted as Product Owner — defined product vision, wrote user stories, prioritized backlogs, ran Agile Scrum ceremonies, and ensured NRB compliance while delivering user-centric experiences.",
    icon: React.createElement(LuBriefcase),
    date: "Feb 2024 – Jan 2025",
  },
  {
    title: "Project Manager",
    location: "Digi Hub Pvt Ltd, Kathmandu",
    description:
      "Led a 30+ person cross-functional team to develop PSP platforms that grew customer base by 40% and revenue by 25%. Owned product requirements, roadmap, release planning, and user research. Translated business needs into prioritized features and drove iterative improvements.",
    icon: React.createElement(LuBriefcase),
    date: "Jul 2022 – Jan 2024",
  },
  {
    title: "Project Manager (Early Role)",
    location: "WEPAY Pvt Ltd, Kathmandu",
    description:
      "Shaped technology strategy and led development of secure, compliant payment systems. Ensured alignment between business goals, engineering execution, and regulatory requirements. Built foundation for scalable fintech products serving urban and rural Nepal.",
    icon: React.createElement(LuBriefcase),
    date: "Mar 2020 – Jun 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Homestay Nepal",
    description:
      "Building the trusted marketplace for authentic homestays in Nepal.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Postgres", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "SmartStay Advisor",
    description:
      "AI-powered travel agent that recommends homestays and generates personalized Nepal itineraries",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Smart Agro",
    description:
      "AI-powered platform that generates personalized crop recommendations based on user inputs",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  // Product Leadership & Management
  "Product Strategy",
  "Product Ownership",
  "Roadmapping & Prioritization",
  "User Stories & Acceptance Criteria",
  "OKRs & KPIs",
  "Agile/Scrum Mastery",
  "Stakeholder Management",
  "Cross-Functional Team Leadership",
  "User Research & Feedback Loops",
  "Regulatory Compliance (NRB/PSP)",

  // Product Tools & Workflows
  "Linear",
  "Notion",
  "Figma",
  "Jira & Confluence",
  "Asana",
  "PostHog Analytics",
  "MIRO (for workshops)",

  // AI & Emerging Tech
  "AI Product Development",
  "Prompt Engineering",
  "RAG Pipelines",
  "Vercel AI SDK",
  "Groq/Llama Models",

  // Technical Depth (Your Superpower)
  "Next.js / React / TypeScript",
  "Node.js / Express",
  "SQL Server (T-SQL)",
  "PostgreSQL (Raw SQL + Stored Procedures)",
  "React Native (Expo)",
  "Payment Integrations (Stripe, Khalti, OnePG)",
  "Authentication (Clerk)",
  "Tailwind CSS",
  "Framer Motion",
  "Git & CI/CD",
] as const;
