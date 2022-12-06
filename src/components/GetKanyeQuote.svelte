<script>
  import getKanyeQuote from "../api/getKanyeQuote";
  let quote;
  // get the quote from the kanye rest api and reassing the "quote" variable
  const revealQuote = async () => {
    quote = await getKanyeQuote();
    return quote;
  };
</script>

<div>
  <!-- Button for user to get quote from Kanye Rest API -->
  <button on:click={revealQuote}>Revieve Words Of Wisdom From Kanye West</button>
  <!-- Where the quote will show up, when variable "quote" is defined -->
  <h3 id="quote" class={quote ? "" : "hidden"}>{quote}</h3>
</div>
