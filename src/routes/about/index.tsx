import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/layout/Footer";
import SelectedProjects from "./-components/SelectedProjects";
import OptimizedImage from "@/components/@shared/OptimizedImage";
import useUser from "@/hooks/useUser";

export const Route = createFileRoute("/about/")({
  component: About,
});

const codingSkills = [
  { skill: "JavaScript / TypeScript", icon: "/images/skill/javascript.svg" },
  { skill: "React", icon: "/images/skill/react.svg" },
  { skill: "Next.js", icon: "/images/skill/nextjs-dark.svg" },
  { skill: "React Native", icon: "/images/skill/react.svg" },
  { skill: "Laravel", icon: "/images/skill/laravel.svg" },
  { skill: "WordPress", icon: "/images/skill/wordpress-dark.svg" },
  { skill: "Playwright", icon: "/images/skill/playwright.svg" },
];

const devopsSkills = [
  { skill: "Docker", icon: "/images/skill/docker.svg" },
  { skill: "Git", icon: "/images/skill/git.svg" },
  { skill: "GitHub", icon: "/images/skill/github.svg" },
];

function About() {
  const { data, error, loading } = useUser();

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error || !data) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  const { about, personal, experience } = data;

  return (
    <>
      <div className="container mx-auto pt-36">
        <div className="sm:border border-gray-700 grid xl:grid-cols-[minmax(300px,500px)_1fr] lg:grid-cols-[40%_1fr] sm:gap-0 gap-7">
          <div className="lg:border-r border-gray-700 lg:p-14 sm:p-8 flex items-center justify-center">
            <OptimizedImage
              src={personal.profile}
              blurHash={{ hash: personal.profile_blurhash }}
              alt={personal.name || "Profile"}
              width={316}
              height={316}
              className="rounded-full xl:w-[316px] w-[200px]"
            />
          </div>
          <div className="lg:p-14 sm:p-8 text-white space-y-5">
            <h2 className="text-base font-medium">
              Hi! I'm {personal?.name?.split(" ")[0] || "Wai Yan"},
            </h2>
            {/* Render about paragraphs from JSON data */}
            {about?.paragraphs.map((paragraph, index) => (
              <p key={index} className="font-light md:leading-[1.8] leading-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(300px,500px)_1fr] text-white py-26 gap-12">
          <h3 className="text-4xl">Experiences</h3>
          <div className="divide-y divide-gray-700 -my-6">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="grid md:grid-cols-[auto_1fr_150px] md:gap-5 gap-3.5 items-center py-6"
              >
                {/*  Hidden on small screens */}
                <div className="aspect-square bg-white rounded-lg p-2 max-w-14 order-1 md:order-none">
                  <img
                    src={exp.logo}
                    className="object-contain h-full w-full"
                    width={40}
                    height={40}
                    alt={exp.company}
                  />
                </div>

                <div className="order-3 md:order-none">
                  <h4 className="text-lg font-medium">{exp.company}</h4>
                  <div className="text-sm mt-1">{exp.position}</div>
                </div>

                <span className="text-xs md:border border-white md:px-1 md:py-2 inline-block rounded-3xl md:text-center md:order-none order-2">
                  {exp.period.from} - {exp.period.to}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(300px,500px)_1fr] gap-12 text-white pb-26">
          <h3 className="text-4xl">Coding</h3>
          <div className="divide-y divide-gray-700 -my-5">
            {codingSkills.map((skill) => (
              <div
                key={skill.skill}
                className="grid grid-cols-[1fr_auto] gap-5 py-5 items-center"
              >
                <span className="sm:text-xl text-lg font-medium">
                  {skill.skill}
                </span>
                <div>
                  <img
                    src={skill.icon}
                    className="size-10 ms-auto"
                    width={40}
                    height={40}
                    alt={skill.skill}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(300px,500px)_1fr] gap-12 text-white pb-26">
          <h3 className="text-4xl">Devops</h3>
          <div className="divide-y divide-gray-700 -my-5">
            {devopsSkills.map((skill) => (
              <div
                key={skill.skill}
                className="grid grid-cols-[1fr_auto] gap-5 py-5 items-center"
              >
                <span className="sm:text-xl text-lg font-medium">
                  {skill.skill}
                </span>
                <div>
                  <img
                    src={skill.icon}
                    className="size-10 ms-auto"
                    width={40}
                    height={40}
                    alt={skill.skill}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <SelectedProjects />
      </div>

      <Footer />
    </>
  );
}
