let arr1 = ["asdf", "lkjh", "qwer", "poiu"];
let arr2 = ["rewq", "uiop", "fdsa", "hjkl"];
for (i = 0; i < arr1.length; i++) {
  let arr3 = arr1[i].split("").sort().join("");
  for (j = 0; j < arr2.length; j++) {
    let arr4 = arr2[j].split("").sort().join("");
    if (arr3 === arr4) {
      console.log(i, j);
    }
  }
}

let arr1 = ["asdf", "lkjh", "qwer", "poiu"];
let arr2 = ["rewq", "uiop", "fdsa", "hjkl"];
for (i = 0; i < arr1.length; i++) {
  let arr3 = arr1[i].split("").sort().join("");
  for (j = 0; j < arr2.length; j++) {
    let arr4 = arr2[j].split("").sort().join("");
    if (arr3 === arr4) {
      console.log(i, j);
    }
  }
}

const adc = (a) => {
  return (b) => {
    return (c) => {
      return (d) => {
        return a + b + c + d;
      };
    };
  };
};
let a = adc(5)(5)(5)(5);
console.log(a);
