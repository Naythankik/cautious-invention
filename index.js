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


// Logic for image carousel

const spanButton = document.querySelector('.span-buttons')
const serviceImage = document.querySelectorAll('.service-image');

for (const button of spanButton.children) {
    button.addEventListener('click', (e) => {
        Array.from(spanButton.children).filter((btn) => btn.classList.contains('active-span') ? btn.classList.remove('active-span') : '');
        
        const index = e.currentTarget;
        index.classList.add('active-span');

        for (let ind = 0; ind < serviceImage.length; ind++) {
            if(ind == (index.id -1)){
                if(serviceImage[ind].classList.contains('hidden')){
                    serviceImage[ind].classList.remove('hidden')
                    serviceImage[ind].classList.add('active')
                }else{
                    serviceImage[ind].classList.add('active')
                }
            }else{
                if(serviceImage[ind].classList.contains('active')){
                    serviceImage[ind].classList.remove('active')
                    serviceImage[ind].classList.add('hidden')
                }else{
                     serviceImage[ind].classList.add('hidden')
                }
            }
        }
    })
}
