import { HomeScence } from "@/components/3d/scence";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
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
            <h1 className="md:text-6xl text-4xl font-semibold uppercase mb-5">
              Frontend
              <br />
              Developer
            </h1>
            <p className="md:text-lg text-sm md:max-w-[380px] max-w-[80%] font-light">
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
                href="mailto:info.wyma@gmail.com"
                className="md:text-lg underline font-medium"
              >
                info.wyma@gmail.com
              </a>
            </div>
            <div className="mt-1">
              <a href="">LinkedIn</a>, <a href="">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
