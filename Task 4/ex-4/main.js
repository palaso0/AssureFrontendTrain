function show(element) {
    if (element.classList.contains("show")) {
        element.classList.remove("show");
        element.classList.add("hidden");
    } else {
        element.classList.remove("hidden");
        element.classList.add("show");
    }
}

document.querySelector(".burger").addEventListener("click", () => {
    let menuContainer = document.querySelector("#menu-wrapper").parentElement;
    show(menuContainer);
})

document.querySelector(".show-child-menu").addEventListener("click", (e) => {
    let childMenu = e.target.nextElementSibling;
    show(childMenu);
})