/**
 * form-serialize v0.2.1
 *
 * Copyright 2017, Dimitar Ivanov (https://zinoui.com/)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
 function serialize(form) {
	if (!form || form.nodeName !== "FORM") {
		return;
	}
	var i, j, q = [];
	for (i = form.elements.length - 1; i >= 0; i = i - 1) {
		if (form.elements[i].name === "") {
			continue;
		}
		switch (form.elements[i].nodeName) {
		case 'INPUT':
			switch (form.elements[i].type) {
			case 'text':
			case 'hidden':
			case 'password':
			case 'button':
			case 'reset':
			case 'submit':
			case 'color':
			case 'date':
			case 'datetime-local':
			case 'email':
			case 'month':
			case 'number':
			case 'range':
			case 'search':
			case 'tel':
			case 'time':
			case 'url':
			case 'week':
				q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
				break;
			case 'checkbox':
			case 'radio':
				if (form.elements[i].checked) {
					q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
				}
				break;
			case 'file':
				break;
			}
			break;
		case 'TEXTAREA':
			q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
			break;
		case 'SELECT':
			switch (form.elements[i].type) {
			case 'select-one':
				q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
				break;
			case 'select-multiple':
				for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
					if (form.elements[i].options[j].selected) {
						q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
					}
				}
				break;
			}
			break;
		case 'BUTTON':
			switch (form.elements[i].type) {
			case 'reset':
			case 'submit':
			case 'button':
				q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
				break;
			}
			break;
		}
	}
	return q.join("&");
};



// get all data in form and return object
function getFormData() {
    var form = document.querySelector('form');
    var elements = form.elements; // all form elements
    var fields = Object.keys(elements).map(function(k) {
        if(elements[k].name !== undefined) {
            return elements[k].name;
        // special case for Edge's html collection
        } else if(elements[k].length > 0) {
            return elements[k].item(0).name;
        };
    }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
    });
    var data = {};
    fields.forEach(function(k) {
        data[k] = elements[k].value;
        var str = '';
        if(elements[k].type === 'checkbox') {
            str = str + elements[k].checked + ', ';
            data[k] = str.slice(0, -2);
        } else if(elements[k].length) {
            for(var i = 0; i < elements[k].length; i++) {
                if(elements[k].item(i).checked) {
                    str = str + elements[k].item(i).value + ', '; // same as above
                    data[k] = str.slice(0, -2);
                };
            };
        };
    });

    // add form-specific values into the data
    data.formDataNameOrder = JSON.stringify(fields);
    data.formGoogleSheetName = form.dataset.sheet || '3z Moscow'; // default sheet name
    data.formGoogleSendEmail = form.dataset.email || ''; // no email by default
    return data;
};





/*
 * Обработка формы
 */
var inputs = document.querySelectorAll('.form-group input.js-validate');
document.querySelector('form button').onclick = function(e) {
    e.preventDefault();
    if (formValidation(inputs)) {
        var formData = serialize(document.querySelector('.form'));
        var xhr1 = new XMLHttpRequest();
        xhr1.open('POST', '../form.php', true);
        xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr1.send(formData);
        xhr1.onreadystatechange = function() {
            if (xhr1.readyState != 4) return;
            if (xhr1.status != 200) {
                document.querySelector('.form-response.form-response--success').style.display = 'none';
                document.querySelector('.form-response.form-response--error').style.display = 'block';
            } else {
                document.querySelector('.form-response.form-response--error').style.display = 'none';
                document.querySelector('.form-response.form-response--success').style.display = 'block';
                var formControls = document.querySelectorAll('.form input');
                for (var i = 0; i < formControls.length; i++) {
                    formControls[i].value = '';
                    if (formControls[i].parentElement.classList.contains('form-group--active')) {
                        formControls[i].parentElement.classList.remove('form-group--active')
                    };
                    if (formControls[i].name == 'date') {
                        document.querySelector('.date label').style.display = 'block';
                    };
                    if (formControls[i].type == 'checkbox') {
                        formControls[i].checked == false;
                    };
                };
            };
        };


        var googleSheetUrl = 'link',
            googleData = getFormData();

        var xhr2 = new XMLHttpRequest();
        xhr2.open('POST', googleSheetUrl);
        xhr2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr2.onreadystatechange = function() {
            console.log(xhr2.status, xhr2.statusText);
            return;
        };
        var encoded = Object.keys(googleData).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(googleData[k])
        }).join('&')
        xhr2.send(encoded);
    };
};
