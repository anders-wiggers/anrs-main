<script lang="ts">
	// eslint-disable-next-line no-undef

	// Logo

	// Base Classes
	const cBase =
		'bg-surface-50 dark:bg-surface-900 border-t border-surface-500/10 text-xs xl:text-base';
	const cRowOne =
		'flex flex-col xl:flex-row justify-center items-center xl:items-start space-y-5 xl:space-y-0';
	const cRowTwo =
		'flex flex-col xl:flex-row justify-between items-center xl:items-start space-y-4 xl:space-y-0 text-center';

	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	// Search
	function triggerCookie(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalCookie',
			position: 'item-start'
		};
		modalStore.trigger(modal);
	}
</script>

<div class="page-footer {cBase}">
	<div class="w-full max-w-7xl mx-auto p-4 py-16 xl:py-24 space-y-10">
		<!-- Row 1 -->
		<section class={cRowOne}>
			<div
				class="grid grid-cols-1 gap-2 place-content-center place-items-center xl:place-items-start"
			>
				<p class="!text-sm opacity-80 text-center">
					Anrs.dk Build with Svelte and Skeleton © {new Date().getFullYear()} Anders Wiggers.
				</p>
				<!-- Current Version -->
			</div>
		</section>

		<hr class="opacity-20" />

		<!-- Row 2 -->
		<section class={cRowTwo} style="align-items: center;">
			<p>
				<a class="" href="/privacy/data-privacy"> Data and privacy policy </a>
				<span class="opacity-10 mx-2">|</span>
				<a class="" href="/privacy/cookie"> Cookie Policy </a>
				<span>-</span>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-missing-attribute -->
				<a on:click={triggerCookie} class="cursor-pointer"> Cookie Center </a>
				<span class="opacity-10 mx-2">|</span>
				<span class="">CVR 41949120</span>
			</p>
			<div class="flex space-x-4">
				<a
					class="btn variant-soft"
					href="https://github.com/anders-wiggers"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fa-brands fa-github" />
					<span class="hidden xl:inline-block ml-2">Github</span>
				</a>
				<a
					class="btn variant-soft"
					href="https://discordapp.com/users/293841860009656320"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fa-brands fa-discord" />
					<span class="hidden xl:inline-block ml-2">Discord</span>
				</a>
				<a
					class="btn variant-soft"
					href="https://twitter.com/stdioh_a"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fa-brands fa-twitter" />
					<span class="hidden xl:inline-block ml-2">Twitter</span>
				</a>
				<a
					class="btn variant-soft"
					href="https://www.linkedin.com/in/anders-wiggers/"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fa-brands fa-linkedin" />
					<span class="hidden xl:inline-block ml-2">LinkedIn</span>
				</a>
			</div>
		</section>
	</div>
</div>
