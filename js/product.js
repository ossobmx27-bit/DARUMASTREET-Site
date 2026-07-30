document.addEventListener("DOMContentLoaded", () => {

    // URLからidを取得
    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    document.getElementById("product-content").innerHTML = `

        <h1>PRODUCT PAGE</h1>

        <p>ID : ${id}</p>

    `;

});