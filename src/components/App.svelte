<script>
    import LoadQuoteButtons from '@src/components/LoadQuoteButtons.svelte';
    import Keyboard from '@src/components/Keyboard.svelte';
    import { gameOutcome, quoteObfuscated } from '@src/helpers/storage';
    import Hangman from './Hangman.svelte';
    import Restart from './Restart.svelte';

    // subscribe to "quoteObfuscated" value in storage
    let obfuscatedWisdom;
    quoteObfuscated.subscribe((value) => {
        obfuscatedWisdom = value;
    });

    let outcome;
    gameOutcome.subscribe((value) => {
        outcome = value;
    });
</script>

<main>
    <div>
        <!-- render if the quote has NOT been resolved -->
        {#if !obfuscatedWisdom && !outcome}
            <h1>what would <em>yeezus</em> do?</h1>
            <LoadQuoteButtons />
        {/if}

        <!-- render if the quote has been revealed -->
        {#if obfuscatedWisdom && !outcome}
            <h3>
                <span style="background-color:#1a1a1a; padding:8px; border-radius:10px">what would <em>yeezus</em> do?</span>
            </h3>
            <div class="gameboard">
                <Hangman />
                <h3><span class="quote">"{obfuscatedWisdom}"</span></h3>
                <Keyboard />
            </div>
        {/if}

        {#if outcome}
            <h1>{outcome}</h1>
            <Restart />
        {/if}
    </div>
</main>
