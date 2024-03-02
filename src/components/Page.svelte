<script lang="ts">
  import type { BuzzWordPage, BuzzWords } from "../util/content";



export let pageNumber: number;
export let buzzWord: BuzzWordPage; 
export let reverse: boolean;
export let selected: BuzzWords; 

$: open = buzzWord.buzzWord === selected ? "open" : ""


const styles =`background-image: url(${buzzWord.url});`

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
}


.open {
    transform: rotateY(0deg);
    
}

h2 {
    color: var(--gray92);
}

</style>