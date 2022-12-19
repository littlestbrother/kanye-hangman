<script>
    import { gameOutcome, guesses, quote, quoteObfuscated, quoteResolved } from '@src/helpers/storage';

    const resetState = () => {
        for (const e of [quote, quoteObfuscated, gameOutcome]) {
            e.update((value) => undefined);
        }

        const quoteResolvedEmpty = { present: [] };
        quoteResolved.update((value) => quoteResolvedEmpty);

        const guessesEmpty = { count: 0, attemptsLeft: 0, wrongGuessTolerance: 0 };
        guesses.update((value) => guessesEmpty);
    };
</script>

<div>
    <button on:click={resetState}><h2>go again ↺</h2></button>
</div>
