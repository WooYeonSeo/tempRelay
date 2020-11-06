/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoListQueryVariables = {||};
export type TodoListQueryResponse = {|
  +todoList: ?{|
    +userid: string,
    +totalCount: number,
    +data: ?$ReadOnlyArray<?{|
      +todoid: number,
      +text: string,
      +complete: boolean,
    |}>,
  |}
|};
export type TodoListQuery = {|
  variables: TodoListQueryVariables,
  response: TodoListQueryResponse,
|};
*/


/*
query TodoListQuery {
  todoList {
    userid
    totalCount
    data {
      todoid
      text
      complete
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TodoList",
    "kind": "LinkedField",
    "name": "todoList",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userid",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalCount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "data",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "todoid",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "text",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "complete",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "32fe8aa201f4106734d17d54ad189094",
    "id": null,
    "metadata": {},
    "name": "TodoListQuery",
    "operationKind": "query",
    "text": "query TodoListQuery {\n  todoList {\n    userid\n    totalCount\n    data {\n      todoid\n      text\n      complete\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4de45df3ab4fdecef79aff965d884e99';

module.exports = node;
