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

    const videoHtml = videos
        .slice(0, 2)
        .map(url => {

            // YouTube
            if (url.includes("youtube.com") || url.includes("youtu.be")) {

                const videoId = url.includes("youtu.be/")
                    ? url.split("youtu.be/")[1].split("?")[0]
                    : new URL(url).searchParams.get("v");

                return `
                    <div class="video-wrap">
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

        

            // Instagram（後で埋め込み対応）
            return "";

        })
        .join("");

    // 表示する動画が1本も無ければセクション自体を表示しない
    if (!videoHtml.trim()) return "";

    return `
        <section class="article-videos">

            <h2>VIDEOS</h2>

            ${videoHtml}

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



            </div>

        </div>

    `;

});