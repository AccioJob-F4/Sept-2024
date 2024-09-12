// let person = { firstname: "divyansh", lastname: "singh" };

// console.log("🚀 ~ person:", person.firstname); // Dot Notation
// console.log("🚀 ~ person:", person["lastname"]); // Brackett Notation
// let person2 = new Object();
// console.log("🚀 ~ person2:", person2);
// person2.arif = "how many visstles did the cooker make ?";
// person2.srijan = "did arif tell anything to you about turning the gas off ?";
// person2.imposter = "Durgesh";
// console.log("🚀 ~ person2:", person2);

// person2.arif = "I heard 2 whistels.";
// console.log("🚀 ~ person2:", person2);

// delete person2.imposter;

// console.log("🚀 ~ person2:", person2);

// let person3 = { a: 1, b: 2, a: 3 };

// console.log("🚀 ~ person3:", person3);

// let person = {
//   firstname: "divyansh",
//   lastname: "singh",
//   address: {
//     houseNo: 53,
//     block: "3rd block",
//     road: "Jakasandra road",
//     city: "bengaluru",
//   },
// };

// const f = {
//   firstname: "divyansh",
//   lastname: "singh",
//   "address.houseNo": 53,
//   "address.block": "3rd block",
//   "address.road": "Jakasandra road",
//   "address.city": "bengaluru",
// };
// console.log("lastname" in person);
// console.log("houseNo" in person.address);

// console.log(person.hasOwnProperty("lastname"));
// console.log(person.address.hasOwnProperty("houseNo"));

// ------------------------------------------------------------

// for....in loop
// for (let dunes in person) {
//   if (typeof person[dunes] === "object" && !Array.isArray(person[dunes])) {
//     for (let ladies in person[dunes]) {
//       console.log("key: ", ladies, " and value is: ", person[dunes][ladies]);
//     }
//   } else console.log("key: ", dunes, " and value is: ", person[dunes]);
// }

// Object.keys(), Object.values(), Object.entries()
// console.log("Object.keys(person): ", Object.keys(person));
// console.log("Object.values(person): ", Object.values(person));
// console.log("Object.entries(person): ", Object.entries(person));

// Destructuring Objects
// let person = {
//   firstname: "divyansh",
//   lastname: "singh",
//   address: {
//     houseNo: 53,
//     block: "3rd block",
//     road: "Jakasandra road",
//     city: "bengaluru",
//   },
// };

// const { firstname: fName, lastname } = person;
// // console.log("🚀 ~ address:", address);
// console.log("🚀 ~ lastname:", lastname);
// console.log("🚀 ~ fName:", fName);

// const company = {
//   name: "Razorpay",
//   location: {
//     city: "Bangalore",
//     Country: "India",
//   },
//   employees: {
//     software: {
//       frontend: {
//         lead: "Tarun",
//         teamSize: "23",
//         teamName: "i18n",
//       },
//       backend: {
//         lead: "Arif",
//         teamSize: "23",
//         teamName: "i18n",
//       },
//     },
//     hr: {
//       lead: "Anamika",
//       teamSize: "33",
//     },
//   },
// };

// const { name: companyName, ...rest } = company;
// console.log("🚀 ~ rest:", rest);
// console.log("🚀 ~ companyName:", companyName);

// const {
//   name: companyName,
//   location: { city: companyCity },
//   employees: {
//     software: {
//       frontend: { lead: frontendLead },
//     },
//   },
// } = company;

// console.log(companyName, companyCity, frontendLead);

// company.employees.software.frontend.lead

// const lastname = "Singh";
// const person = {
//   firstName: "Divyansh",
//   lastname,
// };

// const person = {
//   firstName: "Divyansh",
//   lastname: lastname,
// };
// console.log("🚀 ~ person:", person);
