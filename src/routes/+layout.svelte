<script lang="ts">
	import Logo from '../lib/resources/svg/a_white.svg?component';

	import Fa from 'svelte-fa/src/fa.svelte';

	import { faSearch } from '@fortawesome/free-solid-svg-icons';

	import DocsSearch from '$lib/modals/Search/Search.svelte';

	import type { ModalSettings } from '@skeletonlabs/skeleton';

	import { browser } from '$app/environment';

	import type { ModalComponent } from '@skeletonlabs/skeleton';

	import Footer from '$lib/components/Footer/Footer.svelte';

	let isOsMac = false;

	// Set Search Keyboard Shortcut
	if (browser) {
		let os = navigator.userAgent;
		isOsMac = os.search('Mac') !== -1;
	}

	const modalComponentRegistry: Record<string, ModalComponent> = {
		modalSearch: { ref: DocsSearch }
	};

	import '../app.postcss';
	import {
		AppBar,
		AppShell,
		Drawer,
		Modal,
		Toast,
		LightSwitch,
		initializeStores
	} from '@skeletonlabs/skeleton';
	initializeStores();

	import { getDrawerStore, getModalStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
	const modalStore = getModalStore();

	import Navigation from '$lib/components/Navigation.svelte';
	function drawerOpen(): void {
		drawerStore.open();
	}

	// Search
	function triggerSearch(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalSearch',
			position: 'item-start'
		};
		modalStore.trigger(modal);
	}

	// Keyboard Shortcut (CTRL/⌘+Space) to Focus Search
	function onWindowKeydown(e: KeyboardEvent): void {
		if ((e.metaKey || e.ctrlKey) && e.key === ' ') {
			// Prevent default browser behavior of focusing URL bar
			e.preventDefault();
			// If modal currently open, close modal (allows to open/close search with CTRL/⌘+K)
			$modalStore.length ? modalStore.close() : triggerSearch();
		}
	}
</script>

<!-- NOTE: using stopPropagation to override Chrome for Windows search shortcut -->
<svelte:window on:keydown|stopPropagation={onWindowKeydown} />

<!-- App Shell -->
<Toast position="tr" />
<Modal components={modalComponentRegistry} />
<Drawer>
	<Navigation />
</Drawer>

<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-500/10">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
				<strong class="text-xl uppercase" style=""
					><Logo width="30px" height="30px" class="fill-token" /></strong
				>
				<strong class="text-xl uppercase" style="margin-left: -5px;">NRS</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<div class="md:inline md:ml-4">
					<button
						class="btn p-2 px-4 space-x-4 variant-soft hover:variant-soft-primary"
						on:click={triggerSearch}
					>
						<Fa icon={faSearch} />
						<span class="hidden md:inline-block badge variant-soft"
							>{isOsMac ? '⌘' : 'Ctrl'}+Space</span
						>
					</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<!-- Router Slot -->
	<div class="container p-10 mx-auto">
		<slot />
	</div>
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>

	<!-- ---- / ---- -->
</AppShell>
