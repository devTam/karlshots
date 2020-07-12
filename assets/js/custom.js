//  Implementing a pre loader
const loader = document.querySelector('.preloader');

window.addEventListener('load', () => loader.classList.add('hidden')); 

// Implementing dynamic Hamburger Menu
const navContainer = document.querySelector('.nav-toggle');
const navIcon1 = document.querySelector('.nav-toggle-icon:nth-child(1)')
const navIcon2 = document.querySelector('.nav-toggle-icon:nth-child(2)');
const navIcon3 = document.querySelector('.nav-toggle-icon:nth-child(3)');


const toggleNav = () => {
    if(navIcon1.classList.contains('one')) {
        navIcon1.classList.remove('one');
    }else {
        navIcon1.classList.add('one');
    }
    if(navIcon2.classList.contains('two')) {
        navIcon2.classList.remove('two');
    }else {
        navIcon2.classList.add('two');
    }
    if(navIcon3.classList.contains('three')) {
        navIcon3.classList.remove('three');
    }else {
        navIcon3.classList.add('three');
    }
    if(navContainer.classList.contains('nav-con')) {
        navContainer.classList.remove('nav-con')
    } else {
        navContainer.classList.add('nav-con');
    }
}
navContainer.addEventListener('click', toggleNav);