<script lang="ts">
import { BuzzWords, buzzWordPages } from "../util/content";

let selectedTab = BuzzWords.EthnicMinority
import Page from "./Page.svelte"

const clickedTab = (e: any) => {
    if (e.target.nodeName !== "BUTTON") {
        return
    }

    
    selectedTab = e.target.innerText;
    console.log(selectedTab)
}
</script>

<section id="about">
    <div class="title-box">
        <div class="buzz-words cinzel-main" on:click={clickedTab}>{#each buzzWordPages as buzzWord, index} 
            {@const bulletPoint =  index !== buzzWordPages.length-1 ? "•" : ""}
            <button class={`cinzel-main ${selectedTab === buzzWord.buzzWord ? "selected" : ""}`}>{buzzWord.buzzWord}</button> {bulletPoint} 
        {/each}</div>
    </div>

    <div class="page-box">

        {#each buzzWordPages as buzzWord, index}
        <Page pageNumber={index} selected={selectedTab} buzzWord={buzzWord} reverse={false}/> 
        <Page pageNumber={index} selected={selectedTab} buzzWord={buzzWord} reverse={true}/> 



        {/each}
        
    </div>

    <div class="about-grid">
        <div class="about-text">
            <h3>Header</h3>
            <p>Text</p>
        </div>
        <div class="about-image-section">
            <div class="about-image">

            </div>

        </div>

    </div>

</section>

<style>


   

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

#about-section {
    padding: 9.8rem 0;
}

</style>