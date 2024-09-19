let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("Data fetched successfully");
    } else {
      reject("Error fetching data");
    }
  }, 2000);
});

// promise
//   .then((promise2) => {
//     promise2
//       .then((promise3) => {
//         promise3
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((err03) => {
//             console.elog(err03);
//           });
//       })
//       .catch((err2) => {
//         console.log(err2);
//       });
//   })
//   .catch((cat) => {
//     console.log(cat);
//   });

// async/await

// try {
//   const promise1 = await async1();
//   const promise2 = await promise1();
//   const promise3 = await promise2();
//   const data = promise3();
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }
