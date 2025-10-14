let num: number = 5
num = 10;
num = 15;

const welcomeMsg: string = "Wlcome";

let message: string = "Hello, Peter!";
let messageLenght: number = message.length;
console.log(messageLenght);


//string interpolation

let welcomeMessageDetails: string = `Text message length is ${messageLenght}`
console.log(welcomeMessageDetails);

let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let substract: number = numOne - numTwo;
let multiply: number = numOne * numOne;
let devide: number = numOne / numTwo;

//boolean

let areEqual: boolean = numOne === numTwo;
console.log("areEqual", areEqual);

let isGreater: boolean = numOne > numTwo;

console.log("isGreater", isGreater);

//logical operators

let areEqualTo: boolean = numOne === 10 && numTwo === 6;
let isAnyNumEqualTo: boolean = numOne === 10 || numTwo === 6;

console.log("areEqualTo", areEqual);
console.log("isAnyNumEqualTo", isAnyNumEqualTo);

//ternary operator

let positiveNumComparison: string = numOne > 0 ? `The ${numOne} is positive` : `The ${numOne} is negative`
console.log(positiveNumComparison);

//if/else statement


if(numOne > 3){
    console.log("numOne is greater than 3");

}else{
    console.log("numOne is not greater than 3");
}

