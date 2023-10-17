<script lang="ts">
	import { goto } from '$app/navigation';
	import { menuNavLinks, type List } from '$lib/links';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	// Classes
	const cBase =
		'card bg-surface-100/60 dark:bg-surface-500/30 backdrop-blur-lg overflow-hidden w-full max-w-[800px] shadow-xl mt-8 mb-auto';
	const cHeader = 'bg-surface-300-600-token flex items-center';
	const cSearchInput = 'bg-transparent border-0 ring-0 focus:ring-0 w-full p-4 text-lg';
	const cResults = 'overflow-x-auto max-h-[480px] hide-scrollbar';
	const cResultAnchor =
		'!rounded-none justify-between hover:variant-soft focus:!variant-filled-primary outline-0';
	const cFooter =
		'hidden md:flex items-center gap-2 bg-surface-300-600-token p-4 text-xs font-bold';

	// Local
	let searchTerm = '';
	let resultsCopy = [
		...menuNavLinks['/software'],
		...menuNavLinks['/consulting'],
		...menuNavLinks['/academic'],
		...menuNavLinks['/cv']
	];
	let results = resultsCopy;

	// Elements
	let elemDocSearch: HTMLElement;

	let index: number = 0;

	let prevLenght: number = 0;

	let selectedElement: string = results[0].list[0].href;

	function filterList(list: List) {
		return list.filter((rowObj) => {
			const formattedSearchTerm = searchTerm.toLowerCase() || '';
			return Object.values(rowObj).join(' ').toLowerCase().includes(formattedSearchTerm);
		});
	}

	function onInput(): void {
		if (searchTerm.length != prevLenght) {
			prevLenght = searchTerm.length;
			index = 0;
		}
		renderList();
	}

	function renderList(): void {
		let resultsDeepCopy = structuredClone(resultsCopy);
		results = resultsDeepCopy.filter((category) => {
			category.list = filterList(category.list);
			if (category.list.length) return category;
		});

		let flattenList = results.flatMap((obj) => obj.list);

		console.log('Indies ' + flattenList.length);

		if (index > flattenList.length - 1) index = 0;

		if (index < 0) index = flattenList.length - 1;

		var href = flattenList[index];
		if (href) selectedElement = href.href;
	}

	function onKeyDown(event: KeyboardEvent): void {
		if (['Enter'].includes(event.code)) {
			goto(selectedElement);
			modalStore.close();
		}

		if (event.code == 'ArrowDown') {
			event.preventDefault();
			index++;
			console.log(index);
			renderList();
		}
		if (event.code == 'ArrowUp') {
			event.preventDefault();
			index--;
			console.log(index);
			renderList();
		}
	}
</script>

<div bind:this={elemDocSearch} class="modal-search {cBase}">
	<!-- Header -->
	<header class="modal-search-header {cHeader}">
		<i class="fa-solid fa-magnifying-glass text-xl ml-4" />
		<input
			class={cSearchInput}
			bind:value={searchTerm}
			type="search"
			placeholder="Search..."
			on:input={onInput}
			on:keydown={onKeyDown}
		/>
	</header>
	<!-- Results -->
	{#if results.length > 0}
		<nav class="list-nav {cResults}">
			{#each results as category}
				<div class="text-sm font-bold p-4">{category.title}</div>
				<ul>
					{#each category.list as link}
						<div class={link.href === selectedElement ? 'variant-soft-primary' : ''}>
							<li class="text-lg">
								<a
									class={cResultAnchor}
									href={link.href}
									on:click={() => {
										modalStore.close();
									}}
								>
									<div class="flex items-center gap-4">
										<i class="fa-regular fa-file" />
										<span class="flex-auto font-bold opacity-75">{link.label}</span>
									</div>
									<span class="hidden md:block text-xs opacity-50">{link.href}</span>
								</a>
							</li>
						</div>
					{/each}
				</ul>
			{/each}
		</nav>
	{:else}
		<div class="p-4">
			<p>No Results found for <code class="code">{searchTerm}</code>.</p>
		</div>
	{/if}
	<!-- Footer -->
	<footer class="modal-search-footer {cFooter}">
		<div><kbd class="kbd">Esc</kbd> to close</div>
		<div><kbd class="kbd">↓↑</kbd> to navigate</div>
		<div><kbd class="kbd">Enter</kbd> to select</div>
	</footer>
</div>
