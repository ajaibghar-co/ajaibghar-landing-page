// fetch(
//   "https://raw.githubusercontent.com/blindman67/SimplexNoiseJS/master/simplexNoise.js",
// )
//   .then((e) => e.text())
//   .then((e) => {
//     const openSimplexNoise = new Function("return " + e)();
//     noise3D = openSimplexNoise(Date.now()).noise3D;
//   });

// // Stub function
// function noise3D() {
//   return 0;
// }

// const density = "art tech culture community";

// export function main(coord, context, cursor, buffer) {
//   const t = context.time * 0.00007;
//   const s = 0.03;
//   const x = coord.x * s;
//   const y = (coord.y * s) / context.metrics.aspect + t;
//   const i = Math.floor((noise3D(x, y, t) * 0.5 + 0.5) * density.length);
//   return density[i];
// }
//
//

// fetch("src/data/site.json").then(() => {
//   const json = response.json();
//   console.log(json);
// });
const TAU = Math.PI * 2;
const wordArr = [
  "  interactive  ",
  "  web  ",
  "  community  ",
  "  creative coding  ",
  "  livecoding  ",
  "  design  ",
  "  futures  ",
  "  research  ",
  "  AI  ",
  "  installations  ",
  "  events  ",
  "  music  ",
  "  sound  ",
  "  performance  ",
];

export function main(coord, context, cursor, buffer) {
  const a = context.frame * 0.05;
  const f = Math.floor((1 - Math.sin(a)) * 10) + 1;
  const g = (Math.floor(a / TAU) % 10) + 1;
  const i = (coord.index % (coord.y * g + 1)) % (f % context.cols);
  let ar = context.frame;

  // NOTE: If the function returns ‘undefined’ or ‘null’
  // a space character will be inserted.
  // In some cases ‘i’ may be greater than 2:
  // JavaScript array out of bounds results in ‘undefined’.
  return wordArr[i];
}
