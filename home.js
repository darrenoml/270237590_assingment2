document.addEventListener("DOMContentLoaded", function () {
    const ratings = document.querySelectorAll(".rating");

    ratings.forEach((rating) => {
        const stars = "★★★★★".split("").map((star, index) => {
            const span = document.createElement("span");
            span.innerHTML = star;
            span.dataset.value = index + 1;
            span.addEventListener("click", (e) => {
                const value = parseInt(e.target.dataset.value);
                highlightStars(rating, value);
            });
            return span;
        });

        rating.innerHTML = "";
        stars.forEach((star) => rating.appendChild(star));
    });

    function highlightStars(container, value) {
        container.childNodes.forEach((star, index) => {
            if (index < value) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        });
    }

    // Responsive Navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});
