import fs from 'fs'
import path from 'path'
import { Problem } from 'src/types'

export default {
  Query: {
    feProblems: async (_: any, __: any): Promise<Problem[] | undefined> => {
      try {
        const file = fs.readFileSync(path.join(__dirname + '../../../../data/fe-problems.json'), { encoding: 'utf8' })
        const { data } = JSON.parse(file)

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

        return data
      } catch (error) {
        console.log(error)
        return undefined
      }
    },
    testRelay: async (_: any, __: any): Promise<{relay : boolean } | undefined> => {
        return { relay : true }
    },
    testRelayParam: async (_: any, param : any): Promise<{relay : string } | undefined> => {
      console.log("param",param)
      return { relay : "true"+param?.id }
    },
    todo: async (_: any, param : any): Promise<{ complete : boolean , text : string } | undefined> => {
      console.log("param",param)
      return { complete : true , text : "text" }
    },
  },
}
