let active = 3;

const mndots = document.querySelectorAll(".mndot");
const stripe = document.querySelectorAll(".second");

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
}


// Initial state
gsap.to(mndots[active-1], {
    opacity: .5,
});

gsap.to(stripe[active-1], {
    opacity: 1,
});


gsap.to('#circle', {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2
})