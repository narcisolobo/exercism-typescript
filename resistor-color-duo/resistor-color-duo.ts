/**
 * The function `decodedValue` decodes a pair of color bands
 * into a numerical value based on their positions in the `COLORS`
 * array. If either of the colors is not found in the `COLORS`
 * array, or if the input array has less than 2 colors, the
 * function returns -1.
 * @param {string[]} bands
 * @returns {number}
 */
export function decodedValue(bands: string[]): number {
  if (bands.length < 2) return -1;
  const num1 = COLORS.indexOf(bands[0].toLocaleLowerCase());
  const num2 = COLORS.indexOf(bands[1].toLocaleLowerCase());
  if (num1 < 0 || num2 < 0) return -1;
  return parseInt(num1.toString() + num2.toString());
}

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
