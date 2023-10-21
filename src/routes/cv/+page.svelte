<script lang="ts">
	let eduJson = [
		{
			title: 'Cand.scient in IT Product Development, Computer Science',
			place: 'Aarhus University',
			start: '2020',
			end: '2022',
			disc: '',
			profilePic: '/images/cv/logo/au.jpg'
		},
		{
			title: 'BSc. in IT-Product Development, Computer Science',
			place: 'Aarhus University',
			start: '2017',
			end: '2020',
			disc: '',
			profilePic: '/images/cv/logo/au.jpg'
		},
		{
			title: 'STX, Matematik',
			place: 'Svendborg Gymnasium',
			start: '2013',
			end: '2016',
			disc: '',
			profilePic: '/images/cv/logo/svg.jpg'
		}
	];

	let cvJson = [
		{
			title: 'Software Development Consultant',
			place: 'Immeo P/S',
			position: 'Full-time',
			start: '01-09-2022',
			end: 'Current',
			location: 'København, Hovedstaden, Danmark',
			disc: 'Testdrevet udvikling · Microsoft Azure · C# · Microservices',
			profilePic: '/images/cv/logo/immeo.jpg'
		},
		{
			title: 'Freelance Software Engineer',
			place: 'ABW Consulting',
			position: 'Self-employed',
			start: '01-01-2021',
			end: 'Current',
			location: 'København, Hovedstaden, Danmark',
			disc: 'CMS · Microsoft Azure · C# · Git · Docker · Webudvikling',
			profilePic: '/images/cv/logo/anrs.png'
		},
		{
			title: 'Teaching Assistant in Experimental System Development',
			place: 'Department of Computer Science',
			position: 'Part-time',
			start: '01-01-2022',
			end: '01-06-2022',
			location: 'Aarhus University',
			profilePic: '/images/cv/logo/au.jpg'
		},
		{
			title: 'Teaching Assistant in Deep Learning for Visual Recognition',
			place: 'Department of Computer Science',
			position: 'Part-time',
			start: '01-07-2021',
			end: '01-01-2022',
			location: 'Aarhus University',
			profilePic: '/images/cv/logo/au.jpg'
		},
		{
			title: 'Teaching Assistant in Experimental System Development',
			place: 'Department of Computer Science',
			position: 'Part-time',
			start: '01-01-2021',
			end: '01-06-2021',
			location: 'Aarhus University',
			profilePic: '/images/cv/logo/au.jpg'
		},
		{
			title: 'Teaching Assistant in Web of Things',
			place: 'Department of Computer Science',
			position: 'Part-time',
			start: '01-08-2020',
			end: '01-01-2021',
			location: 'Aarhus University',
			profilePic: '/images/cv/logo/au.jpg'
		}
	];

	import CvEntry from '../../lib/components/Cv/CvEntry.svelte';
</script>

<svelte:head>
	<title>CV</title>
	<meta name="description" content="Personal CV for Anders Wiggers" />
</svelte:head>

<div class="text-column">
	<h1 class="h1">Curriculum Vitae</h1>
	<div class="card p-4 m-4">
		<h2 class="h3">Work Experience</h2>
		{#each cvJson as item}
			<CvEntry {item} />
		{/each}
	</div>
	<div class="card p-4 m-4">
		<h2 class="h3">EducationEducation</h2>
		{#each eduJson as item}
			<CvEntry {item} />
		{/each}
	</div>
</div>

<style>
	/* Apply padding to all headers */
	h2,
	h3,
	h4,
	h5 {
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
	}
</style>
