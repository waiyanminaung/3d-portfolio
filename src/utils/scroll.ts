import { ScrollSmoother } from "gsap/ScrollSmoother";

export const scrollToAbout = () => {
  const smoother = ScrollSmoother.get();
  if (smoother) smoother.scrollTo("#about", true, "top top");
  else document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
};
