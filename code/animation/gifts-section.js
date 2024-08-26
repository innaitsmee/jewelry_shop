import { prefersReducedMotion } from "./utils.js";

let giftSectionTL = gsap.timeline(),
  giftScrollAnimation;

if (!prefersReducedMotion.matches) {
  giftSectionTL
    .from(".gift-section__container img", {
      scale: 0.5,
    })
    .from(".gift-section__container", {
      backgroundColor: "transparent",
    })
    .from([".gift-section__title", ".gift-section__content p"], {
      y: 10,
      opacity: 0,
      delay: 0.2,
      stagger: 0.2,
    });

  giftScrollAnimation = ScrollTrigger.create({
    animation: giftSectionTL,
    trigger: ".gift-section__container",
    start: "top 80%",
    end: "0 10%",
    duration: 1,
  });
}

export { giftScrollAnimation };
