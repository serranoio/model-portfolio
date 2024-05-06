<script>
import About from "./About.svelte";
import Gallery from "./Gallery.svelte";
import Hero from "./Hero.svelte";
import Routine from "./Routine.svelte";

</script>

<svelte:head>
	<title>David Serrano</title>
	<meta name="description" content="Technophilosopher takes on modeling" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet">
</svelte:head>
<Hero/>
<Gallery/>
<About/>
<Routine/>
<p>This website was made with love for the universe ❤️</p>
<style>

p {
	color: var(--gray92);
	margin-top: 3.2rem;
	text-align: center;
	font-size: 2rem;
}
</style>