(function ($) {
    var hidden_section = $('.hidden_section'),
        prada = $('.prada'),
        factory = $('.factory'),
        main_img = $('#main_image_img'),
        main_img_2 = $('#main_image_img2'),
        header_eye_cream = $('.header_choosing_cream'),
        ring = $('circle'),
        svg_circle = $('#svg_circle'),
        subtitle = $('.subtitle'),
        title = $('.title'),
        like = $('.fa-thumbs-up'),
        subscribe = $('.fa-feather-alt'),
        dot = $('.dot'),
        main_image_container = $('.main_image'),
        hidden_image = $('.hidden_img'),
        menu = $('.menu'),
        paginator = $('.paginator'),
        tl = new TimelineLite();

    tl
        .set(hidden_image, {xPercent: '110', yPercent: '12', autoAlpha: 1})
        .set(prada, {xPercent: '380', yPercent: '30', autoAlpha: 1})
        .set(factory, {xPercent: '180', yPercent: '210', autoAlpha: 1})
        .set(main_img, {xPercent: '-60', autoAlpha: 1})
        .set(main_img_2, {xPercent: '-60', autoAlpha: 1})
        .set(header_eye_cream, {xPercent: '240', yPercent: '740', autoAlpha: 1})
        .set(menu, {autoAlpha: 1})
        .set(svg_circle, {autoAlpha: 1})
        .set(dot, {autoAlpha: 0});

    TweenMax.set(svg_circle, {xPercent: '-61', yPercent: '-70'}, {visibility: 'visible'});
    TweenMax.set(ring, {transformOrigin: 'center center'});
    TweenMax.to(like, 0.1,
        {
            delay: 1,
            startAt: {rotationZ: -20},
            rotationZ: 0,
            oyo: true,
            repeat: -1,
            transformOrigin: "50% 50%",
            repeatDelay: 5,
            ease: Sine.easeInOut
        });
    TweenMax.to(subscribe, 0.1,
        {
            delay: 3,
            startAt: {x: -5},
            x: 0,
            oyo: true,
            repeat: -1,
            repeatDelay: 4,
            ease: Sine.easeInOut
        });

    ring.each(function (index) {
        TweenMax.fromTo(this, 1.5, {scale: 0, opacity: 0}, {
            scale: 1,
            opacity: 1,
            ease: Back.easeOut,
            delay: index / 9,
            yoyo: true,
            repeat: 3
        });
    });

    splitText(subtitle, 'subtitleChars', 0);
    splitText(title, '', 0);
    startSlide();

    function splitText(element, className, opacity) {
        var mySplitText = new SplitText(element, {type: "chars, words", charsClass: className}),
            tl = new TimelineLite(),
            numChars = mySplitText.chars.length;
        for (var i = 0; i < numChars; i++) {
            tl.from(mySplitText.chars[i], 2, {opacity: opacity || 0}, Math.random() * 2);
        }
    }

    setTimeout(function () {
        setInterval(function () {
            TweenMax.set(svg_circle, {xPercent: '265', yPercent: '18', opacity: 0.7});
            $("#main_image_img2").toggleClass("transparent");
        }, 7000);
    }, 5000);

    var openMenu = new TimelineMax({paused: true})
        .from(".menu", 0.500, {y: "-100%", ease: Quad.easeInOut}, "drop")
        .staggerFrom(".menu a", 0.500,
            {
                scale: 2,
                opacity: 0,
                ease: Quad.easeInOut
            },
            0.100, "drop+=0.250");

    var closeMenu = new TimelineMax({paused: true})
        .to(".menu", 0.500, {y: "-100%", ease: Quad.easeInOut});

    function close() {
        closeMenu.restart();
        $(".menu-trigger").slicon('menu');
    }

    function open() {
        openMenu.restart();
        $(".menu-trigger").slicon('close');
    }

    function startSlide() {
        TweenLite.fromTo(main_image_container, 2.5, {x: 0}, {
            x: -410,
            ease: Circ.easeOut, delay: 7
        });
        TweenLite.fromTo(hidden_image, 2.5, {x: 0}, {
            x: -400,
            ease: Circ.easeOut, delay: 7
        });

        TweenLite.to(prada, 0.3, {
            delay: 3,
            onComplete: function () {
                splitText(prada, 'prada-hidden', 1);
            }
        });
        TweenLite.to(factory, 0.3, {
            delay: 3,
            onComplete: function () {
                splitText(factory, 'prada-hidden', 1);
            }
        });
        TweenLite.to(header_eye_cream, 0.3, {
            delay: 3,
            onComplete: function () {
                splitText(header_eye_cream, 'eye_header_hidden', 1);
            }
        });
        TweenLite.to(title, 0.3, {
            delay: 5,
            onComplete: function () {
                splitText(title, 'title-hidden', 1);
            }
        });
        TweenLite.to(subtitle, 0.3, {
            delay: 5,
            onComplete: function () {
                splitText(subtitle, 'subtitle-hidden', 1);
            }
        });
        TweenLite.to(paginator, 0.3, {autoAlpha: 0, delay: 7});

        TweenMax.to(function () {
        }, 0, {
            delay: 9,
            onComplete: function () {
                $('body').addClass('background_2').removeClass('background');
            }
        });
        TweenMax.to(function () {
        }, 0, {
            delay: 9,
            onComplete: function () {
                $('header').addClass('background_2').removeClass('background');
            }
        });

        TweenLite.to(main_image_container, 2, {
            x: -800,
            ease: Circ.easeOut, delay: 12, opacity: 0.5
        });
        TweenLite.to(hidden_section, 2, {
            x: -350,
            ease: Circ.easeOut, delay: 12
        });
        TweenLite.to(prada, 0.3,
            {
                autoAlpha: 1, delay: 13, xPercent: '360',
                onComplete: function () {
                    splitText(prada);
                }
            });
        TweenLite.to(factory, 0.3,
            {
                autoAlpha: 1, delay: 13, xPercent: '320',
                onComplete: function () {
                    splitText(factory);
                }
            });
        TweenLite.to(header_eye_cream, 0.3,
            {
                autoAlpha: 1, delay: 13, yPercent: '500',
                onComplete: function () {
                    splitText(header_eye_cream);
                }
            });
        TweenLite.to(prada, 0.3, {
            delay: 20,
            onComplete: function () {
                splitText(prada, 'eye_header_hidden', 1);
            }
        });
        TweenLite.to(factory, 0.3, {
            delay: 20,
            onComplete: function () {
                splitText(factory, 'eye_header_hidden', 1);
            }
        });
        TweenLite.to(header_eye_cream, 0.3, {
            delay: 20,
            onComplete: function () {
                splitText(header_eye_cream, 'eye_header_hidden', 1);
            }
        });

        TweenLite.to(prada, 0.3,
            {
                autoAlpha: 1, delay: 26, xPercent: '360',
                onComplete: function () {
                    splitText(prada);
                }
            });
        TweenLite.to(factory, 0.3,
            {
                autoAlpha: 1, delay: 26, xPercent: '320',
                onComplete: function () {
                    splitText(factory);
                }
            });
        TweenLite.to(header_eye_cream, 0.3,
            {
                autoAlpha: 1, delay: 26, yPercent: '500',
                onComplete: function () {
                    splitText(header_eye_cream);
                }
            })
    }

    $(".menu").on("click", function (e) {
        e.stopPropagation();
        close();
    });

    $(".menu-trigger").on("click", function (e) {
        e.stopPropagation();
        if ($(this).is(".menu-trigger")) {
            open();
        } else {
            close();
        }
    });

    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({offset: 50})
        .setTween(function () {
            TweenMax.set(dot, {autoAlpha: 1});
            TweenMax.staggerTo(dot, 2,
                {repeat: -1, ease: SlowMo.ease.config(0.5, 0.4, false)}, 0.4);
            TweenMax.staggerFrom(dot, 2,
                {opacity: 0, scale: 0.7, repeat: -1, ease: SlowMo.ease.config(0.5, 0.4, true)}, 0.4);
        })
        .addTo(controller);

})(jQuery);