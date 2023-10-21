<script>
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import { ProgressBar } from '@skeletonlabs/skeleton';

	let files;

	let fileName = 'Upload a Image';

	function onChangeHandler(e) {
		console.log('file data:', e);
		console.log('file data:', files);
		fileName = files[0].name;
	}

	let exampleJson = [
		{
			Santaclause: 7
		}
	];
</script>

<svelte:head>
	<title>Check Christmas Calenders</title>
	<meta name="description" content="Christmas calenders checker" />
</svelte:head>

<h1 class="h1">Christmas Calendar Checker</h1>
<div class="mt-10">
	The <code>Christmas Calendar Checker</code> project employs deep learning techniques to identify icons
	on the Danish Quick Christmas Calder game. The model was trained utilizing transfer learning and a
	dataset of annotated images collected during the Christmas season. The model can be accessed via a
	Python-based flash API, which enables users to submit an image and receive the results in JSON format.
	The project and an accompanying demonstration video can be accessed on my personal Github page.
</div>
<div class="card m-4 p-6">
	<div class="flex">
		<h2 class="h2">Check a Calender</h2>
		<div class="flex items-center">
			<span class="chip variant-filled ml-5 cursor-default"
				>Feature will unlock at Christmas {new Date().getFullYear()}</span
			>
		</div>
	</div>

	<p>Simply take a photo of your calender and drop it onto the field below</p>
	<div class="mt-10">
		<FileDropzone bind:files name="files" on:change={onChangeHandler} disabled>
			<svelte:fragment slot="lead"><i class="fa fa-upload" /></svelte:fragment>
			<svelte:fragment slot="message">{fileName}</svelte:fragment>
			<svelte:fragment slot="meta">PNG and JPG are allowed</svelte:fragment>
		</FileDropzone>
	</div>
	<div class="pt-2 flex justify-end">
		<button disabled type="button" class="btn bg-gradient-to-br variant-gradient-primary-secondary">
			<span><i class="fa fa-upload" /></span>
			<span>Submit Photo</span>
		</button>
	</div>

	<hr class="mt-10" />

	<div class="mt-10">
		<div class="flex">
			<h3 class="h3">Results</h3>
			<div class="flex items-center">
				<span class="ml-5 cursor-default italic">Example of results</span>
			</div>
		</div>
		<div class="mt-5">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>Symbol</th>
						<th>Amount</th>
						<th>Progress</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td> Santaclause </td>
						<td> <b>7</b>/<b>10</b></td>
						<td>
							<div class="flex">
								<ProgressBar value={70} />
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
