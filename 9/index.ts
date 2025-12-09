import { data } from "./data.ts";

const values = data.split(/\n/).filter((entry) => entry !== undefined);
let highest = 0;

// take 2 pairs

//  (higher x - lower x + 1) * (higher y - lower y + 1)

for (let i = 0; i < data.length - 1; i += 1) {
  if (values[i] !== undefined) {
    const [x1, y1] = values[i].split(",");
    for (let j = 0; j < data.length - 1; j += 1) {
      if (values[j] !== undefined) {
        const [x2, y2] = values[j].split(",");

        const width =
          Math.max(Number(x1), Number(x2)) -
          Math.min(Number(x1), Number(x2)) +
          1;
        const height =
          Math.max(Number(y1), Number(y2)) -
          Math.min(Number(y1), Number(y2)) +
          1;

        const area = width * height;

        if (area > highest) {
          highest = area;
        }
      }
    }
  }
}

console.log(highest);
