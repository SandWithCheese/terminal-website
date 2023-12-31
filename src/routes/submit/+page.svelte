<script lang="ts">
	export let form;
</script>

<svelte:head>
	<title>Submit | Sandwicheese's Terminal Website</title>
	<meta name="description" content="Sandwicheese's terminal website submission" />
</svelte:head>

<section class="flex justify-center">
	<form
		action=""
		method="POST"
		class="bg-ubuntu-mine-shaft flex w-96 flex-col justify-center gap-8 rounded-lg p-8 text-center"
	>
		<p class="text-3xl text-white">Submit Your Flag</p>
		<input type="text" name="flag" id="input" autocomplete="off" class="outline-none" />
		<button type="submit" class="bg-ubuntu-tia-maria self-center px-8 py-2 text-lg">Submit</button>
		{#if form && form?.status}
			<p class="text-white">
				Correct! Here is a <a
					href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
					class="underline">gift</a
				>
			</p>
		{:else if form && !form?.status}
			<p class="text-white">Wrong!</p>
		{/if}
	</form>
</section>
