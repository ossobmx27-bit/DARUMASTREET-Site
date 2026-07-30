document.addEventListener("DOMContentLoaded", () => {

    // URLからid取得
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    let product = null;

    // 全カテゴリーから検索
    products.forEach(category => {

        const found = category.items.find(item => item.id === id);

        if (found) {
            product = found;
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

    </div>

</div>

`;