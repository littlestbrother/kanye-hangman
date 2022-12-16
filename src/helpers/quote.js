import { alphaNumericCharacters } from "@src/helpers/constants";

// replace alpha-numeric characters with underscores & spaces with middle dot ascii character
export const obfuscateQuote = (quote) => {
  let obfuscatedQuote = quote.replace(/[a-zA-Z0-9]/g, "·");
  // obfuscatedQuote = obfuscatedQuote.replaceAll(" ", "_")
  return obfuscatedQuote
}

// map out missing & present data
export const resolveQuote = (quote) => {

  const resolved = {
    present: []
  };

  for (const character of alphaNumericCharacters) {

    const characterCount = quote.split(character).length - 1

    // conditionally assign property
    if (characterCount > 0) {
      resolved.present.push(character);
    }
  }

  return resolved;
}

// given a character, find all the indexes of a string where the character is present
export const getCharacterIndexes = (quote, character) => {

  const indexes = [];

  // iterate through string and find index of characters
  for (let i = 0; i < quote.length; i++) {
    if ((quote).toLowerCase()[i] == character) {
      indexes.push(i);
    }
  }

  return indexes;

}

// update obfuscated quote to contain guessed correct letters
export const deObfuscateCharacters = (obfuscatedQuote, characterIndexes, character) => {

  let deObfuscatedQuote = obfuscatedQuote.split('');
  for (let i = 0; i < deObfuscatedQuote.length; i++) {
    if (characterIndexes.includes(i)) {
      deObfuscatedQuote[i] = character
    }
  }

  return deObfuscatedQuote.join('');

}