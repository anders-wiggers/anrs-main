<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

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
				class={$page.url.pathname === '/academic' ? 'bg-primary-active-token' : undefined}
				href="/academic"
				on:click={drawerClose}
			>
				Academic Work
			</a>
		</li>
		<li>
			<a
				class={$page.url.pathname === '/autopilot' ? 'bg-primary-active-token' : undefined}
				href="/autopilot"
				on:click={drawerClose}
			>
				Consulting
			</a>
		</li>
		<li>
			<a
				class={$page.url.pathname === '/settings' ? 'bg-primary-active-token' : undefined}
				href="/settings"
				on:click={drawerClose}
			>
				Curriculum Vitae
			</a>
		</li>
	</ul>
</nav>
