<script lang="ts">
	let elements: String[] = [splashScreen()];
	let splittedInput: String[] = [];

	async function handleSubmit(event: { currentTarget: EventTarget & HTMLFormElement }) {
		const data = new FormData(event.currentTarget);
		const input = data.get("command");

		event.currentTarget.reset();

		if (input === "clear") {
			elements = [];
			return;
		}

		const submittedTerminal = `
			<div class="flex gap-2">
				<p class="text-ubuntu-green flex min-w-fit">
					sandwicheese@terminal-website
					<span class="text-white"> : </span>
					<span class="text-ubuntu-blue">~</span>
					<span class="text-white"> $ </span>
				</p>
				<input class="bg-ubuntu-toledo w-full text-white outline-none" value="${input}" disabled/>
			</div>`;

		splittedInput = (input as string).split(" ");

		const output = handleCommand(splittedInput[0]);

		elements = [...elements, submittedTerminal, output];
	}

	function handleCommand(command: String) {
		switch (command) {
			case "help":
				return `
				<div class="flex gap-4">
					<p>cat</p>
					<p>clear</p>
					<p>help</p>
					<p>ls</p>
					<p>social</p>
					<p>splash</p>
					<p>whois</p>
				</div>
				`;
			case "whois":
				return `<p>Hi, I'm Naufal, a software engineer and CTF enthusiast. Committed to mastering both domains, I focus on developing secure software and conquering CTF challenges. Seeking to gain more experience and knowledge to make a positive impact in these fields. Ready to connect and collaborate with fellow enthusiasts.</p>`;
			case "ls":
				return `
				<div class="flex gap-4">
					<p>README.md</p>
					<p>flag.txt</p>
				</div>
				`;
			case "social":
				return `
					<p>Email: <a href="mailto:naufalahmad022@gmail.com" class="hover:bg-ubuntu-plum">naufalahmad022@gmail.com</a></p>
					<p>GitHub: <a href="https://github.com/SandWithCheese" target="_blank" class="hover:bg-ubuntu-plum">github.com/SandWithCheese</a></p>
					<p>LinkedIn: <a href="https://www.linkedin.com/in/ahmad-naufal-ramadan/" target="_blank" class="hover:bg-ubuntu-plum">linkedin.com/in/ahmad-naufal-ramadan</a></p>
					<p>Instagram: <a href="https://www.instagram.com/naufal.rmdn/" target="_blank" class="hover:bg-ubuntu-plum">instagram.com/naufal.rmdn</a></p>
					`;
			case "splash":
				return splashScreen();
			case "cat":
				if (splittedInput.length < 2) {
					return `<p>cat: missing operand</p>`;
				} else if (splittedInput.length > 2) {
					return `<p>cat: too many arguments</p>`;
				} else {
					switch (splittedInput[1]) {
						case "README.md":
							return `
							<p>Hey there! Welcome to the ultimate online scavenger hunt.</p>
							<p>Your mission is to explore the depths of this web page and dig up those sneaky flags. They could be hiding anywhere. It's like a digital treasure hunt. Your job is to be the Sherlock of the internet and track down these elusive clues. Once you've got a flag in your sights, sneak it over to the /submit endpoint. Show the online world your skills, and let the hunt begin! Good luck, and happy flag hunting! 🕵️‍♂️🚀</p>
							`;
						case "flag.txt":
							return `
							<p>flag{this_is_a_fake_flag}</p>
							<p>Nah, too easy, find the real flag</p>
							<p>This is the first part: sandwicheese{</p>
							`;
						default:
							return `<p>cat: ${splittedInput[1]}: No such file or directory</p>`;
					}
				}
			default:
				return `<p>Command '${command}' not found</p>`;
		}
	}

	function splashScreen() {
		const splash = `
		<div>
			<pre>   _____                 _          _      _                         </pre>
			<pre>  / ____|               | |        (_)    | |                        </pre>
			<pre> | (___   __ _ _ __   __| |_      ___  ___| |__   ___  ___  ___  ___ </pre>
			<pre>  \\___ \\ / _' | '_ \\ / _' \\ \\ /\\ / / |/ __| '_ \\ / _ \\/ _ \\/ __|/ _ \\</pre>
			<pre>  ____) | (_| | | | | (_| |\\ V  V /| | (__| | | |  __/  __/\\__ \\  __/</pre>
			<pre> |_____/ \\__,_|_| |_|\\__,_| \\_/\\_/ |_|\\___|_| |_|\\___|\\___||___/\\___|</pre>
			<pre>                                                                     </pre>
			<pre>=====================================================================</pre>
			<p>Welcome to Sandwicheese's Terminal Website</p>
			<p>Type 'help' to get a list of commands you can use</p>
		</div>
		`;

		return splash;
	}
</script>

<svelte:head>
	<title>Sandwicheese's Terminal Website</title>
	<meta name="description" content="Sandwicheese's terminal website" />
</svelte:head>

<section id="terminal" class="text-white">
	{#each elements as element}
		{@html element}
	{/each}
</section>

<section>
	{@html "<!-- Second part: ctf_1s_s0_fun_  -->"}
	<form method="POST" action="" class="flex gap-2" on:submit|preventDefault={handleSubmit}>
		<p class="text-ubuntu-green flex min-w-fit">
			sandwicheese@terminal-website
			<span class="text-white"> : </span>
			<span class="text-ubuntu-blue">~</span>
			<span class="text-white"> $ </span>
		</p>
		<input
			id="command-line"
			type="text"
			name="command"
			class="bg-ubuntu-toledo w-full text-white outline-none"
			autocomplete="off"
		/>
	</form>
</section>
