/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ToggleReadMutationVariables = {|
  storyID: string
|};
export type ToggleReadMutationResponse = {|
  +toggleRead: ?{|
    +isRead: boolean
  |}
|};
export type ToggleReadMutation = {|
  variables: ToggleReadMutationVariables,
  response: ToggleReadMutationResponse,
|};
*/


/*
mutation ToggleReadMutation(
  $storyID: String!
) {
  toggleRead(id: $storyID) {
    isRead
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "storyID"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "storyID"
      }
    ],
    "concreteType": "isRead",
    "kind": "LinkedField",
    "name": "toggleRead",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isRead",
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
    "name": "ToggleReadMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ToggleReadMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "04d9aa49ea520cac5bdf7a805aa8c48c",
    "id": null,
    "metadata": {},
    "name": "ToggleReadMutation",
    "operationKind": "mutation",
    "text": "mutation ToggleReadMutation(\n  $storyID: String!\n) {\n  toggleRead(id: $storyID) {\n    isRead\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '13259cdb972f1e24172e3be7de15c784';

module.exports = node;
