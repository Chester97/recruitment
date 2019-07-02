const navElements = [...document.querySelectorAll('.nav-header--item')];
const hamburgerMenu = document.querySelector("#hamburger-menu");
const rwdMenu = document.querySelector("#rwd-menu");
const mainContainer = document.querySelector('.app-container');
const logo = document.querySelector('.header-top--logo');

navElements.forEach(element => {
    element.addEventListener('click', addActive);
});

function addActive(e) {
    const current = document.querySelector('.active');
    current.className = current.className.replace("active", "");
    e.target.className += " active";
}

hamburgerMenu.addEventListener('click', function() {
    rwdMenu.classList.toggle("show");
    mainContainer.classList.toggle('dim');
});

logo.addEventListener('click', function() {
    rwdMenu.classList.remove("show");
    mainContainer.classList.remove('dim');
})

