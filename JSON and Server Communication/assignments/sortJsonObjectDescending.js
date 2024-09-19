function DecendingSort(a, b) {
  //Write your code here

  return b.libraryID - a.libraryID;
}

// DO NOT CHANGE THE CODE BELOW
var readline = require("readline").createInterface(process.stdin);
readline.on("line", readInputs);

function readInputs(line) {
  let obj = JSON.parse(line);
  var sortedObj = obj.sort(DecendingSort);
  for (var i = 0; i < sortedObj.length; i++) {
    console.log(
      sortedObj[i].title +
        "-" +
        sortedObj[i].author +
        "-" +
        sortedObj[i].libraryID
    );
  }
  readline.close();
}
