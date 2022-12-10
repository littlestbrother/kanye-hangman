<script>
  import { getKanyeRestQuote } from "@src/api/kanyeRest";
  import { obfuscateQuote, resolveQuote } from "@src/helpers/quote";
  import { quote, quoteObfuscated, quoteResolved } from "@src/helpers/storage";

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
      console.log(kanyeQuote);
    } catch (err) {
      // TODO: alert the user via alert / modal?
      console.error("aw shucks something went wrong!", err);
    }
  };
</script>

<div>
  <!-- Button for user to get quote from Kanye Rest API -->
  <button on:click={loadQuote}>Receive Words Of Wisdom From Kanye West</button>
  <br />
  <button>Allow Explicit Quotes</button>
  <button>Allow Long Quotes</button>
</div>
