/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TodoItem_item$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TodoList_list$ref: FragmentReference;
declare export opaque type TodoList_list$fragmentType: TodoList_list$ref;
export type TodoList_list = {|
  +userid: string,
  +totalCount: number,
  +data: ?$ReadOnlyArray<?{|
    +$fragmentRefs: TodoItem_item$ref
  |}>,
  +$refType: TodoList_list$ref,
|};
export type TodoList_list$data = TodoList_list;
export type TodoList_list$key = {
  +$data?: TodoList_list$data,
  +$fragmentRefs: TodoList_list$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "defaultValue": "안녕!",
      "kind": "LocalArgument",
      "name": "userName"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoList_list",
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
(node/*: any*/).hash = '290fd40da439c9d48e484f99a5eb3ae9';

module.exports = node;
