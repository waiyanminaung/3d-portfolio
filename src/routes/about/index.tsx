import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/layout/Footer";
import SelectedProjects from "./components/SelectedProjects";

export const Route = createFileRoute("/about/")({
  component: About,
});

const experiences = [
  {
    role: "Frontend Developer",
    company: "High Ground",
    duration: "Jan 2024 - Present",
    logo: "/images/exp/high-ground.png",
  },
  {
    role: "React Native Developer",
    company: "Telecom Myanmar",
    duration: "Jan 2023 - Dec 2023",
    logo: "/images/exp/myid.png",
  },
  {
    role: "Full Stack Developer",
    company: "Myanmar Web Creator",
    duration: "Jun 2018 - Dec 2021",
    logo: "/images/exp/mwc.png",
  },
  {
    role: "Junior WordPress Developer",
    company: "Myanmar Web Designer",
    duration: "Jan 2016 - May 2018",
    logo: "/images/exp/mwd.png",
  },
];

const codingSkills = [
  { skill: "JavaScript / TypeScript", icon: "/images/skill/javascript.svg" },
  { skill: "React", icon: "/images/skill/react.svg" },
  { skill: "Next.js", icon: "/images/skill/next.svg" },
  { skill: "React Native", icon: "/images/skill/react.svg" },
  { skill: "Laravel", icon: "/images/skill/laravel.svg" },
  { skill: "WordPress", icon: "/images/skill/wordpress-dark.svg" },
];

const devopsSkills = [
  { skill: "Docker", icon: "/images/skill/docker.svg" },
  { skill: "Git", icon: "/images/skill/git.svg" },
  { skill: "GitHub", icon: "/images/skill/github.svg" },
];

function About() {
  return (
    <div className="container mx-auto pt-36">
      <div className="border border-gray-700 grid grid-cols-[minmax(300px,500px)_1fr]">
        <div className="border-r border-gray-700 p-14 flex items-center justify-center">
          <img
            src="/images/profile.png"
            alt="Wai Yan Min Aung"
            className="rounded-full max-w-[316px]"
          />
        </div>
        <div className="p-14 text-white space-y-5">
          <h2 className="text-base font-medium">Hi! I'm Wai Yan,</h2>
          <p className="font-light leading-[1.8]">
            A passionate Front-End Developer with over 8 years of experience
            creating engaging user interfaces. My core expertise is in React and
            React Native, and I bring a significant advantage by possessing
            strong full-stack experience with Laravel and WordPress.
          </p>
          <p className="font-light leading-[1.8]">
            This comprehensive understanding allows me to build seamless,
            performant front-ends that integrate perfectly with back-end
            systems. I have successfully applied these skills across E-commerce
            platforms, Learning Management Systems, and CMS projects.
          </p>
          <p className="font-light leading-[1.8]">
            My dedication lies in continuous learning and applying the right
            technology to solve user and business problems. Explore my portfolio
            to see how my focused front-end skills and holistic development
            approach can bring value to your projects.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[minmax(300px,500px)_1fr] text-white py-26">
        <h3 className="text-4xl">Experiences</h3>
        <div className="divide-y divide-gray-700 -my-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="grid grid-cols-[60px_1fr_150px] gap-5 items-center py-6"
            >
              <div className="aspect-square bg-white rounded-lg p-2">
                <img
                  src={exp.logo}
                  alt="Company Logo"
                  className="object-contain h-full w-full"
                />
              </div>
              <div>
                <h4 className="text-lg font-medium">{exp.company}</h4>
                <div className="text-sm mt-1">{exp.role}</div>
              </div>
              <span className="text-xs border border-white px-1 py-2 inline-block rounded-3xl text-center">
                {exp.duration}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[minmax(300px,500px)_1fr] text-white pb-26">
        <h3 className="text-4xl">Coding</h3>
        <div className="divide-y divide-gray-700 -my-5">
          {codingSkills.map((skill) => (
            <div
              key={skill.skill}
              className="grid grid-cols-[1fr_150px] gap-5 py-5 items-center"
            >
              <span className="text-xl font-medium">{skill.skill}</span>
              <div>
                <img src={skill.icon} className="size-10 ms-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[minmax(300px,500px)_1fr] text-white pb-26">
        <h3 className="text-4xl">Devops</h3>
        <div className="divide-y divide-gray-700 -my-5">
          {devopsSkills.map((skill) => (
            <div
              key={skill.skill}
              className="grid grid-cols-[1fr_150px] gap-5 py-5 items-center"
            >
              <span className="text-xl font-medium">{skill.skill}</span>
              <div>
                <img src={skill.icon} className="size-10 ms-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <SelectedProjects />

      <Footer />
    </div>
  );
}
