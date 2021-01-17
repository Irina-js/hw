let result ="";

for(let i = 20; i <= 30; i += 0.5) {
	result += i === 20 ? i : ` ${i}, `
}
console.log(`Numbers from 20 to 30 with step 0.5 + ${result}`);