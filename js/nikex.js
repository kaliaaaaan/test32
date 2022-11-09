/*
  [JS Index]
*/


/*
  1. preloader
  2. fullPage
  3. owl carousel slider
  4. magnificPopup
  5. swiper slider
  6. toggle panels
  7. navigation
  8. contact form
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
    });
	
    // 2. fullPage
    $("#fullpage").fullpage({
        anchors: ["home", "about", "services", "works", "contact"],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["Home", "About", "Services", "Works", "Contact"],
        responsiveWidth: 995,
        autoScrolling: true,
        scrollBar: false,
        afterLoad: function(anchorLink, index) {
            if (index == 5) {
                $('.scroll-indicator').addClass('scroll-indicator-OFF');
            } else {
                $('.scroll-indicator').removeClass('scroll-indicator-OFF');
            }
        },
        afterResponsive: function(isResponsive) {}
    });
	
    // 3. owl carousel slider
	$("#owl-carousel-about").owlCarousel({
        loop: false,
        center: false,
        items: 1,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["Назад", "Далее"],
        navContainer: '.owl-nav-custom-about'
    });
    $("#owl-carousel-team").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-nav ion-chevron-left'></i>", "<i class='owl-nav ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-team',
        responsive: {
            0: {
                items: 1,
				margin: 20
            },
            768: {
                items: 1,
				margin: 20
            },
            980: {
                items: 2,
				margin: 50
            },
            1240: {
                items: 3,
                margin: 50
            }
        }
    });
	$("#owl-carousel-works").owlCarousel({
        loop: false,
        center: false,
        items: 1,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-nav ion-chevron-left'></i>", "<i class='owl-nav ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-works'
    });
	
    // 4. magnificPopup
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: false,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
        fixedContentPos: false
    });
    $(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade",
            fixedContentPos: false
        });
    });
	$(".popup-photo-team").each(function() {
        $(this).magnificPopup({
            delegate: ".popup-photo-team-open",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade",
            fixedContentPos: false
        });
    });
	
    // 5. swiper slider
	var swiper1 = new Swiper(".swiper-container-wrapper .swiper-container.swiper1", {
        preloadImages: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        init: true,
        loop: false,
        speed: 1200,
        grabCursor: true,
        mousewheel: false,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: {
            el: ".swiper-slide-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        },
        scrollbar: false
    });
    swiper1.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.pause();
        });
    });
    swiper1.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.play();
        });
    });
    swiper1.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
    });
    swiper1.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
    });
    var playButton = $(".swiper-slide-controls-play-pause-wrapper");
    function autoEnd() {
        playButton.removeClass("slider-on-off");
        swiper1.autoplay.stop();
    }
    function autoStart() {
        playButton.addClass("slider-on-off");
        swiper1.autoplay.start();
    }
    playButton.on("click", function() {
        if (playButton.hasClass("slider-on-off")) autoEnd();
        else autoStart();
        return false;
    });
	var swiper2 = new Swiper(".swiper-container-wrapper .swiper-container.swiper2", {
        preloadImages: false,
        autoplay: false,
        init: true,
        loop: false,
        grabCursor: false,
        mousewheel: false,
        keyboard: false,
        simulateTouch: false,
        parallax: false,
        pagination: false,
        navigation: false
    });
	
    // 6. toggle panels
    $(".c-btn-about, .c-btn-services, .c-btn-contact").on("click", function() {
        $(".round-menu, .scroll-indicator").addClass("off").removeClass("on");
		var divClass = $(this).attr("data-id");
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("." + divClass).addClass("open");
        } else {
            $(this).addClass("open");
            $("." + divClass).addClass("open");
        }
    });
    $(".about-more-launch, .services-more-launch, .contact-more-launch, .navigation-fire").on("click", function() {
        $(".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right").removeClass("open");
    });
	$(".page-closer, .panel-overlay-from-left, .panel-overlay-from-right").on("click", function() {
		$(".round-menu, .scroll-indicator").removeClass("off").addClass("on");
    });
	
    // 7. navigation
    // navigation active links
    $("a.navigation-state").on("click", function() {
        $("a.navigation-state").removeClass("active");
        $(this).addClass("active");
    });
    // navigation fire
    $(".navigation-fire").on("click", function() {
        if ($(".panel-from-left-nav, .panel-from-right-nav, .panel-overlay-from-left-nav, .panel-overlay-from-right-nav").hasClass("open")) {
            $(".panel-from-left-nav, .panel-from-right-nav, .panel-overlay-from-left-nav, .panel-overlay-from-right-nav").removeClass("open");
        } else {
            $(".panel-from-left-nav, .panel-from-right-nav, .panel-overlay-from-left-nav, .panel-overlay-from-right-nav").addClass("open");
        }
    });
    $("nav.navigation-menu a").on("click", function() {
        $(".panel-from-left-nav, .panel-from-right-nav, .panel-overlay-from-left-nav, .panel-overlay-from-right-nav").removeClass("open");
    });
	
    // 8. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
	
});