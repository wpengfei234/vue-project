<template>
	<nav class='nav'>
		<ul>
			<li v-for='item of navs'
				class='nav-item'
				:key='item.name'>
				<router-link :to='item.to'>{{item.name}}</router-link>
			</li>
		</ul>
	</nav>
</template>
<script>
	export default{
		name: 'my-nav',
		data(){
			return {
				navs: [
					{
						name: '商品',
						to: 'goods'
					},{
						name: '评价',
						to: 'ratings'
					},{
						name: '商家',
						to: 'seller'
					}
				]
			}
		}
	}
</script>
<style lang='stylus'>
	@import '../../assets/stylus/variable.styl';
	.nav
		height: 39px
		line-height: 39px
		border-bottom: 1px solid rgba(7,17,27,.1)
		ul
			display: flex
			li
				flex: 1
				font-size: $font-size-middle
				text-align: center
				color: rgb(77,85,93)
				.router-link-active
					color: $font-color-dark
</style>