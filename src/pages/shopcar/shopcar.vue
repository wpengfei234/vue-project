<template>
	<div class="shop">
		<div class="big"><div class="small"><i class='icon-shopping_cart'></i></div></div>
		<div class="price">
			<span>￥<b>0</b></span>
		</div>
		<span class='line'></span>
		<p>另需配送费￥<span>4</span>源</p>
		<div class="delivery"><strong>￥20起送</strong></div>
	</div>
</template>
<script>
	
</script>
<style lang='stylus'>
	@import '../../assets/stylus/variable.styl';
	.shop
		position: absolute
		left: 0
		bottom: 0
		width: 100%
		height: 93px
		background: #141d27
		z-index: 4
		.big
			position: absolute
			left: $font-size-small
			top: -12px
			width: 70px
			height: 70px
			border-radius: 50%
			background: #141d27
			z-index: 5
			.small
				display: flex
				position: absolute
				left: 4px
				top: 15px
				width: 60px
				height: 60px
				border-radius: 50%
				background: rgba(0,0,0,.2)
				z-index: 6
				i
					font-size: 24px
					color: rgba(255,255,255,.4)
					line-height: 24px
					margin: auto
		.price
			font-size: 18px
			font-weight: 700
			color: rgba(255,255,255,.4)
			line-height: 24px
			padding: 35px 12px 12px 80px
			box-sizing: border-box
		.line
			display: inline-block
			width: 2px
			height: 46px
			border-right: 2px solid $line-colorer
			padding: 0px 12px 12px 114px
		p
			font-size: $font-size-large
			color: rgba(255,255,255,.4)
			font-weight: 700
			line-height: 24px
		.delivery
			display: flex
			justify-content: center
			align-items: center
			position: absolute
			right: 0
			bottom: 0
			width: 105px
			height: 93px
			padding: 0 8px
			font-size: $font-size-small
			color: rgba(255,255,255,.4)
			font-weight: 700
			text-align: center
			background: #2b333b
		
</style>