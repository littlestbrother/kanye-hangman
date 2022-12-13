<script>
  import { guesses } from "@src/helpers/storage";

  let guessesData;
  guesses.subscribe((value) => {
    guessesData = value;
  });
</script>

<div>
  <!-- render if user is allowed to guess -->
  {#if guessesData.attemptsLeft > 0}
    <h2>guesses available: {guessesData.attemptsLeft}</h2>
  {:else}
    <!-- if user is out of guesses then render a hint -->
    <h3>submit your final guess below 👇</h3>
  {/if}
  <input type="text" placeholder="beware punctuation" /><button class="answer-button">✓</button>
</div>
