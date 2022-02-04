<!-- this script tag is additional to a regular script tag and allows this 
    file to be used by the server as well as the client -->
<script context="module">
	import stateNames from '../data/stateNames';

	export async function preload(page, session) {
		//session param is for login and sessions etc
		const state = page.params['state'];
		console.log(state);
		//the below .find() is an array func, it loops the array of state names
		//the state var above will be a two letter state name provided in the url,
		//.find() will loop the state array abbreviation and if it finds the provided
		//state it will return that, if it doesn't it will return undefined.
		//TODO: this doesn't work because its getting requests for the css files
		//after the state is pulled form the url, and its not finding them.. this is down
		//to sapper being no more, and the rollup doesn't work.
		if (
			stateNames.find((state) => state.abbreviation === state) === undefined
		) {
			this.error(404, 'State Note Found');
			return;
		}
		console.log(page);
		return {
			state: page.params['state'],
		};
	}
</script>

<script>
	export let state;
	import CovidStat from '../components/CovidStat.svelte';
	import CovidChart from '../components/CovidChart.svelte';
</script>

<!-- The name of this file is in [], this is a way that you can grab
	the query params from the url -->

<!-- HTML -->
<svelte:head>
	<title>Covid Tracker</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Covid 19 - {state}</h1>
	</div>
</div>

<CovidStat />
<CovidChart />

<!-- CSS -->
