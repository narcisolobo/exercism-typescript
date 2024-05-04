export const colorCode = (color: string): number => {
  if (!COLORS.includes(color)) return -1;
  return COLORS.indexOf(color.toLocaleLowerCase());
};

export const COLORS = [
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
