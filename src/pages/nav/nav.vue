<template>
	<nav class='nav'>
		<ul>
			<li><a href="javascript:;" class='active'>商品</a></li>
			<li><a href="javascript:;">评价</a></li>
			<li><a href="javascript:;">商家</a></li>
		</ul>
	</nav>
</template>
<script>
	export default{
		name: 'my-nav'
	}
</script>
<style lang='stylus'>
	@import '../../assets/stylus/reset.styl';
	@import '../../assets/stylus/variable.styl';
	.nav
		border-bottom: 2px solid rgba(7,17,27,.1)
		ul
			display: flex
			height: 40px
			li
				flex: 1
				width: 100px
				height: 40px
				font-size: $font-size-middle
				text-align: center
				line-height: 40px
				color: rgb(77,85,93)
				a
					&.active
						color: $font-color-dark
</style>