import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../${params.id}.md`);
		const { title, date } = post.metadata;
		const content = post.default;

		return {
			title,
			date,
			content
		};
	} catch (e) {
		throw error(404, 'Not found');
	}
}
