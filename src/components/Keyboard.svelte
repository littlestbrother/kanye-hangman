<script>
    import { alphaNumericCharacters } from '@src/helpers/constants';
    import { deObfuscateCharacters, getCharacterIndexes } from '@src/helpers/quote';
    import { guesses, quoteResolved, quote, quoteObfuscated } from '@src/helpers/storage';
    import Answer from './Answer.svelte';

    // subscribe to values in storage
    let guessesData;
    guesses.subscribe((value) => {
        guessesData = value;
    });

    let obfuscatedQuote;
    quoteObfuscated.subscribe((value) => {
        obfuscatedQuote = value;
    });

    let kanyeRestQuote;
    quote.subscribe((value) => {
        kanyeRestQuote = value;
    });

    let resolvedQuote;
    quoteResolved.subscribe((value) => {
        resolvedQuote = value;
    });

    const guessCharacter = (elementRef) => {
        // disable the keyboard if attempts are up & do a sanity check
        if (guessesData.attemptsLeft <= 0) {
            const keyboardElementRef = document.getElementById('keyboard');
            keyboardElementRef.classList.add('disabled');
            return;
        }

        // increment guesses count
        guessesData.count++;
        guesses.update((value) => guessesData);

        // disable key on keyboard pressed by the user (using element id)
        const guessedCharacter = elementRef.target.innerText;
        const clickedCharacterElementRef = document.getElementById(guessedCharacter);
        clickedCharacterElementRef.classList.add('disabled');

        // if the user guesses a character correctly
        if (resolvedQuote.correctCharacters.includes(guessedCharacter)) {
            // de-obfuscate guessed character in obfuscated quote shown to the user
            const characterIndexes = getCharacterIndexes(kanyeRestQuote, guessedCharacter);
            const updatedObfuscatedQuote = deObfuscateCharacters(obfuscatedQuote, characterIndexes, guessedCharacter);
            // update value in storage
            quoteObfuscated.update((value) => updatedObfuscatedQuote);

            // make clicked character key on keyboard green to indicate a success
            clickedCharacterElementRef.classList.add('correct');
        } else {
            // make clicked character key on keyboard red to indicate a failure
            clickedCharacterElementRef.classList.add('incorrect');
        }

        // update attempts left (value in storage)
        guessesData.attemptsLeft = guessesData.attemptsAllowed - guessesData.count;
        guesses.update((value) => guessesData);
    };
</script>

<Answer />
<div id="keyboard">
    {#each alphaNumericCharacters as character}
        <!-- create a button containing character where the class is either "number" or "letter" depending on string contents -->
        <button id={character} on:click={guessCharacter} class={character.match(/^[0-9]+$/) != null ? 'number key' : 'letter key'}>{character}</button>
    {/each}
</div>
