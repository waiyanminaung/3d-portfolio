import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

const RootLayout = () => {
  return (
    <>
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
          <button className="border  border-white px-5 py-2.5 text-sm rounded text-white hover:bg-white hover:text-black transition cursor-pointer ms-auto">
            Download Resume
          </button>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
