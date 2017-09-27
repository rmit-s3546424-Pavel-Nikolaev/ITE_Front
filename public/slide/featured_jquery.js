'use strict';

$(function () {
    //$(selector).animate(, obj, time, callback)
    //var currentSlide = 1;
    //setInterval(function () {
    //    $('#slider .slides').animate({ 'margin-left': '-=720px' }, 1000);
    //}, 3000);
    var width = 720;
    var speed = 1000;
    var hold = 5000;
    var current=1;
    var total=4;
    var $slider = $('#slider');
    var $slideCountainer = $slider.find('.slides');
    var $slides = $slideCountainer.find('.slide');

    setInterval(function () {
        $slideCountainer.animate({ 'margin-left': '-=' + width }, speed, function () {
            current++;
            if (current == total) {
                current = 1;
                $slideCountainer.css('margin-left', 0);
            }
        });
    }, hold);
});
