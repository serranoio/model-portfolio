<script lang="ts">
import { BuzzWords, buzzWordPages } from "$lib/content"

let selectedTab = BuzzWords.Cyberpoet
import Page from "./Page.svelte"


// @ts-ignore
const clickedTab = (e) => {
    if (e.target.nodeName !== "BUTTON") {
        return
    }

    selectedTab = e.target.innerText;
}
</script>

<section id="about">
    <div class="title-box">
        <h2 class="cinzel-main">About</h2>
        <i>"The only role model that I have in life is me - Since there will never be anyone at all times for me, except for myself."
        </i>
        <br/>
        <br/>
        <p>David Serrano</p>
        <div class="buzz-words cinzel-main" on:click={clickedTab}>{#each buzzWordPages as buzzWord, index} 
            {@const bulletPoint =  index !== buzzWordPages.length-1 ? "•" : ""}
            <button class={`cinzel-main ${selectedTab === buzzWord.buzzWord ? "selected" : ""}`}>{buzzWord.buzzWord}</button> 
            <span class="bullet-point">{bulletPoint}</span> 
        {/each}</div>
    </div>
    <div class="page-box">
        {#each buzzWordPages as buzzWord, index}
        <Page pageNumber={index} selected={selectedTab} buzzWord={buzzWord} reverse={false}/> 
        <Page pageNumber={index} selected={selectedTab} buzzWord={buzzWord} reverse={true}/> 
        {/each}
    </div>

</section>

<style>

h2, p {
    text-align: center;
}

h2 {
    font-size: var(--fontSizeXXLarge);
    color: var(--gray92);
    margin-bottom: calc(var(--spacing) * 4);
}

i {
    display: block;
    text-align: center;
    margin: 0 !important;
    padding: 0;
}
i,
p {
    font-size: var(--fontSizeXLarge);
    color: var(--gray80);
    margin-bottom: calc(var(--spacing) * 6);
}

.title-box {
    margin-bottom: var(--spacing);
}

.page-box {
    width: 80%;
    height: 60rem;
    margin: 0 auto;
    position: relative;

}

.selected {
    color: var(--gray92);
}

button {
    color: var(--gray60);
    padding: 0;
    display: inline;
    background-color: transparent;
    border: none;
    font-size: var(--fontSizeXXLarge);
    cursor: pointer; 
}

.buzz-words {
    color: var(--gray92);
    font-size: var(--fontSizeXXLarge);
    text-align: center;
    /* word-wrap: none; */
    /* white-space: nowrap; */

}

.about-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacingQuarter);
    
}

.about-image {
    width: 10rem;
    height: 30rem;
}

#about {
    padding: 9.8rem 0;
}


@media (max-width: 87em) {
    .buzz-words {
        display: flex;
        /* background-color: green; */
        /* flex-direction: column; */
        gap: var(--spacingHalf);
        flex-wrap:wrap;
        justify-content: space-evenly;
    }
    
    .buzz-words button {
        font-size: 3rem !important;
    }
    
    .bullet-point {
        display: none;

    }

@media (max-width: 56em) {
/* 
#about {
    margin-top: 30rem;
} */

}

}


</style>