<script>
    import { answerOutcome, guesses, quote } from '@src/helpers/storage';

    // subscribe to values in storage
    let guessesData;
    guesses.subscribe((value) => {
        guessesData = value;
    });

    let kanyeRestQuote;
    quote.subscribe((value) => {
        kanyeRestQuote = value;
    });

    let userSolution;

    const guessQuote = () => {
        // save the user from themselves if they accidentally submit nothing
        if (!userSolution) {
            return;
        }

        // check if the user provided a solution that is correct- store the answer outcome accordingly
        if (userSolution.toLowerCase() == kanyeRestQuote) {
            answerOutcome.update((value) => 'young scholar yeezus is impressed with your work! 🎉');
        } else {
            answerOutcome.update((value) => "you ain't got the answers sway.");
        }
    };
</script>

<div>
    <!-- render if user is allowed to guess -->
    {#if guessesData.attemptsLeft > 0}
        <h2>guesses available: {guessesData.attemptsLeft}</h2>
    {:else}
        <!-- if user is out of guesses then render directions -->
        <h3>submit your final guess below 👇</h3>
    {/if}
    <input bind:value={userSolution} type="text" placeholder="beware punctuation" /><button class="answer-button" on:click={guessQuote}>✓</button>
</div>
