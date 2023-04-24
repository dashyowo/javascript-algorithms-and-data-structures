// Palindrome Checker
function palindrome(str) {
    let newStr = str.toLowerCase().replace(/[\W_]/g, '');
    return newStr === newStr.split('').reverse().join('');
  }
  
  console.log(palindrome("eye")); // true
  console.log(palindrome("_eye")); // true
  console.log(palindrome("race car")); // true
  console.log(palindrome("not a palindrome")); // false
  console.log(palindrome("A man, a plan, a canal. Panama")); //true
  console.log(palindrome("never odd or even")); // true
  console.log(palindrome("nope")); // false
  console.log(palindrome("almostomla")); // false
  console.log(palindrome("My age is 0, 0 si ega ym.")); // true
  console.log(palindrome("1 eye for of 1 eye.")); // false
  console.log(palindrome("0_0 (: /-\ :) 0-0")); // true
  console.log(palindrome("five|\_/|four")); // false



// Roman Numeral Converter
function convertToRoman(num) {
    const romanToNum = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let result = '';
    for (let key in romanToNum) {
      while (num >= romanToNum[key]) {
        result += key;
        num -= romanToNum[key];
      }
    }
    return result;
  }
  
  console.log(convertToRoman(2)); // "II"
  console.log(convertToRoman(3)); // "III"
  console.log(convertToRoman(4)); // "IV"
  console.log(convertToRoman(5)); // "V"
  console.log(convertToRoman(9)); // "IX"
  console.log(convertToRoman(12)); // "XII"
  console.log(convertToRoman(16)); // "XVI"
  console.log(convertToRoman(29)); // "XXIX"
  console.log(convertToRoman(44)); // "XLIV"
  console.log(convertToRoman(45)); // "XLV"
  console.log(convertToRoman(68)); // "LXVIII"
  console.log(convertToRoman(83)); // "LXXXIII"
  console.log(convertToRoman(97)); // "XCVII"
  console.log(convertToRoman(99)); // "XCIX"
  console.log(convertToRoman(400)); // "CD"
  console.log(convertToRoman(500)); // "D"
  console.log(convertToRoman(501)); // "DI"
  console.log(convertToRoman(649)); // "DCXLIX"
  console.log(convertToRoman(798)); // "DCCXCVIII"
  console.log(convertToRoman(891)); // "DCCCXCI"
  console.log(convertToRoman(1000)); // "M"
  console.log(convertToRoman(1004)); // "MIV"
  console.log(convertToRoman(1006)); // "MVI"
  console.log(convertToRoman(1023)); // "MXXIII"
  console.log(convertToRoman(2014)); // "MMXIV"
  console.log(convertToRoman(3999)); // "MMMCMXCIX"



// Caesars Cipher
function rot13(str) {
    let decoded = "";
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char.match(/[A-Z]/)) {
        let code = str.charCodeAt(i) - 65;
        code = (code + 13) % 26;
        char = String.fromCharCode(code + 65);
      }
      decoded += char;
    }
    return decoded;
  }
  console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
  console.log(rot13("SERR CVMMN!")); // FREE PIZZA!
  console.log(rot13("SERR YBIR?")); // FREE LOVE?
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.



// Telephone Number Validator
function telephoneCheck(str) {
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    return regex.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555")); // true
  console.log(telephoneCheck("1 555-555-5555")); // true
  console.log(telephoneCheck("1 (555) 555-5555")); // true
  console.log(telephoneCheck("5555555555")); // true
  console.log(telephoneCheck("555-555-5555")); // true
  console.log(telephoneCheck("(555)555-5555")); // true
  console.log(telephoneCheck("1(555)555-5555")); // true
  console.log(telephoneCheck("555-5555")); // false
  console.log(telephoneCheck("5555555")); // false
  console.log(telephoneCheck("1 555)555-5555")); // false
  console.log(telephoneCheck("1 555 555 5555")); // true
  console.log(telephoneCheck("1 456 789 4444")); // true
  console.log(telephoneCheck("123**&!!asdf#")); // false
  console.log(telephoneCheck("55555555")); // false
  console.log(telephoneCheck("(6054756961)")); // false
  console.log(telephoneCheck("2 (757) 622-7382")); // false
  console.log(telephoneCheck("0 (757) 622-7382")); // false
  console.log(telephoneCheck("-1 (757) 622-7382")); // false
  console.log(telephoneCheck("2 757 622-7382")); // false
  console.log(telephoneCheck("10 (757) 622-7382")); // false
  console.log(telephoneCheck("27576227382")); // false
  console.log(telephoneCheck("(275)76227382")); // false
  console.log(telephoneCheck("2(757)6227382")); // false
  console.log(telephoneCheck("2(757)622-7382")); // false
  console.log(telephoneCheck("555)-555-5555")); // false
  console.log(telephoneCheck("(555-555-5555")); // false
  console.log(telephoneCheck("(555)5(55?)-5555")); // false
  console.log(telephoneCheck("55 55-55-555-5")); // false
  console.log(telephoneCheck("11 555-555-5555")); // false



// Cash Register
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