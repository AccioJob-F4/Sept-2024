const readline = require("readline");

function deleteProperty(obj, x) {
  delete obj[x];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let obj = {};
let keyToDelete = "";

let count = 0;

rl.on("line", (line) => {
  count++;

  if (count === 1) {
    n = parseInt(line.trim(), 10);
  } else if (count > 1 && count <= n + 1) {
    let [key, val] = line.trim().split(" ");
    obj[key] = val;
  } else if (count === n + 2) {
    keyToDelete = line.trim();
    rl.close();
  }
});

rl.on("close", () => {
  deleteProperty(obj, keyToDelete);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key} ${obj[key]}`);
    }
  }
});
