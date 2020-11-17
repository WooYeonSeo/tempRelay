import graphql from 'babel-plugin-relay/macro'
import TodoItem from './TodoItem'
import { createFragmentContainer } from 'react-relay'

function TodoList(props) {
    const ID = 'user1'

    return (
        <div>
            TodoListQuery :
            {props.todoList?.data.map((item) => {
                return <TodoItem item={item} />
            })}
            {/* <TodoItem item={props.todoList?.data} /> */}
        </div>
    )
}

export default createFragmentContainer(TodoList, {
    // This `list` fragment corresponds to the prop named `list` that is
    // expected to be populated with server data by the `<TodoList>` component.
    todoList: graphql`
        fragment TodoList_todoList on TodoList {
            # Specify any fields required by '<TodoList>' itself.
            userid
            # Include a reference to the fragment from the child component.
            data {
                ...TodoItem_item
            }
        }
    `,
})
