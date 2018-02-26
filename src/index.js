// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        var coins = {"H":null,"Q":null,"D":null,"N":null,"P":null};
        var denom = {"H":50,"Q":25,"D":10,"N":5,"P":1};
        for (var key in denom) {
            coins[key] = Math.floor(currency / denom[key]);
            currency -= denom[key] * coins[key];
        }
        for (var key in coins) {
          if ((coins[key] <= 0)) {
            delete coins[key];
          }
        } 
    }     
    return coins;
}
