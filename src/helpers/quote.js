import { alphaNumericCharacters } from "@src/helpers/constants";

// replace alpha-numeric characters with the middle dot ascii character (to hide the quote)
export const obfuscateQuote = (quote) => {
  let obfuscatedQuote = quote.replace(/[a-zA-Z0-9]/g, "◆");
  return obfuscatedQuote
}

// solve the quote, and store the correct characters
export const resolveQuote = (quote) => {

  const resolved = { correctCharacters: [] };

  for (const character of alphaNumericCharacters) {

    const characterOccurrences = quote.split(character).length - 1;

    if (characterOccurrences > 0) {
      resolved.correctCharacters.push(character);
    }
  }

  return resolved;
}

// given a character, find all the indexes of that character in a string (quote)
export const getCharacterIndexes = (quote, character) => {

  const indexes = [];

  // iterate through string and find indexes
  for (let i = 0; i < quote.length; i++) {
    if ((quote).toLowerCase()[i] == character) {
      indexes.push(i);
    }
  }

  return indexes;

}

// restore characters in obfuscated quote
export const deObfuscateCharacters = (obfuscatedQuote, characterIndexes, character) => {

  // represent obfuscated quote as an array
  let deObfuscatedQuote = obfuscatedQuote.split('');
  // replace indexes with a given character
  for (let i = 0; i < deObfuscatedQuote.length; i++) {
    if (characterIndexes.includes(i)) {
      deObfuscatedQuote[i] = character
    }
  }

  // return as a string
  return deObfuscatedQuote.join('');

}