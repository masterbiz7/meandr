function validate(form){
	let text_fields = form.getElementsByTagName('input');
	let textarea = document.querySelector('.textarea');
	let validated = true;

	for (let i = 0; i < text_fields.length; i++) {
    if (text_fields[i].type != 'submit') {
        validated = validated && (text_fields[i].value !== '');

    }
    if (!validated) {
     alert('Fill the fields');
		}
		return validated;

	}
}

