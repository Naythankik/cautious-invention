const hamburgerMenu = document.querySelector('.hamburger');
const closeHamburger = document.querySelector('.unhamburger')
const navMenu = document.querySelector('nav#header')
const options = document.querySelector('ul#header')



hamburgerMenu.addEventListener('click', (e) => {
    e.preventDefault();

    if(navMenu.classList.contains('header')){
        options.classList.remove('header');
        navMenu.classList.remove('header');

        navMenu.classList.add('active-nav-hamburger');
        options.classList.add('active-hamburger-ul')
    }else{
        navMenu.classList.remove('active-nav-hamburger');
        options.classList.remove('active-hamburger-ul');

        options.classList.add('header');
        navMenu.classList.add('header');
    }


})

window.addEventListener('resize', (e) => {

    if(window.innerWidth > 600){
        if(navMenu.classList.contains('active-nav-hamburger')){
            navMenu.classList.remove('active-nav-hamburger');
            options.classList.remove('active-hamburger-ul');

            options.classList.add('header');
            navMenu.classList.add('header');
        }
    }

}, true);
