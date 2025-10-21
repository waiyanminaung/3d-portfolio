import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SelectedProjectItem from "./SelectedProjectItem";

const projects = [
  {
    tab: "freshslice.md",
    name: "Freshslice",
    description:
      "Developed the official website for Freshslice Pizza, a multi-award-winning chain known for its fresh ingredients and customizable pizza options. The project focused on creating an engaging online ordering experience with emphasis on usability and visual appeal.",
    link: "https://www.freshslice.com",
    image: "/images/projects/freshslice.png",
    tab_icon: "/images/skill/wordpress-dark.svg",
    tech_stacks: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    tab: "portfolio.md",
    name: "3D Portfolio",
    description:
      "A personal portfolio website showcasing 3D projects and interactive web experiences, built with modern web technologies to highlight skills in 3D modeling and web development.",
    link: "https://www.waiyanminaung.com",
    image: "/images/projects/freshslice.png",
    tab_icon: "/images/skill/react.svg",
    tech_stacks: ["Next.js", "TypeScript", "Three.js", "TailwindCSS", "GSAP"],
  },
  {
    tab: "ecommerce.md",
    name: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce platform designed to provide a seamless shopping experience, featuring user-friendly navigation, secure payment options, and robust product management capabilities.",
    link: "https://www.example-ecommerce.com",
    image: "/images/projects/freshslice.png",
    tab_icon: "/images/skill/laravel.svg",
    tech_stacks: ["Laravel", "Liquid", "JavaScript", "CSS"],
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SelectedProjects = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    const sections = gsap.utils.toArray<HTMLElement>(".project-item");

    sections.forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        endTrigger: container.current,
        start: "top 15%",
        end: "bottom 85%",
        pin: true,
        pinSpacing: false,
        onEnter: () => {
          sections.forEach((el) => el.classList.remove("active"));
          element.classList.add("active");
        },
        onLeave: () => {
          if (element === sections[sections.length - 1]) return;
          sections.forEach((el) => el.classList.remove("active"));
        },
        onEnterBack: () => {
          sections.forEach((el) => el.classList.remove("active"));
          element.classList.add("active");
        },
        onLeaveBack: () => {
          if (element === sections[sections.length - 1]) return;
          sections.forEach((el) => el.classList.remove("active"));
          element.classList.add("active");
        },
      });

      gsap.fromTo(
        element,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top+=10% 30%",
            scrub: true,
          },
        }
      );
    });
  });

  return (
    <div>
      <h3 className="text-4xl mb-8 text-white">Selected Projects</h3>

      <div ref={container}>
        {projects.map((project, index) => (
          <SelectedProjectItem
            no={index + 1}
            data={project}
            className="h-[70vh] project-item"
            key={`project-item-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedProjects;
