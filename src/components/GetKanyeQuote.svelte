<script>
  import { quote, quoteObfuscated } from "../helpers/storage";
  import obfuscateQuote from "../helpers/obfuscateQuote";
  import getKanyeQuote from "../api/getKanyeQuote";

  // subscribe to "quote" value in storage, represent as variable "wisdom"
  let wisdom;
  quote.subscribe((value) => {
    wisdom = value;
  });

  // subscribe to "quoteObfuscated" value in storage, represent as variable "obfuscatedWisdom"
  let obfuscatedWisdom;
  quoteObfuscated.subscribe((value) => {
    obfuscatedWisdom = value;
  });

  // get the quote from the kanye rest api and update "quote" & "obfuscatedQuote" in storage
  const revealQuote = async () => {
    const kanyeQuote = await getKanyeQuote();
    quote.update((value) => kanyeQuote);
    quoteObfuscated.update((value) => obfuscateQuote(kanyeQuote));
    console.table({ wisdom, obfuscatedWisdom });
  };
</script>

<div>
  <!-- Button for user to get quote from Kanye Rest API -->
  <button on:click={revealQuote}>Recieve Words Of Wisdom From Kanye West</button
  >
  <!-- Where the quote will show up, when value "quote" in storage is defined -->
  <h3 id="quote" class={obfuscatedWisdom ? "" : "hidden"}>
    "{obfuscatedWisdom}"
  </h3>
</div>
