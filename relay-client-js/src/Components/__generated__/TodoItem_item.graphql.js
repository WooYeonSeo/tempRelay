/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TodoItem_item$ref: FragmentReference;
declare export opaque type TodoItem_item$fragmentType: TodoItem_item$ref;
export type TodoItem_item = {|
  +todoid: number,
  +text: string,
  +complete: boolean,
  +$refType: TodoItem_item$ref,
|};
export type TodoItem_item$data = TodoItem_item;
export type TodoItem_item$key = {
  +$data?: TodoItem_item$data,
  +$fragmentRefs: TodoItem_item$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItem_item",
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
  "type": "TodoItem",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '1af386ccb6d4d6a6223c7ae9e2d99d4f';

module.exports = node;
