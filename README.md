##Easy Select JS

** This Package created to help some developers and shorten some time and some code.**

####Usage:
```javascript
const easySelect = require('easy-select');


var myString = "String 123456 EndString";

var onlyText = easySelect.SelectText(myString);

var onlyNumbers = easySelect.SelectNumbers(myString);

var Between = easySelect.SelectBetween(myString, "1", "6");

var From = easySelect.SelectBetween(myString, "4");

var To = asySelect.SelectTo(myString, "3");

console.log("Only Text: " + onlyText); //output: "String EndString";
console.log("Only Numbers: " + onlyNumbers); //output: "123456";
console.log("Between: " + Between); //output: "2345";
console.log("From: " + From); //output: "56 EndString";
console.log("To: " + To); //output: "String 12";
```