// Create a timeline from gsap so we can apply to different item.
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y: "0%", duration: 1, stagger: 0.25});

// use timeline it will chain things together the next one happens when the first one finishes.
tl.to('.slider', {y: '-100%', duration: 1.5, delay: 0.5});

// -=1 means 1 seconds before the previous tween ends  (overlap with the previous tween)
// So "duration: 1" and '-=1' makes sure the .intro change will finish at the same time as the .slider change.
// I think value of -=1.2 is better, it won't have the black background of .intro still showing on the screen during animation.
tl.to('.intro', {y: '-100%', duration: 1}, '-=1');

// Make <nav> and .big-text appear within 1s after the above animation.
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, '-=1');
