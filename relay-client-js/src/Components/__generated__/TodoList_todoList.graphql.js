/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TodoItem_item$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TodoList_todoList$ref: FragmentReference;
declare export opaque type TodoList_todoList$fragmentType: TodoList_todoList$ref;
export type TodoList_todoList = {|
  +userid: string,
  +data: ?$ReadOnlyArray<?{|
    +$fragmentRefs: TodoItem_item$ref
  |}>,
  +$refType: TodoList_todoList$ref,
|};
export type TodoList_todoList$data = TodoList_todoList;
export type TodoList_todoList$key = {
  +$data?: TodoList_todoList$data,
  +$fragmentRefs: TodoList_todoList$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoList_todoList",
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
      "concreteType": "Todo",
      "kind": "LinkedField",
      "name": "data",
      "plural": true,
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
  "type": "TodoList",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '3702dd8b969911fa450c0c2c89b4ec62';

module.exports = node;
