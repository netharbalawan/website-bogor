// SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3000);

// FADE SCROLL
let faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if(position < screen - 100){
            el.classList.add("show");
        }
    });
});
