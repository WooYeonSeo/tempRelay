import graphql from 'babel-plugin-relay/macro'
import { QueryRenderer } from 'react-relay'
import { Environment } from '../relay'

// id 안됨@
const GET_TODO_QUERY = graphql`
    query TodoListQuery {
        todoList {
            userid,
            totalCount,
            data{
                todoid,
                text,
                complete
            }
        }
    }
`


function TodoList() {
    
    return (
        <div>
            TodoListQuery : 
            <QueryRenderer
                environment={Environment}
                query={GET_TODO_QUERY}
                variables={{}}
                render={(data) => {
                    console.log('TodoListQuery', data);
                    const { error, props} =data;
                    if (error) {
                        return <div>Error!</div>
                    }
                    if (!props) {
                        return <div>Loading...</div>
                    }
                    return (
                        <div>
                            SUCCESS
                        </div>
                    )
                }}
            />
        </div>
    )
}

export default TodoList
