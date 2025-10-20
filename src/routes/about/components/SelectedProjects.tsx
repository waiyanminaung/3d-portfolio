import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import ProjectFrame from "./ProjectFrame";

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
        start: "top 10%",
        end: "bottom 90%",
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
    });
  });

  return (
    <div>
      <h3 className="text-4xl mb-8 text-white">Selected Projects</h3>

      <div ref={container}>
        <ProjectFrame
          no={1}
          tab="notessa.md"
          className=" h-[80vh] project-item"
          key={`project-item-${1}`}
        >
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-3xl text-vscode-primary mb-2">## Notessa</h1>

              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos perspiciatis iste provident laboriosam animi. Ex
                corrupti doloribus saepe nam perferendis rerum sit debitis nemo
                fuga ullam, eaque laboriosam eos molestiae!
              </p>
            </div>
          </div>
        </ProjectFrame>
        <ProjectFrame
          no={2}
          tab="notessa-admin.md"
          className=" h-[80vh] project-item"
          key={`project-item-${2}`}
        >
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-3xl text-vscode-primary mb-2">
                ## Notessa Admin
              </h1>

              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos perspiciatis iste provident laboriosam animi. Ex
                corrupti doloribus saepe nam perferendis rerum sit debitis nemo
                fuga ullam, eaque laboriosam eos molestiae!
              </p>
            </div>
          </div>
        </ProjectFrame>
        <ProjectFrame
          no={3}
          tab="bridge-rock.md"
          className=" h-[80vh] project-item"
          key={`project-item-${3}`}
        >
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-3xl text-vscode-primary mb-2">
                ## Bridge Rock
              </h1>

              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos perspiciatis iste provident laboriosam animi. Ex
                corrupti doloribus saepe nam perferendis rerum sit debitis nemo
                fuga ullam, eaque laboriosam eos molestiae!
              </p>
            </div>
          </div>
        </ProjectFrame>
      </div>
    </div>
  );
};

export default SelectedProjects;
