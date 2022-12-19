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

        <!-- render if the user has made their final answer -->
        {#if outcome}
            <!-- outcome text -->
            <h1 class="jumbo">{outcome}</h1>
            <!-- if the user failes -->
            {#if outcome == "you ain't got the answers sway."}
                <img class="game-results-image" src="https://c.tenor.com/L-evXoE9VXoAAAAC/no-nope.gif" />
            {/if}

            <!-- if the user succeeded -->
            {#if outcome == 'young scholar yeezus is impressed with your work!'}
                <img class="game-results-image" src="https://media.tenor.com/SurWqHd37lIAAAAC/kanye-west-clap.gif" />
            {/if}
            <!-- restart game button -->
            <Restart />
        {/if}
    </div>
</main>
