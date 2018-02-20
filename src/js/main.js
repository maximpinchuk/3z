//= vendors/smoothScroll.js
//= vendors/imagesloaded.pkgd.min.js
//= vendors/anime.min.js
//= vendors/segments.js
//= vendors/ScrollMagic.min.js
//= vendors/tippy.all.min.js
//= vendors/vanilla-masker.min.js

'use strict';

//= controllers/skrollable.js
//= controllers/banner.js
//= controllers/about.js
//= controllers/open-info.js
//= controllers/advantages.js
//= controllers/services.js
//= controllers/collapses.js
//= controllers/form-validation.js
//= controllers/form.js
//= controllers/stoke.js
//= controllers/contacts.js



// Body margin bottom calc
function bodyPaddingCalc() {
    var footerHeight = document.querySelector('.footer-wrapper').clientHeight;
    document.body.style.marginBottom = footerHeight + 'px';
};
window.addEventListener('load', bodyPaddingCalc);
window.addEventListener('resize', bodyPaddingCalc);



// SmoothScroll initial
SmoothScroll({
    stepSize: 40,
    animationTime: 200
});



/*
 * Sticky header behaviour
 */
(function(document, window, index) {
    var element = document.querySelector('.header');

    if (!element) return true;

    var criticalPoint = 550,
        dTop = 0,
        lastScrollPosition = 0,
        elHeight = 0;

    window.addEventListener('scroll', function() {
        dTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        elHeight = element.offsetHeight;

        if (lastScrollPosition < dTop && dTop > 300) {
            element.style.transform = 'translate3d(0, -100%, 0)';
        }

        if (lastScrollPosition > dTop && dTop > criticalPoint) {
            element.classList.add('header--fixed');
            element.style.transform = 'translate3d(0, 0, 0)';
        } else if (lastScrollPosition > dTop && dTop < criticalPoint) {
        	element.style.transform = 'translate3d(0, -100%, 0)';
            setTimeout(function() {
                element.classList.remove('header--fixed');
            }, 100);
        } else if (lastScrollPosition < dTop && dTop > 300) {
            element.style.transform = 'translate3d(0, -100%, 0)';
            setTimeout(function() {
                element.classList.remove('header--fixed');
            }, 100);
        }

        if (lastScrollPosition > dTop && dTop < 300) {
            element.style.transform = 'translate3d(0, 0, 0)';
        }

        lastScrollPosition = dTop;
    });
}(document, window, 0));



// Adaptive menu init
document.querySelector('.header-navigation__open').addEventListener('click', function(e) {
    document.querySelector('.header-navigation').classList.add('header-navigation--opened');
});

document.querySelector('.header-navigation__close').addEventListener('click', function(e) {
    document.querySelector('.header-navigation').classList.remove('header-navigation--opened');
});

if (window.innerWidth < 768) {
    var navLinks = document.querySelectorAll('.navigation__item__link');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].onclick = function() {
            document.querySelector('.header-navigation').classList.remove('header-navigation--opened');
        };
    };
};



// Tippy init
var tippyElems = document.querySelectorAll('.js-tooltip');
tippy(tippyElems, {
    trigger: 'mouseenter focus click',
    placement: 'bottom-start',
    animation: 'scale',
    theme: 'optic'
});



// Form control behaviour
var formControls = document.querySelectorAll('.js-label-control');
for (var i = 0; i < formControls.length; i++) {
    formControls[i].querySelector('input').addEventListener('blur', function() {
        if (this.value == '') {
            this.parentElement.classList.remove('form-group--active');
        } else {
            this.parentElement.classList.add('form-group--active');
        };
    });
    formControls[i].querySelector('input').addEventListener('focus', function() {
        if (this.value == '') {
            this.parentElement.classList.add('form-group--active');
        };
    });
};



// Smooth scroll
var items = document.querySelectorAll('a.js-smooth');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        item.addEventListener('click', function (e) {
            e.preventDefault();

            ScrollTo(this.hash, { duration: 400, offset: 0 });
        }, true);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
};

var ScrollTo = function ScrollTo(target, options) {
    var start = window.pageYOffset;
    var opts = {
        duration: options.duration,
        offset: options.offset || 0,
        callback: options.callback,
        easing: options.easing || _easeInOutQuad
    };
    var distance = typeof target === 'string' ? opts.offset + document.querySelector(target).getBoundingClientRect().top : target;
    var duration = typeof opts.duration === 'function' ? opts.duration(distance) : opts.duration;
    var timeStart = void 0,
        timeElapsed = void 0;

    requestAnimationFrame(function (time) {
        timeStart = time;
        _loop(time);
    });

    // loop
    var _loop = function _loop(time) {
        timeElapsed = time - timeStart;

        window.scrollTo(0, opts.easing(timeElapsed, start, distance, duration));

        if (timeElapsed < duration) requestAnimationFrame(_loop);else end();
    };

    // end
    var end = function end() {
        window.scrollTo(0, start + distance);

        if (typeof opts.callback === 'function') opts.callback();
    };

    // easing
    function _easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
};



// Map initial
var map;
function initMap() {
    var mapCenter = {
        lat: 55.825764,
        lng: 37.651320
    };

    map = new google.maps.Map(document.getElementById('map'), {
        center: mapCenter,
        zoom: 17,
        disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
        position: mapCenter,
        icon: '../img/contacts/placeholder.png',
        map: map
    });
};



// Input phone mask
var phoneInput = document.querySelector('.js-mask--phone');
phoneInput.addEventListener('keydown', function(event) {
    if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
        event.preventDefault()
    };
    var mask = '+7 (111) 111 11 11';

    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
        var currentString = this.value;
        var currentLength = currentString.length;
        if (/[0-9]/.test(event.key)) {
            if (mask[currentLength] == '0') {
                this.value = currentString + event.key;
                // this.value = '+7';
            } else {
                for (var i = currentLength; i < mask.length; i++) {
                    if (mask[i] == '1') {
                        this.value = currentString + event.key;
                        break;
                    };
                    currentString += mask[i];
                };
            };
        };
    };
});
