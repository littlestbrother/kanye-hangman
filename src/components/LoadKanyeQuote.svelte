<script>
  import { getKanyeRestQuote } from "@src/api/kanyeRest";
  import { removeElement } from "@src/helpers/element";
  import { obfuscateQuote, resolveQuote } from "@src/helpers/quote";
  import { quote, quoteObfuscated, quoteResolved } from "@src/helpers/storage";

  // button element reference for deletion later
  let buttonRef;

  // subscribe to "quoteObfuscated" value in storage, represent as variable "obfuscatedWisdom"
  let obfuscatedWisdom;
  quoteObfuscated.subscribe((value) => {
    obfuscatedWisdom = value;
  });

  // get the quote from the kanye rest api and update values relating to quote in storage
  const loadQuote = async () => {
    try {
      // update "quote" value in storage
      const kanyeQuote = await getKanyeRestQuote();
      quote.update((value) => kanyeQuote);
      // update "quoteObfuscated" value in storage
      quoteObfuscated.update((value) => obfuscateQuote(kanyeQuote));
      // update "quoteResolved" value in storage
      quoteResolved.update((value) => resolveQuote(kanyeQuote));
      // remove button from user to prevent spamming api
      removeElement(buttonRef);
      console.table({ kanyeQuote, obfuscatedWisdom });
    } catch (err) {
      // TODO: alert the user via alert / modal?
      console.error("aw shucks something went wrong!", err);
    }
  };
</script>

<div>
  <!-- Button for user to get quote from Kanye Rest API -->
  <button bind:this={buttonRef} on:click={loadQuote}>Receive Words Of Wisdom From Kanye West</button>
  <!-- Where the quote will show up, when value "quote" in storage is defined -->
  <h3 id="quote" class={obfuscatedWisdom ? "" : "hidden"}>"{obfuscatedWisdom}"</h3>
</div>
