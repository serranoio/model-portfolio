<script>
import sexyPose from "$lib/assets/sexy-pose.jpg"
import gradPic from "$lib/assets/grad-3.jpg"
</script>

<section id="hero">
	<div class="center">
		<h1 class="cinzel-main">
			<span class="image-left">
				<img
				alt="Ripped grad pic"
				src={gradPic}
				/>
			</span>
			<span class="image-right">
				<img
				alt="sexy pose"
				src={sexyPose}
				/>
			</span>
			<span class="first-name">David</span>
			<span class="last-name">Serrano</span>
			
		</h1>
	</div>
</section>

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
		right: -10%;
		top: -60%;
		animation: fadeIn;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;;
}

.first-name {
	
	animation: fadeIn;
	animation-duration: 3s;
	animation-timing-function: ease-in-out;;
}
.last-name {
	
	animation: fadeIn;
	animation-duration: 4s;
	animation-timing-function: ease-in-out;;
}

.image-left {
	opacity: .75;
	position: absolute;
	width: 35rem;
	top: 0%;
	background-color: green;
	height: 55rem;
	left: 0%;
	animation: fadeIn;
	animation-duration: 6s;
	animation-timing-function: ease-in-out;;
	}
	@keyframes fadeIn {
	  0% {
		opacity: 0;
	}
	
	100% {
		  opacity: 1;
	}
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

@media (max-width: 69em) {


	.image-left {
		left: 0%;
		top: 10%;
	}
	.image-right {
		right: 0%;
		bottom: 10%;
	}
.first-name {
	transform: translate(-10%, -20%);
}

.last-name {
	transform: translate(10%, 20%);
}
}


@media (max-width: 44em) {
	.image-left {
		left: -10%;
		top: 50%;
		transform: translate(50%, 0%);
	}
	.image-right {
		right: -10%;
		bottom: 0%;
		transform: translate(-50%, 0%);
	}
.first-name {
	text-align: center;
	transform: translate(0%, -20%);
}

.last-name {
	text-align: center;
	transform: translate(0%, 20%);
}
}

@media (max-width: 37em) {
	.image-left {
		left: -30%;
		top: 90%;
		transform: translate(50%, 0%);
	}
	.image-right {
		right: -30%;
		bottom: 10%;
		transform: translate(-50%, -30%);
	}
	
	.first-name, .last-name {
	font-size: 11rem;
}



	

}

</style>