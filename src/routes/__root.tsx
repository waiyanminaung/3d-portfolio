import Button from "@/components/ui/Button";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import {
  createRootRoute,
  Link,
  Outlet,
  useLocation,
} from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

const RootLayout = () => {
  const location = useLocation();
  const currentPathname = location.pathname;

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      smoothTouch: 0.1,
    });
  });

  const menus = [
    { name: "About", to: "/about", isActive: currentPathname === "/about" },
    {
      name: "Work",
      to: "/projects",
      isActive: currentPathname === "/projects",
    },
  ];

  return (
    <div id="smooth-content">
      <div className="grid lg:grid-cols-[20%_1fr_20%] grid-cols-[1fr_auto_auto] container mx-auto fixed md:top-10 top-8 justify-between left-0 right-0 z-10 items-center gap-6">
        <div className="text-white font-bold text-lg">
          <Link to="/">
            <span className="md:block hidden">Wai Yan Min Aung</span>{" "}
            <span className="md:hidden">W</span>
          </Link>
        </div>
        <div className="flex lg:gap-16 gap-6 text-sm justify-center">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              to={menu.to}
              className={cn(
                "text-gray-300 hover:text-white transition-colors font-medium",
                menu.isActive && "text-white "
              )}
            >
              {menu.name}
            </Link>
          ))}
        </div>
        <div className="flex">
          <Button variant="outline" className="ms-auto">
            <span className="md:inline-block hidden">Download</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-3.5 md:hidden"
            >
              <path
                d="M3 21H21M12 3V17M12 17L19 10M12 17L5 10"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Resume
          </Button>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export const Route = createRootRoute({ component: RootLayout });
