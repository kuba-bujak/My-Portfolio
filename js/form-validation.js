
// validate form

const validateForm = formSelector => {
	const formElement = document.querySelector(formSelector);

		// validation options

		const validationOptions = [
			{
				attribute: 'minlength',
				isValid: input => input.value && input.value.length >= parseInt(input.minLength, 10),
				errorMessage: (input, label) => `${label.textContent} needs to be at least ${input.minLength} characters`
			},
			{
				attribute: 'custommaxlength',
				isValid: input => input.value && input.value.length <= parseInt(input.getAttribute('custommaxlength'), 10),
				errorMessage: (input, label) => `${label.textContent} needs to be less than ${input.getAttribute('custommaxlength')} characters`
			},
			{
				attribute: 'pattern',
				isValid: input => {
					const patternRegex = new RegExp(input.pattern);
					return patternRegex.test(input.value);
				},
				errorMessage: (input, label) => `Not a valid ${label.textContent}`
			},
			{
				attribute: 'required',
				isValid: input => input.value.trim() !== '',
				errorMessage: (input, label) => `${label.textContent} is required`
			}
		]

		// validate single input

		const validateSingleFormGroup = formGroup => {
			const label  = formGroup.querySelector('label');
			const input  = formGroup.querySelector('input, textarea');
			const  errorIcon = formGroup.querySelector('.error-icon');
			const  checkIcon = formGroup.querySelector('.check-icon');
			const  errorMessage = formGroup.querySelector('.error-message');

			// check error and display it

			let formGroupError = false;
			for (const option of validationOptions) {
				if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
					errorMessage.textContent = option.errorMessage(input, label);
					input.classList.add('border-red');
					input.classList.remove('border-green');
					checkIcon.classList.add('hidden');
					errorIcon.classList.remove('hidden');
					formGroupError = true;
				}
			}

			// clear error message

			if (!formGroupError) {
				input.classList.add('border-green');
				input.classList.remove('border-red');
				checkIcon.classList.remove('hidden');
				errorIcon.classList.add('hidden');
				errorMessage.textContent = '';
			}
		};



	// no validate form

	formElement.setAttribute('novalidate', '');

	// blur validation

	Array.from(formElement.elements).forEach(element => {
		element.addEventListener('blur', event => {
			validateSingleFormGroup(event.srcElement.parentElement);
		})
	})

	// submit validation

	formElement.addEventListener('submit', (event) => {
		event.preventDefault();
		validateAllFormGroups(formElement);

	});

	// get each validate input into array

	const validateAllFormGroups = formToValidate => {
		const formGroups = Array.from(formToValidate.querySelectorAll('.contact-input'));

		formGroups.forEach(formGroup => {
			validateSingleFormGroup(formGroup);
		});
	}
};

validateForm('#registration-form');