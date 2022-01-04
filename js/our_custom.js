$(document).ready(function () {
    //Banner Slider js
    $('.BannerSliding').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1000,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
    });


    //Teams Slider js
    $('.OurTeamWrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        speed: 1000,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });


    //venobox  js
    $('.venobox').venobox();



    //Pepole Say Slider js
    $('.pepoleSayTextSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.PepoleSayImgSlider',
    });
    $('.PepoleSayImgSlider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.pepoleSayTextSlider',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: '.RightArrow',
        prevArrow: '.LeftArrow',
        responsive: [     
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
    });

    //sticky-top js
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky-top');

        if (scrolling >= 300) {
            sticky.addClass('nav-bg');
        } else {
            sticky.removeClass('nav-bg');
        }
    });

    // wow js
    new WOW().init();


    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });

    //Background video js
    //jQuery("#bgndVideo").YTPlayer();

    // typed js
    $(".typed").typed({
        strings: ["Web Designer.", "Web Developer.", "Full stack web Developer.", 'Graphics Designer'],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 50,
        // time before typing starts
        startDelay: 500,
        // backspacing speed
        backSpeed: 50,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 100,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });



    // https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.js
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 300,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#9EFF75"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#9EFF75"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 0.1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 50,
                "color": "#9EFF75",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 10,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }, function () {
        console.log("nerd its not working")
    });


    // preloader js
    $(window).on('load', function () {
        $('.preloder').delay(2000).fadeOut(1000);
    });


    // Srcoll to Top Button js
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#SrcollToTopButton').fadeIn();
        } else {
            $('#SrcollToTopButton').fadeOut();
        }
    });
    $('#SrcollToTopButton').click(function () {
        $('html ,body').animate({
            scrollTop: 0
        }, 300);
    });




    // Smooths scrolling
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });



});