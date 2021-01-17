const number = prompt ('Please enter your number ')

for(let i = 1; i <= 100; i++) {
	const square = Math.pow(i,2);
	if (square > number) {
		break;
		} else { 
console.log(`Square these numbers: ${i} does not exceed ${number}` );
		}
}

 
