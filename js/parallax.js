$(document).ready(function () {

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // parallax scene Training
    var slideParallaxScene = new ScrollMagic.Scene({
            triggerElement: '.aaron-port',
            triggerHook: 1,
            duration: '100%'
        })
        .setTween(TweenMax.from('.aaron_img', 1, {
            y: '-50%',
            ease: Power0.easeNone
        }))
        .addTo(controller);

    // parallax scene Training
    var slideParallaxScene = new ScrollMagic.Scene({
            triggerElement: '.filler-parallax',
            triggerHook: 1,
            duration: '400%'
        })
        .setTween(TweenMax.from('.filler', 1, {
            y: '-25%',
            ease: Power0.easeNone
        }))
        .addTo(controller);

});
