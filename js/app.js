"use strict";

$(document).ready(function () {
    $(".toggle-menu").click(function () {
        $(".menu-list").toggleClass("w-[60%]");
        $(".menu-overly").toggleClass("hidden");
    });
    
    if($('.menu-overly').hasClass('hidden')){
       $('.menu-overly').on('click',function(){
           $('.menu-list').removeClass('w-[60%]');
           $('.menu-overly').addClass('hidden');
       })
    }
    
    
    //  swiper slider
    const swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      effect: 'cube', 
      speed: 3000,
      direction: 'horizontal', 
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    on: {
        slideChangeTransitionStart: function(){
            $('.animate-fadeIn').css({
                'opacity': '0',
                'transform': 'translateY(30px)'
            });
            
            $('.animate-fadeIn-text').css({
                'opacity': '0',
                'transform': 'translateY(50px)'
            });
        },
        slideChangeTransitionEnd: function(){
            $('.animate-fadeIn').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
            $('.animate-fadeIn-text').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }
    }
      
    });
    //  featured swiper slider
    const featuredSwiper = new Swiper('.featured-swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      effect: 'slide', 
      speed: 3000,
      direction: 'horizontal', 
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    on: {
        slideChangeTransitionStart: function(){
            $('.animate-fadeIn').css({
                'opacity': '0',
                'transform': 'translateY(30px)'
            });
            
            $('.animate-fadeIn-text').css({
                'opacity': '0',
                'transform': 'translateY(50px)'
            });
        },
        slideChangeTransitionEnd: function(){
            $('.animate-fadeIn').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
            $('.animate-fadeIn-text').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }
    }
      
    });
    
    
    
    
    
    
    
    
    
});