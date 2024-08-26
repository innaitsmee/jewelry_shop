import { bpDesktop, prefersReducedMotion } from "./utils.js";

let heroStartAnimation = gsap.timeline(),
  heroScrollAnimation = gsap.matchMedia();

//start animation
if (!prefersReducedMotion.matches) {
  heroStartAnimation
    .from(".hero-title", {
      opacity: 0,
      duration: 3,
    })
    .from(
      ".hero-text",
      {
        y: 20,
        opacity: 0,
        duration: 1,
      },
      0.6
    )
    .from(
      ".hero-btn",
      {
        y: -20,
        opacity: 0,
        duration: 1,
      },
      0.6
    );
}

//scroll animation
heroScrollAnimation.add(
  {
    isMobile: `(max-width: ${bpDesktop - 1}px)`,
    isDesktop: `(min-width: ${bpDesktop}px)`,
    reduceMotion: "(prefers-reduced-motion: reduce)",
  },
  (context) => {
    let { isDesktop, isMobile, reduceMotion } = context.conditions;

    if (isMobile && !reduceMotion) {
      gsap.to(".hero-container", {
        scrollTrigger: {
          trigger: ".hero-container",
          start: "top 200px",
          scrub: true,
        },
        opacity: 0,
        yPercent: 20,
        scale: 0.5,
        duration: 2,
      });
    }
  }
);

export { heroStartAnimation, heroScrollAnimation };
