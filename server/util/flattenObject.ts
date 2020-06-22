export const createObjectKeyformat = (text: string) => {
  return text.replace(/(\_)\s*./g, v => {
    return v.slice(1, 2).toUpperCase()
  })
}
export const getFlatObject = (data: any, response: { [key in string]: any }, flatKey = '') => {
  for (const [key, value] of Object.entries(data)) {
    let newFlatKey = createObjectKeyformat(`${flatKey}${flatKey ? upperChar(key) : key}`)

    if (typeof value === 'object' && value !== null && Object.keys(value).length > 0) {
      getFlatObject(value, response, `${newFlatKey}`)
    } else {
      if (Array.isArray(response)) {
        response.push({
          [newFlatKey]: value,
        })
      } else {
        response[newFlatKey] = value
      }
    }
  }

  return response
}

export function upperChar(message: string) {
  return message.replace(/\b[a-z]/, letter => letter.toUpperCase())
}
