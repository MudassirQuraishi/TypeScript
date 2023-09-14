const num1element = document.getElementById("num1") as HTMLInputElement;
const num2element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

type NumorStr = number | string;

type result = { val: number };

interface resultOBj {
  val: number;
}

function sum(num1: NumorStr, num2: NumorStr) {
  if (typeof num1 == "string" && typeof num2 == "string") {
    return num1 + num2 + " are String inputs";
  } else if (typeof num1 == "number" && typeof num2 == "number") {
    return num1 + num2 + " are number inputs";
  }

  return +num1 + +num2;
}

const numResults: number[] = [];
const stringresult: string[] = [];

function printResult(resObj: result) {
  console.log(resObj.val);
}
if (buttonElement) {
  buttonElement.addEventListener("click", () => {
    const num1 = num1element.value;
    const num2 = num2element.value;
    const result = sum(+num1, +num2);
    const stringres = sum(num1, num2);
    numResults.push(result as number);
    stringresult.push(stringres as string);
    console.log(numResults, stringresult);
    printResult({ val: result as number });
  });
}

const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("IT WORKED");
  }, 1000);
});

myPromise.then((res) => {
  console.log(res.split("w"));
});
