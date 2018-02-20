if (window.innerWidth > 992) {
    var advantagesSection = document.querySelector('.section--advantages');
    var advantageController = new ScrollMagic.Controller();
    var advantageScene = new ScrollMagic.Scene({
        triggerElement: advantagesSection,
        duration: 300,
        triggerHook: 0.4,
        reverse: false
    })
    .addTo(advantageController);

    advantageScene.on('enter', function(event) {
        advantagesSection.classList.add('animated');
    });
};
