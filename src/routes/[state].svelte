<!-- this script tag is additional to a regular script tag and allows this 
    file to be used by the server as well as the client -->
<script context="module">
	export async function preload(page, session) {
		//session param is for login and sessions etc
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
<h1>{state}</h1>

<CovidStat />
<CovidChart />

<!-- CSS -->
