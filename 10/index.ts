import { input } from "./input.ts";

/*
[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}

[....]
(3)
[...#]
(1,3)
[.#..]
(2)
[.##.]
*/

const test = `[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}`;

const parts = test.split(" ");

const lights = parts.slice(0, 1)[0];
const switches = parts.slice(1, parts.length - 1);

console.log(lights);
console.log(switches);

const nrOfLights = lights.length - 2;

let initialLights = `${".".repeat(nrOfLights)}`;
console.log(initialLights);

const flipSwitch = (lights: string, position: number) => {
  const light = lights.at(position);
  let newLight = "";

  if (light === ".") {
    newLight = "#";
  } else if (light === "#") {
    newLight = ".";
  }

  return `${lights.slice(0, position)}${newLight}${lights.slice(
    position + 1,
    lights.length
  )}`;
};

console.log(flipSwitch(initialLights, 3));

const fullLights = `[${initialLights}]`;
console.log(fullLights);

if (fullLights === lights) {
  console.log("SUCCESS", initialLights, lights);
}
