//write function counting number of coins for the given amount and coin values

function makeChange(amount, coins) {
    let numberOfCoins = 0;
  
    coins.sort((a,b) => b - a);
  
    function divideAndCount(num) {
      if (num == 0) return;
  
      for (let i = 0; i < coins.length; i++) {
        if (num / coins[i] == 1) {
          numberOfCoins++;
          return;
        } else if (num / coins[i] > 1) {
          numberOfCoins = numberOfCoins + Math.trunc(num / coins[i]);
          divideAndCount(num % coins[i]);
          break;
        }
      }
    }
  
    divideAndCount(amount);
  
    return numberOfCoins;
  }
  
  makeChange(126, [1, 8, 10, 20])