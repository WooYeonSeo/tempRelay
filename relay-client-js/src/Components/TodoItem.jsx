// TodoItem.js
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import React, { useEffect } from 'react'

export function TodoItem({ relay, item }) {
    const ID = 'user2'
    console.log('refetch21', item)
    const _refetch = () => {
        console.log('refetch21', item)
        relay?.refetch(
            { itemID: ID }, // Our refetchQuery needs to know the `itemID`
            null, // We can use the refetchVariables as renderVariables
            () => {
                console.log('Refetch done')
            },
            { force: true } // Assuming we've configured a network layer cache, we want to ensure we fetch the latest data.
        )
    }

    useEffect(() => {
        console.log('props', item)
    })
    return (
        <>
            <div>
                <input type="checkbox" checked={item?.complete} />
                <div>{item?.text}</div>
                <button onClick={_refetch}> add user 2 data </button>
            </div>
        </>
    )
}

export default createFragmentContainer(TodoItem, {
    item: graphql`
        fragment TodoItem_item on Todo {
            todoid
            text
            complete
        }
    `,
})
