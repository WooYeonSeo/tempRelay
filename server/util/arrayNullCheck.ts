export function isEmptyArray<T = any>(arr: Array<T> | null | undefined): boolean {
  if (arr) return arr.length < 0
  else return false
}
