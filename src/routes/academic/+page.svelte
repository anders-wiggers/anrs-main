<script>
	import LayoutSidebar from '$lib/layoutSidebar.svelte';
	import SectionBst from './bst.svelte';
	import SectionMst from './mst.svelte';
	import SectionPuf from './puf.svelte';
</script>

<svelte:head>
	<title>Academic Endeavor</title>
	<meta name="description" content="GPT Wrapper" />
</svelte:head>

<LayoutSidebar>
	<header class="space-y-4">
		<h1 class="h1">Academic Achievements</h1>
		<p>This page contains a collections of my Academic Achievements</p>
	</header>
	<hr />
	<SectionMst />
	<hr />
	<SectionBst />
	<hr />
	<SectionPuf />
</LayoutSidebar>
