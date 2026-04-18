document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");

    if (slides.length === 0) return;

    let index = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[i].classList.add("active");
    }

    showSlide(index);

    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 3000);

});
