<script>
    import { alphaNumericCharacters } from '@src/helpers/constants';
    import { deObfuscateCharacters, getCharacterIndexes } from '@src/helpers/quote';
    import { guesses, quoteResolved, quote, quoteObfuscated } from '@src/helpers/storage';
    import Answer from './Answer.svelte';

    // subscribe to state TODO: find a way to shorten this logic!
    let guessesData;
    guesses.subscribe((value) => {
        guessesData = value;
    });

    let obfuscatedQuote;
    quoteObfuscated.subscribe((value) => {
        obfuscatedQuote = value;
    });

    let kanyeQuote;
    quote.subscribe((value) => {
        kanyeQuote = value;
    });

    let resolvedQuote;
    quoteResolved.subscribe((value) => {
        resolvedQuote = value;
    });

    const guessLetter = (element) => {
        // disabled keyboard if attempts are up & sanity check
        if (guessesData.attemptsLeft <= 0) {
            const keyboardElementRef = document.getElementById('keyboard');
            keyboardElementRef.classList.add('disabled');
            return;
        }

        // increment guess count
        guessesData.count++;
        guesses.update((value) => guessesData);

        // disable key on ui pressed by user
        const guessedCharacter = element.target.innerText;
        const clickedCharacterElementRef = document.getElementById(guessedCharacter);
        clickedCharacterElementRef.classList.add('disabled');

        // if the user guesses a character correctly
        if (resolvedQuote.present.includes(guessedCharacter)) {
            // de-obfuscate guessed character in obfuscated quote shown to the user
            const characterIndexes = getCharacterIndexes(kanyeQuote, guessedCharacter);
            const updatedObfuscatedQuote = deObfuscateCharacters(obfuscatedQuote, characterIndexes, guessedCharacter);
            quoteObfuscated.update((value) => updatedObfuscatedQuote);

            // make clicked key green to indicate a success
            clickedCharacterElementRef.classList.add('correct');
        } else {
            // make clicked key red to indicate a failure
            clickedCharacterElementRef.classList.add('incorrect');
        }

        // update attempts left
        guessesData.attemptsLeft = guessesData.wrongGuessTolerance - guessesData.count;
        guesses.update((value) => guessesData);
    };
</script>

<Answer />
<div id="keyboard">
    {#each alphaNumericCharacters as character}
        <!-- create a button containing character where the class is either "number" or "letter" depending on string contents -->
        <button id={character} on:click={guessLetter} class={character.match(/^[0-9]+$/) != null ? 'number key' : 'letter key'}>{character}</button>
    {/each}
</div>
