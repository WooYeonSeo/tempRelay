/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppTodoListQueryVariables = {|
  userid: string
|};
export type AppTodoListQueryResponse = {|
  +user: ?{|
    +userid: string,
    +totalCount: number,
    +data: ?$ReadOnlyArray<?{|
      +todoid: number,
      +text: string,
      +complete: boolean,
    |}>,
  |}
|};
export type AppTodoListQuery = {|
  variables: AppTodoListQueryVariables,
  response: AppTodoListQueryResponse,
|};
*/


/*
query AppTodoListQuery(
  $userid: String!
) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userid"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "userid"
      }
    ],
    "concreteType": "TodoList",
    "kind": "LinkedField",
    "name": "user",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppTodoListQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppTodoListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a1d079d44a75c7c5ae90d59b334e2044",
    "id": null,
    "metadata": {},
    "name": "AppTodoListQuery",
    "operationKind": "query",
    "text": "query AppTodoListQuery(\n  $userid: String!\n) {\n  user(id: $userid) {\n    userid\n    totalCount\n    data {\n      todoid\n      text\n      complete\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c9c40b7550418b5fb9c3804ae3551ead';

module.exports = node;
