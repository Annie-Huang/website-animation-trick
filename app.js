// Create a timeline from gsap so we can apply to different item.
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y: "0%", duration: 1, stagger: 0.25})
