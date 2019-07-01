export function incrementNumberMax100(num: number, max: number): number {
  if (num > max) {
    return max;
  }
  return num + 1;
}
