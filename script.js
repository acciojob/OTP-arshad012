//your JS code here. If required.
const allInputs = document.querySelectorAll('.code');
allInputs.forEach((input) => {
	input.addEventListener('input', (e) => {
		const target = e.target;
		const val = target.value;
		if (val != "") {
	        const next = target.nextElementSibling;
	        if (next) {
	            next.focus();
	        }
	    }
	});
});

allInputs.forEach((input) => {
	input.addEventListener('keyup', (e) => {
		const target = e.target;
		const key = e.key.toLowerCase();
		if(key == 'backspace' || key == 'delete') {
			const pre = target.previousElementSibling;
			if(pre) {
				pre.focus();
			}
		}
	})
})

