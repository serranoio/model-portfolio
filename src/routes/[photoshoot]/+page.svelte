<script lang="ts">
import { Photoshoots, type Photoshoot } from '$lib/content.js';
import meRose from "$lib/images/me-rose.jpg"
    import sexyPose from "$lib/images/sexy-pose.jpg"

export let data;
let photoshoot: Photoshoot = Photoshoots.filter((photoshoot) => photoshoot.url === data.photoshoot)[0]
    
console.log(photoshoot)
</script>

<svelte:head>
	<title>David Serrano</title>
	<meta name="description" content="Svelte demo app" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet">
</svelte:head>
<section>

    <h2 class="cinzel-main">{photoshoot.title}</h2>
    <p class="cinzel-main">{photoshoot.description}</p>
    <figure class="photo-grid">
        {#each photoshoot.photos as photo}
        {#if photo === "me-rose.jpg"}
        <img src={meRose}/>
        {/if}
        {#if photo === "sexy-pose.jpg"}
        <img src={sexyPose}/>
        {/if}
        {/each}
        
    </figure>
    
</section>

<style>
 
    section {
        padding: 12.4rem 2.4rem; 
    }

    h2 {
        font-size: var(--fontSizeXXLarge);
        color: var(--gray92);
        text-align: center;
        margin-bottom: var(--spacing);
    }
    
    p {
        font-size: var(--fontSizeLarge);
        color: var(--gray80);
        text-align: center;
        margin-bottom: calc(var(--spacing) * 2);
        line-height: 1.5;
    }

    .photo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--spacing);
        width: 100%;
    }

    img {
        width: 100%;
    }

</style>