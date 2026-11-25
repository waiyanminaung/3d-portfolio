import { createFileRoute, redirect } from "@tanstack/react-router";

// About now lives as a section on the home page.
export const Route = createFileRoute("/about/")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "about", replace: true });
  },
});
