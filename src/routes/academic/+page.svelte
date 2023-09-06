<script>
  	import LayoutSidebar from '$lib/layoutSidebar.svelte';
</script>

<svelte:head>
  <title>Academic Endeavor</title>
  <meta name="description" content="GPT Wrapper" />
</svelte:head>

<LayoutSidebar>
<div class="text-column">
  <h1>Academic Endeavor</h1>
  <div class="main">
    <div class="padding container">
      <h1 id="title">Bachelor Thesis</h1>
      <h2 id="title">
        Web-based Visualization for Exploring Public School Data
      </h2>
      <div id="text">
        <h2 id="title">Summery</h2>
        <span>
          The bachelor thesis, in abstract terms, tackles the problem of
          gathering a large dataset online, processing it, and presenting the
          data to a large user-group. In more a concrete context we gathered the
          data available on public schools in Denmark, processed the data, and
          created a web-based visualization tool that allows users to search and
          filter differed schools. The bachelor thesis was written with{" "}
          <a
            href="https://www.linkedin.com/in/aron-baldvinsson-48a3a818b/"
            target="_blank"
          >
            Aron
          </a>
          and
          <a
            href="https://www.linkedin.com/in/alex-krogh-smythe/"
            target="_blank"
          >
            Alex
          </a>
          and supervised by Hans-Jörg
        </span>
      </div>
      <div id="text">
        <h2 id="title">Abstract</h2>
        <span>
          The Danish government encourages all public schools in Denmark to
          provide as many statistics as possible to The Danish Ministry of
          Education and Research to store, analyze, and publish on
          uddannelsesstatistik.dk. Navigating the aforementioned website and
          exploring the data provided is a labor-intensive and a
          non-user-friendly task. The data is spread across multiple sites and
          difficult to work with. By identifying the users' requirements in the
          context of searching for information on public school data, we
          discovered a demand for a platform that allows users to easily
          navigate and explore such data. In the process of conceptualizing such
          an application, we found the literature insufficient in terms of
          presenting a general solution to visualize heterogeneous data sets to
          a broad user group. From this we formulated our hypothesis: Can we
          solve to the challenge of visualizing heterogeneous data sets to a
          broad user group by developing and implementing a framework that
          generalizes a solution the challenge. This resulted in the creation of
          the DEEVA Framework, that aims to support developers in the process of
          building visualization applications. To confirm or disprove the
          hypothesis, we created an application with a user-friendly interface
          that facilitates data exploration with a focus on the iterative
          process. Results from the evaluation confirmed our hypothesis. However
          further iterations of the framework are needed to fully realize its
          potential.
        </span>
      </div>
      <div id="text">
        <h2 id="title">Data Gathering Tool</h2>
        <div class="row">
          <div class="col-sm">
            <div class="alignMiddle">
              We approached the challenge of scraping webdata by developing a
              software layer on top of selenium that can be fed a set of
              instructions, interpret them, and execute the given commands. The
              advantage of this approach was maintainability. If a values
              changed, a new was added we did not need to go into the code and
              change it. We can simply change the instruction file to
              accommodate the new changes. Meaning that in future work we could
              develop more sophisticated detection software which outputs the
              instruction JSON file.
            </div>
          </div>
          <div class="col-sm">
            <pre>
{`{
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
						</pre>
          </div>
        </div>
      </div>
      <div id="text">
        <h4 id="title">Visualization Tool</h4>
        <h5 class="title_low">Filtering Data</h5>
        <div>
          <p>
            To filter the data we implemented filtering parameters which
            utilizes scented widgets. Scented Widgets are a form of dynamic
            query which increases usability in information spaces. The widgets
            use embedded visualizations on top of graphical user interface
            controls to enhance exploration of data sets. A scent is generated
            from social data of other users behavior or data-driven metrics.
            This scent lowers the "cost" of information gathering and improves
            exploration of the set.
          </p>
        </div>
        <div class="row">
          <div class="col-4">
            <img class="img" src="/images/fitlering.png" />
          </div>
          <div class="col-8">
            <video
              onloadedmetadata="this.muted = true"
              autoPlay
              loop
              muted
              playsInline
              class="vid"
            >
              <source src="/videos/filteringhd.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <h5 class="title_low">Relating diffrend data points</h5>
        <div>
          <p>
            The Relation Phase is centered around a main graphing area where
            users can choose between different categories on the x- and y-axis
            through a drop down menu. The designer choice means that if users
            want to see a graph of grades over income, they have the ability to
            select them on the different axis. Allowing the users to chose what
            data is plotted is a better way to drive exploration, because we are
            not limiting the visualizations to comparisons that we as developers
            can think of
          </p>
        </div>
        <div class="row">
          <div class="col-4">
            <img class="img" src="/images/relation.png" />
          </div>
          <div class="col-8">
            <video
              onloadedmetadata="this.muted = true"
              autoPlay
              loop
              muted
              playsInline
              class="vid"
            >
              <source src="/videos/relation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div>
          <p class="gitlink">
            The full project can be found at github:&nbsp;
            <a
              href="https://github.com/anders-wiggers/visualization-of-school-data/"
              target="_blank"
            >
              <i class="fab fa-github" />
               Visualization Web Application
            </a>
            &nbsp;The Thesis is avaible here:&nbsp;
            <a
              href="/comn_res/bsc_thesis_public_school_data.pdf"
              target="_blank"
            >
              <i class="fas fa-copy" />
               Bachelor Thesis
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</LayoutSidebar>
