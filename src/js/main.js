//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js


"use strict";

function owlCarouselSlider(owl, nav, dots) {

    $(owl).owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        nav: true,
        dots: true,
        slideBy: 1,
        items: 1,
        navContainer: nav,
        dotsContainer: dots,
        responsive: {
            310: {
                items: 1
            },

            480: {
                items: 1
            },

            767: {
                items: 2
            },

            1023: {
                items: 2
            },

            1200: {
                items: 3
            }
        }
    });

}


$(function() {

    owlCarouselSlider('.news-carousel-js', '.news__nav', '.news__dots');

});
