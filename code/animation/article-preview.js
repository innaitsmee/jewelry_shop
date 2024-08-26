import { bpMobile } from "./utils.js";

let articlePrevScroll = gsap.matchMedia();

//content animation func
let addContentAnimation = (elemClass, start, time = 1) => {
  gsap.from(elemClass, {
    scrollTrigger: {
      trigger: ".article-preview-section",
      start: start,
      duration: time,
    },
    x: 15,
    opacity: 0,
    stagger: 0.2,
  });
};

//main scroll animation
articlePrevScroll.add(
  {
    isMobile: `(max-width: ${bpMobile - 1}px)`,
    isDesktop: `(min-width: ${bpMobile}px)`,
    reduceMotion: "(prefers-reduced-motion: reduce)",
  },
  (context) => {
    let { isMobile, isDesktop, reduceMotion } = context.conditions;

    if (!reduceMotion) {
      if (isMobile) {
        addContentAnimation(".article-preview-section__date", "top 90%");
        addContentAnimation(
          [".article-preview-section__title", ".article-prev-content p"],
          "top top"
        );
      } else {
        //desk animation timeline
        let deskAnimationTL = gsap.timeline();

        deskAnimationTL
          .from(".article-preview-section", {
            xPercent: -100,
            duration: 1,
          })
          .from(".article-prev-img", {
            scale: 0.5,
            opacity: 0,
            transformOrigin: "top left",
            duration: 1.2,
          });

        ScrollTrigger.create({
          animation: deskAnimationTL,
          trigger: ".article-preview-section",
          start: "top 96%",
          end: "top 42%",
        });

        //text animation
        addContentAnimation(
          [
            ".article-preview-section__date",
            ".article-preview-section__title",
            ".article-prev-content p",
          ],
          "top 40%"
        );
      }
    }
  }
);

export { articlePrevScroll };
