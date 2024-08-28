import { bpTablet } from "./utils.js";

let categoriesTL = gsap.timeline(),
  categoriesScrollAnimation = gsap.matchMedia();

//cards scroll animation
let addCardsAnimation = (animation, start, scrub) => {
  ScrollTrigger.create({
    animation: animation,
    trigger: ".categories-section__list",
    start: start,
    end: "top 40%",
    scrub: scrub,
    duration: 1.5,
  });
};

//categories title timeline
categoriesTL
  .from(".categories-section__title", { opacity: 0, y: -50 })
  .from(".categories-section__text", { opacity: 0 });

//main scroll animation
categoriesScrollAnimation.add(
  {
    isMobile: `(max-width: ${bpTablet-1}px)`,
    isDesktop: `(min-width: ${bpTablet}px)`,
    reduceMotion: "(prefers-reduced-motion: reduce)",
  },
  (context) => {
    let { isMobile, isDesktop, reduceMotion } = context.conditions;

    if (!reduceMotion) {
      //title and text scroll
      ScrollTrigger.create({
        animation: categoriesTL,
        trigger: ".categories-section",
        start: isMobile ? "top 96%" : "top 80%",
        end: isMobile ? "top 68%" : "top top",
        scrub: isMobile ? true : false,
        duration: 1.2,
      });

      if (isMobile) {
        //cards mob animation
        let categoriesMobAnimation = gsap.from(".category-card__title", {
          y: 20,
          scale: 0.94,
          opacity: 0,
          stagger: 0.4,
        });
        addCardsAnimation(categoriesMobAnimation, "top bottom", true);
      } else {
        //cards desktop animation
        let categoriesDeskAnimation = gsap.timeline();

        categoriesDeskAnimation
          .from(".category-image", { height: 0 })
          .from(".category-card__link", { boxShadow: "none" })
          .from(".category-card__title", { scale: 0 }, "-=0.4");

        addCardsAnimation(categoriesDeskAnimation, "top 60%", false);
      }
    }
  }
);

export { categoriesScrollAnimation };
