export function ExcludesNull<T>(x: T | null): x is T {
  return x !== null
}
