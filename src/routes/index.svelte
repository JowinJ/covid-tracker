<!-- JS -->
<script>
	import CovidChart from '../components/CovidChart.svelte';
	import CovidStat from '../components/CovidStat.svelte';
	import TableContainer from '../components/TableContainer.svelte';
</script>

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
