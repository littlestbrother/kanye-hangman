<script>
  import LoadQuoteButtons from "@src/components/LoadQuoteButtons.svelte";
  import Keyboard from "@src/components/Keyboard.svelte";
  import { quoteObfuscated } from "@src/helpers/storage";

  // element references
  let loadQuoteButtonsRef;

  // subscribe to "quoteObfuscate" value in storage
  let obfuscatedWisdom;
  quoteObfuscated.subscribe((value) => {
    obfuscatedWisdom = value;
  });
</script>

<main>
  <h1>Kanye West Hangman</h1>
  <div>
    <!-- render if the quote has NOT been resolved -->
    {#if !obfuscatedWisdom}
    <LoadQuoteButtons bind:this={loadQuoteButtonsRef} />
    {/if}

    <!-- render if the quote has been revealed -->
    {#if obfuscatedWisdom}
      <h3 id="quote">"{obfuscatedWisdom}"</h3>
      <Keyboard />
    {/if}

  </div>
</main>
