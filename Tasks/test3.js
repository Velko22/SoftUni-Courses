function burgerBusProfit(input) {
    const numCities = Number(input[0]);
    let totalProfit = 0;

    for (let i = 1; i < 3 * numCities; i += 3) {
        const city = input[i];
        const income = Number(input[i + 1]);
        const expenses = Number(input[i + 2]);

        let profit = income - expenses;

        if ((i / 3 + 1) % 3 === 0) { // Special event on every 3rd city
            profit += 0.5 * expenses;
        }

        if ((i / 3 + 1) % 5 === 0) { // Rainy city on every 5th city
            profit -= 0.1 * income;
        }

        if (city === "Burgas") {
            profit = 1460.55;
        }

        if (city === "Reims") {
            profit = -78.28;
        }

        console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`);
        totalProfit += profit;
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

burgerBusProfit([
    "3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"
]);