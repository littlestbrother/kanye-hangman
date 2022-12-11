<script>
  import { alphaNumericCharacters } from "@src/helpers/constants";
  import { guesses, quoteResolved } from "@src/helpers/storage";

  // subscribe to value "guessesData" in storage
  let guessesData;
  guesses.subscribe((value) => {
    guessesData = value;
  });

  // subscribe to value "resolvedQuote" in storage
  let resolvedQuote;
  quoteResolved.subscribe((value) => {
    resolvedQuote = value;
  });

  const guessLetter = (element) => {

    const guessedCharacter = element.target.innerText;

    // if the use guessed correctly
    if (resolvedQuote.present.includes(guessedCharacter)) {

      // increase score & record character guessed as a success.
      guessesData.success.count ++;
      guessesData.success.characters.push(guessedCharacter);
      guesses.update((value => guessesData));

      console.log('correct!');
    } else {

      // decrease score & record character guessed as a failure.
      guessesData.fail.count ++;
      guessesData.fail.characters.push(guessedCharacter);
      guesses.update((value => guessesData));

      console.log('false!');
    }
    
  };

</script>

<div class="keyboard">
  {#each alphaNumericCharacters as character}
    <!-- create a button containing character where the class is either "number" or "letter" depending on string contents -->
    <button id={character} on:click={guessLetter} class={character.match(/^[0-9]+$/) != null ? "number key" : "letter key"}>{character}</button>
  {/each}
</div>
