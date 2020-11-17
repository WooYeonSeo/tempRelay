import fs from 'fs'
import path from 'path'
import { Problem, TodoList } from 'src/types'

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
    testRelay: async (_: any, __: any): Promise<{ relay: boolean } | undefined> => {
      return { relay: true }
    },
    testRelayParam: async (_: any, param: any): Promise<{ relay: string } | undefined> => {
      return { relay: 'true' + param?.id }
    },
    todo: async (_: any, param: any): Promise<{ complete: boolean; text: string } | undefined> => {
      return { complete: true, text: 'text' }
    },
    user: async (_: any, param: any): Promise<TodoList | undefined> => {
      console.log('param', param)
      return myTodo
    },
  },
}

const myTodo: TodoList = {
  userid: 'user1',
  totalCount: 12,
  data: [
    { todoid: 1, text: 'gogo', complete: true },
    { todoid: 2, text: 'gogo2', complete: false },
    { todoid: 3, text: 'gogo3', complete: true },
    { todoid: 4, text: 'gogo4', complete: true },
    { todoid: 5, text: 'gogo5', complete: true },
    { todoid: 6, text: 'gogo6', complete: true },
    { todoid: 7, text: 'gogo7', complete: true },
  ],
}
