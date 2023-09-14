var num1element = document.getElementById("num1");
var num2element = document.getElementById("num2");
var buttonElement = document.querySelector("button");
function sum(num1, num2) {
  if (typeof num1 == "string" && typeof num2 == "string") {
    return num1 + num2 + " are String inputs";
  } else if (typeof num1 == "number" && typeof num2 == "number") {
    return num1 + num2 + " are number inputs";
  }
  return +num1 + +num2;
}
var numResults = [];
var stringresult = [];
function printResult(resObj) {
  console.log(resObj.val);
}
if (buttonElement) {
  buttonElement.addEventListener("click", function () {
    var num1 = num1element.value;
    var num2 = num2element.value;
    var result = sum(+num1, +num2);
    var stringres = sum(num1, num2);
    numResults.push(result);
    stringresult.push(stringres);
    console.log(numResults, stringresult);
    printResult({ val: result });
  });
}
var myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("IT WORKED");
  }, 1000);
});
myPromise.then(function (res) {
  console.log(res.split("w"));
});
