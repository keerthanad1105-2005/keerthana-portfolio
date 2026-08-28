/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// Open / close mobile menu
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu when a navigation link is clicked
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function (event) {

    const clickedInsideNavbar =
        event.target.closest(".navbar");

    if (!clickedInsideNavbar) {

        navLinks.classList.remove("active");

    }

});


/* =========================================================
   UPDATE MENU ICON
========================================================= */

menuBtn.addEventListener("click", function () {

    if (navLinks.classList.contains("active")) {

        menuBtn.textContent = "✕";
        menuBtn.setAttribute("aria-label", "Close navigation menu");

    } else {

        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Open navigation menu");

    }

});