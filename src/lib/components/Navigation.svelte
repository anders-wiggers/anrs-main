<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	import { page } from '$app/stores';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li>
			<a
				class={$page.url.pathname === '/' ? 'bg-primary-active-token' : undefined}
				href="/"
				on:click={drawerClose}
			>
				Home
			</a>
		</li>
		<li>
			<a
				class={$page.url.pathname === '/software' ? 'bg-primary-active-token' : undefined}
				href="/software"
				on:click={drawerClose}
			>
				Software
			</a>
		</li>
		<li>
			<a
				class={$page.url.pathname === '/consulting' ? 'bg-primary-active-token' : undefined}
				href="/consulting"
				on:click={drawerClose}
			>
				Consulting
			</a>
		</li>
		<Accordion>
			<AccordionItem>
				<svelte:fragment slot="summary">Project</svelte:fragment>
				<svelte:fragment slot="content">
					<ul>
						<li>
							<a
								class={$page.url.pathname.startsWith('/projects/tda')
									? 'bg-primary-active-token'
									: undefined}
								href="/projects/tda"
								on:click={drawerClose}
							>
								Tour De Azeroth
							</a>
						</li>
					</ul>
					<li>
						<a
							class={$page.url.pathname.startsWith('/projects/ccc')
								? 'bg-primary-active-token'
								: undefined}
							href="/projects/ccc"
							on:click={drawerClose}
						>
							Check Christmas Calendar
						</a>
					</li>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
		<li>
			<a
				class={$page.url.pathname === '/academic' ? 'bg-primary-active-token' : undefined}
				href="/academic"
				on:click={drawerClose}
			>
				Academic Work
			</a>
		</li>
		<li>
			<a
				class={$page.url.pathname === '/cv' ? 'bg-primary-active-token' : undefined}
				href="/cv"
				on:click={drawerClose}
			>
				Curriculum Vitae
			</a>
		</li>
	</ul>
</nav>
