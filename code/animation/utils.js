gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);  

export let bpMobile = 480, //"(max-width: 480px)",
  bpTablet = 800,
  bpDesktop = 1280; //"(min-width: 1280px)";