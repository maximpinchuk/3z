function getTranslate3d (el) {
    var values = el.style.transform.split(/\w+\(|\);?/);
    if (!values[1] || !values[1].length) {
        return [];
    };
    return values[1].split(/,\s?/g);
};



var element1 = document.querySelector('.skrollable-1');
var skrollableController = new ScrollMagic.Controller();
var parallaxScene = new ScrollMagic.Scene({
    triggerElement: '.section-about',
    duration: 700,
    triggerHook: 0,
    reverse: true
})
.addTo(skrollableController);

var coordY1 = 0;
function parallaxCallback(event) {
    element1.style.transform = 'translate3d(0, ' + parallaxScene.progress() * 200 + 'px, 0)';
};
parallaxScene.on('progress', parallaxCallback);
