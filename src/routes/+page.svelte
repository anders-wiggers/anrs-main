<script lang="ts">
	import AitorLogo from '../lib/resources/svg/a_white.svg?component';
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<svelte:head>
	<title>Building solutions that empowers people!</title>
	<meta name="description" content="Personal CV for Anders Wiggers" />
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<h2 class="font-bold h2">Welcome to my Personal Site</h2>
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<AitorLogo class="fill-token" width="100%" height="100%" />
		</figure>
		<!-- / -->
		<div class="space-y-2">
			<p>On this site you will find information about my:</p>
			<a 
			href="/software" 
			>
			<p><code>/OpenSourceSoftware</code></p>
			</a>
			<a 
			href="/consulting" 
			>
			<p><code>/Consultancy</code></p>
			</a>
			<a 
			href="/academic" 
			>
			<p><code>/AcademicWork</code></p>
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
