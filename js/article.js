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

    function renderVideos(videos) {

    if (!videos || videos.length === 0) return "";

    return `
        <section class="article-videos">

            <h2>VIDEOS</h2>

            ${videos.slice(0,2).map(url => {

                if (url.includes("youtube.com") || url.includes("youtu.be")) {

                    const id = url.includes("youtu.be/")
                        ? url.split("youtu.be/")[1].split("?")[0]
                        : new URL(url).searchParams.get("v");

                    return `
                        <div class="video-wrap">
                            <iframe
                                src="https://www.youtube.com/embed/${id}"
                                frameborder="0"
                                allowfullscreen>
                            </iframe>
                        </div>
                    `;

                }

                return `
                    <div class="video-link">
                        <a href="${url}" target="_blank" rel="noopener">
                            View on Instagram
                        </a>
                    </div>
                `;

            }).join("")}

        </section>
    `;

}

function renderLinks(links) {

    if (!links || links.length === 0) return "";

    return `
        <section class="article-links">

            <h2>RELATED LINKS</h2>

            <div class="article-link-list">

                ${links.slice(0,2).map(link => `

                    <a
                        href="${link.url}"
                        target="_blank"
                        rel="noopener"
                        class="article-link-button">

                        ${link.label}

                    </a>

                `).join("")}

            </div>

        </section>
    `;

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

                ${renderVideos(detail.videos)}

                ${renderLinks(detail.links)}


            </div>

        </div>

    `;

});