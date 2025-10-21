// 1. Create an array of strings and add a new element at the end of the array. Log the result.
let stringArray: string[] = ["aplle","orange", "pear"];
console.log("Before:", stringArray);
stringArray.push("strawberry");
console.log("After:", stringArray);

// 2. Create an array of numbers and remove the first element from the array. Log the result. 
let numbersArray: number[] = [5,10,15,20];
console.log("Before:", numbersArray);
numbersArray.shift();
console.log("After:", numbersArray);

/* Use the map method to create a new array and divide each number by 2  “num / 2”  from [1, 2, 3, 4, 5]. 
  Log the result.*/

let divideArray: number[] = [1,2,3,4,5];
let divided = divideArray.map((num: number) => num /2);
console.log(divided);


/* 4. Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4].
 Log the result. */
 let numsArray: number[] = [3,7,1,9,12,4];
 let greaterThanFive = numsArray.filter((num: number) => num >5);
 console.log(greaterThanFive);
 
 //5. Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.
 let sortArray: number[] = [9,3,7,2,8,5];
 let sorted = sortArray.sort();
 console.log(sorted);

 /* 6.Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry'].
  Log the result.*/
  let sliceArray: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  let sliced = sliceArray.slice(0,3);
  console.log(sliced);
  
 /* 7.Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] .
  Log the result.*/
  let spliceArray: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
  spliceArray.splice(1,2);
  console.log(spliceArray);
  
