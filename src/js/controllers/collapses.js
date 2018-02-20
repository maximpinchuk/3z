function collapseToggle(element) {
    if (!element.classList.contains('collapse-block--opened')) {
        var height = element.getAttribute('data-height'),
            startHeight = 0;
        element.classList.add('collapse-block--opened');
        // element.querySelector('.collapse-block__content').style.height = height + 'px';
        var anim = setInterval(function() {
            if (startHeight > height) {
                clearInterval(anim);
            } else {
                var h = height/50;
                startHeight += h;
                element.querySelector('.collapse-block__content').style.height = startHeight + 'px';
            };
        }, 3);
    } else {
        var height = element.getAttribute('data-height'),
            startHeight = height;
        element.classList.remove('collapse-block--opened');
        // element.querySelector('.collapse-block__content').style.height = '0';
        var anim = setInterval(function() {
            if (startHeight <= 0) {
                element.querySelector('.collapse-block__content').style.height = '0';
                clearInterval(anim);
            } else {
                var h = height/50;
                startHeight -= h;
                element.querySelector('.collapse-block__content').style.height = startHeight + 'px';
            };
        }, 3);
    };
};

function collapsesInit(element) {
    if (!element.classList.contains('collapse-block--opened')) {
        var height = element.querySelector('.collapse-block__content').clientHeight;
        element.setAttribute('data-height', height);
        element.querySelector('.collapse-block__content').style.height = '0';
    } else {
        var height = element.querySelector('.collapse-block__content').clientHeight;
        element.setAttribute('data-height', height);
    };
};

var collapses = document.querySelectorAll('.collapse-block');
for (var i = 0; i < collapses.length; i++) {
    window.addEventListener('load', collapsesInit(collapses[i]));
    collapses[i].querySelector('.collapse-block__link').onclick = function(e) {
        e.preventDefault();
        var elem = this.parentElement.parentElement;
        collapseToggle(elem);
    };
};
