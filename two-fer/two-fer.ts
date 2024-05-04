export function twoFer(name?: string): string {
  let n: string = 'you';
  if (name) {
    n = name;
  }
  return `One for ${n}, one for me.`;
}
