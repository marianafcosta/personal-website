<script>
</script>

<main>
	<header>
		<h2 class="header-title">Mariana Costa</h2>
		<nav>
			<a href="https://github.com/marianafcosta">GitHub</a>
			<a href="https://www.linkedin.com/in/marianafcosta/">LinkedIn</a>
		</nav>
	</header>
	<hr/>
	<div class="intro">
		<ul class="intro-list">
			<li>Hi! I’m Mariana Costa, a recent graduate from FEUP’s BSc + MSc in Informatics and Computer Engineering.</li>
			<li>Most familiar with web development, but keen on exploring other areas of software engineering, such as software development.</li>
			<li>In my free time, I usually cycle between playing my Switch (currently struggling at Slay the Spire), reading, and scouring cafés in the city.</li>
			<li>You can take a look at my CV or download it!</li>
		</ul>
	</div>
	<div>
		<h3 class="content-title">Projects</h3>
		<div class="project-container">
			<div class="project">
				<strong><a href="https://marianafcosta.github.io/news-story-viz/">NewsLines</a> (Dissertation @ FEUP)</strong>	
				<p>Part of my dissertation, “Narrative Visualization of News Stories”. A visualization interface aimed at showcasing narratives (particularly those in news stories) through storylines. The prototype was built using vanilla JS and HTML/CSS, with D3 as the visualization engine. This project allowed me to familiarize myself with D3, as well as to explore various user research methods, such as interviews, user tests, and surveys.</p>
			</div>
			<div class="project">
				<strong><a href="https://www.youtube.com/watch?v=GFKW-izwFPI&feature=youtu.be">Real-time sports commentary</a> (LGPR @ FEUP)</strong>
				<p>A web interface for real-time sports commentary. The application was developed for zerozero, one of the biggest sport-centric websites in Portugal, in a multidisciplinary team with distinct backgrounds (namely computer engineering, multimedia, and marketing) following a Scrum-like methodology. Making sure the user could still use the application when offline was one of the main technical challenges, tackled with the use of redux-offline, Service Workers, and localStorage.</p>
			</div>
			<div class="project">
				<strong><a href="https://docs.google.com/presentation/d/1-_prkbUan8UbemqS8N-9J5PiORYADZ06Zrz6dj29nXY/edit#slide=id.p">Sistema de Planeamento e Avaliação de Refeições Escolares</a> (LDSO @ FEUP)</strong>
				<p>A web interface for real-time sports commentary. The application was developed for zerozero, one of the biggest sport-centric websites in Portugal, in a multidisciplinary team with distinct backgrounds (namely computer engineering, multimedia, and marketing) following a Scrum-like methodology. Making sure the user could still use the application when offline was one of the main technical challenges, tackled with the use of redux-offline, Service Workers, and localStorage.</p>
			</div>
		</div>
	</div>
	<footer>
		<a href="https://github.com/marianafcosta">GitHub</a>
		<a href="https://www.linkedin.com/in/marianafcosta/">LinkedIn</a>
	</footer>
</main>

<style>
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.header-title {
		margin: 0;
	}
	.header-title, .content-title {
		color: #ff3e00;
		font-weight: 100;
	}
	main {
		padding: 1em;
		max-width: 800px;
		margin: auto;
	}
	.intro {
		margin-top: 32px;
		border: 1px solid black;
		padding: 16px;
	}
	.intro-list {
		margin: 0;
	}
	footer {
		margin-top: 32px;
		text-align: center;
	}
	.project-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;
	}
</style>