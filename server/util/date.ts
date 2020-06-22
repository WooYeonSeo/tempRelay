export function parseISOString(isoString: string): Date {
  let splitedISO: string[] = isoString.split(/\D+/)

  let templength = splitedISO.length
  splitedISO.length = 7
  splitedISO.fill('0', templength, splitedISO.length)

  return new Date(
    Date.UTC(
      Number(splitedISO[0]),
      Number(splitedISO[1]) - 1,
      Number(splitedISO[2]),
      Number(splitedISO[3]),
      Number(splitedISO[4]),
      Number(splitedISO[5]),
      Number(splitedISO[6]),
    ),
  )
}
