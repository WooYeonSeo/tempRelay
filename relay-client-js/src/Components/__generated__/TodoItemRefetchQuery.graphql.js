/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TodoItem_item$ref = any;
export type TodoItemRefetchQueryVariables = {|
  itemID: string
|};
export type TodoItemRefetchQueryResponse = {|
  +item: ?{|
    +$fragmentRefs: TodoItem_item$ref
  |}
|};
export type TodoItemRefetchQuery = {|
  variables: TodoItemRefetchQueryVariables,
  response: TodoItemRefetchQueryResponse,
|};
*/


/*
query TodoItemRefetchQuery(
  $itemID: String!
) {
  item: node(id: $itemID) {
    ...TodoItem_item
  }
}

fragment TodoItem_item on TodoItem {
  todoid
  text
  complete
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "itemID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "itemID"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoItemRefetchQuery",
    "selections": [
      {
        "alias": "item",
        "args": (v1/*: any*/),
        "concreteType": "TodoItem",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoItem_item"
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
    "name": "TodoItemRefetchQuery",
    "selections": [
      {
        "alias": "item",
        "args": (v1/*: any*/),
        "concreteType": "TodoItem",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
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
    ]
  },
  "params": {
    "cacheID": "9222cc02a49ca5126d2094c18edfe217",
    "id": null,
    "metadata": {},
    "name": "TodoItemRefetchQuery",
    "operationKind": "query",
    "text": "query TodoItemRefetchQuery(\n  $itemID: String!\n) {\n  item: node(id: $itemID) {\n    ...TodoItem_item\n  }\n}\n\nfragment TodoItem_item on TodoItem {\n  todoid\n  text\n  complete\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '56fb887732376624200fffeeecef2868';

module.exports = node;
