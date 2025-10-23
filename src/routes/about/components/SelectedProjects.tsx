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
      "Developed a custom WordPress theme from scratch for FreshSlice Pizza Canada, creating a fast, brand-accurate corporate website that serves as the central hub for their menu, rewards program, and online ordering funnel",
    link: "https://www.freshslice.com",
    image: "/images/projects/freshslice.jpg",
    tab_icon: "/images/skill/wordpress-dark.svg",
    tech_stacks: ["WordPress", "Custom Theme", "ACF Pro"],
  },
  {
    tab: "lottery.md",
    name: "Mytel Pay's Lottery System",
    description:
      "MytelPay, a mobile money service, is known as the most secure E-wallet in Myanmar with PCI-DSS  Global Certificate. It facilitate to convenient and secure financial transactions. Proficient in leveraging digital platforms for efficient money transfers, bill payments, and mobile top-ups contributing to streamlined financial management.",
    link: "https://www.waiyanminaung.com",
    image: "/images/projects/lottery.jpg",
    tab_icon: "/images/skill/react.svg",
    tech_stacks: ["React Native", "Redux"],
  },
  {
    tab: "ejls-learning.md",
    name: "EJLS Learning Management System",
    description:
      "Developed 'EJLS,' a full-stack Learning Management System featuring member enrollment, course progress tracking, automated exams with instant results, and dynamic certificate generation",
    link: "https://www.example-ecommerce.com",
    image: "/images/projects/ejls.jpg",
    tab_icon: "/images/skill/laravel.svg",
    tech_stacks: ["Laravel", "JavaScript"],
  },
  {
    tab: "bridgerock.md",
    name: "U.S. Real Estate Investment & Management",
    description:
      "Developed the frontend for an AI-driven real estate platform, featuring automated PDF data extraction, a real-time management dashboard, and an interactive chat interface to query document insights.",
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
