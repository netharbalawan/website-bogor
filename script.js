// Pastikan script jalan setelah halaman load
document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");

    // Kalau tidak ada slide, hentikan biar tidak error
    if (slides.length === 0) return;

    let index = 0;

    function showSlide(i) {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slides[i].classList.add("active");
    }

    // Jalankan pertama
    showSlide(index);

    // Auto slider tiap 3 detik
    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 3000);

});
