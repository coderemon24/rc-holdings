"use strict";

$(document).ready(function () {
  $(".toggle-menu").click(function () {
    $(".menu-list").toggleClass("w-[60%]");
    $(".menu-overly").toggleClass("hidden");
  });

  if ($(".menu-overly").hasClass("hidden")) {
    $(".menu-overly").on("click", function () {
      $(".menu-list").removeClass("w-[60%]");
      $(".menu-overly").addClass("hidden");
    });
  }

  //  swiper slider
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: "coverflow",
    speed: 3000,
    direction: "horizontal",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    on: {
      slideChangeTransitionStart: function () {
        $(".animate-fadeIn").css({
          opacity: "0",
          transform: "translateY(30px)",
        });

        $(".animate-fadeIn-text").css({
          opacity: "0",
          transform: "translateY(50px)",
        });
      },
      slideChangeTransitionEnd: function () {
        $(".animate-fadeIn").css({
          opacity: "1",
          transform: "translateY(0)",
        });
        $(".animate-fadeIn-text").css({
          opacity: "1",
          transform: "translateY(0)",
        });
      },
    },
  });

  //  featured swiper slider
  const featuredSwiper = new Swiper(".featured-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: "slide",
    speed: 3000,
    direction: "horizontal",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  //  explore swiper slider
  const exploreSwiper = new Swiper(".explore-swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    speed: 2000,
    direction: "horizontal",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1, // mobile
      },
      640: {
        slidesPerView: 1.2, // small screens
      },
      768: {
        slidesPerView: 2, // tablet
      },
      1024: {
        slidesPerView: 3, // laptop
      },
      1280: {
        slidesPerView: 3, // desktop
      },
    },
  });

  //  business swiper slider
  const businessesSwiper = new Swiper(".business-swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    effect: "slide",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    speed: 2000,
    direction: "horizontal",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1, // mobile
      },
      640: {
        slidesPerView: 1.2, // small screens
      },
      768: {
        slidesPerView: 2, // tablet
      },
      1024: {
        slidesPerView: 3, // laptop
      },
      1280: {
        slidesPerView: 3, // desktop
      },
    },
  });

  //  testimonials swiper slider
  const testimonialsSwiper = new Swiper(".testimonials-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    effect: "slide",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    speed: 2000,
    direction: "horizontal",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $(".back_btn").removeClass("hidden").addClass("flex");
      $(".back_btn").fadeIn();
    } else {
      $(".back_btn").fadeOut();
    }
  });
  $(".back_btn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "smooth");
  });

  const mixer = mixitup('#gallery-grid', {
        selectors: {
          target: '.mix'
        },
        animation: {
          duration: 300,
          effects: 'fade scale(0.5)',
          easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
        }
      });

      // Manual filtering without relying on MixItUp's auto data-filter
      $('#filter-buttons button').click(function () {
        const group = $(this).attr('data-group');

        // Update active button styles
        $('#filter-buttons button')
          .removeClass('bg-blue-900 text-white')
          .addClass('bg-white text-blue-900');

        $(this)
          .addClass('bg-blue-900 text-white')
          .removeClass('bg-white text-blue-900');

        // Apply MixItUp filter manually
        if (group === 'all') {
          mixer.filter('all');
        } else {
          mixer.filter('.' + group);
        }
      });
  
  
  
});
