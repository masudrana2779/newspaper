$(function () {
    "use strict";


    $(document).ready(function () {

        function menuOnScrollTop(){
            var prevScrollpos = window.pageYOffset;
            $("body").css({
                'margin-top': 0,
            });
            window.onscroll = function() {
                var headerOuterHeight = document.getElementById("headerWrap").offsetHeight;
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("headerWrap").style.top = "0";
                    $("body").css({
                        // 'margin-top': headerOuterHeight,
                    });
                } else {
                    document.getElementById("headerWrap").style.top = "-" + (headerOuterHeight - 60) +"px";
                    $("body").css({
                        // 'margin-top': headerOuterHeight,
                    });
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


    });
});
