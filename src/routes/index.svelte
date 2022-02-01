<!-- script for letting this run on server as well as browser -->
<script context="module">
	// NOTE: you must include .js on the end if you're in a .svelte file
	import requests from '../data/requests.js';

	//this function will run and request the data from the api and save it to usStats
	export async function preload() {
		try {
			const usStats = await requests.usStats();
			return { usStats };
		} catch (error) {
			console.log(`Error preloading stats: ${error.message}`);
		}
	}
</script>

<!-- normal script tag -->
<script>
	import CovidChart from '../components/CovidChart.svelte';
	import CovidStat from '../components/CovidStat.svelte';
	import TableContainer from '../components/TableContainer.svelte';

	//this sets the usStats in the above tags to a variable we can use
	//in this page...
	export let usStats;
	console.log(usStats, 'usStats');
</script>

<!-- JS -->

<!-- HTML -->
<!-- this svelte:head tag sets the name of the tab when on this page -->
<svelte:head>
	<title>Covid Tracker</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 - US</h1>
	</div>
</div>

<CovidStat />
<CovidChart />
<TableContainer />

<!-- CSS -->
<style>
</style>
