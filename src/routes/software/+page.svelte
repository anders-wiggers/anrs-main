<script>
	import { Table } from '@skeletonlabs/skeleton';
	export let data;

	import { Paginator } from '@skeletonlabs/skeleton';

	let source = [[]];
	let metaData = ["of-by-one"];

	data.items.forEach(element => {
		let subList = [];
  	// Add the properties you want to the subList
	var desc = element.description === null ? "No Description" : element.description 
  		subList.push(element.name, desc, element.language, element.stargazers_count);
  	// Add the subList to the list of lists
  	source.push(subList);
	metaData.push(element.html_url);
	});

	let paginationSettings = {
	page: 0,
	limit: 10,
	size: source.length,
	amounts: [10,20,40],
};

let tableHeaders = ['Repository Name', 'Description', 'Language', 'Stars'];

$: paginatedSource = source.slice(
	paginationSettings.page * paginationSettings.limit,
	paginationSettings.page * paginationSettings.limit + paginationSettings.limit
);

function goto(meta){
	window.open(meta.detail, '_blank');
}
</script>

<svelte:head>
	<title>Open Sourced Software</title>
	<meta name="description" content="AutoPilot" />
</svelte:head>

<h1 class="h1">My Software Repository</h1>

<div class="pt-10">

	<Paginator
	bind:settings={paginationSettings}
	showFirstLastButtons="{false}"
	showPreviousNextButtons="{true}"
/>

<Table interactive on:selected={goto} source={{ head: tableHeaders, body: paginatedSource, meta: metaData} } />
</div>
