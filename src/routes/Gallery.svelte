<script lang="ts">
  import { Photoshoots } from "$lib/content";


    console.log(Photoshoots)
</script>


<section id="gallery">
    <h2>Photoshoots</h2>
    <p>This is where I tell my story.</p>
    <div class="grid">

    {#each Photoshoots as photoshoot}
    <a href={"/" + photoshoot.url}>
    <figure class="photoshoot-grid">
            {#each photoshoot.photos as photo}
            <img src={photo}/>
            {/each}
        </figure>
        </a>
    {/each}

    </div>
</section>

<style>

.photoshoot-grid {
    display: grid;
    grid-template-columns: 3fr 2fr;
    cursor: pointer;
}

a {
    grid-column: 2;
}

.photoshoot-grid:hover {
    background-image: rgba(255, 255, 255, 50);
}

img {
    width: 100%;
}

#gallery {
    padding: 9.8rem 0;
}

.grid {
    display: grid;
    margin: 0 auto;
    max-width: 120rem;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    gap: calc(var(--spacing) * 2);
}

h2, p {
    text-align: center;
}

h2 {
    font-size: var(--fontSizeXXLarge);
    color: var(--gray92);
}

p {
    font-size: var(--fontSizeXLarge);
    color: var(--gray80);
    margin-bottom: calc(var(--spacing) * 2);
}

</style>