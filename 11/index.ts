const test = {
  aaa: ["you", "hhh"],
  you: ["bbb", "ccc"],
  bbb: ["ddd", "eee"],
  ccc: ["ddd", "eee", "fff"],
  ddd: ["ggg"],
  eee: ["out"],
  fff: ["out"],
  ggg: ["out"],
  hhh: ["ccc", "fff", "iii"],
  iii: ["out"],
};

// Find "you", check each item

const paths: string[] = [];

let path = "";

const findNext = (list: { [key: string]: string[] }, current: string) => {
  if (!list[current]) {
    path = "";

    return;
  }

  list[current].map((item, idx) => {
    if (item === "out") {
      path += "out";
      paths.push(path);
      path = "";

      return;
    }

    if (idx !== 0) path += current;

    path += item;
    findNext(list, item);
  });
};

findNext(test, "you");
// bbb -> ddd -> ggg -> out = youbbbdddgggout
// bbb -> eee -> out -> youbbbeeeout
// ccc -> ddd -> ggg -> out
// ccc -> eee -> out
// ccc -> fff -> out

console.log(paths.length);
console.log(paths);
