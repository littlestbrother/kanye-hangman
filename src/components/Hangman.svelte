<script>
    import { kanyeGifs } from '@src/helpers/constants';

    const getRandomKanyeGif = () => {
        return kanyeGifs[Math.floor(Math.random() * kanyeGifs.length)];
    };
</script>

<div>
    <img src={getRandomKanyeGif()} alt="kanye-west" class="hangman" />
</div>
