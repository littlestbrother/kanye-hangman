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
  <h1>kanye west hangman game</h1>
  <div>
    <!-- render if the quote has NOT been resolved -->
    {#if !obfuscatedWisdom}
      <LoadQuoteButtons />
    {/if}

    <!-- render if the quote has been revealed -->
    {#if obfuscatedWisdom}
      <div class="gameboard">
        <Hangman />
        <h3><span class="quote">"{obfuscatedWisdom}"</span></h3>
        <Keyboard />
        <!-- <Answer /> -->
      </div>
    {/if}
  </div>
</main>
