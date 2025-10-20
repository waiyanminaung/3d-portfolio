import Button from "@/components/ui/Button";
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
      <div className="grid grid-cols-[20%_1fr_20%] container mx-auto fixed top-10 justify-between left-0 right-0 z-10 items-center">
        <div className="text-white font-bold text-lg">
          <Link to="/">Wai Yan Min Aung</Link>
        </div>
        <div className="flex gap-16 text-sm justify-center">
          <Link to="/" className="text-white font-light">
            Home
          </Link>
          <Link to="/about" className="text-white font-light">
            About
          </Link>
          <Link to="/projects" className="text-white font-light">
            Work
          </Link>
        </div>
        <div className="flex">
          <Button variant="outline" className="ms-auto">
            Download Resume
          </Button>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export const Route = createRootRoute({ component: RootLayout });
