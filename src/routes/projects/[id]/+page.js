import { getProjectById } from '#lib/data/projects.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const project = getProjectById(params.id);

	if (!project || !project.published) {
		throw error(404, {
			message: `Project '${params.id}' not found.`
		});
	}

	return {
		project
	};
}
