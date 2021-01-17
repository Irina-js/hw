const oneUSDInUAH = 30;

for (let i = 10; i <= 100; i += 10) {
 	const resultExchange = oneUSDInUAH*i;
 	console.log(`${i}$ = ${resultExchange} грн `);
}
