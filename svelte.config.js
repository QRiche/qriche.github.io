import adapter from "@sveltejs/adapter-static"; // use static adapter to deplay to github pages

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
		}),
		paths: {
			base: process.env.NODE_ENV === "production" ? "" : "",
		},
	},
};

export default config;
