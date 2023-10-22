<script lang="ts">
	import { faL } from '@fortawesome/free-solid-svg-icons';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	// Classes
	const cBase =
		'card bg-surface-100/60 dark:bg-surface-500/30 backdrop-blur-lg overflow-hidden w-full max-w-[800px] shadow-xl mt-8 mb-auto p-8';
	const cHeader = 'flex items-center mb-4';
	const cFooter = 'md:flex items-center gap-2 p-4 text-xs font-bold';

	// Elements
	let elemDocSearch: HTMLElement;
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { SlideToggle } from '@skeletonlabs/skeleton';

	function getAnrsCookie(input: string): string {
		const parts = input.split(';');

		for (const part of parts) {
			const trimmedPart = part.trim();

			if (trimmedPart.startsWith('anrs-cookie=')) {
				// Found the "anrs-cookie" part
				const cookieValue = trimmedPart.substr('anrs-cookie='.length);
				return cookieValue;
			}
		}

		return ''; // Return undefined if "anrs-cookie" is not found
	}

	class CookieContainer {
		pref: boolean;
		stats: boolean;
		mark: boolean;
		unclassified: boolean;

		constructor(prop1: boolean, prop2: boolean, prop3: boolean, prop4: boolean) {
			this.pref = prop1;
			this.stats = prop2;
			this.mark = prop3;
			this.unclassified = prop4;
		}

		// Serialize the object to a JSON string
		serialize(): string {
			return JSON.stringify(this);
		}

		// Deserialize a JSON string to create an object
		static deserialize(jsonString: string): CookieContainer {
			if (jsonString === '') return new CookieContainer(false, false, false, false);
			const obj = JSON.parse(jsonString);
			return new CookieContainer(obj.pref, obj.stats, obj.mark, obj.unclassified);
		}
	}

	let pref: boolean = false;
	let stats: boolean = false;
	let mark: boolean = false;
	let unclassified: boolean = false;
	//TODO Set the preferance
	import { onMount } from 'svelte';

	onMount(() => {
		if (document !== undefined) {
			let settingsString = getAnrsCookie(document.cookie);

			let container = CookieContainer.deserialize(settingsString);
			pref = container.pref;
			stats = container.stats;
			mark = container.mark;
			unclassified = container.unclassified;
		}
	});

	function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


	async function closeStoreWithTimeToSeeChange(){
		await sleep(300);
    	modalStore.close();
	}

	function setLocalSettings(prefIn, statsIn, markIn, unclassifiedIn){
		pref = prefIn;
		stats = statsIn;
		mark = markIn;
		unclassified = unclassifiedIn;
	}

	function acceptAll() {
		let container = new CookieContainer(true, true, true, true);
		setLocalSettings(true,true,true,true)

		let serialized = container.serialize();
		document.cookie = 'anrs-cookie=' + serialized + '; path=/';

		closeStoreWithTimeToSeeChange();
	}
	function rejectAll() {
		let container = new CookieContainer(false, false, false, false);
		setLocalSettings(false,false,false,false)
		let serialized = container.serialize();
		document.cookie = 'anrs-cookie=' + serialized + '; path=/';
		closeStoreWithTimeToSeeChange();
	}
	function updateCookies() {
		let container = new CookieContainer(pref, stats, mark, unclassified);
		let serialized = container.serialize();
		document.cookie = 'anrs-cookie=' + serialized + '; path=/';
		closeStoreWithTimeToSeeChange();
	}

	function loadCookies() {}
</script>

<div bind:this={elemDocSearch} class="modal-search {cBase}">
	<!-- Header -->
	<header class="modal-search-header {cHeader}">
		<h1 class="h1">Anrs Cookie Center</h1>
	</header>
	<!-- Results -->
	<div>
		<p>
			We process your data to deliver content or advertisements and measure the delivery of such
			content or ads to gain insights about our website. We share this information with our partners
			based on consent and legitimate interests. You can exercise your rights to give consent or
			object to legitimate interests based on a specific purpose below or at the partner level in
			the link under each purpose. These choices will be communicated to our vendors participating
			in the Transparency and Consent Framework.
		</p>
	</div>
	<div class="pt-4 pb-4">
		<Accordion>
			<AccordionItem>
				<svelte:fragment slot="summary">
					<div class="flex justify-between">
						<div>Necessary</div>
						<SlideToggle name="slide" disabled checked />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="content">
					These cookies are necessary for the website to function and cannot be switched off in our
					systems. They are usually set in response to actions made by you, such as requesting
					services, setting your personal preferences, logging in, or filling out a form. You can
					set your browser to block or alert you about these cookies, but some parts of the website
					may not work as a result.
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary">
					<div class="flex justify-between">
						<div>Preference</div>
						<SlideToggle name="slide" bind:checked={pref} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="content">
					Preference cookies enable a website to remember information that changes the way the
					website behaves or looks, like your preferred language or the region that you are in.
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary">
					<div class="flex justify-between">
						<div>Statistics</div>
						<SlideToggle name="slide" bind:checked={stats} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="content">
					Statistic cookies help website owners to understand how visitors interact with websites by
					collecting and reporting information anonymously.
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary">
					<div class="flex justify-between">
						<div>Marketing</div>
						<SlideToggle name="slide" bind:checked={mark} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="content">
					Marketing cookies are used to track visitors across websites. The intention is to display
					ads that are relevant and engaging for the individual user and thereby more valuable for
					publishers and third party advertisers.
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary">
					<div class="flex justify-between">
						<div>Unclassified</div>
						<SlideToggle name="slide" bind:checked={unclassified} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="content">
					Unclassified cookies are cookies that we are in the process of classifying, together with
					the providers of individual cookies.
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
	<!-- Footer -->
	<footer class="modal-search-footer {cFooter} flex justify-between">
		<div>
			<button type="button" class="btn variant-soft" on:click={rejectAll}>Reject All</button>
		</div>
		<div>
			<button type="button" class="btn variant-soft" on:click={acceptAll}>Accept All</button>
			<button type="button" class="btn variant-soft" on:click={updateCookies}
				>Accept Choosen Cookies</button
			>
		</div>
	</footer>
</div>
