<script>
	export let segment;
</script>

<nav class="navbar" label="main-navigation">
	<div class="navbar-brand">
		<a href="/" class="navbar-item">
			<img src="logo.jpeg" alt="virus" class="virus" />
		</a>
		<span class="navbar-burger" aria-label="menu" aria-expanded="false">
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</span>
	</div>
	<div class="navbar-menu">
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

	a {
		text-decoration: none;
	}

	.virus {
		width: 50px;
	}

	.navbar {
		display: flex;
		align-items: center;
	}

	.navbar-item {
		padding: 0 10px 10px 10px;
	}

	.navbar-burger {
		background-color: grey;
		height: 50px;
		width: 50px;
	}

	.is-active {
		border-bottom: solid 2px red;
	}

	/* @media (mind-width: 769px) {
		nav {
			border-bottom: solid grey 1px;
		}
	} */
</style>
