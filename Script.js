// Hamburger Menu
const bar_icon = document.getElementById('bar-icon');
const close_button = document.getElementById('close-button')
const navbar = document.getElementById('navbar');

if (bar_icon) {
    bar_icon.addEventListener('click', () => {
        navbar.classList.add('active')
    })
}

if (close_button) {
    close_button.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
}