export function addUnitIfNeeded(value: number | string): string | undefined {
  if (value == null) {
    return undefined;
  }
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return String(value);
}
