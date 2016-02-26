'use strict';

function updateDocumentTitle() {
  document.title = getTransformedString(document.title);
}

function updateBodyText() {
  const body = document.getElementsByTagName('body')[0];

  visitDOM(body, function(node) {
    if (isTextNode(node)) {
      replaceTextNodeValue(node);
    }
  });
}

function isTextNode(node) {
  return node.nodeType === 3;
}

function replaceTextNodeValue(node) {
  node.nodeValue = getTransformedString(node.nodeValue);
}

updateDocumentTitle();
updateBodyText();
