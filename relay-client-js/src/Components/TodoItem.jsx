// TodoItem.js
import { createRefetchContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import React, { useEffect } from 'react'

export function Todos({ relay, item }) {
    const ID = 'user2'

    const _refetch = () => {
        relay?.refetch(
            { itemID: ID }, // Our refetchQuery needs to know the `itemID`
            null, // We can use the refetchVariables as renderVariables
            (data) => {
                console.log('Refetch done', data)
            },
            { force: true } // Assuming we've configured a network layer cache, we want to ensure we fetch the latest data.
        )
    }

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

export default createRefetchContainer(
    Todos,
    {
        item: graphql`
            fragment TodoItem_item on TodoItem {
                todoid
                text
                complete
            }
        `,
    },
    graphql`
        query TodoItemRefetchQuery($itemID: String!) {
            item: node(id: $itemID) {
                ...TodoItem_item
            } #  https://github.com/facebook/relay/issues/2244
        }
    `
)
