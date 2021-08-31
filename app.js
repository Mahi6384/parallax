let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".rock", 5, { y: -300 })
  .to(".girl", 5, { y: -200 }, "-=5")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 5 }, "-=5")
  .to(".content", 5, { top: 0 }, "-=5")
  .fromTo(".para1", {x: -1000 }, {x: 0, duration: 5 }, "-=4")
  .fromTo(".para2", {x: 1000 }, {x: 0, duration: 5 }, "-=4")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 5 }, "-=5");


let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook:0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
