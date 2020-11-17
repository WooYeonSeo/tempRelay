import graphql from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import { Environment } from '../relay'
import TodoList from './TodoList'
// id 안됨@
const GET_TODO_QUERY = graphql`
    query AppTodoListQuery($userid: String!) {
        user(id: $userid) {
            userid
            totalCount
            data {
                todoid
                text
                complete
            }
        }
    }
`

export default function App() {
    const ID = 'user1'

    return (
        <div>
            TodoListQuery :
            <QueryRenderer
                environment={Environment}
                query={GET_TODO_QUERY}
                variables={{ userid: ID }}
                render={(data) => {
                    const { error, props } = data
                    console.log('TodoListQuery', props?.todoList)
                    if (error) {
                        return <div>Error!</div>
                    }
                    if (!props) {
                        return <div>Loading...</div>
                    }
                    return (
                        <div>
                            <TodoList items={props.todoList?.data} />
                            {/* <TodoItem item={props.todoList?.data} /> */}
                        </div>
                    )
                }}
            />
        </div>
    )
}
