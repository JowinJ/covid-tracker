<!-- JS -->
<script>
	export let status;
	// export let error;

	// const dev = process.env.NODE_ENV === 'development';
</script>

{#if status === 404}
	<div class="container">
		<article class="message-is-warning">
			<div class="message-header">
				<p>Page Not Found</p>
			</div>
			<div class="message-body">
				<a href="/">Click Here to go back Home</a>
			</div>
		</article>
	</div>
{/if}

<!-- HTML -->
<svelte:head>
	<title>Error - {status}</title>
</svelte:head>
