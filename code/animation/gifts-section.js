import { bpTablet } from "./utils.js";

let giftSectionCards = document.querySelectorAll(".gift-card"),
  giftScrollAnimation = gsap.matchMedia();

//add classes
giftSectionCards.forEach((elem, i) => {
  if (i % 2 === 0) {
    elem.classList.add("left");
  } else elem.classList.add("right");
});

//main scroll animation
giftScrollAnimation.add(
  {
    isMobile: `(max-width: ${bpTablet - 1}px)`,
    isDesktop: `(min-width: ${bpTablet}px)`,
    reduceMotion: "(prefers-reduced-motion: reduce)",
  },
  (context) => {
    let { isMobile, isDesktop, reduceMotion } = context.conditions;
    if (!reduceMotion) {
      if (isMobile) {
        //gift section mob
        gsap.fromTo(
          ".gift-section-mobile__title",
          {
            width: "100%",
            textAlign: "center",
            letterSpacing: "10px",
          },
          {
            scrollTrigger: {
              trigger: ".gift-section-mobile",
              start: "top 80%",
              end: "top center",
              duration: 1,
              scrub: true,
            },
            letterSpacing: 0,
          }
        );

        //cards mob timeline
        let giftSectionMobTL = gsap.timeline();
        giftSectionMobTL
          .from(".left", {
            xPercent: -120,
            stagger: 0.5,
            duration: 0.7,
          })
          .from(
            ".right",
            {
              xPercent: 120,
              stagger: 0.5,
              duration: 0.7,
            },
            0
          )
          .from(
            ".gift-card__title",
            {
              x: -10,
              opacity: 0,
              stagger: 0.2,
              duration: 0.7,
            },
            "+=10%"
          );

        ScrollTrigger.create({
          animation: giftSectionMobTL,
          trigger: ".gift-card",
          start: "top 70%",
          end: "top top",
        });
      } else {
        //desktop timeline
        let giftSectionTL = gsap.timeline();
        giftSectionTL
          .from(".gift-section__container img", {
            scale: 0.5,
          })
          .from(".gift-section__container", {
            backgroundColor: "transparent",
          })
          .from([".gift-section__title", ".gift-section__content p"], {
            y: 15,
            opacity: 0,
            stagger: 0.2,
          });

        ScrollTrigger.create({
          animation: giftSectionTL,
          trigger: ".gift-section__container",
          start: "top 80%",
          end: "0 10%",
        });
      }
    }
  }
);

export { giftScrollAnimation };
