<script>
  import { guesses } from "@src/helpers/storage";

  // subscribe to value "resolvedQuote" in storage
  let guessesData;
  guesses.subscribe((value) => {
    guessesData = value;
  });
</script>

<div class="keyboard">
  {#each guessesData.charactersLeft as character}
  <!-- create a button containing character where the class is either "number" or "letter" depending on string contents -->
    <button id={character} class={(character.match(/^[0-9]+$/) != null) ? 'number key' : 'letter key'}>{character.toUpperCase()}</button>
  {/each}
</div>
