// Create a timeline from gsap so we can apply to different item.
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y: "0%", duration: 1, stagger: 0.25});

// use timeline it will chain things together the next one happens when the first one finishes.
tl.to('.slider', {y: '-100%', duration: 1.5, delay: 0.5});
tl.to('.intro', {y: '-100%', duration: 1});
