// CASH REGISTER 24032023

function checkCashRegister(price, cash, cid) {
    const currencyValues = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    let changeDue = cash - price;
    let change = [];
  
    let totalCID = 0;
    cid.forEach(element => {
      totalCID += element[1];
    });
  
    if (changeDue > totalCID) {
      return { status: "INSUFFICIENT_FUNDS", change: change };
    } else if (changeDue.toFixed(2) === totalCID.toFixed(2)) {
      return { status: "CLOSED", change: cid };
    } else {
      cid = cid.reverse();
      for (let i = 0; i < cid.length; i++) {
        const currencyName = cid[i][0];
        const currencyAmount = cid[i][1];
        const currencyValue = currencyValues[currencyName];
        let currencyCount = currencyAmount / currencyValue;
        let currencyToReturn = 0;
  
        while (changeDue >= currencyValue && currencyCount > 0) {
          changeDue -= currencyValue;
          changeDue = Math.round(changeDue * 100) / 100;
          currencyCount--;
          currencyToReturn++;
        }
  
        if (currencyToReturn > 0) {
          change.push([currencyName, currencyToReturn * currencyValue]);
        }
      }
    }
  
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: change };
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));