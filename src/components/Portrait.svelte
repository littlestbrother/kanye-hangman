<script>
    import { funnyKanyeGifs } from '@src/helpers/constants';

    const getRandomKanyeGif = () => {
        return funnyKanyeGifs[Math.floor(Math.random() * funnyKanyeGifs.length)];
    };
</script>

<div>
    <!-- Portrait Image of Kanye West -->
    <img src={getRandomKanyeGif()} alt="yeezus" class="portrait" />
</div>