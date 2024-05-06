<script lang="ts">
import type { BuzzWordPage, BuzzWords } from "$lib/content";

export let pageNumber: number;
export let buzzWord: BuzzWordPage; 
export let reverse: boolean;
export let selected: BuzzWords; 
import trump from "$lib/assets/trump.jpg"
import meRose from "$lib/assets/me-rose.jpg"
import github from "$lib/assets/github.png"
import chicago from "$lib/assets/chicago.jpg"
import side from "$lib/assets/side.png"
import plantaSmile from "$lib/assets/planta-wow.jpg"

$: open = buzzWord.buzzWord === selected ? "open" : ""


const getPicture = (): string => {

    if (buzzWord.url === "me-rose.jpg") {
        return meRose
    } else if (buzzWord.url === "trump.jpg") {
        return trump
    } else if (buzzWord.url === "github.png") {
        return github
    } else if (buzzWord.url === "side.png") {
        return side 
    } else if (buzzWord.url === "chicago.jpg") {
        return chicago 
    } else if (buzzWord.url === "planta-wow.jpg") {
        return plantaSmile 
    }

    return ""
}

const styles =`background-image: url(${getPicture()});`
</script>

<figure class={`page ${reverse ? "reverse" : "regular"} ${open}`} data-page={pageNumber}>
    {#if reverse}
    <div class="image-box" style={styles}></div>

    {:else}
    <div>
        <h2 class="cinzel-main">{buzzWord.buzzWord}</h2>
        <p>{buzzWord.content}</p>
    </div>
    {/if}
</figure>

<style>


.image-box {
    width: auto;
    height: 100%;
    background-position: 50% 50%;
    background-size: cover;
}
.regular {
    transform-origin: right;
    left: 0;
}

h2 {
    text-align: center;
    font-size: var(--fontSizeXLarge);
    margin-bottom: calc(var(--spacing) * 1.5);
}

p {
    font-size: var(--fontSizeLarge);
    color: var(--gray80);
    line-height: 2;
}


.reverse {
    transform-origin: left;
    right: 0;
}

.page {
    padding: var(--spacing);
    box-shadow: inset 0 0 1px 1px var(--gray92);
    height: 100%;
    position: absolute;
    transition: all 1s ease-in;
    width: 50%;
    transform-style: preserve-3d;
    perspective: 500px;
    transform: rotateY(90deg);
    opacity: 0;
}


.open {
    transform: rotateY(0deg);
    opacity: 1;
}

h2 {
    color: var(--gray92);
}

@media (max-width: 56em) {
    .page {
        width: 100%;
    }
    
    .regular {
        top: 60%;
        height: 60%;
        overflow-y: scroll;
    }

    .reverse {
        top: 0%;
        height: 60%;
        width: 100%;
    }

}
</style>