// HOF : Higher Order Function --> Either pass a fn as an argument or it returns a fn

// const greet = (name) => {
//   return "Hello " + name;
// };

// const processUserInput = (callback) => {
//   const name = "Divyansh Singh";
//   console.log(callback(name));
// };

// processUserInput(greet);

// const add = (a) => {
//   return a + 2;
// };

// add(5);

// ------

// const processUserInput = () => {
//   const name = "Divyansh Singh";
//   const greet = (name) => {
//     // return `Hello ${name}`;
//     return "Hello " + name;
//   };
//   console.log(greet(name));
// };

// ------------------------------------------------------------------------

// Arrow
// const multiplier = (factor) => {
//   return (number) => {
//     return number * factor;
//   };
// };

// const twice = multiplier(2);

// // const twice = (number) => {
// //     return number * factor;
// //   };

// console.log(twice(5));

// function multiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const twice = multiplier(2);
// console.log(twice(5));

// ------------------------------------------------------------------------
// Arrow functions
// const greet = () => {};
() => {};

// // Primitive functions
// function greet() {
//   // logic
// }

// return function () {};

// add(7);
// add1(3);

// function add(a) {
//   console.log(a + 2);
// }

// const add1 = (a) => {
//   console.log(a + 2);
// };

// ------------------------------------------------------------------------
// Callback Functions

// function removeString(arr) {
//     // logic
//     return [1, 2, 4];
// }

// API call is made which brings [1, 2, 4, "divu"] as response
// ------------------------------------------------------------------------
