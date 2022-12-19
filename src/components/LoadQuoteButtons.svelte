<script>
    import { getKanyeRestQuote } from '@src/api/kanyeRest';
    import { obfuscateQuote, resolveQuote } from '@src/helpers/quote';
    import { allowExplicitQuotes, guesses, quote, quoteObfuscated, quoteResolved } from '@src/helpers/storage';
    import Toggle from 'svelte-toggle';

    let guessesData;
    guesses.subscribe((value) => {
        guessesData = value;
    });

    let toggled
    allowExplicitQuotes.subscribe((value => {
        toggled = value;
    }))

    const allowExplicit = () => {
        allowExplicitQuotes.update((value) => toggled);
    }

    // get the quote from the kanye rest api and update values relating to quote in storage
    const loadQuote = async () => {
        try {
            // update "quote" value in storage
            const kanyeQuote = await getKanyeRestQuote({explicitAllowed: toggled});
            quote.update((value) => kanyeQuote);

            // update "quoteObfuscated" value in storage
            quoteObfuscated.update((value) => obfuscateQuote(kanyeQuote));

            // update "quoteResolved" value in storage
            const resolvedQuote = resolveQuote(kanyeQuote);
            quoteResolved.update((value) => resolvedQuote);

            // calculate how many wrong guesses will be allowed
            guessesData.wrongGuessTolerance = Math.round(resolvedQuote.present.length / 2);
            guessesData.attemptsLeft = guessesData.wrongGuessTolerance;
            guesses.update((value) => guessesData);

            console.log(kanyeQuote);
        } catch (err) {
            console.error(err);
        }
    };

</script>

<div>
    <!-- Button for user to get quote from Kanye Rest API -->
    <button on:click={loadQuote}>receive words of wisdom from kanye west</button>
    <br />
    <!-- TODO: make this a switch toggle & actually work -->
    <h3>allow explicit quotes</h3>
    <Toggle class='toggle' bind:toggled hideLabel toggledColor="#3CCF4E" untoggledColor="#1a1a1a" on:toggle={allowExplicit}/>
</div>
