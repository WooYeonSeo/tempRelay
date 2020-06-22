import fs from 'fs'
import path from 'path'
import { Problem } from 'src/types'

export default {
  Query: {
    feProblems: async (_: any, __: any): Promise<Problem[] | undefined> => {
      try {
        const file = fs.readFileSync(path.join(__dirname + '../../../../data/fe-problems.json'), { encoding: 'utf8' })
        const { data } = JSON.parse(file)
        console.log('feProblems', data)

        return data
      } catch (error) {
        console.log(error)
        return undefined
      }
    },
    feSimilars: async (_: any, __: any): Promise<Problem[] | undefined> => {
      try {
        const file = fs.readFileSync(path.join(__dirname + '../../../../data/fe-similars.json'), { encoding: 'utf8' })
        const { data } = JSON.parse(file)
        console.log('test', data)

        return data
      } catch (error) {
        console.log(error)
        return undefined
      }
    },
  },
}
