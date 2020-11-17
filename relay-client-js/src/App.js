import './App.css'
import graphql from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import { Environment } from './relay'
import TodoListApp from './Components/App'

const GET_QUERY = graphql`
    query AppQuery {
        testRelay {
            relay
        }
    }
`

const GET_QUERY_PARAM = graphql`
    query AppParamQuery($ID: String!) {
        testRelayParam(id: $ID) {
            relay
        }
    }
`

function App() {
    const ID = '12'
    return (
        <div className="App">
            <QueryRenderer
                environment={Environment}
                query={GET_QUERY}
                variables={{}}
                render={({ error, props }) => {
                    console.log('check2', props?.testRelay?.relay)
                    if (error) {
                        return <div>Error!</div>
                    }
                    if (!props) {
                        return <div>Loading...</div>
                    }
                    return (
                        <div>YES? : {props?.testRelay?.relay.toString()}</div>
                    )
                }}
            />

            <QueryRenderer
                environment={Environment}
                query={GET_QUERY_PARAM}
                variables={{ ID }}
                render={({ error, props }) => {
                    console.log('check', props?.testRelay?.relay)
                    if (error) {
                        return <div>Error!</div>
                    }
                    if (!props) {
                        return <div>Loading...</div>
                    }
                    return (
                        <div>
                            ID with param? : {props?.testRelayParam?.relay}
                        </div>
                    )
                }}
            />
            <TodoListApp />
        </div>
    )
}

export default App
