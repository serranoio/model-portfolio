<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import About from '../components/About.svelte';
  import  topochico  from "../lib/images/IMG_2865.jpg"
  import sexyPose from "../lib/images/sexy-pose.jpg"
  import Header from './Header.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet">
</svelte:head>

<section id="hero">


	<div class="center">

		<h1 class="cinzel-main">
			<span class="image-left">
				<img
				alt="topo chico"
				src={topochico}
				/>
			</span>
			<span class="image-right">
				<img
				alt="topo chico"
				src={sexyPose}
				/>
			</span>
			<span class="first-name">David</span>
			<span class="last-name">Serrano</span>
			
		</h1>
		
	</div>


</section>
<About/>
<style>


h1 {
	position: relative;
}
span img {
	width: 100%;
	height: 100%;
}
img {
	background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0,0,0,0.5));

	filter: brightness(75%);
}
.image-right {
	position: absolute;
	background-color: white;
	width: 35rem;
    height: 55rem;
    right: 13%;
    top: -60%;
}

.image-left {
	opacity: .75;
	position: absolute;
	width: 35rem;
    top: 0%;
	background-color: green;
	height: 55rem;
	left: 15%;
}

section {
	display: flex;
	min-height: 100vh;
	width: 100%;
	justify-content: center;
	align-items: center;
}

h1 {
	text-transform: uppercase;
	letter-spacing: 2px;
}

h1 span {
	display: block;
}
.first-name {
	transform: translate(-25%);
}

.last-name {
	transform: translate(25%);
}
h1 {
	font-size: 15rem;
	color: var(--gray92);
}

</style>
