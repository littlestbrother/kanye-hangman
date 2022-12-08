<script>
  import { getKanyeRestQuote } from "@src/api/kanyeRest";
  import { obfuscateQuote, resolveQuote } from "@src/helpers/quote";
  import { quote, quoteObfuscated, quoteResolved } from "@src/helpers/storage";

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

  // get the quote from the kanye rest api and update values relating to quote in storage
  const revealQuote = async () => {
    // update "quote" value in storage (currently undefined)
    const kanyeQuote = await getKanyeRestQuote();
    quote.update((value) => kanyeQuote);

    // update "quoteObfuscated" value in storage (currently undefined)
    quoteObfuscated.update((value) => obfuscateQuote(kanyeQuote));

    // update "quoteResolved" value in storage (currently undefined)
    quoteResolved.update((value) => resolveQuote(kanyeQuote));

    console.table({ wisdom, obfuscatedWisdom });
  };
</script>

<div>
  <!-- Button for user to get quote from Kanye Rest API -->
  <button on:click={revealQuote}>Recieve Words Of Wisdom From Kanye West</button>
  <!-- Where the quote will show up, when value "quote" in storage is defined -->
  <h3 id="quote" class={obfuscatedWisdom ? "" : "hidden"}>"{obfuscatedWisdom}"</h3>
</div>
