'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssDeclaration = sourceString.trim().split(';');
  const result = {};

  for (const fixWords of cssDeclaration) {
    if (!fixWords.trim()) {
      continue;
    }

    const [key, value] = fixWords.trim().split(':');
    const keys = key.trim();
    const values = value.trim();

    result[keys] = values;
  }

  return result;
}

module.exports = convertToObject;
