const getCharTypes = () => {
	const uppercase = document.getElementById('uppercase-box').checked;
	const lowercase = document.getElementById('lowercase-box').checked;
	const symbols = document.getElementById('symbols-box').checked;
	const number = document.getElementById('number-box').checked;

	const charTypes = [];

	if (uppercase) {
		charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
	}
	if (lowercase) {
		charTypes.push('abcdefghijklmnopqrstuvwxyz');
	}
	if (symbols) {
		charTypes.push('!@#$%^&*()_+{}|:`<>?\\~-=[];,"./\' ');
	}
	if (number) {
		charTypes.push('0123456789');
	}
	return charTypes;
};

const randomCharTypes = (charTypes) => {
	// The function receives the array charTypes

	const randomIndex = Math.floor(Math.random() * charTypes.length);
	// The randomIndex is a random index from the charTypes array
	// Math.random generates a number between zero and one, which is multiplied by the array's length
	return charTypes[randomIndex][
		Math.floor(Math.random() * charTypes[randomIndex].length)
	];
};

const getPasswordSize = () => {
	const size = document.getElementById('size').value;
	if (isNaN(size) || size < 4 || size > 10) {
		alert('Invalid number, please enter a number between 4 and 10!');
	}
	return size;
};

const generatePassword = (size, charTypes) => {
	let passwordGenerated = '';
// Ensure that at least one character of each type is included
charTypes.forEach(charType => {
    passwordGenerated += randomCharFromType(charType);
});

	while (passwordGenerated.length < size) {
		passwordGenerated += randomCharTypes(charTypes);
	}
	return passwordGenerated;
};

document.getElementById('generate').addEventListener('click', () => {
	if (getCharTypes().length > 0) {
		document.getElementById('result').value = generatePassword(
			getPasswordSize(),
			getCharTypes()
		);
	} else {
		alert('Please select at least one option!');
	}
});

const copyClipboard = document.querySelector('.copyText');

copyClipboard.addEventListener('click', () => {
	const text = document.getElementById('result').value;
	navigator.clipboard.writeText(text); // Copy to clipboard
	alert('Text copied to clipboard!');
});
