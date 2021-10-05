<script>
    import ProjectCard from "./ProjectCard.svelte";

    let currYear = new Date().getFullYear();
</script>

<main>
    <header>
        <h2 class="header-title">Mariana Costa</h2>
        <nav>
            <a href="https://github.com/marianafcosta">GitHub</a>
            <a href="https://www.linkedin.com/in/marianafcosta/">LinkedIn</a>
            <a
                href="https://drive.google.com/file/d/1_PPB1LLOHgxDvCT9A6aIt2Q9o7y-ykvg/view?usp=sharing"
                >CV</a
            >
        </nav>
    </header>
    <hr />
    <div class="intro">
        <ul class="intro-list">
            <li>
                Hi! I’m Mariana Costa, a recent graduate from FEUP’s BSc + MSc
                in Informatics and Computer Engineering.
            </li>
            <li>
                Most familiar with web development, but keen on exploring other
                areas of software engineering, such as software development.
            </li>
            <li>
                In my free time, I usually cycle between playing my Switch
                (currently struggling at Slay the Spire), reading, and scouring
                cafés in the city.
            </li>
        </ul>
    </div>
    <div>
        <h2 class="content-title">Projects</h2>
        <div class="project-container">
            <ProjectCard
                title="NewsLines"
                location="Dissertation @ FEUP"
                link="https://marianafcosta.github.io/news-story-viz/"
                teamSize="1"
                tags={["Javascript", "HTML", "CSS", "D3", "User Research"]}
                description="Part of my dissertation, “Narrative Visualization of News Stories”. A visualization interface aimed at showcasing narratives (particularly those in news stories) through storylines. The prototype was built using vanilla JS and HTML/CSS, with D3 as the visualization engine. This project allowed me to familiarize myself with D3, as well as to explore various user research methods, such as interviews, user tests, and surveys."
            />
            <ProjectCard
                title="Real-time sports commentary"
                location="LGPR @ FEUP"
                link="https://www.youtube.com/watch?v=GFKW-izwFPI&feature=youtu.be"
                teamSize="8"
                tags={[
                    "React",
                    "Redux",
                    "Redux Offline",
                    "React Testing Library",
                    "Heroku",
                    "PHP",
                ]}
                description="A web interface for real-time sports commentary. The application was developed for zerozero, one of the biggest sport-centric websites in Portugal, in a multidisciplinary team with distinct backgrounds (namely computer engineering, multimedia, and marketing) following a Scrum-like methodology. Making sure the user could still use the application when offline was one of the main technical challenges, tackled with the use of redux-offline, Service Workers, and localStorage."
            />
            <ProjectCard
                title="Sistema de Planeamento e Avaliação de Refeições Escolares"
                location="LDSO @ FEUP"
                link="https://docs.google.com/presentation/d/1-_prkbUan8UbemqS8N-9J5PiORYADZ06Zrz6dj29nXY/edit#slide=id.p"
                teamSize="8"
                tags={[
                    "React",
                    "Redux",
                    "Laravel",
                    "PHPUnit",
                    "PostgreSQL",
                    "Docker",
                    "Heroku",
                ]}
                description="A web interface for real-time sports commentary. The application was developed for zerozero, one of the biggest sport-centric websites in Portugal, in a multidisciplinary team with distinct backgrounds (namely computer engineering, multimedia, and marketing) following a Scrum-like methodology. Making sure the user could still use the application when offline was one of the main technical challenges, tackled with the use of redux-offline, Service Workers, and localStorage."
            />
        </div>
    </div>
    <footer>
        <p>&copy {currYear} Mariana Costa |</p>
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
    main {
        padding: 1em;
        max-width: 800px;
        margin: auto;
    }
    footer {
        margin-top: 32px;
        text-align: center;
    }
    footer > * {
        font-size: 100;
        display: inline-block;
    }
    .header-title {
        margin: 0;
    }
    .header-title,
    .content-title {
        color: #ff3e00;
        font-weight: 100;
    }
    .intro {
        margin-top: 32px;
        box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
        padding: 16px;
    }
    .intro-list {
        margin: 0;
    }
    .project-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
    @media (max-width: 640px) {
        .project-container {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
