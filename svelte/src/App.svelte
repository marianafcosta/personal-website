<script>
    import ProjectCard from "./ProjectCard.svelte";
    import Icon from "./Icon.svelte";

    let projects = [
        {
            title: "NewsLines",
            location: "Dissertation @ FEUP",
            link: "https://marianafcosta.github.io/news-story-viz/",
            teamSize: "1",
            tags: ["Javascript", "HTML", "CSS", "D3", "User Research"],
            description:
                "A visualization interface aimed at showcasing narratives (particularly those in news stories) through storylines.",
        },
        {
            title: "Real-time sports commentary",
            location: "LGPR @ FEUP",
            link: "https://www.youtube.com/watch?v=GFKW-izwFPI&feature=youtu.be",
            teamSize: "8",
            tags: [
                "React",
                "Redux",
                "Redux Offline",
                "React Testing Library",
                "Heroku",
                "PHP",
            ],
            description:
                "Web interface for real-time sports commentary. The application was developed for zerozero, one of the biggest sport-centric websites in Portugal.",
        },
        {
            title: "Sistema de Planeamento e Avaliação de Refeições Escolares",
            location: "LDSO @ FEUP",
            link: "https://docs.google.com/presentation/d/1-_prkbUan8UbemqS8N-9J5PiORYADZ06Zrz6dj29nXY/edit#slide=id.p",
            teamSize: "8",
            tags: [
                "React",
                "Redux",
                "Laravel",
                "PHPUnit",
                "PostgreSQL",
                "Docker",
                "Heroku",
            ],
            description:
                "Re-implementation of an online platform targeting the management of menus in school cafeterias",
        },
        {
            title: "360 Company Dashboard",
            location: "SINF @ FEUP",
            link: "https://sinf-eec.herokuapp.com/login",
            teamSize: "4",
            tags: ["React", "MaterialUI", "Node.js", "Heroku", "PrimaveraERP"],
            description:
                "Web application which provides an overview of a company’s operations and financial situation through a number of key performance indicators.",
        },
        {
            title: "Neutreeko",
            location: "LAIG @ FEUP",
            link: "https://www.youtube.com/watch?v=VnWfriKRadA",
            teamSize: "2",
            tags: ["Javascript", "WebGL", "Prolog"],
            description:
                "Web-based graphical interface for a game developed in Prolog.",
        },
        {
            title: "Mel-o",
            location: "LTW @ FEUP",
            link: "https://paginas.fe.up.pt/~up201503730/pages/mainpage.php",
            teamSize: "3",
            tags: ["Javascript", "HTML", "CSS", "SQLite"],
            description:
                "A social network for sharing user-generated stories, with a focus on music.",
        },
    ];
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
            {#each projects as { title, location, link, teamSize, tags, description }}
                <ProjectCard
                    {title}
                    {location}
                    {link}
                    {teamSize}
                    {tags}
                    {description}
                />
            {/each}
        </div>
    </div>
    <footer>
        <p>&copy {new Date().getFullYear()} Mariana Costa</p>
        <p>|</p>
        <a href="https://github.com/marianafcosta"><Icon name="github" /></a>
        <a href="https://www.linkedin.com/in/marianafcosta/"
            ><Icon name="linkedin" /></a
        >
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
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    footer > * {
        font-weight: 100;
    }
    footer > :not(:first-child) {
        margin-left: 4px;
    }
    footer > a {
        display: flex;
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
