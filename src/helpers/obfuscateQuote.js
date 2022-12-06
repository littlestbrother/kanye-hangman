// replace alpha-numeric characters with underscores & spaces with middle dot ascii character
export default (quote) => {
let obfuscatedQuote = quote.replace(/[a-zA-Z0-9]/g,"-");
obfuscatedQuote = obfuscatedQuote.replaceAll(" ", "_")
return obfuscatedQuote
}