$(function() {
    "use strict";

    // Progress bar animation
    $(window).on('scroll', skill_bar);

    function skill_bar() {
        var scrollamount = $(this).scrollTop();
        var scrollLink = $('#skills');
        scrollLink.each(function() {
            var scrollOffset = $(this).offset().top - 200;

            if (scrollamount > scrollOffset) {

                if (
                    document.querySelectorAll(".progressbar").length > 0 &&
                    document.querySelectorAll(".progressbar [data-progress]").length > 0
                ) {
                    document
                        .querySelectorAll(".progressbar [data-progress]")
                        .forEach((x) => AnimateProgress(x));
                }

                function AnimateProgress(el) {
                    el.className = "animate-progress";
                    el.setAttribute(
                        "style",
                        `--animate-progress:${el.getAttribute("data-progress")}%;`
                    );
                }
                $(window).unbind('scroll', skill_bar);
            }
        });
    }

    // typing text animation script
var typed = new Typed(".typing", {
    strings: [" Web Developer", "Web Designer", "Freelancer","Graphics Designer","UI/Ux Designer" ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

    //Navbar toggler animation
    $('.navbar-toggler').on('click', function() {
        $('.navbar-toggler').toggleClass('toggler-animation');
    });

    // Portfolio Venobox initialize
    $('.portfolio-venobox').venobox({
        border: '10px',
        bgcolor: '#1C9EE1',
        infinigall: true,
        closeBackground: '#1C9EE1',
        closeColor: 'white',
    });

    //Testimonial slider initialize
    $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1200,
        pauseOnHover: false,
        arrows: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }
        ]
    });

    //sticky navbar animation
    $(window).on('scroll', function() {
        var scrollamount = $(this).scrollTop();

        if (scrollamount > 300) {
            $('.navbar').addClass('navbar-animation');
        } else {
            $('.navbar').removeClass('navbar-animation');
        }
    });

    //Back to top button initialization
    $(window).on('scroll', function() {
        var scrollamount = $(this).scrollTop();

        if (scrollamount > 300) {
            $('.back-to-top').addClass('bttop-show');
        } else {
            $('.back-to-top').removeClass('bttop-show');
        }
    });

    $('.back-to-top').on('click', function() {
        $('html,body').animate({
            'scrollTop': 0
        }, 1000);
    });

    //Smooth scroll and Scroll spy initialization
    var scrollLink = $('.scroll-link');
    $(scrollLink).on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    $(window).on('scroll', function() {
        var scrollamount = $(this).scrollTop();
        scrollLink.each(function() {
            var scrolloffset = $(this.hash).offset().top - 100;

            if (scrollamount > scrolloffset) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });

    //Navbar slide up
    $('.navbar .nav-item').on('click', () => {
        $('.navbar-toggler[aria-expanded=true]').click();
    });

    //aos animation initialize
    AOS.init();

    //Blog page slider initialize
    $('.blog-slider-main').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1500,
        pauseOnHover: false,
        arrows: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }
        ],

    });


});