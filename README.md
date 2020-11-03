Relay is a JavaScript framework for building **data-driven React applications** powered by GraphQL

# Relay

- graphql client 상태관리 도구
- graphql 에 상당히 의존도가 높음
- data-driven

### 장점이라고 말하는 것

- data-driven
- It allows components to **specify what data they need** and the **Relay framework provides the data**

  ⇒ easier to reason about what fields are needed or no longer needed.

### How to use

1. getData

```tsx
<QueryRenderer
  environment={environment}
  query={**query**}
  variables={{**params**}}
  render=**{renderCallback()}**
/>

```

① **query : graphql query**

② **params : param**

③ **renderCallback : 랜더링 할 함수**

2. Fragment

```tsx
type Props = {
  todo: Todo_todo
}

class Todo extends React.Component<Props> {
  render() {
    const {complete, text} = this.props.todo;

    return (
      <li>
        <div>
          <input
            checked={complete}
            type="checkbox"
          />
          <label>
            {text}
          </label>
        </div>
      </li>
    );
  }
}

export default **createFragmentContainer**(
  Todo,
  // Each key specified in this object will correspond to a prop available to the component
  {
    todo: graphql`
      # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
      fragment Todo_todo on Todo {
        complete
        text
      }
    `
  },
)
```

- 이렇게 fragment를 설정!!! 하면 props를 내려주지 않아도 props에 값이 들어옴
- 이런 fragment 들을 조합해서 적을 수 있음

  ```tsx
  export default createFragmentContainer(TodoList, {
    userTodoData: graphql`
        # As a convention, we name the fragment as '<ComponentFileName>_<PropName>'
        fragment TodoList_userTodoData on User {
          todos(
            first: 2147483647  # max GraphQLInt, to fetch all todos
          ) {
            edges {
              node {
                id,
                # We use the fragment defined by the child Todo component here
                **...Todo_todo,**
              },
            },
          },
          id,
          totalCount,
          completedCount,
        }
      `,
  });
  ```

  - 그럼 결국 제일 root는 fragment들의 조합이므로 길지 않음!

    ```tsx
    <QueryRenderer
      environment={environment}
      query={graphql`
          query ViewerQuery {
            viewer {
              id
              **# Re-use the fragment here
              ...TodoList_userTodoData**
            }
          }
        `}
      variables={{}}
      render={({ error, props }) => {}}
    />
    ```

⇒ 이렇게 fragment를 사용해서 조각을 관리하기 때문에 일부분만 수정해도 전체에 반영이 됨

### Mutating Data

```tsx
// ChangeTodoStatusMutation.js
import {graphql, commitMutation} from 'react-relay';

function commit(
  environment,
  complete,
  todo,
) {
  // Now we just call commitMutation with the appropriate parameters
  return **commitMutation**(
    environment,
    {
      mutation : mutationQuery,
      variables: {
        input: {complete, id: todo.id},
      },
    }
  );
}

export default {commit};

```

⇒ `AddTodoMutation.commit(relay.environment, text, user);`

이런식으로 받아와서 씀

- 값을 return 받아서 합칠 수도 있음 ㅇㅇ (안해봄)
- apolloclient처럼 id \_\_typename을 꼭 같이 합쳐야함

### differ/common vs apollo client, swr, useQuery

- root 에서 데이터를 한번만 부르고 하위에 대한 부분은 fragment로 처리하는 점이 다른 것 같음
- 쿼리를 작성하는 네이밍이나 위치를 강제하는 점이 다른 것들에 비해 자유도가 적음
- only with graphql

\*swr - use query와 유사한 hook 스타일의 상태관리 라이브러리, polling 으로 최신 데이터 유지

\*apollo client - graphql 가이드에서도 안내하는 상태관리 라이브러리 useQuery와 유사하며 hoc 와 hook 모두 제공, 도큐먼트 세상 친절. 단 type 만들 때가 문제.

\*useQuery:rest에서도 hook base 상태관리가 가능하게 해주는 라이브러리

### 고민하게 되는 지점

- relay는 꼭 graphql 에서만 사용 가능
- flow...?? [https://relay.dev/docs/en/new-in-relay-modern#flow-type-generation](https://relay.dev/docs/en/new-in-relay-modern#flow-type-generation)
- 선언적으로 표현되는 부분은 typescript 로 해결되는 것이 아닌지, ts랑 같이 쓴다고 했을 때의 장점

---

## what is fragment in graphql

ref : [https://blog.logrocket.com/graphql-fragments-explained/](https://blog.logrocket.com/graphql-fragments-explained/)

A GraphQL Fragment is a reusable unit of a GraphQL query, which creates a shared piece of query logic.

### fragment consists

```graphql
fragment Name on TypeName {
  field1
  field2
  field3
}
```

- **Name**: This is the unique name of the fragment (each fragment can have its own name)
- **TypeName**: The type of object the fragment is going to be used on. This indicates which nested object, from the GraphQL schema, this fragment is created on
- **Body**: The last part is the body of the fragment. The body of the fragment defines the fields that will be queried for

### Benefits of using a GraphQL fragment

- **Reusability** – With fragments, you can organize your queries into reusable units
- **Caching** – [GraphQL clients](https://www.apollographql.com/docs/react/caching/cache-interaction/) make use of fragments, to provide caching options

### questions

- 쿼리를 재활용 하는거지 데이터를 재활용 하는 건 아니지?
- type과 다른 점은 어떤거지?
