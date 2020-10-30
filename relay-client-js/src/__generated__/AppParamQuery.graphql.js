/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppParamQueryVariables = {|
  ID: string
|};
export type AppParamQueryResponse = {|
  +testRelayParam: {|
    +relay: ?string
  |}
|};
export type AppParamQuery = {|
  variables: AppParamQueryVariables,
  response: AppParamQueryResponse,
|};
*/


/*
query AppParamQuery(
  $ID: String!
) {
  testRelayParam(id: $ID) {
    relay
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "ID"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "ID"
      }
    ],
    "concreteType": "RelayString",
    "kind": "LinkedField",
    "name": "testRelayParam",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "relay",
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
    "name": "AppParamQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppParamQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1abd9f7724af6114f497141a8e42e361",
    "id": null,
    "metadata": {},
    "name": "AppParamQuery",
    "operationKind": "query",
    "text": "query AppParamQuery(\n  $ID: String!\n) {\n  testRelayParam(id: $ID) {\n    relay\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '14c742580b6249dacf8a51a8d72e8a73';

module.exports = node;
