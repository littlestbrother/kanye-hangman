<script>
    import { gameOutcome, guesses, quote } from '@src/helpers/storage';

    let guessesData;
    guesses.subscribe((value) => {
        guessesData = value;
    });

    let kanyeQuote;
    quote.subscribe((value) => {
        kanyeQuote = value;
    });

    let userGuess;

    const guessQuote = () => {
        // save user from submitting nothing
        if (!userGuess) {
            return;
        }

        const userGuessLow = userGuess;

        if (userGuessLow == kanyeQuote) {
            gameOutcome.update((value) => 'young scholar yeezus is impressed with your work!');
        } else {
            gameOutcome.update((value) => "you ain't got the answers sway.");
        }
    };
</script>

<div>
    <!-- render if user is allowed to guess -->
    {#if guessesData.attemptsLeft > 0}
        <h2>guesses available: {guessesData.attemptsLeft}</h2>
    {:else}
        <!-- if user is out of guesses then render a hint -->
        <h3>submit your final guess below 👇</h3>
    {/if}
    <input bind:value={userGuess} type="text" placeholder="beware punctuation" /><button class="answer-button" on:click={guessQuote}>✓</button>
</div>
