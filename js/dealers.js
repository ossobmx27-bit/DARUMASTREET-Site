document.addEventListener("DOMContentLoaded", () => {

    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {

        header.addEventListener("click", () => {

            const item = header.parentElement;
            const icon = header.querySelector(".accordion-icon");

            item.classList.toggle("active");

            if (item.classList.contains("active")) {
                icon.textContent = "−";
            } else {
                icon.textContent = "+";
            }

        });

    });

});