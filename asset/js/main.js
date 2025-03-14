"use strict";

$(document).ready(function () {
  $(window).on("load", function () {
    setTimeout(function () {
      $("#intro").fadeOut(1000, function () {
        $(".wrapper").fadeIn(1000);
      });
    }, 3000);
  });

  gsap.registerPlugin(ScrollTrigger);

  const header = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "0% 10%",
        end: "100% 100%",
        markers: true,
      },
    })
    .to("#header", { y: 0 });
});
