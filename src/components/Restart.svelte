<script>
    import { userWon, guesses, quote, quoteObfuscated, quoteResolved } from '@src/helpers/storage';

    // return values in storage to defaults
    const resetState = () => {
        for (const e of [quote, quoteObfuscated, userWon]) {
            e.update((value) => null);
        }

        const quoteResolvedEmpty = { correctCharacters: [] };
        quoteResolved.update((value) => quoteResolvedEmpty);

        const guessesEmpty = { count: 0, attemptsLeft: 0, attemptsAllowed: 0 };
        guesses.update((value) => guessesEmpty);
    };
</script>

<div>
    <button on:click={resetState}>go again ↺</button>
</div>
