if (window.innerWidth > 992) {
    var openInfoSection = document.querySelector('.section--open-info');
    var openInfoController = new ScrollMagic.Controller();
    var openInfoScene = new ScrollMagic.Scene({
        triggerElement: openInfoSection,
        duration: 300,
        triggerHook: 0.7,
        reverse: false
    })
    .addTo(openInfoController);
    openInfoScene.on('enter', function(event) {
        openInfoSection.classList.add('animated');
    });
};
