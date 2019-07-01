const olderAge = 18;

export function isOlder(age: number): boolean {
  if (age >= olderAge) {
    return true;
  }

  return false;
}
