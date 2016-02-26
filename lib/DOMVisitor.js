'use strict';

function visitDOM(rootNode, accept) {
  for (let i = 0; i < rootNode.childNodes.length; i++) {
    const node = rootNode.childNodes[i];

    accept(node);
    visitDOM(node, accept);
  }
}
