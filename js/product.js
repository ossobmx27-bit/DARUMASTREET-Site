document.addEventListener("DOMContentLoaded", () => {

    // URLからid取得
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    let product = null;
    let detail = null;

    // 全カテゴリーから検索
    products.forEach(category => {

        const found = category.items.find(item => item.id === id);

        if (found) {

            product = found;
            detail = productDetails[id];

        }

    });

    // 商品が見つからない
    if (!product) {

        document.getElementById("product-content").innerHTML = `
            <h1>Product Not Found</h1>
        `;

        return;
    }

    // 商品表示
    document.getElementById("product-content").innerHTML = `

        <div class="product-detail">

            <div class="product-image">

                <img src="${product.image}" alt="${product.name}">

            </div>

        <div class="product-info">

    <h1>${product.name}</h1>

    <p class="product-price">${product.price}</p>

    <div class="product-section">

        <h2>COLOR</h2>

        <div class="product-colors">

            ${detail.colors.map(color => `<span>${color}</span>`).join("")}

        </div>

    </div>

    <div class="product-section">

        <h2>SIZE</h2>

        <div class="product-sizes">

            ${detail.sizes.map(size => `<span>${size}</span>`).join("")}

        </div>

    </div>

    <div class="product-section">

    <h2>DESCRIPTION</h2>

    <div class="product-description">

        <p>${detail.description.en}</p>

        <br>

        <p>${detail.description.ja}</p>

    </div>

</div>

<div class="product-section">

    <h2>WHERE TO BUY</h2>

    <div class="product-buy">

        <a href="https://store.motobunka.com/collections/daruma-street"
           target="_blank"
           rel="noopener noreferrer">

            BUY AT MOTO-BUNKA STORE →

        </a>

        <a href="dealers.html">

            FIND A DEALER →

        </a>

    </div>

</div>

</div>

    `;

});