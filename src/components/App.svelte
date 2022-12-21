<script>
    import GetQuoteButtons from '@src/components/GetQuoteButtons.svelte';
    import Keyboard from '@src/components/Keyboard.svelte';
    import { answerOutcome, quoteObfuscated } from '@src/helpers/storage';
    import Portrait from './Portrait.svelte';
    import Restart from './Restart.svelte';

    // subscribe to values in storage
    let obfuscatedQuote;
    quoteObfuscated.subscribe((value) => {
        obfuscatedQuote = value;
    });

    let outcome;
    answerOutcome.subscribe((value) => {
        outcome = value;
    });
</script>

<main>
    <div>
        <!-- render if the quote has not been retrieved and obfuscated, and the user has not provided solution -->
        {#if !obfuscatedQuote && !outcome}
            <h1>what would <em>yeezus</em> do?</h1>
            <GetQuoteButtons />
        {/if}

        <!-- render if the quote has been retrieved and obfuscated, and the user has not provided solution -->
        {#if obfuscatedQuote && !outcome}
            <h3>
                <span style="background-color:#1a1a1a; padding:8px; border-radius:10px">what would <em>yeezus</em> do?</span>
            </h3>
            <div class="gameboard">
                <Portrait />
                <h3><span class="quote">"{obfuscatedQuote}"</span></h3>
                <Keyboard />
            </div>
        {/if}

            <!-- TODO: make a way to forfeit opportunity to answer to see quote -->

        <!-- render if the user has provided quote solution -->
        {#if outcome}
            <!-- outcome text -->
            <h1 class="jumbo">{outcome}</h1>
            <!-- if the user's solution was incorrect -->
            {#if outcome == "you ain't got the answers sway."}
                <img class="game-results-image" src="https://c.tenor.com/L-evXoE9VXoAAAAC/no-nope.gif" />
            {/if}

            <!-- if the user succeeded -->
            {#if outcome == 'young scholar yeezus is impressed with your work! 🎉'}
                <img class="game-results-image" src="https://media.tenor.com/SurWqHd37lIAAAAC/kanye-west-clap.gif" />
            {/if}
            <!-- restart game button -->
            <Restart />
        {/if}
    </div>
</main>
