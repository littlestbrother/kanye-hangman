<script>
    import { answerOutcome, guesses, quote, quoteObfuscated, quoteResolved } from '@src/helpers/storage';

    // return values in storage to defaults
    const resetState = () => {
        for (const e of [quote, quoteObfuscated, answerOutcome]) {
            e.update((value) => undefined);
        }

        const quoteResolvedEmpty = { correctCharacters: [] };
        quoteResolved.update((value) => quoteResolvedEmpty);

        const guessesEmpty = { count: 0, attemptsLeft: 0, attemptsAllowed: 0 };
        guesses.update((value) => guessesEmpty);
    };
</script>

<div>
    <button on:click={resetState}><h2>go again ↺</h2></button>
</div>
