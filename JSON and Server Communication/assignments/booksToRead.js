function getInfo(obj) {
  //Write your code here
  obj.forEach((book) => {
    if (!book.readingStatus) {
      console.log(`${book.title}-${book.author}`);
    }
  });
}

// Dont change the driver code given below
var readline = require("readline").createInterface(process.stdin);

readline.on("line", readInputs);

function readInputs(line) {
  let obj = JSON.parse(line);
  getInfo(obj);
  readline.close();
}
