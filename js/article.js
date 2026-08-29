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

    function formatArticleText(text) {

    return text
        .replace(
            /\[\[([^\]|]+)\|([^\]]+)\]\]/g,
            '<a href="$2" target="_blank" rel="noopener">$1</a>'
        )
        .replace(/\n/g, "<br>");

}

function renderVideos(videos) {

    if (!videos || videos.length === 0) return "";

    const videoHtml = videos
        .slice(0, 2)
        .map(url => {

            // YouTube
            if (url.includes("youtube.com") || url.includes("youtu.be")) {

                const videoId =
                    url.includes("youtu.be/")
                        ? url.split("youtu.be/")[1].split("?")[0]
                        : url.includes("/shorts/")
                            ? url.split("/shorts/")[1].split("?")[0]
                            : url.includes("/embed/")
                                ? url.split("/embed/")[1].split("?")[0]
                                : new URL(url).searchParams.get("v");

                const isShort = url.includes("/shorts/");

                return `
                    <div class="video-wrap ${isShort ? "video-vertical" : ""}">
                        <iframe
                            src="https://www.youtube.com/embed/${videoId}"
                            title="YouTube video"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                `;
            }

            // Instagram Reels / Posts
            if (url.includes("instagram.com")) {

                return `
                    <div class="video-wrap video-instagram">
                        <blockquote
                            class="instagram-media"
                            data-instgrm-permalink="${url}"
                            data-instgrm-version="14">
                        </blockquote>
                    </div>
                `;
            }

            return "";

        })
        .join("");

    if (!videoHtml.trim()) return "";

    return `
        <section class="article-videos">
            <h2>VIDEOS</h2>
            ${videoHtml}
        </section>
    `;
}
function renderGallery(gallery) {

    if (!gallery || gallery.length === 0) return "";

    const mainImage = gallery[0];

    const thumbnails = gallery
        .map((image, index) => `
            <button
                type="button"
                class="gallery-thumb ${index === 0 ? "active" : ""}"
                onclick="changeGalleryImage('${image}', this)">
                <img
                    src="${image}"
                    alt="Gallery image ${index + 1}">
            </button>
        `)
        .join("");

    return `
        <section class="article-gallery">

            <h2>PHOTOS</h2>

            <div class="gallery-main">
                <img
                    id="article-gallery-main"
                    src="${mainImage}"
                    alt="Gallery image">
            </div>

            <div class="gallery-thumbnails">
                ${thumbnails}
            </div>

        </section>
    `;
}
            function renderLinks(links) {

    if (!links || links.length === 0) return "";

    return `
        <section class="article-links">

            <h2>RELATED LINKS</h2>

            <div class="article-link-list">

                ${links.slice(0, 3).map(link => `
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
    .map(text => `<p>${formatArticleText(text)}</p>`)
    .join("")}

                </div>

                <div class="article-ja">

　　　　　　　　　　　${detail.content.ja
    .split("\n\n")
    .map(text => `<p>${formatArticleText(text)}</p>`)
    .join("")}

                </div>

${renderGallery(detail.gallery)}
${renderVideos(detail.videos)}
${renderLinks(detail.links)}

                


            </div>

        </div>
    `;

    if (detail.videos && detail.videos.some(url => url.includes("instagram.com"))) {

        const instagramScript = document.createElement("script");

        instagramScript.async = true;

        instagramScript.src = "https://www.instagram.com/embed.js";

        instagramScript.onload = () => {

            if (window.instgrm) {

                window.instgrm.Embeds.process();

            }

        };

        document.body.appendChild(instagramScript);

    }

});

function changeGalleryImage(image, button) {

    const mainImage = document.getElementById("article-gallery-main");

    if (!mainImage) return;

    mainImage.src = image;

    document
        .querySelectorAll(".gallery-thumb")
        .forEach(thumb => {

            thumb.classList.remove("active");

        });

    button.classList.add("active");

}