document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("products-container");

    products.forEach(category => {

        const section = document.createElement("div");
        section.className = "product-category";

        section.innerHTML = `
            <button class="product-category-header">
                <span>${category.category}</span>
                <span class="accordion-icon">+</span>
            </button>

            <div class="product-category-content">
                <div class="product-grid"></div>
            </div>
        `;

        const grid = section.querySelector(".product-grid");

        category.items.forEach(item => {

            const card = document.createElement("div");
            card.className = "product-card";

card.innerHTML = `
<a class="product-link" href="${item.details}">

    <img src="${item.image}" alt="${item.name}">

    <h3>${item.name}</h3>

    <p class="product-price">${item.price}</p>

</a>
`;

            grid.appendChild(card);

        });

        container.appendChild(section);

    });

    /* Accordion */

    const headers = document.querySelectorAll(".product-category-header");

    headers.forEach(header => {

        header.addEventListener("click", () => {

            const current = header.parentElement;

            document.querySelectorAll(".product-category").forEach(item => {

                if(item !== current){

                    item.classList.remove("active");

                    item.querySelector(".accordion-icon").textContent = "+";

                }

            });

            current.classList.toggle("active");

            current.querySelector(".accordion-icon").textContent =
                current.classList.contains("active") ? "−" : "+";

        });

    });

});