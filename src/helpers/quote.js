import { alphaNumericCharacters } from "@src/helpers/constants";

// replace alpha-numeric characters with underscores & spaces with middle dot ascii character
export const obfuscateQuote = (quote) => {
  let obfuscatedQuote = quote.replace(/[a-zA-Z0-9]/g, "·");
  obfuscatedQuote = obfuscatedQuote.replaceAll(" ", "_")
  return obfuscatedQuote
}

export const resolveQuote = (quote) => {

  const resolved = {
    present: [],
    missing: []
  };

  for (const character of alphaNumericCharacters) {

    const characterCount = quote.split(character).length - 1

    // conditionally assign property
    if (characterCount > 0) {
      resolved.present.push(character);
    } else {
      resolved.missing.push(character);
    }

  }

  console.log(resolved);

  return resolved;
}