Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
    videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});

gsap.to(".fleftelm", {
    scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
    },
    y: "-300%",
    ease: Power1,
});

Shery.textAnimate("#dev h1", {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
   });


let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
    style: 5,
    // config: { onMouse: { value: 1} },
    slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
        ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
                setScroll(prog.progress + index);
        },
        });   
    });
    },
});