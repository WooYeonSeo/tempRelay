import graphql from 'babel-plugin-relay/macro'
import TodoItem from './TodoItem'
import { createFragmentContainer } from 'react-relay'
import { useEffect } from 'react'

function TodoList({ list }) {
    const ID = 'user1'

    useEffect(()=>{
        console.log("todoList", list);
    },[list])
    return (
        <div>
            TodoListQuery :
            {list?.data.map((item) => {
                return <TodoItem item={item} />
            })}
        </div>
    )
}

export default createFragmentContainer(TodoList, {
    // This `list` fragment corresponds to the prop named `list` that is
    // expected to be populated with server data by the `<TodoList>` component.
    list: graphql`
        fragment TodoList_list on TodoList  {
            # Specify any fields required by '<TodoList>' itself.
            userid,
            totalCount,
            # Include a reference to the fragment from the child component.
            data {
                ...TodoItem_item 
            }
        }
    `,
})
