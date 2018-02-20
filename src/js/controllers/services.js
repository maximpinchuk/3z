if (window.innerWidth > 992) {
    var serviceSection1 = document.querySelector('.section-services-1');
    serviceSection1.addEventListener('mousemove', function(e) {
        var transX = e.clientX/80;
        var transY = e.clientY/80;
        if (transX > 40) {
            transX = 40;
        };
        if (transY > 40) {
            transY = 40;
        };
        var scaleX = randomFloatBetween(0.95, 1.05, 5),
            scaleY = randomFloatBetween(0.95, 1.05, 5);
        serviceSection1.querySelector('.image-front__image .shape-pattern').style.transform = 'translate3d(' + transX + 'px,' + transY + 'px, 0)';
        // serviceSection1.querySelector('.image-front__image').style.transform = 'scaleX('+ scaleX +') scaleY('+ scaleY +')';
        serviceSection1.querySelector('.image-back__image').style.transform = 'translate3d(-' + transX/2 + 'px, -' + transY/2 + 'px, 0)';
    });
    var serviceSection2 = document.querySelector('.section-services-2');
    serviceSection2.addEventListener('mousemove', function(e) {
        var transX = e.clientX/80;
        var transY = e.clientY/80;
        if (transX > 40) {
            transX = 40;
        };
        if (transY > 40) {
            transY = 40;
        };
        var scaleX = randomFloatBetween(0.95, 1.05, 5),
            scaleY = randomFloatBetween(0.95, 1.05, 5);
        serviceSection2.querySelector('.image-front__image .shape-pattern').style.transform = 'translate3d(' + transX + 'px,' + transY + 'px, 0)';
    });

    var servicesPreviewSection = document.querySelector('.service-preview');
    var servicesPreviewController = new ScrollMagic.Controller();
    var servicesPreviewScene = new ScrollMagic.Scene({
        triggerElement: servicesPreviewSection,
        duration: 300,
        triggerHook: 0.5,
        reverse: false
    })
    .addTo(servicesPreviewController);
    servicesPreviewScene.on('enter', function(event) {
        servicesPreviewSection.classList.add('animated');
    });



    var service1Section = document.querySelector('.service-1-block-top');
    var service1Controller = new ScrollMagic.Controller();
    var service1Scene = new ScrollMagic.Scene({
        triggerElement: service1Section,
        duration: 300,
        triggerHook: 0.5,
        reverse: false
    })
    .addTo(service1Controller);
    service1Scene.on('enter', function(event) {
        service1Section.classList.add('animated');
    });

    var service1SectionBottom = document.querySelector('.service-1-block-bottom');
    var service1BottomController = new ScrollMagic.Controller();
    var service1BottomScene = new ScrollMagic.Scene({
        triggerElement: service1SectionBottom,
        duration: 300,
        triggerHook: 0.8,
        reverse: false
    })
    .addTo(service1BottomController);
    service1BottomScene.on('enter', function(event) {
        service1SectionBottom.classList.add('animated');
    });



    var service2Section = document.querySelector('.service-2-block-top');
    var service2Controller = new ScrollMagic.Controller();
    var service2Scene = new ScrollMagic.Scene({
        triggerElement: service2Section,
        duration: 300,
        triggerHook: 0.4,
        reverse: false
    })
    .addTo(service2Controller);
    service2Scene.on('enter', function(event) {
        service2Section.classList.add('animated');
    });

    var service2SectionBottom = document.querySelector('.service-2-block-bottom');
    var service2BottomController = new ScrollMagic.Controller();
    var service2BottomScene = new ScrollMagic.Scene({
        triggerElement: service2SectionBottom,
        duration: 300,
        triggerHook: 0.8,
        reverse: false
    })
    .addTo(service2BottomController);
    service2BottomScene.on('enter', function(event) {
        service2SectionBottom.classList.add('animated');
    });
};
