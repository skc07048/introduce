"use strict";

$(document).ready(function () {
  $(window).on("load", function () {
    setTimeout(function () {
      $("#intro").fadeOut(1000, function () {
        $(".wrapper").fadeIn(1000);
      });
    }, 3000);
  });
  //  gsap
  gsap.registerPlugin(ScrollTrigger);
  // main
  const main = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
      },
    })
    .to(
      ".main_bg",
      {
        opacity: 1,
        width: "40vw",
      },
      "+=0.5"
    )
    .to(".main_title", { opacity: 1 })
    .to(".main_description", { opacity: 1 })
    .to(".main_description2", { opacity: 1 });
});
