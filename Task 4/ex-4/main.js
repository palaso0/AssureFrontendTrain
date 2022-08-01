function show(element) {
    if (element.classList.contains("show")) {
        setTimeout(() => {
            element.classList.remove("show");
            element.classList.add("hidden");
        }, 500);
    } else {
        element.classList.remove("hidden");
        element.classList.add("show");
    }
}

function animateMenu(element) {
    if (element.classList.contains("show-menu")) {
        element.classList.remove("show-menu");
        element.classList.add("hide-menu");
    } else {
        element.classList.remove("hide-menu");
        element.classList.add("show-menu");
    }
}

document.querySelector(".burger").addEventListener("click", (e) => {
    let menuContainer = document.querySelector("#menu-wrapper").parentElement;
    animateMenu(menuContainer)
    show(menuContainer);
})

document.querySelector(".show-child-menu").addEventListener("click", (e) => {
    let childMenu = e.target.nextElementSibling;
    show(childMenu);
    animateMenu(childMenu);
})