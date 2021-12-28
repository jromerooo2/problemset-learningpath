var maxProfit =  function(prices) {
    let max = 0;
    let minPrice = prices[0];
    
    for(let day of prices){
        const dayToBuy = day;

        const dayToSell = dayToBuy - minPrice;
        max = Math.max(dayToSell, max);
        minPrice = Math.min(minPrice, dayToBuy);
    }
    return max;
}

console.log(maxProfit([7,1,5,3,6,4]));