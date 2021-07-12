$(function () {
    "use strict";


    $(document).ready(function () {

        var mainMenuWrapHeight = $('.mainMenuWrap').height() + 2;
        var wW = $('body').width();
        console.log(wW, 'wW')

        function menuOnScrollTop() {
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
                var headerOuterHeight = document.getElementById("headerWrap").offsetHeight;
                if (wW > 767) {
                    var currentScrollPos = window.pageYOffset;
                    if (prevScrollpos > currentScrollPos) {
                        document.getElementById("headerWrap").style.top = "0";
                    } else {
                        document.getElementById("headerWrap").style.top = "-" + (headerOuterHeight - mainMenuWrapHeight) + "px";
                    }
                    prevScrollpos = currentScrollPos;
                }

                var windowTop = $(window).scrollTop();
                if (windowTop > (headerOuterHeight - mainMenuWrapHeight)) {
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
        }

        scrollTop();

        $('.openMenu').on('click', function () {
            $('.leftSideMenuWrap').addClass('openLeftSideMenuWrap');
            $('body').addClass('openLeftSideMenu');
        });
        $('.closeMenu, .leftSideMenuWrap').on('click', function () {
            $('.leftSideMenuWrap').removeClass('openLeftSideMenuWrap');
            $('body').removeClass('openLeftSideMenu');
        });

        $('.closeAdd').on('click', function () {
            $('.popupAddWrap').removeClass('openPopupAddWrap');
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


        function onlineVoteSlider() {
            $('.onlineVoteSlider').owlCarousel({
                loop: true,
                margin: 10, center: true,
                autoWidth: true,
                responsiveClass: true,
                dots: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: false
                    }
                }
            })
        }

        onlineVoteSlider();

        function searchBox() {
            $('.searchBtn, .searchIcon').on('click', function (){
                $('.searchBox').addClass('searchBoxOpen');
            });
            $('body').on('click', function (){
                $('.searchBox').removeClass('searchBoxOpen');
            });
        }
        searchBox();

    });
});
