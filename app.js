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

gsap.from(".aboutMeParagraph", {
    scrollTrigger: {
        trigger: ".aboutMeParagraph",
        start: "top 80%", // start when top of element hits 80% of viewport
    },
    duration: 1.2,
    opacity: 0,
    x: -50,
    ease: "power2.out"
});

gsap.from(".skillBox", {
    scrollTrigger: {
        trigger: ".skillBox",
        start: "top 80%",
    },
    duration: 1,
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)"
});

gsap.from("nav ul li", {
    duration: 1,
    opacity: 0,
    y: -20,
    stagger: 0.15,
    delay: 0.5,
    ease: "power3.out"
});




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
    teabag: {
        title: "Teabag",
        languages: "Next.js, Typescript, TailwindCSS, Python, Flask, Firebase, Langchain", 
        description: "Created an accessible Next.js web app with TypeScript and TailwindCSS, enabling users to input and receive summarized stories via speech or text through Cohere API and Flask, improving inclusivity for diverse user needs. Used Firebase Firestore for data storage, allowing users to retrieve and extend previous conversations.",
        githubLink: "https://github.com/JenniferYu-8/teabag/tree/main", 
        source: "./images/teabag.png"
    },
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
    }, 
    teabag: {
        title: "Teabag",
        year: "2024",
        hackathon: "DeltaHacks X (Winner)",
        languages: "Next.js, Typescript, TailwindCSS, Python, Flask, Firebase, Langchain", 
        description: "Created an accessible Next.js web app with TypeScript and TailwindCSS, enabling users to input and receive summarized stories via speech or text through Cohere API and Flask, improving inclusivity for diverse user needs. Used Firebase Firestore for data storage, allowing users to retrieve and extend previous conversations.",
        githubLink: "https://github.com/JenniferYu-8/teabag/tree/main", 
        source: "./images/teabag.png"
    },
    skinCancerDetection: {
        title: "AI Skin Cancer Detection",
        year: "2023",
        hackathon: "",
        languages: "PyTorch",
        description: "Programmed a convolutional neural network (CNN) model with the Skin Cancer MNIST: HAM10000 dataset using PyTorch to effectively identify different skin lesion types. Fine-tuned ResNet50 and DenseNet121 models, integrating the custom CNN, and subsequently comparing the performance results between the two models. Achieved a 74% accuracy using the ResNet50 model.",
        githubLink: "https://github.com/nuthanan06/AISkinCancerDetection/tree/main",
        source: "./images/skincancerdetection.png"
    },
    communityCreator: {
        title: "Community Creator",
        year: "2023",
        hackathon: "Hack the 6ix",
        languages: "React, CSS, Cohere API",
        description: "Developed an interactive platform that provides users with AI-powered feedback to improve their community's sustainable practices. Users answer multiple choice questions and receive actionable suggestions to help create a more sustainable environment.",
        githubLink: "https://github.com/nuthanan06/Community-Creator",
        source: "./images/communitycreatorlaptop.png"
    },
    personalPortfolio: {
        title: "Personal Portfolio",
        year: "2024",
        hackathon: "",
        languages: "HTML, Tailwind.css, Javascript, GSAP, Anime.js",
        description: "Developed a platform to highlight my interests and showcase projects from the past four years. Applied UI/UX principles to design a functional and engaging website incorporating animations and cursor-related effects to elevate user experience.",
        githubLink: "https://github.com/nuthanan06/PersonalPortfolio", 
        source: "./images/personalportfolio.png"
    }, 
    mathLossFunction: {
        title: "Mathematical Analysis of Loss Functions", 
        year: "2022",
        hackathon: "",
        languages: "PyTorch", 
        description: "Conducted research on the mathematical impact of loss functions on the accuracy and efficiency in neural network regression tasks. Concluded that while more complex loss functions improve accuracy, efficiency is reduced.",
        githubLink: "https://github.com/nuthanan06/ResearchPapers/blob/main/Mathematical%20Analysis%20of%20Neural%20Networks.pdf",
        source: "./images/neuralnetwork.png"
    }, 
    modelling: {
        title: "Mathematical Analysis of Sustainable Architecture", 
        year: "2022",
        hackathon: "",
        languages: "Blender", 
        description: "Designed and modeled a sustainable community using Blender, and analyzed the role that mathematical principles play in architecture and sustainable development.",
        githubLink: "https://github.com/nuthanan06/ResearchPapers/blob/main/Mathematical%20Analysis%20of%20Sustainable%20Architecture.pdf",
        source: "./images/mathematicalmodelling.png"
    }, 
};


// --- Year Filter UI ---
const allYears = Array.from(new Set(Object.values(projects).map(p => p.year))).sort((a, b) => b - a);
let selectedYear = 'All';

