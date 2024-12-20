// Target the letter
let tl = gsap.timeline()
const n = document.getElementById('#n');
const u = document.getElementById('#u');
const t = document.getElementById('#t'); 
const h = document.getElementById('#h');
const a = document.getElementById('#a');
const n2 = document.getElementById('#n2');
const a2 = document.getElementById('#a2');
const n3 = document.getElementById('#n3');
const four = document.getElementById('4');
const nine = document.getElementById('9');
const one = document.getElementById('1');
const t2 = document.getElementById('t2');
const tOverlap = document.getElementById('#tOverlap');
const h2 = document.getElementById('#h2');
const hOverlap = document.getElementById('#hOverlap');
const a3 = document.getElementById('#a3'); 
const r = document.getElementById('r'); 
const icon3 = document.getElementById('icon3'); 
const icon3Filler = document.getElementById('icon3Filler'); 
const m = document.getElementById('#m'); 
const j = document.getElementById('#j')
const a6 = document.getElementById('#a6')
const h3 = document.getElementById('#h3')
const r2 = document.getElementById('#r2')
const a4 = document.getElementById('#a4')
const a5 = document.getElementById('#a5')


const numbers = [four, nine, one]; 
const lastThreeLetters = [n2, a2, n3]; 

tl.set(numbers, { opacity: 0 });
tl.set(t2, {opacity: 0});
tl.set(tOverlap, {opacity: 0});
tl.set(h2, {opacity: 0});
tl.set(hOverlap, {opacity: 0});
tl.set(r, {opacity:0});
tl.set(icon3Filler, {scale:1});
tl.set(icon3, {scale:1});
tl.set(m, {opacity:0});
tl.set(j, {opacity:0});
tl.set(a6, {opacity:0});
tl.set(h3, {opacity:0}); 
tl.set(a4, {opacity:0});
tl.set(a5, {opacity:0});








const icon1 = document.getElementById("#icon1");
const icon2 = document.getElementById("#icon2");

  
tl.addLabel("step1", 0)
tl.to(n, {
    duration: 0,       // Duration of the animation in seconds
    rotationX: 180,    // Rotate around the Y-axis by 360 degrees
    ease: "power2.inOut", // Easing function for a smoother animation
    repeat: 0,        // Repeat infinitely
    yoyo: true         // Make the animation reverse back to the start
});

tl.to(n, {
    duration: 1,       // Duration of the animation in seconds
    rotationX: 360,    // Rotate around the Y-axis by 360 degrees
    ease: "bounce.inOut", // Easing function for a smoother animation
    repeat: 0,        // Repeat infinitely
    yoyo: true         // Make the animation reverse back to the start
});

tl.fromTo(icon1, 
    { scale: 0 }, // Start scale
    { scale: 1, // End scale
      duration: 0.5, // Animation duration in seconds
      ease: "power2.inOut" // Easing function
    }, "step1+=0.5");

tl.to(icon1, 
    { y: -100, opacity: 0 , // End scale
          duration: 0.5, // Animation duration in seconds
          ease: "bounce.inOut" // Easing function
     }, "step1+=1");
    


tl.fromTo(u, 
    { opacity: 0,  y:100}, 
    { opacity: 1, duration: 0.5, y:0}, 
    "step1+=1");

tl.fromTo(t, 
    {opacity: 0, y: -100},
    {opacity: 1, y: 0, duration: 0.25},
    "step1+=1");


tl.fromTo(icon2, 
    {opacity: 0, scale: 0}, 
    {opacity: 1, scale: 1, duration: 0.5}, 
    "step1+=1.5"
);


tl.to(icon2, {rotateZ: 360, duration: 0.5, repeat: 5, ease: "none"}, "step1+=1.5");

tl.fromTo(h, 
    {opacity: 0, x: -50},
    {opacity: 1, x: 0, ease: "bounce.inOut", duration: 0.25},
    "step1+=2.5"
);

tl.fromTo(icon2, 
    {x: 0},
    {x: "5vw", ease: "bounce.inOut", duration: 0.25},
    "step1+=2.5"
);

tl.fromTo(icon2, 
    {y: 0},
    {opacity: 0, y: 50, ease: "none", duration: 0.25},
    "step1+=4"
);

tl.fromTo(a,  
    {opacity:0, y: 50}, 
    {opacity: 1, y: 0, ease: "none", duration: 0.25}, 
    "step1+=4"
);


tl.fromTo(numbers, 
    {opacity: 0, y: 50}, 
    {opacity: 1, y: 0, ease: "none", duration: 0.25, stagger: 0.05}, 
    "step1+=2" ); 

