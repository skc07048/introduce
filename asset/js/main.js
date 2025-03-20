"use strict";

$(document).ready(function () {
  $(window).on("load", function () {
    setTimeout(function () {
      $("#intro").fadeOut(1000, function () {
        $(".wrapper").fadeIn(1000);
      });
    }, 3000);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  //  gsap
  gsap.registerPlugin(ScrollTrigger);
  // main
  const main = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
      },
    })
    .to(".main_bg", { width: "80%", height: "80%" })
    .to(".main_title", { opacity: 1 })
    .to(".main_description", { opacity: 1 })
    .to(".main_description2", { opacity: 1 });
  // visual
  const visual = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#visual",
        start: "0% 0%",
        end: "+=100%",
        scrub: 0,
        pin: true,
      },
    })
    .to(".visual_text_wrap:nth-child(1)", { opacity: 1, y: 0 })
    .to(".visual_text_wrap:nth-child(3)", { opacity: 1, y: 0 }, "+=0.5")
    .to(".visual_text_wrap:nth-child(2)", { opacity: 1 }, "+=0.5")
    .to(".visual_video", { width: "23%", opacity: 1 })
    .to(".visual_img", { opacity: 1 })
    .to(".visual_icon", { opacity: 1 });

  const visualIcon = gsap
    .timeline({
      yoyo: true,
      repeat: -1,
      ease: "power3 out",
      scrub: 1,
    })
    .to(".visual_img", { rotate: 360, duration: 2, stagger: 0.5 })
    .to(".visual_icon:nth-child(2)", { rotateY: 360, duration: 3 })
    .to(".visual_icon:nth-child(3)", { rotate: 360, duration: 3 });

  const project = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".project_content",
        start: "0% 0%",
        end: "100% 100%",
        endTrigger: "#project",
        scrub: 1,
      },
    })

    .to(".project_item1", { xPercent: -50, scale: 0, opacity: 0, duration: 2 })

    .fromTo(
      ".project_item2",
      { xPercent: 50, scale: 0, opacity: 0 },
      { xPercent: 0, scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    )
    .to(".project_item2", { xPercent: -50, scale: 0, opacity: 0, duration: 2 })

    .fromTo(
      ".project_item3",
      { xPercent: 50, scale: 0, opacity: 0 },
      { xPercent: 0, scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    )
    .to(".project_item3", { xPercent: -50, scale: 0, opacity: 0, duration: 2 })

    .fromTo(
      ".project_item4",
      { xPercent: 50, scale: 0, opacity: 0 },
      { xPercent: 0, scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    )
    .to(".project_item4", { xPercent: -50, scale: 0, opacity: 0, duration: 2 })

    .fromTo(
      ".project_item5",
      { xPercent: 50, scale: 0, opacity: 0 },
      { xPercent: 0, scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    );
});
