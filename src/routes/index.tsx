import { HomeScence } from "@/components/3d/scence";
import useUser from "@/hooks/useUser";
import { createFileRoute } from "@tanstack/react-router";
import DecryptedText from "./-components/DecryptedText";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { data, error, loading } = useUser();

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error || !data) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  const { personal } = data;

  return (
    <>
      <div className="h-screen bg-gradient-to-r from-[#282727]  to-[#0C0C0E]">
        <div className="pointer-events-none absolute inset-0 [background-size:200px_200px] select-none [background-image:linear-gradient(to_right,#2C2C2C_1px,transparent_1px)]" />
        <div className="h-full md:pt-0 pt-[30%]">
          <HomeScence />
        </div>
      </div>

      <div className="fixed top-2/4 w-full container left-0 right-0 mx-auto md:-translate-y-2/4 -translate-y-2/3 text-white">
        <div className="grid md:grid-cols-[40%_1fr_30%] items-end md:gap-0 gap-6">
          <div className="text-left">
            <DecryptedText
              text="Frontend Developer"
              animateOn="view"
              parentClassName="mb-5"
              className="md:text-6xl text-4xl font-semibold uppercase"
              encryptedClassName="md:text-6xl text-4xl font-semibold uppercase"
              speed={100}
              sequential={true}
            />
            <p className="md:text-lg text-sm md:max-w-[380px]  font-light">
              I'm experienced in Web Development and have a passion for crafting
              digital experiences.
            </p>
          </div>
          <div className="h-0" />
          <div className="text-start md:pl-[25%]">
            <div className="flex gap-2 items-center">
              <span className="inline-block size-3 bg-[#18FF97] rounded-full" />
              <span className="text-sm font-light">Available</span>
            </div>
            <div className="mt-2">
              <a
                href={`mailto:${personal.contact.email}`}
                className="md:text-lg underline font-medium"
                data-analytics="Email Click"
                target="_blank"
              >
                {personal.contact.email}
              </a>
            </div>
            <div className="mt-1 md:text-base text-sm">
              <a
                href={personal.social.linkedin}
                target="_blank"
                data-analytics="LinkedIn Visit"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href={personal.social.github}
                target="_blank"
                data-analytics="GitHub Visit"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
