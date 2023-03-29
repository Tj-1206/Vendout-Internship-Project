burgir = document.querySelector('.burgir');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.navList');
rightNav = document.querySelector('.rightNav');

burgir.addEventListener('click', () => {
    navList.classList.toggle('visibility-class-resp');
    rightNav.classList.toggle('visibility-class-resp');
    navbar.classList.toggle('height-nav-resp');
});

submit.addEventListener('click', () => {
    form.innerHTML = "<div>Check your inbox!</div>"
})