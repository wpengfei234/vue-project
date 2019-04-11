<template>
	<div id='app'>
		<cmp-header/>
		<my-nav/>
		<router-view/><!--渲染到页面-->
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
<style lang='stylus'>
	#app
		width: 100%
		height: 100%
</style>