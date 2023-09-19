<script>
	// @ts-nocheck

	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<section class="space-y-4">
	<h2 class="h2">Bachelor Thesis</h2>

	<div class="text-column">
		<h3 class="h3">Web-based Visualization for Exploring Public School Data</h3>
		<h4 class="h4">Summery</h4>
		<span>
			The bachelor thesis, in abstract terms, tackles the problem of gathering a large dataset
			online, processing it, and presenting the data to a large user-group. In more a concrete
			context we gathered the data available on public schools in Denmark, processed the data, and
			created a web-based visualization tool that allows users to search and filter differed
			schools. The bachelor thesis was written with{' '}
			<a href="https://www.linkedin.com/in/aron-baldvinsson-48a3a818b/" target="_blank"> Aron </a>
			and
			<a href="https://www.linkedin.com/in/alex-krogh-smythe/" target="_blank"> Alex </a>
			and supervised by Hans-Jörg
		</span>
		<h4 class="h4">Abstract</h4>
		<span>
			The Danish government encourages all public schools in Denmark to provide as many statistics
			as possible to The Danish Ministry of Education and Research to store, analyze, and publish on
			uddannelsesstatistik.dk. Navigating the aforementioned website and exploring the data provided
			is a labor-intensive and a non-user-friendly task. The data is spread across multiple sites
			and difficult to work with. By identifying the users' requirements in the context of searching
			for information on public school data, we discovered a demand for a platform that allows users
			to easily navigate and explore such data. In the process of conceptualizing such an
			application, we found the literature insufficient in terms of presenting a general solution to
			visualize heterogeneous data sets to a broad user group. From this we formulated our
			hypothesis: Can we solve to the challenge of visualizing heterogeneous data sets to a broad
			user group by developing and implementing a framework that generalizes a solution the
			challenge. This resulted in the creation of the DEEVA Framework, that aims to support
			developers in the process of building visualization applications. To confirm or disprove the
			hypothesis, we created an application with a user-friendly interface that facilitates data
			exploration with a focus on the iterative process. Results from the evaluation confirmed our
			hypothesis. However further iterations of the framework are needed to fully realize its
			potential.
		</span>
		<h4 class="h4">Data Gathering Tool</h4>

		<div class="flex flex-col md:flex-row pb-4">
			<div class="w-full md:w-1/3 flex items-center justify-center">
				<p>
					We approached the challenge of scraping web data by developing a software layer on top of
					Selenium that can be fed a set of instructions, interpret them, and execute the given
					commands. The advantage of this approach was maintainability. If a value changed, a new
					one was added, we did not need to go into the code and change it. We can simply change the
					instruction file to accommodate the new changes. Meaning that in future work, we could
					develop more sophisticated detection software which outputs the instruction JSON file.
				</p>
			</div>
			<div class="w-full md:w-2/3 flex items-center justify-center">
				<div class="p-6">
					<CodeBlock
						language="json"
						code={`{
  "instructions": [
    {
      "get": "https://targetwebsite.com/api"
    },
    {
      "switch": "WebApplicationFrame"
    },
    {
      "wait": 2
    }
  ]
}`}
					/>
				</div>
			</div>
		</div>
	</div>
	<div id="text">
		<h4 class="h4">Visualization Tool</h4>
		<h5 class="h5">Filtering Data</h5>
		<p>
			To filter the data we implemented filtering parameters which utilizes scented widgets. Scented
			Widgets are a form of dynamic query which increases usability in information spaces. The
			widgets use embedded visualizations on top of graphical user interface controls to enhance
			exploration of data sets. A scent is generated from social data of other users behavior or
			data-driven metrics. This scent lowers the "cost" of information gathering and improves
			exploration of the set.
		</p>
		<div class="flex flex-col md:flex-row">
			<div class="w-full md:w-1/3 flex items-center justify-center">
				<img src="/images/fitlering.png" class="w-full" alt="Image" />
			</div>
			<div class="w-full md:w-2/3 flex items-center justify-center">
				<div class="p-6">
					<video
						onloadedmetadata="this.muted = true"
						autoplay
						loop
						muted
						playsinline
						class="w-full p-2"
					>
						<source src="/videos/filteringhd.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</div>

		<h5 class="h5">Relating diffrend data points</h5>
		<div>
			<p>
				The Relation Phase is centered around a main graphing area where users can choose between
				different categories on the x- and y-axis through a drop down menu. The designer choice
				means that if users want to see a graph of grades over income, they have the ability to
				select them on the different axis. Allowing the users to chose what data is plotted is a
				better way to drive exploration, because we are not limiting the visualizations to
				comparisons that we as developers can think of
			</p>
		</div>
		<div class="flex flex-col md:flex-row pb-4">
			<div class="w-full md:w-1/3 flex items-center justify-center">
				<img src="/images/relation.png" class="w-full" alt="Image" />
			</div>
			<div class="w-full md:w-2/3 flex items-center justify-center">
				<div class="p-6">
					<video
						onloadedmetadata="this.muted = true"
						autoplay
						loop
						muted
						playsinline
						class="w-full p-2"
					>
						<source src="/videos/relation.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</div>

		<div>
			<p class="text-center">
				The full project can be found at GitHub:
				<a
					href="https://github.com/anders-wiggers/visualization-of-school-data/"
					target="_blank"
					class="text-blue-500 hover:underline"
				>
					<i class="fab fa-github" />
					Visualization Web Application
				</a>
				The Thesis is available here:
				<a
					href="/comn_res/bsc_thesis_public_school_data.pdf"
					target="_blank"
					class="text-blue-500 hover:underline"
				>
					<i class="fas fa-copy" />
					Bachelor Thesis
				</a>
			</p>
		</div>
	</div>
</section>

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
