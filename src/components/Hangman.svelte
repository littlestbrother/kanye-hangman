<script>
  import { kanyeGifs } from "@src/helpers/constants";
  import { guesses } from "@src/helpers/storage";

  // subscribe to state
  let guessesData;
  guesses.subscribe((value) => {
    guessesData = value;
  });

  // get kanye gif to act as hangman TODO: add overlay on image to indicate guesses available
  const getRandomKanyeGif = () => {
    const randomNum = Math.floor(
      Math.random() * (kanyeGifs.length - 1 - 0 + 1) + 0
    );
    return kanyeGifs[randomNum];
  };
</script>

<div>
  <img src={getRandomKanyeGif()} alt="kanye-west" class="hangman" />
</div>
