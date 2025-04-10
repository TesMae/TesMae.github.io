"use strict";

/**
 * add Event on elements
 */

/**
 * hero carousel
 */
var heroCarousel = function () {
  $(".hero-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    nav: false,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
  });
};
heroCarousel();

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", headerActive);

(function ($) {
  "use strict";

  var carousel = function () {
    $(".project-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: "fadeOutLeft",
      animateIn: "fadeInRight",
      dots: true,
      autoplayHoverPause: true,
      items: 1,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  };
  carousel();

  let test_textillate = function () {
    $(".test-textillate").textillate({
      loop: true,
      in: {
        effect: "fadeInLeft",
      },
      out: {
        effect: "fadeOutRight",
      },
    });
  };
  test_textillate();

  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);
})(jQuery);

function setActiveElement(elements, activeIndex) {
  Array.from(elements).forEach(function (element, index) {
    if (activeIndex === index) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

function activateElements() {
  let filterBtns = document.getElementsByClassName("filter-btn");
  let gridElements = document.querySelector('.service').getElementsByClassName("grid-list");

  Array.from(filterBtns).forEach((filterBtn, index) => {
    filterBtn.addEventListener("click", function () {
      setActiveElement(gridElements, index);
      setActiveElement(filterBtns, index);
    });
  });
}
activateElements();
