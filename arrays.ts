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
