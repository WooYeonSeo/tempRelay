import logo from './logo.svg'
import './App.css'
import graphql from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import { Environment } from './relay'
import Todo from './Todo'

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
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <QueryRenderer
                    environment={Environment}
                    query={GET_QUERY}
                    variables={{}}
                    render={({ error, props }) => {
                        console.log('data', props?.testRelay?.relay)
                        if (error) {
                            return <div>Error!</div>
                        }
                        if (!props) {
                            return <div>Loading...</div>
                        }
                        return (
                            <div>
                                YES? : {props?.testRelay?.relay.toString()}
                            </div>
                        )
                    }}
                />

                <QueryRenderer
                    environment={Environment}
                    query={GET_QUERY_PARAM}
                    variables={{ ID }}
                    render={({ error, props }) => {
                        console.log('data', props?.testRelay?.relay)
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
                <Todo />
            </header>
        </div>
    )
}

export default App
