<script>
	export let data;

	console.log(data.items);
</script>

<svelte:head>
	<title>Open Sourced Software</title>
	<meta name="description" content="AutoPilot" />
</svelte:head>

<h1 class="h1">My Software Repository</h1>
<div class="pt-10">
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Repository Name</th>
				<th>Language</th>
				<th>Size</th>
				<th>Stars Count</th>
			</tr>
		</thead>
		<tbody>
			{#each data.items as d (d.id)}
				d[0]
			{/each}
		</tbody>
	</table>
</div>
