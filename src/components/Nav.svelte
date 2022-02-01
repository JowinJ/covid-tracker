<script>
	export let segment;

	let isOpen = false;

	function toggleNav() {
		isOpen = !isOpen;
	}
</script>

<nav class="navbar" label="main-navigation">
	<div class="navbar-brand">
		<a href="/" class="navbar-item">
			<img src="logo.jpeg" alt="virus" class="virus" />
		</a>
		<span
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			on:click={toggleNav}
			class:is-active={isOpen}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</span>
	</div>
	<div class="navbar-menu" class:is-active={isOpen}>
		<dvi class="navbar-start">
			<!-- the class:is-active bit applies a class of "is-active" if the 
				statement is brackets is true, then you set a css style for is
				active and its applied when true-->
			<a href="/" class="navbar-item" class:is-active={segment === undefined}
				>Home</a
			>
			<a
				href="/about"
				class="navbar-item"
				class:is-active={segment !== undefined}>About</a
			>
		</dvi>
	</div>
</nav>

<style>
	nav {
		border-bottom: 1px solid rgba(194, 194, 194);
		font-weight: 300;
	}
</style>
