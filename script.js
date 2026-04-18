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
// LOADING
window.onload = () => {
    document.getElementById("loader").style.display = "none";
}

// SLIDER
let slides = document.querySelectorAll(".slides img");
let i = 0;

setInterval(() => {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
}, 3000);

// DARK MODE
function toggleDark(){
    document.body.classList.toggle("dark");
}

// SEARCH
let search = document.getElementById("search");
let cards = document.querySelectorAll(".card");

search.addEventListener("keyup", () => {
    let value = search.value.toLowerCase();

    cards.forEach(card => {
        let name = card.dataset.name;
        card.style.display = name.includes(value) ? "block" : "none";
    });
});

// AOS INIT
AOS.init();
