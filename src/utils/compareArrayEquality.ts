export const compareArrayEquality = (a: unknown[], b: unknown[]) => {
  if (a.length !== b.length) return false
  a.sort()
  b.sort()
  return a.every((element, index) => element === b[index])
}
