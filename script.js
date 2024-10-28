//your JS code here. If required.
const allInputs = document.querySelectorAll('.code');

allInputs.forEach((input, i) => {
	input.oninput = () => {
		// input.onkeydown = (event) => {
		// 	if(event.key == 'Backspace' && i>0) {
		// 		allInputs[i-1].focus();
		// 		return;
		// 	}
		// }
		if(input.value != '' && i < allInputs.length-1) {
			allInputs[i+1].focus();
		}
		else if(input.value == '' && i > 0) {
			allInputs[i-1].focus();
		}
	}
})

// window.addEventListener('keydown', (event) => {
// 	console.log(event.key);
// })
