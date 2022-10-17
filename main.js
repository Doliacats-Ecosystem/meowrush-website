// ROADMAP SHOW and HIDE

let roadmapAnimItems = document.querySelectorAll(".roadmap_list_item");

const onEntry = (entry) => {

    entry.forEach(change => {

        if (change.isIntersecting) {

            change.target.classList.add('show')

        } else {
            change.target.classList.remove('show')

        }
    });
}

const options = {
    threshhold: [0.5]
}

const observer = new IntersectionObserver(onEntry, options);

for (let el of roadmapAnimItems) {
    observer.observe(el)
}


// NAVIGATION MOBILE

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}


//HIDING mobile MENU while scrolling

const wholeNavigation = document.querySelector('.menu')
const wholeNavigationBg = document.querySelector('.menu-bg')
const homeArrow = document.querySelector('.home-arrow-container')

const navDesctop = document.querySelector('.navigation')
const navItems = document.querySelectorAll('.nav-link')

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {

    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {

        wholeNavigation.style.top = "0";
        wholeNavigationBg.style.top = "0";
        homeArrow.style.top = "20px";
        // navDesctop.style.top = '20px';
        // navDesctop.style.rotate = '0deg';
        for (let el of navItems) {
            el.style.marginBottom = '0px'
        }

        if (currentScrollPos < 600) {
            homeArrow.style.top = "-300px"
        }

    } else {

        if (currentScrollPos > 600) {
            wholeNavigation.style.top = "-500px";
            wholeNavigationBg.style.top = "-500px";
            homeArrow.style.top = "-500px";
            // navDesctop.style.top = '-1000px';
            // navDesctop.style.rotate = '90deg';
            for (let el of navItems) {
                el.style.marginBottom = '500px'
            }
        }
    }

    prevScrollpos = currentScrollPos;
}


// MEOWVERSE Animation
const hiddenElements = document.querySelectorAll(".hidden");

const observerMeowverse = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
});

hiddenElements.forEach((element) => {
    observerMeowverse.observe(element);
});


// LAUNCHER Animation
const gamePictures = document.querySelectorAll(".card-pic-pic");

const observerLauncher = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("big-game");
        } else {
            entry.target.classList.remove("big-game");
        }
    });
});

gamePictures.forEach((element) => {
    observerLauncher.observe(element);
});


// PRELOADER


window.onload = function () {

    document.body.classList.add('loaded_hiding');

    window.setTimeout(function () {

        // document.body.classList.add('loaded');

        // document.body.classList.remove('loaded_hiding');

    }, 500);

}