<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import About from '../components/About.svelte';
  import Header from './Header.svelte';
  import Hero from '../components/Hero.svelte';
  import Routine from '../components/Routine.svelte';
  import Gallery from '../components/Gallery.svelte';
</script>

<svelte:head>
	<title>David Serrano</title>
	<meta name="description" content="Svelte demo app" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet">
</svelte:head>
<Hero/>
<About/>
<Routine/>
<Gallery/>
<style>

</style>
