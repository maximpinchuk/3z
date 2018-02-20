function randomFloatBetween(minValue,maxValue,precision){
    if(typeof(precision) == 'undefined'){
        precision = 2;
    }
    return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)),maxValue).toFixed(precision));
};



if (window.innerWidth > 992) {
    var aboutSection = document.querySelector('.section--about');
    aboutSection.addEventListener('mousemove', function(e) {
        var transX = e.clientX/80;
        var transY = e.clientY/80;
        if (transX > 40) {
            transX = 40;
        };
        if (transY > 40) {
            transY = 40;
        };
        aboutSection.querySelector('.image-front__image .shape-pattern').style.transform = 'translate3d(' + transX + 'px,' + transY + 'px, 0)';
        aboutSection.querySelector('.image-back__image').style.transform = 'translate3d(-' + transX*0.8 + 'px, -' + transY*0.8 + 'px, 0)';
        aboutSection.querySelector('.skrollable-1 .skrollable-image').style.transform = 'translate3d(-' + transX/2 + 'px, -' + transY/2 + 'px, 0)';
    });

    var frontPath = aboutSection.querySelector('.image-front__image .item__clippath').getAttribute('pathdata:id').split(';')
	frontPath.splice(frontPath.length, 0, aboutSection.querySelector('.image-front__image .item__clippath').getAttribute('d'));

    anime.remove(aboutSection.querySelector('.image-front__image .item__clippath'));
    anime({
		targets: aboutSection.querySelector('.image-front__image .item__clippath'),
		duration: 10000,
		easing: [0.5,0,0.5,1],
		d: frontPath,
		loop: true
	});

    var aboutController = new ScrollMagic.Controller();
    var aboutScene = new ScrollMagic.Scene({
        triggerElement: aboutSection,
        duration: 300,
        triggerHook: 0.4,
        reverse: false
    })
    .addTo(aboutController);

    aboutScene.on('enter', function(event) {
        aboutSection.classList.add('animated');
    });
};
