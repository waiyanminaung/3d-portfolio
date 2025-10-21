import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  component: Projects,
});

function Projects() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl text-white mb-6 font-semibold">Coming Soon!</h1>
      <p className="text-white mb-8 text-lg">
        I'm working hard to bring you an amazing showcase of my projects. Stay
        tuned!
      </p>
    </div>
  );
}
