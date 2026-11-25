import { HomeScence } from "@/components/3d/scence";
import useUser from "@/hooks/useUser";
import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { scrollToAbout } from "@/utils/scroll";
import { useEffect, useRef } from "react";
import DecryptedText from "./-components/DecryptedText";
import AboutSection from "./-components/AboutSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { data, error, loading } = useUser();
  const heroRef = useRef<HTMLDivElement>(null);
  const { hash } = useLocation();

  // Hero content drifts up and fades out as the About section scrolls in.
  useGSAP(
    () => {
      if (!heroRef.current) return;

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom 20%",
          scrub: true,
        },
      });

      tl.to("[data-scroll-hint]", { opacity: 0, duration: 0.15 }, 0)
        .to(
          "[data-hero-left] > *",
          { yPercent: -120, opacity: 0, stagger: 0.08, duration: 0.5 },
          0,
        )
        .to(
          "[data-hero-right] > *",
          { yPercent: -160, opacity: 0, stagger: 0.06, duration: 0.5 },
          0.1,
        )
        .to(
          "[data-hero-avatar]",
          { opacity: 0, duration: 0.8 },
          0,
        )
        .to("[data-hero-grid]", { opacity: 0, duration: 0.6 }, 0);

      gsap.from("[data-about-intro]", {
        y: 120,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "top 35%",
          scrub: true,
        },
      });
    },
    { dependencies: [data, loading] },
  );

  // Arriving via /about or the About menu link: jump to the section.
  useEffect(() => {
    if (data && hash === "about") requestAnimationFrame(scrollToAbout);
  }, [data, hash]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error || !data) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  const { personal } = data;

  return (
    <>
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#282727] to-[#0C0C0E]" />
        <div
          data-hero-grid
          className="pointer-events-none absolute inset-0 [background-size:200px_200px] select-none [background-image:linear-gradient(to_right,#2C2C2C_1px,transparent_1px)]"
        />
        {/*
          The WebGL canvas stops short of the hero's bottom edge (bottom-10) and
          is never moved past it: where a clip edge cuts the canvas, Chrome can
          leak a 1px row of it at subpixel scroll offsets from ScrollSmoother.
          The fade below fully covers the canvas's own bottom edge instead.
        */}
        <div
          data-hero-avatar
          className="absolute inset-x-0 top-0 bottom-10 md:pt-0 pt-[30%]"
        >
          <HomeScence />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#1d1d1d] to-60%" />

        <div className="absolute top-2/4 w-full container left-0 right-0 mx-auto md:-translate-y-2/4 -translate-y-2/3 text-white">
          <div className="grid md:grid-cols-[40%_1fr_30%] items-end md:gap-0 gap-6">
            <div data-hero-left className="text-left">
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
                I'm experienced in Web Development and have a passion for
                crafting digital experiences.
              </p>
            </div>
            <div className="h-0" />
            <div data-hero-right className="text-start md:pl-[25%]">
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

        <button
          type="button"
          data-scroll-hint
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-300 hover:text-white transition-colors"
          aria-label="Scroll to About"
        >
          Scroll
          <span className="relative block h-10 w-px overflow-hidden bg-white/20">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-white animate-[scroll-hint_1.6s_ease-in-out_infinite]" />
          </span>
        </button>
      </div>

      <AboutSection />
    </>
  );
}
