const a = {
  key1: "val1",
  key2: "val2",
  key3: {
    key4: "val4",
    key5: "val5",
  },
};

// const b = a;

// b.key1 = "hola";
// const c = Object.assign({}, a);
// const d = { ...a };

// console.log(a);
// console.log(b);
// console.log("-----------");

// b.key3.key4 = "random0";
// console.log(a);
// console.log(b);
// console.log("-----------");
// c.key3.key4 = "random1";
// console.log(a);
// console.log(c);
// console.log("-----------");
// d.key3.key4 = "random2";
// console.log(a);
// console.log(d);

// console.log(typeof JSON.stringify(a));
// JSON.parse()

// const deepCopy = JSON.parse(JSON.stringify(a));
// console.log("🚀 ~ deepCopy:", deepCopy);
// console.log("🚀 ~ a:", a);
// console.log("-----------");
// deepCopy.key1 = "hola";
// console.log("🚀 ~ deepCopy:", deepCopy);
// console.log("🚀 ~ a:", a);

const company = {
  name: "Razorpay",
  location: {
    city: "Bangalore",
    Country: "India",
  },
  employees: {
    software: {
      frontend: {
        lead: "Tarun",
        teamSize: "23",
        teamName: "i18n",
      },
      backend: {
        lead: "Arif",
        teamSize: "23",
        teamName: "i18n",
      },
    },
    hr: {
      lead: "Anamika",
      teamSize: "33",
    },
  },
};

const deepCopy = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Arrays
  if (Array.isArray(obj)) {
    const arrCopy = [];

    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepCopy(obj[i]); // Recursion
    }

    return arrCopy;
  }

  // Handle Objects
  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]); // Recursion
    }
  }

  return copy;
};

const b = deepCopy(company);
console.log("🚀 ~ company:", company);
console.log("🚀 ~ b:", b);
console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");
b.name = "Curlec";

console.log("🚀 ~ company:", company);
console.log("🚀 ~ b:", b);
