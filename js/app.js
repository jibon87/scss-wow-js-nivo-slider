(function ($) {
    "use strict";

    //wow
    new WOW().init();

    // nivo-slider
    $("#slider").nivoSlider({
        pauseTime: 3000,
        controlNav: false,
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        prevText: "<i class='bi bi-arrow-left-circle-fill'></i>",
        nextText: "<i class='bi bi-arrow-right-circle-fill'></i>",
    });

    //boostap tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // one page nav
    jQuery(".scroll").onePgaeNav({
        wrapper: "#onepage-nav",
        activeClass: "my-css-class",
        speed: 10,
    });

    //headroom
    var header = document.querySelector(".header");

    var headroom = new Headroom(header, {
        tolerance: {
            down: 10,
            up: 20,
        },
        offset: 15,
    });
    headroom.init();
})(jQuery);
