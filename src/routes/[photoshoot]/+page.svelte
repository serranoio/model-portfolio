<script lang="ts">
import { Photoshoots, type Photoshoot } from '$lib/content.js';
import meRose from "$lib/assets/me-rose.jpg"
    import sexyPose from "$lib/assets/sexy-pose.jpg"
    import grad1 from "$lib/assets/grad-1.jpg"
    import grad2 from "$lib/assets/grad-2.jpg"
    import grad3 from "$lib/assets/grad-3.jpg"
    import grad4 from "$lib/assets/grad-4.jpg"
    import grad5 from "$lib/assets/grad-5.jpg"
    import plantaDrink from "$lib/assets/planta-drink.jpg"
    import plantaSmile from "$lib/assets/planta-smile.jpg"
    import pr1 from "$lib/assets/pr-1.jpg"
    import pr2 from "$lib/assets/pr-2.jpg"
    import pr3 from "$lib/assets/pr-3.jpg"
    import pr4 from "$lib/assets/pr-4.jpg"
    import pr5 from "$lib/assets/pr-5.jpg"
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

    @media (max-width: 50em) {
        h2 {
            font-size: var(--fontSizeXLarge);
        }
    }

</style>