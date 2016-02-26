'use strict';

var getTransformedString = (function() {
  const searchPattern = chrome.i18n.getMessage("search_pattern");
  const searchRegex = new RegExp(searchPattern, 'gi');
  const replacementValue = chrome.i18n.getMessage("replacement_value");

  return function(source) {
    return source.replace(searchRegex, replacementValue);
  }
} ());
