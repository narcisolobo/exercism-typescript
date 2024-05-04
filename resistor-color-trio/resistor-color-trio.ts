type Color =
  | 'black'
  | 'brown'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'violet'
  | 'grey'
  | 'white';

export function decodedResistorValue(bands: Color[]): string {
  const colors: Record<Color, number> = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  const value =
    (colors[bands[0]] * 10 + colors[bands[1]]) * Math.pow(10, colors[bands[2]]);

  console.log(value);

  let decoded = '';

  if (value < 1000) {
    decoded = `${value} ohms`;
  } else if (value < 1000000) {
    decoded = `${value / 1000} kiloohms`;
  } else if (value < 1000000000) {
    decoded = `${value / 1000000} megaohms`;
  } else {
    decoded = `${value / 1000000000} gigaohms`;
  }
  return decoded;
}
