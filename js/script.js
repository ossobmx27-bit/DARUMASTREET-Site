// ========================================
// DARUMA STREET
// Ver.0.1
// ========================================

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");
    const bar = document.querySelector(".loading-bar span");

    // ローディングバー
    bar.style.transition = "width 2s ease";
    bar.style.width = "100%";

    // 2.2秒後にローディングを消す
    setTimeout(() => {

        loading.style.transition = "opacity .8s ease";
        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

        }, 800);

    }, 2200);

});


// ========================================
// HERO SLIDER
// ========================================

const slides = document.querySelectorAll(".slide");
const numbers = document.querySelectorAll(".hero-counter span");

let current = 0;

function changeSlide() {

    slides[current].classList.remove("active");
    numbers[current].classList.remove("current");

    current++;

    if (current >= slides.length) {

        current = 0;

    }

    slides[current].classList.add("active");
    numbers[current].classList.add("current");

}

setInterval(changeSlide, 5000);
