// ------------------------------------------------------------------------
// const arr = new Array(5); // sparse array
// const arr2 = [];
// arr[0] = 1;
// console.log(mixedArray[5]);

// Length
// console.log(mixedArray.length);

// const twoD_Arr1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const twoD_Arr2 = new Array(3);
// for (let i = 0; i < 3; i++) {
//   twoD_Arr2[i] = new Array(3);
// }

// console.log(twoD_Arr1[1][1]);

// ------------------------------------------------------------------------
let numbers = [1, 2, 3, 4, 5, 6, 7];

// let fruits = ["banana", "apple", "mango", "banana", "pineapple"];

let mixedArray = [
  1,
  true,
  null,
  undefined,
  "heenu",
  [1, true, null, undefined, "heenu"],
  { a: 1, b: 2 },
];

// aRRAY mANIPULATION
// ------------------------------------------------------------------------
// push() and pop()

// console.log(numbers.push(8));
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);
// ------------------------------------------------------------------------
// shift() and unshift()
// numbers.unshift(0);
// console.log(numbers);

// numbers.shift();
// console.log(numbers);
// ------------------------------------------------------------------------

// splice(index, count of deletion, adding elements);
// remove 1 element from index 1
// fruits.splice(1, 1);
// console.log(fruits);

// // add 2 elements at index 1
// fruits.splice(1, 0, "tomato", "grapes");
// console.log(fruits);

// fruits.splice(1, 2);
// console.log(fruits);
// ------------------------------------------------------------------------

// indexOf() and lastindexOf()
// console.log(fruits.indexOf("banana"));
// console.log(fruits.indexOf("mango"));
// console.log(fruits.indexOf("divyansh"));
// console.log("-----------");
// console.log(fruits.lastIndexOf("banana"));
// console.log(fruits.lastIndexOf("mango"));
// console.log(fruits.lastIndexOf("divyansh"));
// ------------------------------------------------------------------------

// find and findIndex()
// let people = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Jack", age: 20 },
// ];

// let person = people.find((p) => p.age < 30);
// let personIndex = people.findIndex((p) => p.age < 30);
// console.log("🚀 ~ personIndex:", personIndex);
// console.log("🚀 ~ person ~ person:", person);
// ------------------------------------------------------------------------

// const evenNumbers = numbers.map((element, idx) => {
//   if (element % 2 == 0) return element;
// });

// console.log(evenNumbers);
// console.log(numbers);

// const evenNumbers = numbers.filter((p) => p % 2 == 0);
// console.log(evenNumbers);
// ------------------------------------------------------------------------

// slice();
// console.log(numbers.slice(1, 4));
// ------------------------------------------------------------------------

let fruits = ["banana", "apple", "mango", "pineapple"];
// const banana = fruits[0];
// const apple = fruits[1];

const [banana, ...rest] = fruits;

console.log({ banana, rest });
