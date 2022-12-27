<script>
    import { getKanyeRestQuote } from '@src/helpers/kanyeRest';
    import { obfuscateQuote, resolveQuote } from '@src/helpers/quote';
    import { explicitAllowed, guesses, quote, quoteObfuscated, quoteResolved } from '@src/helpers/storage';
    import Toggle from 'svelte-toggle';

    // subscribe to values in storage
    let guessesData;
    guesses.subscribe((value) => {
        guessesData = value;
    });

    let toggled;
    explicitAllowed.subscribe((value) => {
        toggled = value;
    });

    // update explicitAllowed boolean on toggle (to be saved forever in storage even after this round)
    const allowExplicit = () => {
        explicitAllowed.update((value) => toggled);
    };

    // get the quote from the kanye rest api and update values relating to quote in storage
    const loadQuote = async () => {
        try {
            // store quote from kanye rest api
            const kanyeRestQuote = await getKanyeRestQuote({ explicitAllowed: toggled });
            quote.update((value) => kanyeRestQuote);

            // store obfuscated quote
            quoteObfuscated.update((value) => obfuscateQuote(kanyeRestQuote));

            // store resolved quote
            const resolvedQuote = resolveQuote(kanyeRestQuote);
            quoteResolved.update((value) => resolvedQuote);

            // calculate how many wrong guesses will be allowed (half the length of present characters + a tenth of the length of present characters)
            guessesData.attemptsAllowed = Math.round(resolvedQuote.correctCharacters.length / 2) + Math.round(resolvedQuote.correctCharacters.length / 10);
            guessesData.attemptsLeft = guessesData.attemptsAllowed;
            guesses.update((value) => guessesData);

            // debug
            console.log(kanyeRestQuote);
        } catch (err) {
            console.error(err);
        }
    };
</script>

<div>
    <!-- Button for user to get quote from Kanye Rest API -->
    <button on:click={loadQuote} class="start-button">receive words of wisdom from <em>kanye west</em></button>
    <br />
    <!-- Explicit Quotes Toggle -->
    <h3>allow explicit quotes</h3>
    <Toggle class="toggle" bind:toggled hideLabel toggledColor="#3CCF4E" untoggledColor="#1a1a1a" on:toggle={allowExplicit} />
</div>

<style>
    .start-button {
        background-color: #332FD0;
    }
</style>
