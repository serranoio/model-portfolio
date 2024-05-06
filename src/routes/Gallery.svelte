
<script lang="ts">
    import { Photoshoots } from "$lib/content";
    import meRose from "$lib/images/me-rose.jpg"
    import sexyPose from "$lib/images/sexy-pose.jpg"
    import grad1 from "$lib/images/grad-1.jpg"
    import grad2 from "$lib/images/grad-2.jpg"
    import grad3 from "$lib/images/grad-3.jpg"
    import grad4 from "$lib/images/grad-4.jpg"
    import grad5 from "$lib/images/grad-5.jpg"
    import plantaDrink from "$lib/images/planta-drink.jpg"
    import plantaSmile from "$lib/images/planta-smile.jpg"
    import pr1 from "$lib/images/pr-1.jpg"
    import pr2 from "$lib/images/pr-2.jpg"
    import pr3 from "$lib/images/pr-3.jpg"
    import pr4 from "$lib/images/pr-4.jpg"
    import pr5 from "$lib/images/pr-5.jpg"
</script>


<section id="gallery">
    <h2>Photoshoots</h2>
    <p>This is where I tell my story.</p>
    <div class="grid">

    {#each Photoshoots as photoshoot}
    {@const photoshootLength = photoshoot.length < 4 ? photoshoot.length : 4}
    <a href={"/" + photoshoot.url}>
    <figure class="photoshoot-grid">
        {#each photoshoot.photos.slice(0,photoshootLength) as photo}
            {#if photo === "me-rose.jpg"}
            <img src={meRose}/>
            {/if}
            {#if photo === "sexy-pose.jpg"}
            <img src={sexyPose}/>
            {/if}
            {#if photo === "grad-2.jpg"}
            <img src={grad2}/>
            {/if}
            {#if photo === "grad-1.jpg"}
            <img src={grad1}/>
            {/if}
            {#if photo === "grad-3.jpg"}
            <img src={grad3}/>
            {/if}
            {#if photo === "grad-4.jpg"}
            <img src={grad4}/>
            {/if}
            {#if photo === "grad-5.jpg"}
            <img src={grad5}/>
            {/if}
            {#if photo === "planta-drink.jpg"}
            <img src={plantaDrink}/>
            {/if}
            {#if photo === "planta-smile.jpg"}
            <img src={plantaSmile}/>
            {/if}
            {#if photo === "pr-1.jpg"}
            <img src={pr1}/>
            {/if}
            {#if photo === "pr-2.jpg"}
            <img src={pr2}/>
            {/if}
            {#if photo === "pr-3.jpg"}
            <img src={pr3}/>
            {/if}
            {#if photo === "pr-4.jpg"}
            <img src={pr4}/>
            {/if}
            {#if photo === "pr-5.jpg"}
            <img src={pr5}/>
            {/if}
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
    /* grid-column: 2; */
    position: relative;
}

a::after {
    content: "ENTER";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
    left: 0%;
    top: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--fontSizeXLarge);
    letter-spacing: 2px;
    opacity: 0;
    transition: all .2s;
}

a:hover::after {
    opacity: 1;
    color: var(--gray92);
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
    margin-bottom: var(--spacing);
}

p {
    font-size: var(--fontSizeXLarge);
    color: var(--gray80);
    margin-bottom: calc(var(--spacing) * 3);
}

</style>