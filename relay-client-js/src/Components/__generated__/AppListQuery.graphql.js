/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TodoList_list$ref = any;
export type AppListQueryVariables = {|
  userid: string
|};
export type AppListQueryResponse = {|
  +user: ?{|
    +$fragmentRefs: TodoList_list$ref
  |}
|};
export type AppListQuery = {|
  variables: AppListQueryVariables,
  response: AppListQueryResponse,
|};
*/


/*
query AppListQuery(
  $userid: String!
) {
  user(id: $userid) {
    ...TodoList_list
  }
}

fragment TodoItem_item on TodoItem {
  todoid
  text
  complete
}

fragment TodoList_list on TodoList {
  userid
  totalCount
  data {
    ...TodoItem_item
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
    "kind": "Variable",
    "name": "id",
    "variableName": "userid"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TodoList",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoList_list"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
            "concreteType": "TodoItem",
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
    ]
  },
  "params": {
    "cacheID": "c7448cdc08f8ee33baecb9f1fc939914",
    "id": null,
    "metadata": {},
    "name": "AppListQuery",
    "operationKind": "query",
    "text": "query AppListQuery(\n  $userid: String!\n) {\n  user(id: $userid) {\n    ...TodoList_list\n  }\n}\n\nfragment TodoItem_item on TodoItem {\n  todoid\n  text\n  complete\n}\n\nfragment TodoList_list on TodoList {\n  userid\n  totalCount\n  data {\n    ...TodoItem_item\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '34c3d478bfe5d886dec526fce5282a3d';

module.exports = node;
