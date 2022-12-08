// replace alpha-numeric characters with underscores & spaces with middle dot ascii character
export const obfuscateQuote = (quote) => {
  let obfuscatedQuote = quote.replace(/[a-zA-Z0-9]/g, "·");
  obfuscatedQuote = obfuscatedQuote.replaceAll(" ", "_")
  return obfuscatedQuote
}

export const resolveQuote = (quote) => {

  const alphaNumericCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const resolved = {};

  for (const character of alphaNumericCharacters) {
    resolved[character] = (quote.split(character).length - 1);
  }

  return resolved;
}