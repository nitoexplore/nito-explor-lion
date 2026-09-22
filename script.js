const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

document.querySelectorAll(".policy-list details").forEach(item => {
    item.addEventListener("toggle", () => {
        const icon = item.querySelector("summary span");
        if (icon) icon.textContent = item.open ? "−" : "+";
    });
});

document.getElementById("year").textContent = new Date().getFullYear();
