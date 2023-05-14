const navigation = document.getElementById("navigation");
const toggle = document.getElementById("toggle");

function menuFunction() {
    navigation.classList.toggle("open")
    toggle.classList.toggle("ri-menu-unfold-line")
}

toggle.addEventListener('click', menuFunction);