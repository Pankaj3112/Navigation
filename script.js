let active = 3;

const mndots = document.querySelectorAll(".mndot");
const stripe = document.querySelectorAll(".second");
const links = document.querySelectorAll(".second a");
const images = document.querySelectorAll("#image-container img");

mndots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        
        dim();
        
        gsap.to('#circle', {
            rotate: (3-(index+1)) *10,
            ease: Expo.easeInOut,
            duration: 1.3
        })
        

        gsap.to(mndots[index], {
            opacity: .5,
        });

        gsap.to(stripe[index], {
            opacity: 1,
        });
        
        
        gsap.to(links[index], {
            pointerEvents: "visible",
        });
        
        gsap.to(images[index], {
            opacity: 1,
            duration: .5
        });

    });
});


function dim() {
    gsap.to(mndots, {
        opacity: .1,
        duration: .5
    });

    gsap.to(stripe, {
        opacity: .2,
        duration: .5
    });

    gsap.to(links, {
        pointerEvents: "none",
    });

    gsap.to(images, {
        opacity: 0,
        duration: 0
    });
}


// Initial state
gsap.to(mndots[active-1], {
    opacity: .5,
});

gsap.to(stripe[active-1], {
    opacity: 1,
});

gsap.to(links[active-1], {
    pointerEvents: "visible",
})

gsap.to(images[active-1], {
    opacity: 1,
});


gsap.to('#circle', {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2
})