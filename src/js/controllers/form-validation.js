/*
 * Form validation
 */
function formValidation(controls) {

    function createError(element, content) {
        var errorTip = document.createElement('div');
        errorTip.className = 'error-text';
        errorTip.innerHTML = content;
        element.appendChild(errorTip);
    };

    function removeError(element) {
        element.removeChild(element.querySelector('.error-text'));
    };

    var errors = 0;
    for (var i = 0; i < controls.length; i++) {

        if (controls[i].getAttribute('type') == 'text' && controls[i].value == '') {
            errors += 1;
            controls[i].parentElement.classList.add('error');
            if (!controls[i].parentElement.querySelector('.error-text')) {
                createError(controls[i].parentElement, controls[i].getAttribute('data-error-text'));
            };
        } else if(controls[i].getAttribute('type') == 'email' && controls[i].value == '') {
            errors += 1;
            controls[i].parentElement.classList.add('error');
            if (!controls[i].parentElement.querySelector('.error-text')) {
                createError(controls[i].parentElement, controls[i].getAttribute('data-error-text'));
            };
        } else if(controls[i].getAttribute('type') == 'hidden' && controls[i].value == '') {
            errors += 1;
            controls[i].parentElement.classList.add('error');
            if (!controls[i].parentElement.querySelector('.error-text')) {
                createError(controls[i].parentElement, controls[i].getAttribute('data-error-text'));
            };
        } else if (controls[i].getAttribute('type') == 'checkbox' && controls[i].checked == false) {
            errors += 1;
            controls[i].parentElement.classList.add('error');
        };

        if (controls[i].getAttribute('type') == 'text' && controls[i].value != '') {
            controls[i].parentElement.classList.remove('error');
            if (controls[i].parentElement.querySelector('.error-text')) {
                removeError(controls[i].parentElement);
            };
        } else if(controls[i].getAttribute('type') == 'email' && controls[i].value != '') {
            controls[i].parentElement.classList.remove('error');
            if (controls[i].parentElement.querySelector('.error-text')) {
                removeError(controls[i].parentElement);
            };
        } else if(controls[i].getAttribute('type') == 'hidden' && controls[i].value != '') {
            controls[i].parentElement.classList.remove('error');
            if (controls[i].parentElement.querySelector('.error-text')) {
                removeError(controls[i].parentElement);
            };
        } else if (controls[i].getAttribute('type') == 'checkbox' && controls[i].checked == true) {
            controls[i].parentElement.classList.remove('error');
            if (controls[i].parentElement.querySelector('.error-text')) {
                removeError(controls[i].parentElement);
            };
        };
    };
    if (errors == 0) {
        return true;
    } else {
        document.querySelectorAll('.form-group.error input')[0].focus();
        return false;
    };
};
