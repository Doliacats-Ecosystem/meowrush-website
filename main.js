// ROADMAP SHOWING

let roadmapAnimItems = document.querySelectorAll(".roadmap_list_item");
let meowverseVideos = document.querySelectorAll(".meowverse_video");

function onEntry(entry) {

    entry.forEach(change => {

        if (change.isIntersecting) {

            change.target.classList.add('roadmap_list_item_active')

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

function onEntry(entry) {

    entry.forEach(change => {

        if (change.isIntersecting) {

            change.target.classList.add('show')

        }
    });
}

for (let el of meowverseVideos) {

    observer.observe(el)

}


// NAVIGATION MOBILE

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }



//Hiding menu while scrolling

const wholeNavigation = document.querySelector('.menu')
const wholeNavigationBg = document.querySelector('.menu-bg')


const homeArrow = document.querySelector('.home-arrow-container')

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {

    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {

        wholeNavigation.style.top = "0";
        wholeNavigationBg.style.top = "0";

        homeArrow.style.top = "20px"

	if (currentScrollPos < 600) {
            homeArrow.style.top = "-500px"
        }

    } else {

        if (currentScrollPos > 600) {
            wholeNavigation.style.top = "-500px";
            wholeNavigationBg.style.top = "-500px";
            homeArrow.style.top = "-500px"
        }
    }

    prevScrollpos = currentScrollPos;
}