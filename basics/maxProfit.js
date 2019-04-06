var maxProfit = function(prices) {
    let total = 0;
    for(let i = 0; i < prices.length - 1; i++) {
        if(prices[i + 1] > prices[i]) total += (prices[i + 1] - prices[i]);
    }
    console.log(total);
    return total;
};

// const prices = [1,2,3,4,5];
const prices = [7,1,5,3,6,4];
maxProfit(prices);