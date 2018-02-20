if (window.innerWidth > 992) {
    var stokeSection = document.querySelector('.section--stoke');
    var stokeController = new ScrollMagic.Controller();
    var stokeScene = new ScrollMagic.Scene({
        triggerElement: stokeSection,
        duration: 300,
        triggerHook: 0.5,
        reverse: false
    })
    .addTo(stokeController);
    stokeScene.on('enter', function(event) {
        stokeSection.classList.add('animated');
    });
};
