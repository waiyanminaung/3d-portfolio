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
    image: "/images/projects/freshslice.jpg",
    tab_icon: "/images/skill/wordpress-dark.svg",
    tech_stacks: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    tab: "lottery.md",
    name: "Mytel Pay's Lottery System",
    description:
      "A personal portfolio website showcasing 3D projects and interactive web experiences, built with modern web technologies to highlight skills in 3D modeling and web development.",
    link: "https://www.waiyanminaung.com",
    image: "/images/projects/lottery.jpg",
    tab_icon: "/images/skill/react.svg",
    tech_stacks: ["React Native", "Redux"],
  },
  {
    tab: "ejls-learning.md",
    name: "EJLS Learning Management System",
    description:
      "A comprehensive e-commerce platform designed to provide a seamless shopping experience, featuring user-friendly navigation, secure payment options, and robust product management capabilities.",
    link: "https://www.example-ecommerce.com",
    image: "/images/projects/ejls.jpg",
    tab_icon: "/images/skill/laravel.svg",
    tech_stacks: ["Laravel", "JavaScript"],
  },
  {
    tab: "bridgerock.md",
    name: "U.S. Real Estate Investment & Management",
    description:
      "A comprehensive e-commerce platform designed to provide a seamless shopping experience, featuring user-friendly navigation, secure payment options, and robust product management capabilities.",
    link: "https://www.example-ecommerce.com",
    image: "/images/projects/bridgerock.jpg",
    tab_icon: "/images/skill/nextjs-light.svg",
    tech_stacks: ["Next.js", "TypeScript", "TailwindCSS"],
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SelectedProjects = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      requestAnimationFrame(() => {
        mm.add("(min-width: 1025px)", () => {
          setupScrollTrigger("top 15%", "bottom 85%");
        });

        mm.add("(max-width: 1024px)", () => {
          setupScrollTrigger("top 10%", "bottom 90%");
        });
      });

      function setupScrollTrigger(start: string, end: string) {
        if (!container.current) return;

        ScrollTrigger.getAll().forEach((t) => t.kill());

        const sections = gsap.utils.toArray<HTMLElement>(".project-item");
        if (!sections.length) return;

        sections.forEach((element) => {
          ScrollTrigger.create({
            trigger: element,
            endTrigger: container.current,
            start,
            end,
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
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

        setTimeout(() => ScrollTrigger.refresh(), 500);
      }

      return () => {
        mm.revert();
      };
    },
    {
      scope: container,
      dependencies: [],
    }
  );

  return (
    <div>
      <h3 className="text-4xl mb-8 text-white">Selected Projects</h3>

      <div ref={container}>
        {projects.map((project, index) => (
          <SelectedProjectItem
            no={index + 1}
            data={project}
            className="lg:h-[70vh] h-[80vh] project-item"
            key={`project-item-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedProjects;
