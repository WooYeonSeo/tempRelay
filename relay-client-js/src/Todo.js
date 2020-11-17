// Todo.js
import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

class Todo extends React.Component {
    render() {
        const { complete, text } = this.props.todo
        console.log('this.props', this.props)

        return (
            <li>
                <div>
                    <input checked={complete} type="checkbox" />
                    <label>{text}</label>
                </div>
            </li>
        )
    }
}

/* export default createFragmentContainer(
  Todo,
  // Each key specified in this object will correspond to a prop available to the component
  {
    todo: graphql`
      # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
      fragment Todo_todo on TODO {
        complete
        text
      }
    `
  },
) */
