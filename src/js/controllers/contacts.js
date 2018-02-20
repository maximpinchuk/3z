if (window.innerWidth > 992) {
    var contactsSection = document.querySelector('.section--contacts');
    contactsSection.addEventListener('mousemove', function(e) {
        var transX = e.clientX/80;
        var transY = e.clientY/80;
        if (transX > 40) {
            transX = 40;
        };
        if (transY > 40) {
            transY = 40;
        };
        contactsSection.querySelector('.contacts-image-block__image-back').style.transform = 'translate3d(-' + transX*0.8 + 'px, -' + transY*0.8 + 'px, 0)';
    });
};