tl.fromTo(numbers, 
    {opacity:1, y: 0}, 
    {opacity: 0, y: -50, ease: "none", duration: 0.25, stagger: 0.05}, 
    "step1+=2.5" ); 
      

tl.fromTo(lastThreeLetters, 
    {opacity:0, y: 50}, 
    {opacity: 1, y: 0, ease: "none", duration: 0.25, stagger: 0.05}, 
    "step1+=2.5"

);

// t2, tOverlap, h2, hOverlap

tl.fromTo(tOverlap, 
    {opacity: 1, y: 100}, 
    {opacity: 1, y: 0, ease: "ease.inOut", duration: 0.5, yoyo:true, repeat: 2}, 
    "step1+=1"

);


tl.fromTo(tOverlap, 
    {opacity: 1, y: 0}, 
    {opacity: 1, y: 200, ease: "ease.inOut", duration: 0.5}, 
    "step1+=2.5"

);


tl.fromTo(t2, 
    {opacity: 1, y: -100}, 
    {opacity: 1, y: 0, ease: "ease.inOut", duration: 0.5, yoyo:true, repeat: 2}, 
    "step1+=1.5"
);


tl.fromTo(hOverlap, 
    {opacity: 1, y: 100}, 
    {opacity: 1, y: 0, ease: "ease.inOut", duration: 0.5, yoyo:true, repeat: 2}, 
    "step1+=1.25"

);


tl.fromTo(hOverlap, 
    {opacity: 1, y: 0}, 
    {opacity: 1, y: 200, ease: "ease.inOut", duration: 0.5}, 
    "step1+=2.75"

);


tl.fromTo(h2, 
    {opacity: 1, y: -100}, 
    {opacity: 1, y: 0, ease: "ease.inOut", duration: 0.5, yoyo:true, repeat: 2}, 
    "step1+=1.75"
);

tl.fromTo(a3, 
    {scale: 0},
    {scale: 1, rotateY: 360, duration: 1},
    "step1+=2"
);

tl.fromTo(a3, 
    {scale: 0},
    {scale: 1, rotateY: 360, duration: 1},
    "step1+=2"
);

tl.fromTo(icon3Filler, 
    {y:-600},
    {y:0, duration: 1},
    "step1+=2"
);

tl.fromTo(icon3, 
    {opacity: 1},
    {opacity: 0, duration: 1},
    "step1+=3"
)

tl.fromTo(icon3Filler, 
    {scale: 1},
    {scale: 0.5, duration: 0.25}, 
    "step1+=4"
); 

tl.fromTo(icon3Filler, 
    {scale: 0.5},
    {scale: 0, duration: 0.25}, 
    "step1+=4.25"
); 

tl.fromTo(r, 
    {scale: 0, opacity: 0}, 
    {scale: 1, opacity: 1, duration: 0.25}, 
    "step1+=4.5"
);

tl.fromTo(m, 
    {y: -100, opacity: 1}, 
    {y: 0, opacity: 1, duration: 0.5}, 
    "step1+=3"
);

tl.fromTo(j, 
    {opacity: 0}, 
    {opacity: 1, duration: 0.25}, 
    "step1+=2"
);


tl.fromTo(j, 
    {rotateX: 0}, 
    {rotateX: 360, duration: 1}, 
    "step1+=2"
);

j.addEventListener(
    "mouseover",
    (event) => {
        tl.fromTo(j, 
            {rotateX: 0}, 
            {rotateX: 360, duration:1, ease: "ease.inOut", delay: 1}, 
        )

});

tl.fromTo(a4, 
    {x: -100, opacity: 1}, 
    {x: 0, opacity: 1, duration: 0.5}, 
    "step1+=3"
);

tl.fromTo(a5, 
    {x: 100, opacity: 1}, 
    {x:0, opacity: 1, duration: 0.5, ease: "ease.inOut"},
    "step1+=3" 

);




tl.fromTo(a6, 
    {x: -100, opacity: 1}, 
    {x: 0, opacity: 1, duration: 0.5}, 
    "step1+=3"
);

tl.fromTo(h3, 
    {opacity: 1, rotateZ: -90}, 
    {opacity: 1, rotateZ: 0, duration: 0.5, ease: "ease.inOut"},
    "step1+=3" 

);


tl.fromTo(r2, 
    {y: -200}, 
    {y:0, duration: 0.5, ease: "ease.inOut"},
    "step1+=3" 

);