function renderProjects(year = 'All') {
    let string = `<h2 class="relative text-shadow font-santoshi text-primary-purple text-[80px] ml-[30px] md:w-[50%] md:mb-8 font-extrabold md:mini:left-[0px] mini:m-auto mini:text-center"> Projects 
                <div class="relative md:line"> 
                    <div class="dotStuff"> 
                        <div class="md:dot"> </div>
                        <div class="md:dot"> </div>
                        <div class="md:dot"> </div>
                    </div>
                </div>
            </h2>`;
    // Filter buttons
    string += `<div class='flex flex-wrap gap-3 justify-center items-center mb-8'>
        <button class="px-4 py-1 rounded-full border font-santoshi text-lg transition-all duration-150 ${year==='All' ? 'bg-primary-purple text-white border-primary-purple' : 'bg-black text-primary-purple border-primary-purple hover:bg-primary-purple hover:text-white'}" onclick="window.filterProjectsByYear && window.filterProjectsByYear('All')">All</button>`;
    for (const y of allYears) {
        string += `<button class="px-4 py-1 rounded-full border font-santoshi text-lg transition-all duration-150 ${year===y ? 'bg-primary-purple text-white border-primary-purple' : 'bg-black text-primary-purple border-primary-purple hover:bg-primary-purple hover:text-white'}" onclick=\"window.filterProjectsByYear && window.filterProjectsByYear('${y}')\">${y}</button>`;
    }
    string += `</div>`;
    string += `<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-2 sm:px-6 xl:px-12 mt-8 w-full max-w-[1400px] mx-auto">`;
    for (let element of Object.values(projects)) {
        if (year !== 'All' && element.year !== year) continue;
        string += `<div class="projectButton rounded-2xl bg-[#1C1C1E] border-primary-purple border-2 skillBox overflow-hidden flex flex-col hover:border-opacity-100 transition-all duration-300"> 
                        <div class="p-6 flex flex-col flex-1">
                            <h3 class="font-santoshi text-primary-purple text-[25px] w-[80%] font-bold mb-0">${element.title}</h3>
                            <div class="text-[15px] text-gray-300 font-santoshi italic mb-2 mt-0">
                                ${element.year}${element.hackathon ? ` &mdash; <span class='text-primary-purple'>${element.hackathon}</span>` : ''}
                            </div>
                            <hr class="border-t border-gray-700 mb-3">
                            <div class="flex flex-wrap gap-2 mb-3 justify-start">
                                ${element.languages.split(',').map(lang => `<span class='inline-block border-[1px] border-primary-purple rounded-[10px] text-gray-300 bg-black/30 px-2 py-0.5 text-[12px] font-semibold font-santoshi bg-transparent'>${lang.trim()}</span>`).join('')}
                            </div>
                            <p class="text-white text-[20px] font-santoshi mb-4 line-clamp-4">
                                ${element.description}
                            </p>
                            <a href="${element.githubLink}" target="_blank" aria-label="GitHub Repository" class="absolute top-4 right-4 opacity-50 hover:opacity-100 transition-opacity duration-200">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.282 3.438 9.747 8.205 11.325.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.019.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 22.04 24 17.576 24 12.297c0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                        <img src="${element.source}" alt="${element.title} screenshot" class="w-full max-h-[250px] object-contain mt-auto border-t border-primary-purple bg-black" style="aspect-ratio: 1/1;"/>
                    </div>`;
    }
    string += `</div>`;
    string += `<div class="flex flex-row w-full justify-center items-center gap-3 mt-16 pb-8 px-12"> 
                    <p class="text-gray-200 text-[15px] font-santoshi text-center"> @2024 Nuthanan Tharmarajah | </p>              
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
    `;
    let projectsContainer = document.getElementById("projects");
    projectsContainer.innerHTML = string; 
}

// Expose filter function globally for inline onclick
window.filterProjectsByYear = function(year) {
    renderProjects(year);
}

// Initial render
renderProjects();

for (let element of Object.values(projects)) {
    console.log(element)
    string += `<div class="projectButton rounded-2xl bg-[#1C1C1E] border-primary-purple border-2 skillBox overflow-hidden flex flex-col hover:border-opacity-100 transition-all duration-300"> 
                    <div class="p-6 flex flex-col flex-1">
                        <h3 class="font-santoshi text-primary-purple text-[25px] w-[80%] font-bold mb-0">${element.title}</h3>
                        <div class="text-[15px] text-gray-300 font-santoshi italic mb-2 mt-0">
                            ${element.year}${element.hackathon ? ` &mdash; <span class='text-primary-purple'>${element.hackathon}</span>` : ''}
                        </div>
                        <hr class="border-t border-gray-700 mb-3">
                        <div class="flex flex-wrap gap-2 mb-3 justify-start">
                            ${element.languages.split(',').map(lang => `<span class='inline-block border-[1px] border-primary-purple rounded-[10px] text-gray-300 bg-black/30 px-2 py-0.5 text-[12px] font-semibold font-santoshi bg-transparent'>${lang.trim()}</span>`).join('')}
                        </div>
                        <p class="text-white text-[20px] font-santoshi mb-4 line-clamp-4">
                            ${element.description}
                        </p>
                        <a href="${element.githubLink}" target="_blank" aria-label="GitHub Repository" class="absolute top-4 right-4 opacity-50 hover:opacity-100 transition-opacity duration-200">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.282 3.438 9.747 8.205 11.325.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.019.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 22.04 24 17.576 24 12.297c0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                    <img src="${element.source}" alt="${element.title} screenshot" class="w-full max-h-[250px] object-contain mt-auto border-t border-primary-purple bg-black" style="aspect-ratio: 1/1;"/>
                </div>`;
}

string += `</div>`;

string += `<div class="flex flex-row w-full justify-center items-center gap-3 mt-16 pb-8 px-12"> 
                <p class="text-gray-200 text-[15px] font-santoshi text-center"> @2024 Nuthanan Tharmarajah | </p>              
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

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".projectButton").forEach((btn, i) => {
  gsap.from(btn, {
    scrollTrigger: {
      trigger: btn,
      start: "top 80%",
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.1
  });
});



const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  gsap.from(circle.querySelectorAll("p"), {
    scrollTrigger: {
      trigger: circle,
      start: "top 80%", // start when circle enters viewport
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2, // paragraphs animate one after another
    duration: 0.6,
    ease: "power3.out"
  });
});
