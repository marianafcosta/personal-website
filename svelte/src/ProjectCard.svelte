<script>
    import Icon from "./Icon.svelte";
    export let title, description, link, location, teamSize, tags;
</script>

<div class="project-card">
    <strong><a href={link}>{title}</a> ({location})</strong>
    <div class="team-size">
        <Icon name="user" />
        <small>{teamSize}</small>
    </div>
    <p class="description">{description}</p>
    <div class="tags">
        {#each tags as tag}
            <small class="tag">{tag}</small>
        {/each}
    </div>
</div>

<style>
    .description {
        margin: 0;
    }
    .project-card {
        box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
        padding: 16px;
    }
    .project-card > * {
        display: block;
    }
    .project-card > :not(:first-child) {
        margin-top: 8px;
    }
    .team-size {
        display: flex;
        align-items: center;
    }
    .team-size > :nth-child(2) {
        margin-left: 4px;
    }
    .tags {
        display: flex;
        flex-direction: row;
        word-wrap: break-word;
        flex-wrap: wrap;
    }
    .tag {
        padding: 4px;
        margin-right: 4px;
        margin-top: 4px;
        background-color: var(--tag-color);
    }
</style>
