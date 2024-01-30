const hamburgerMenu = document.querySelector('.hamburger');
const closeHamburger = document.querySelector('.unhamburger')
const unhamburger = document.querySelector('button.close-hamburger')


hamburgerMenu.addEventListener('click', (e) => {
    e.preventDefault();

    const navMenu = document.querySelector('nav.header')
    const options = document.querySelector('ul.header')

    options.classList.remove('header')
    navMenu.classList.remove('header')

    navMenu.classList.add('active-nav-hamburger');
    options.classList.add('active-hamburger-ul')
    hamburgerMenu.style.display = 'none';
    closeHamburger.classList.remove('unhamburger');
    closeHamburger.classList.add('close-hamburger');
})
