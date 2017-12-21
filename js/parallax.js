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

    // Mid
    var slideParallaxScene = new ScrollMagic.Scene({
            triggerElement: '.Filler_Mid_Parallax',
            triggerHook: 1,
            duration: '100%'
        })
        .setTween(TweenMax.from('.Filler_Mid_Img', 1, {
            y: '-25%',
            ease: Power0.easeNone
        }))
        .addTo(controller);

});
