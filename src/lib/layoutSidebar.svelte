<script lang="ts">
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';

	// Props
	export let sidebar = true;
	export let tocKey: unknown = undefined;

	// Classes
	const cBase = 'page-padding flex items-start gap-20 ';
	const cColLeft = 'page-container-aside';
	const cColRight = 'sticky top-10 hidden xl:block space-y-4';

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesColLeft = `${cColLeft}`;
	$: classesColRight = `${cColRight}`;
</script>

<div class="layout-docs {classesBase}">
	<!-- Content -->
	<div
		class="layout-docs-content {classesColLeft}"
		use:tocCrawler={{ mode: 'generate', scrollTarget: '#page', key: tocKey }}
	>
		<slot />
	</div>
	<!-- Aside -->
	{#if sidebar}
		<!-- Ad Position -->
		<aside class="layout-cols-aside {classesColRight}">
			<!-- Table of Contents -->
			<TableOfContents class="w-80">On the Page</TableOfContents>
		</aside>
	{/if}
</div>
