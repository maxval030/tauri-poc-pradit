<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	let title: string = 'Natsu';
	let inputTitle: string = '';

	const changeTitle = () => {
		title = 'Gray';
	};
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5 max-w-96">
		<h1 class="h1">Let's get cracking</h1>
		<h5>{title}</h5>
		<p>Start by exploring:</p>
		<ul>
			<li><code class="code">/src/routes/+layout.svelte</code> - barebones layout</li>
			<li><code class="code">/src/app.postcss</code> - app wide css</li>
			<li>
				<code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents
			</li>
		</ul>
		<div>
			<input type="text" bind:value={title} class="input my-3" />
			<button on:click={changeTitle} type="button" class="btn variant-filled-surface"
				>Change title</button
			>
			<a href="/mock-route" class="btn variant-filled-surface">Go to mock route</a>
		</div>
	</div>
</div>

<!-- <div>
	<p>Input title: {inputTitle}</p>
	<input type="text" bind:value={inputTitle} class="input" />
</div> -->
