<script>
  import LoadQuoteButtons from "@src/components/LoadQuoteButtons.svelte";
  import Keyboard from "@src/components/Keyboard.svelte";
  import { quoteObfuscated } from "@src/helpers/storage";
  import Answer from "./Answer.svelte";
  import Hangman from "./Hangman.svelte";

  // subscribe to "quoteObfuscated" value in storage
  let obfuscatedWisdom;
  quoteObfuscated.subscribe((value) => {
    obfuscatedWisdom = value;
  });
</script>

<main>
  <div>
    <!-- render if the quote has NOT been resolved -->
    {#if !obfuscatedWisdom}
      <h1>what would <em>yeezus</em> do?</h1>
      <LoadQuoteButtons />
    {/if}

    <!-- render if the quote has been revealed -->
    {#if obfuscatedWisdom}
    <h3><span style="background-color:#1a1a1a; padding:8px; border-radius:10px">what would <em>yeezus</em> do?</span></h3>
      <div class="gameboard">
        <Hangman />
        <h3><span class="quote">"{obfuscatedWisdom}"</span></h3>
        <Keyboard />
        <!-- <Answer /> -->
      </div>
    {/if}
  </div>
</main>
