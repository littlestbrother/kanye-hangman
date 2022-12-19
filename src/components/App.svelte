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
            <div class="card">
                <Portrait />
                <h3><span class="quote">"{obfuscatedQuote}"</span></h3>
                <Keyboard />
            </div>
        {/if}

        <!-- render if the user has provided quote solution -->
        {#if outcome}
            <!-- outcome text -->
            <h1>{outcome}</h1>
            <!-- if the user's solution was incorrect -->
            {#if outcome == "you ain't got the answers sway."}
                <img class="results-portrait" src="https://c.tenor.com/L-evXoE9VXoAAAAC/no-nope.gif" />
            {/if}

            <!-- if the user succeeded -->
            {#if outcome == 'young scholar yeezus is impressed with your work! 🎉'}
                <img class="results-portrait" src="https://media.tenor.com/SurWqHd37lIAAAAC/kanye-west-clap.gif" />
            {/if}
            <!-- restart game button -->
            <Restart />
        {/if}
    </div>
</main>

<style>
    .quote {
        background-color: #1a1a1a;
        padding: 5px;
        border-radius: 8px;
        display: inline-block;
    }

    .card {
        background-color: #212121;
        border-radius: 10px;
        padding: 1em;
        margin: auto;
        width: 95%;
    }

    @media only screen and (min-width: 768px) {
        .card {
            width: 45%;
        }
    }

    .results-portrait {
        width: 95%;
        height: 10em;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 30px;
    }
</style>
