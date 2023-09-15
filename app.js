"use strict";
const num1element = document.getElementById("num1");
const num2element = document.getElementById("num2");
const buttonElement = document.querySelector("button");
function sum(num1, num2) {
    if (typeof num1 == "string" && typeof num2 == "string") {
        return num1 + num2 + " are String inputs";
    }
    else if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2 + " are number inputs";
    }
    return +num1 + +num2;
}
const numResults = [];
const stringresult = [];
function printResult(resObj) {
    console.log(resObj.val);
}
if (buttonElement) {
    buttonElement.addEventListener("click", () => {
        const num1 = num1element.value;
        const num2 = num2element.value;
        const result = sum(+num1, +num2);
        const stringres = sum(num1, num2);
        numResults.push(result);
        stringresult.push(stringres);
        console.log(numResults, stringresult);
        printResult({ val: result });
    });
}
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("IT WORKED");
    }, 1000);
});
myPromise.then((res) => {
    console.log(res.split("w"));
});
