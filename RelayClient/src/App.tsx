import React from 'react';
import logo from './logo.svg';
import './App.css';
import RelayEnv from "../relay-env"
import { graphql, QueryRenderer } from 'react-relay';

const environment = RelayEnv;
const GET_RPOBLEMS = graphql`
  query feProblems {
    feProblems {
      id
      unitCode
      answerData
      problemLevel
      problemType
      problemURL
      unitName
    }
  }
`;

 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
        environment={environment}
        query={GET_RPOBLEMS}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>Yes</div>;
        }}
      />
      </header>
    </div>
  );
}

export default App;
