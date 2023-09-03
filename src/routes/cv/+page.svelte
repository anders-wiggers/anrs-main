<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import {
		faMessage,
		faCode,
		faUser,
		faComputer,
		faBolt,
		faEdit,
		faCheck,
		faX,
		faTrashCan,
		faBox
	} from '@fortawesome/free-solid-svg-icons';
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>Settings</title>
	<meta name="description" content="Settings for Aitor" />
</svelte:head>

<div class="text-column">
	<h1 class="pb-4">Settings</h1>
	<Accordion autocollapse>
		<AccordionItem open>
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<svelte:fragment slot="summary">(summary)</svelte:fragment>
			<svelte:fragment slot="content">(content)</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<svelte:fragment slot="summary">(summary)</svelte:fragment>
			<svelte:fragment slot="content">(content)</svelte:fragment>
		</AccordionItem>
		<!-- ... -->
	</Accordion>
</div>

<style>
	.hidden {
		display: none;
	}
</style>
