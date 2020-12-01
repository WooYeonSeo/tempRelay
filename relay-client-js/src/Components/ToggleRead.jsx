import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
    mutation ToggleReadMutation($storyID: String!) {
        toggleRead(id: $storyID) {
            isRead
        }
    }
`

const optimisticResponse = {
    toggleRead: {
        isRead: true,
    },
}

export default function ToggleRead(environment, storyID) {
    const variables = {
        storyID,
    }

    commitMutation(environment, {
        mutation,
        optimisticResponse,
        variables,
        onCompleted: (response, errors) => {
            console.log('Response received from server.', response?.toggleRead)
        },
        onError: (err) => console.error(err),
    })
}
