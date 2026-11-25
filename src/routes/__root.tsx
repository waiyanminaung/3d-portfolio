import Button from "@/components/ui/Button";
import { RESUME_URL, trackResumeDownload } from "@/utils/analytics";
import { useGSAP } from "@gsap/react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

const RootLayout = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      smoothTouch: 0.1,
    });
  });

  return (
    <div id="smooth-content">
      <div className="flex container mx-auto fixed md:top-10 top-8 justify-between left-0 right-0 z-10 items-center gap-6">
        <div className="text-white font-bold text-lg">
          <Link to="/" viewTransition>
            <span className="md:block hidden">Wai Yan Min Aung</span>{" "}
            <span className="md:hidden">W</span>
          </Link>
        </div>
        <div className="flex">
          <Button
            variant="outline"
            className="ms-auto"
            asChild
            data-analytics="Download Resume"
          >
            <a
              href={RESUME_URL}
              target="_blank"
              onClick={() => trackResumeDownload("header")}
            >
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export const Route = createRootRoute({ component: RootLayout });
