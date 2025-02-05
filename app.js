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


let projects = {
    skinCancerDetection: {
        title: "AI Skin Cancer Detection",
        languages: "PyTorch",
        description: "Programmed a convolutional neural network (CNN) model with the Skin Cancer MNIST: HAM10000 dataset using PyTorch to effectively identify different skin lesion types. Fine-tuned ResNet50 and DenseNet121 models, integrating the custom CNN, and subsequently comparing the performance results between the two models. Achieved a 74% accuracy using the ResNet50 model.",
        githubLink: "https://github.com/nuthanan06/AISkinCancerDetection/tree/main",
        source: "./images/skincancerdetection.png"
    },
    communityCreator: {
        title: "Community Creator",
        languages: "React, CSS, Cohere API",
        description: "Developed an interactive platform that provides users with AI-powered feedback to improve their community's sustainable practices. Users answer multiple choice questions and receive actionable suggestions to help create a more sustainable environment.",
        githubLink: "https://github.com/nuthanan06/Community-Creator",
        source: "./images/communitycreatorlaptop.png"
    },
    personalPortfolio: {
        title: "Personal Portfolio",
        languages: "HTML, Tailwind.css, Javascript, GSAP, Anime.js",
        description: "Developed a platform to highlight my interests and showcase projects from the past four years. Applied UI/UX principles to design a functional and engaging website incorporating animations and cursor-related effects to elevate user experience.",
        githubLink: "https://github.com/nuthanan06/PersonalPortfolio", 
        source: "./images/personalportfolio.png"
    }, 

    mathLossFunction: {
        title: "Mathematical Analysis of Loss Functions", 
        languages: "PyTorch", 
        description: "Conducted research on the mathematical impact of loss functions on the accuracy and efficiency in neural network regression tasks. Concluded that while more complex loss functions improve accuracy, efficiency is reduced.",
        githubLink: "https://github.com/nuthanan06/ResearchPapers/blob/main/Mathematical%20Analysis%20of%20Neural%20Networks.pdf",
        source: "./images/neuralnetwork.png"
    }, 
    modelling: {
        title: "Mathematical Analysis of Sustainable Architecture", 
        languages: "Blender", 
        description: "Designed and modeled a sustainable community using Blender, and analyzed the role that mathematical principles play in architecture and sustainable development.",
        githubLink: "https://github.com/nuthanan06/ResearchPapers/blob/main/Mathematical%20Analysis%20of%20Sustainable%20Architecture.pdf",
        source: "./images/mathematicalmodelling.png"
    }
};

let string = '<h2 class="relative text-shadow font-santoshi text-primary-purple text-[80px] font-extrabold md:left-[5%] mini:left-[0px] mini:m-auto mini:text-center"> Projects </h2>';

for (let element of Object.values(projects)) {
    console.log(element)
    string += `<div class="mt-[20px] projectButton rounded-3xl bg-[#1C1C1E] w-[80vw] m-auto flex mini:flex-wrap mini:flex-col items-center justify-between border-primary-purple border-4 skillBox"> 
                    <div class="text-container w-[60%] mini:w-[100%]">
                        <h2 class="mt-[20px] ml-[4vw] mini:ml-[0vw] w-[100%] mx-auto font-santoshi text-primary-purple aboutMeSize text-[25px] lg:text-[30px] text-left mini:text-center font-extrabold">${element.title}</h2>
                        <p class="w-[100%] ml-[4vw] mini:ml-[0vw] mx-auto text-white italic text-[20px] font-santoshi mini:text-center">${element.languages}</p>
                        <p class="w-[100%] mini:w-[80%] mini:text-[14px] mini:ml-[10%] ml-[4vw] mb-[20px] mt-[20px] text-white text-[16px] sm:text-[14px] lg:text-[18px] font-santoshi mini:text-center">
                            ${element.description}
                        </p>
                        <div class="mini:text-center">
                            <a href="${element.githubLink}" target='_blank'>
                                <button type="button" class="w-[150px] ml-[4vw] font-santoshi py-2.5 mini:mt-2 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Github Link
                                </button>
                            </a>
                        </div>
                    </div>
                    <img src="${element.source}" class="w-[26.6666vw] h-[20vw] mini:h-[20vw] mini:w-[30vw]">
                    </div> `
}

string += `<div class="flex flex-row w-[100vw] justify-center items-center gap-3"> 
                <p class="my-4 text-gray-200 text-[15px] font-santoshi text-center"> @2024 Nuthanan Tharmarajah | </p>              
                <a href="https://se-webring.xyz/" target="_blank">
                    <img src="./images/logo_w.png" class="w-[30px] h-[20px]">    
                </a>
                <a href="https://www.linkedin.com/in/nuthanan-tharmarajah/" target="_blank">
                    <img src="./images/linkedin.png"class="w-[30px] h-[30px]">
                </a>
                <a href="https://github.com/nuthanan06" target="_blank">
                    <img src="./images/github-white-icon.png"class="w-[30px] h-[30px]">
                </a>
            </div>
`

let projectsContainer = document.getElementById("projects");
projectsContainer.innerHTML = string; 
