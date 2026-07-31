document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    const detail = articleDetails[id];

    if (!detail) {

        document.getElementById("article-content").innerHTML = `

            <h1>Article Not Found</h1>

        `;

        return;

    }

    document.getElementById("article-content").innerHTML = `

        <div class="article-page">

            <a href="news.html" class="back-link">

                ← BACK TO NEWS

            </a>

            <div class="article-header">

               <div class="article-meta">

    <p class="article-date">

        ${detail.date}

    </p>

    <p class="article-category">

        ${detail.category}

    </p>

</div>

                <h1>

                    ${detail.title}

                </h1>

            </div>

            <div class="article-hero">

                <img
                    src="${detail.hero}"
                    alt="${detail.title}"
                >

            </div>

            <div class="article-body">

                <div class="article-en">

                    ${detail.content.en
                        .split("\n\n")
                        .map(text => `<p>${text}</p>`)
                        .join("")}

                </div>

                <div class="article-ja">

                    ${detail.content.ja
                        .split("\n\n")
                        .map(text => `<p>${text}</p>`)
                        .join("")}

                </div>

            </div>

        </div>

    `;

});