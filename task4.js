
const number = prompt ('Please enter your number ')
let primeNumber = true;

for (let i = 2; i < number; i++) {
	
	if (number % i === 0) {
		primeNumber = false
		break;
	} 
} 
console.log (`number ${number} prime - ${primeNumber}`);
