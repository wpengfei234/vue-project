<template>
	<div class="maskMsg">
		<div class="line"></div>
		<h2>{{title}}</h2>
		<div class="line"></div>
	</div>
</template>
<script>
	export default {
		name: 'maskMsg',
		props:{
			//父组件传递过来的标题
			title: {
				type: String,
				require: true
			}
		}
	}
</script>
<style lang='stylus'>
	@import '../../assets/stylus/variable.styl';
	.maskMsg
		display: flex
		justify-content: center
		align-items: center
		width: 100%
		height: 30px
		padding: 28px 0 24px
		.line
			width: 112px
			height: 2px
			border-bottom: 2px solid $line-color
		h2
			flex: 1
			line-height: $font-size-middle
			font-size: $font-size-middle
			font-weight: 700
			text-align: center
			color: $font-color-lighter
			padding: 28px 12px 24px
			box-sizing: border-box
			
</style>