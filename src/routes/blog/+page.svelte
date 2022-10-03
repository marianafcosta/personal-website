<script>
	export let data;
</script>

<h1>Blog</h1>

{#if data.posts.length === 0}
	<p>No posts yet!</p>
{:else}
	<ul>
		{#each data.posts as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				Published {post.meta.date}
			</li>
		{/each}
	</ul>
{/if}
