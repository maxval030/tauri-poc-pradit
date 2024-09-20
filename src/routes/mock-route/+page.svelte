<script lang="ts">
	import { onMount } from 'svelte';
	import { invoke } from '@tauri-apps/api/core';

	// import { listen } from '@tauri-apps/api/event';
	let title: string = '';

	onMount(async () => {
		invoke('my_custom_command').then((val: any) => (title = val));
	});
</script>

<div class="h1">
	<p class="mb-4">TEST MockPage</p>
	<p class="text-red-400">{title}</p>
	<p><a href="/" class="btn variant-filled-surface">Go to Home</a></p>
</div>
