/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				"ubuntu-tia-maria": "#dd4814",
				"ubuntu-plum": "#77216f",
				"ubuntu-finn": "#5e2750",
				"ubuntu-toledo": "#2c001e",
				"ubuntu-cloudy": "#aea79f",
				"ubuntu-mine-shaft": "#333333",
				"ubuntu-green": "#55ff55",
				"ubuntu-blue": "#5555ff"
			},
			fontFamily: {
				ubuntu: ["Ubuntu Mono", "monospace"]
			}
		}
	},
	plugins: []
};
