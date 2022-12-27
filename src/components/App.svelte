<script>
    import GetQuoteButtons from '@src/components/GetQuoteButtons.svelte';
    import Keyboard from '@src/components/Keyboard.svelte';
    import { userWon, quote, quoteObfuscated, quoteUserSolution } from '@src/helpers/storage';
    import Portrait from './Portrait.svelte';
    import Restart from './Restart.svelte';

    // subscribe to values in storage
    let obfuscatedQuote;
    quoteObfuscated.subscribe((value) => {
        obfuscatedQuote = value;
    });

    let userHasWon;
    userWon.subscribe((value) => {
        userHasWon = value;
    });

    let kanyeQuote;
    quote.subscribe((value) => {
        kanyeQuote = value;
    });

    let userSolution;
    quoteUserSolution.subscribe((value) => {
        userSolution = value;
    });
</script>

<main>
    <div>
        <!-- render if the quote has not been retrieved and obfuscated, and the user has not provided a solution -->
        {#if !obfuscatedQuote && (userHasWon == null || userHasWon == undefined)}
            <h1>what would <em>yeezus</em> do?</h1>
            <GetQuoteButtons />
        {/if}

        <!-- render if the quote has been retrieved and obfuscated, and the user has not provided solution -->
        {#if obfuscatedQuote && (userHasWon == null || userHasWon == undefined)}
            <h3>
                <span class="title">what would <em>yeezus</em> do?</span>
            </h3>
            <div class="gameboard">
                <Portrait />
                <h3><span class="quote">"{obfuscatedQuote}"</span></h3>
                <Keyboard />
            </div>
        {/if}

        <!-- render if the user has a provided quote solution -->
        {#if userHasWon != null && userHasWon != undefined}
            {#if userHasWon == true}
                <h1>young scholar yeezus is impressed with your work! 🎉</h1>
                <img class="game-results-image" alt="you won" src="https://media.tenor.com/SurWqHd37lIAAAAC/kanye-west-clap.gif" />
                <h3><span class="quote success"><em>"{kanyeQuote}"</em></span></h3>
                <h3>...is correct!</h3>
            {:else}
                <h1>you ain't got the answers sway.</h1>
                <img class="game-results-image" alt="you lost" src="https://c.tenor.com/L-evXoE9VXoAAAAC/no-nope.gif" />
                <h3>
                    <span class="quote">
                        <span class="success"><em>"{kanyeQuote}"</em></span>
                        <hr />
                        <span class="failure"><em>"{userSolution}"</em></span>
                    </span>
                </h3>
            {/if}
            <!-- button to restart the game -->
            <Restart />
        {/if}
    </div>
</main>

<style>
    .title {
        background-color: #1a1a1a;
        padding: 8px;
        border-radius: 10px;
    }

    .success {
        color: #3ccf4e;
    }

    .failure {
        color: #cd3131;
    }

    .quote {
        background-color: #1a1a1a;
        padding: 5px;
        border-radius: 8px;
        display: inline-block;
    }

    .game-results-image {
        width: 95%;
        height: 10em;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 30px;
    }

    .gameboard {
        background-color: #212121;
        border-radius: 10px;
        padding: 1em;
        margin: auto;
        width: 95%;
    }

    @media only screen and (min-width: 768px) {
        .gameboard {
            width: 45%;
        }
    }
</style>
