$(function () {
    "use strict";


    $(document).ready(function () {

        function menuOnScrollTop(){
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
                var headerOuterHeight = document.getElementById("headerWrap").offsetHeight;
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("headerWrap").style.top = "0";
                } else {
                    document.getElementById("headerWrap").style.top = "-" + (headerOuterHeight - 60) +"px";
                }
                prevScrollpos = currentScrollPos;

                var windowTop = $(window).scrollTop();
                if (windowTop > (headerOuterHeight - 60)) {
                    $(".headerWrap").addClass("headerFixed");
                } else {
                    $(".headerWrap").removeClass("headerFixed");
                }
            }
        }
        menuOnScrollTop();

        setTimeout(function () {
            $('body').addClass('loaded');
        }, 2000);

        function scrollTop() {

            //js for scroll to section content
            $('#go-top[href^="#"]').on('click', function (event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: $('body').offset().top
                    }, 2000);
                }
            });

            // hide #go-top first
            $("#go-top").hide();
            // fade in #go-topp
            $(function () {
                $(window).scroll(function () {
                    if ($(this).scrollTop() > 100) {
                        $('#go-top').fadeIn();
                    } else {
                        $('#go-top').fadeOut();
                    }
                });
                // scroll body to 0px on click
            });
        }
        scrollTop();

        $('.openMenu').on('click', function (){
            $('.leftSideMenuWrap').addClass('openLeftSideMenuWrap');
            $('body').addClass('openLeftSideMenu');
        });
        $('.closeMenu, .leftSideMenuWrap').on('click', function (){
            $('.leftSideMenuWrap').removeClass('openLeftSideMenuWrap');
            $('body').removeClass('openLeftSideMenu');
        });


        function popupGallery() {
            if ($(".img_popup").length) {
                $(".img_popup").each(function () {
                    $(".img_popup").magnificPopup({
                        type: 'image',
                        tLoading: 'Loading image #%curr%...',
                        removalDelay: 300,
                        mainClass: 'mfp-with-zoom mfp-img-mobile',
                        gallery: {
                            enabled: true,
                            navigateByImgClick: true,
                            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image,
                        }
                    });
                });
            }
        }
        popupGallery();

    });
});
