// arrays declaration

let numsArray: number[] = [1, 2, 3, 4];
let stringArray: string[] = ["Petar",'Ivan', "Georgi", "Todor"];
let combinedArray: (string | number)[] = [1, "Petar", 2, "Ivan"];

// access element by index
stringArray[0]; //Petar
stringArray[1]; //Ivan
stringArray[2]; //Georgi
console.log(stringArray[0]);
console.log(stringArray[1]);
console.log(stringArray[2]);
console.log();




//access array length

numsArray.length;

// method map
let multiplyNums = numsArray.map((indexValue: number) => indexValue * 2);
let mapNames = stringArray.map((indexString: string) => `Hello ${indexString}`);
let checkTypeOf = combinedArray.map((element: number | string) => {
    if(typeof element === "number"){
        return element + 5;
    }else{
        return `${element} is not number`;
    }
})
console.log(multiplyNums);
console.log(mapNames);
console.log(checkTypeOf);

let positiveNums: number[] =[2,3,4,5,6];
let filteredArr: number[] = positiveNums.filter((indexValue: number) => indexValue > 3);
console.log("filteredArr", filteredArr);

let sortNums: number[] = [100,2,30,5,41,6];
let sortedNums = sortNums.sort((a: number, b: number) => a-b);
console.log(sortedNums);

sortedNums.push(250);
console.log(sortedNums);

sortedNums.pop();
console.log(sortedNums);

sortedNums.shift();
console.log(sortedNums);

sortedNums.unshift(300);
console.log(sortedNums);