const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".g-navbar");
burger.addEventListener("click", () => {
    if (burgerMenu.style.display !== "flex") {
        burgerMenu.style.display = "flex";
        burger.lastChild.style.display = "block";
        burger.firstChild.style.display = "none";

    } else {
        burgerMenu.style.display = "none";
        burger.lastChild.style.display = "none";
        burger.firstChild.style.display = "block";
    }
}
);
