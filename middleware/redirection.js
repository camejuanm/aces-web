import rules from './redirectRules'

export default function ({ route, redirect }) {
	if (route.path !== '/' && route.path.endsWith('/')) {
		const { path, query, hash } = route
		const nextPath = path.replace(/\/+$/, '') || '/'
		const nextRoute = { path: nextPath, query, hash }

		redirect(nextRoute)
	}
	const pages = rules.data

	for (let index = 0; index < pages.length; index++) {
		const page = pages[index]
		if (route.fullPath === page.old_url) {
			redirect(301, page.new_url)
		}
	}
}
