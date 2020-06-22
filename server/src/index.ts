import './LoadEnv'
import cookieParser from 'cookie-parser'
import express from 'express'
import logger from 'morgan'
import { ApolloServer } from 'apollo-server-express'
import schema from './graphql/schema'
import BaseRouter from './routes'
import { Request, Response } from 'express'
import path from 'path'
import engines from 'consolidate'

const graphqlPort = process.env.GRAPHQL_PORT || 4000
const host = process.env.HOST || 'localhost'
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/api', BaseRouter)

app.set('views', path.join(__dirname + '/views'))
app.engine('html', engines.mustache)
app.set('view engine', 'html')

const setContext = () => {}

const server = new ApolloServer({ schema, context: setContext })
server.applyMiddleware({ app })

app.listen({ port: graphqlPort }, () => console.log(`🚀 Server ready at ${host}:${graphqlPort} ${server.graphqlPath}`))

app.get('*', (req: Request, res: Response) => {
  res.send('no page@')
})

export default app
