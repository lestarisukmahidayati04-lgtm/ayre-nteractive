// ================================
// Navbar Background on Scroll
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ================================
// Scroll To Top
// ================================

const scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});

scrollTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ================================
// Reveal Animation
// ================================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const trigger = window.innerHeight - 120;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);

// ================================
// Active Navbar
// ================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    if (link.href === window.location.href) {

        link.classList.add("active");

    }

});