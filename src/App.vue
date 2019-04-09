<template>
	<div id='app'>
		<cmp-header/>
		<my-nav/>
	</div>
</template>
<script>
	import CmpHeader from './pages/header/header.vue';
	import myNav from './pages/nav/nav.vue';
	export default{
		name: 'App',
		components: {
			CmpHeader,
			myNav
		}
	}
</script>
<style>

</style>