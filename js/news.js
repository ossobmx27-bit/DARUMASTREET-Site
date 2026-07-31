document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("news-container");

    const list = document.createElement("div");

    list.className = "news-list";

    news.forEach(item => {

        const card = document.createElement("a");

        card.href = item.article;

        card.className = "news-card";

        card.innerHTML = `

            <div class="news-image">

                <img src="${item.image}" alt="${item.title}" loading="lazy">

            </div>

            <div class="news-category">

                ${item.category}

            </div>

            <div class="news-date">

                ${item.date}

            </div>

            <h2 class="news-title">

                ${item.title}

            </h2>

        `;

        list.appendChild(card);

    });

    container.appendChild(list);

});