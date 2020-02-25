<script>
	export let name;
</script>

<style>
	h1 {
		color: purple;
	}

	img {
		width: 270px;
		height: 80px;
		object-fit: cover;
	}
</style>

<img src="https://svelte.dev/svelte-logo-horizontal.svg" alt="svelte_logo">
<h1>Hello {name}!</h1>