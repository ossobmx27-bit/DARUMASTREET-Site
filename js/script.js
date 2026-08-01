// DARUMA STREET Ver 0.3

window.addEventListener("load", () => {

  // ==========================
  // Loading
  // ==========================

  const loading = document.getElementById("loading");

  if (loading) {
    setTimeout(() => {
      loading.style.opacity = "0";
      loading.style.transition = "opacity .6s ease";

      setTimeout(() => {
        loading.style.display = "none";
      }, 600);

    }, 2000);
  }

  // ==========================
  // Hero Slider
  // ==========================

  const slides = document.querySelectorAll(".slide");
  const numbers = document.querySelectorAll(".hero-counter span");

  let current = 0;

  function changeSlide(index) {

    slides.forEach(slide => {
      slide.classList.remove("active");
    });

    numbers.forEach(number => {
      number.style.opacity = "0.4";
    });

    if (slides[index]) {
      slides[index].classList.add("active");
    }

    if (numbers[index]) {
      numbers[index].style.opacity = "1";
    }

  }

  if (slides.length > 0) {

    changeSlide(0);

    setInterval(() => {

      current++;

      if (current >= slides.length) {
        current = 0;
      }

      changeSlide(current);

    }, 5000);

  }

  // ==========================
  // Menu
  // ==========================

  const menu = document.getElementById("menu");
  const menuButton = document.getElementById("menuButton");
  const closeButton = document.getElementById("closeMenu");

  if (menuButton) {

    menuButton.addEventListener("click", () => {

      menu.style.right = "0";

    });

  }

  if (closeButton) {

    closeButton.addEventListener("click", () => {

      menu.style.right = "-100%";

    });

  }

  // ==========================
  // Search
  // ==========================

  const searchButton = document.getElementById("searchButton");
  const searchOverlay = document.getElementById("searchOverlay");

  if (searchButton) {

    searchButton.addEventListener("click", () => {

      if (searchOverlay.style.display === "block") {

        searchOverlay.style.display = "none";

      } else {

        searchOverlay.style.display = "block";

      }

    });

  }

  /* ==========================
   HOME NEWS
========================== */

const homeNewsList = document.getElementById("home-news-list");

if (homeNewsList && typeof news !== "undefined") {

    news.slice(0, 3).forEach(item => {

        const card = document.createElement("a");

        card.className = "home-news-card";

        card.href = `article.html?id=${item.id}`;

        card.innerHTML = `
            <div class="home-news-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>

            <div class="home-news-category">
                ${item.category}
            </div>

            <div class="home-news-date">
                ${item.date}
            </div>

            <h3 class="home-news-title">
                ${item.title}
            </h3>
        `;

        homeNewsList.appendChild(card);

    });

}

});