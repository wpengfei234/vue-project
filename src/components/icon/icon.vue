<template>
	<i class='icon' :class='iconClass' :style='parsedSize'></i>
</template>
<script>
	//图标组件
	export default{
		name: 'icon',
		//接受父组件传递过来的数据
		props: {
			//图标的名字
			name: {
				type: String,
				required:  true
			},
			//图标的尺寸
			size: {
				type: Object,
				required: true
			}
		},
		created(){
			this.parsedSize = {};
			for(let k in this.size){
				this.parsedSize[k] = parseFloat(this.size[k]) + 'px'
			}
		},
		computed:{
			iconClass(){
				return 'icon-' + this.name
			}
		}
	}
</script>
<style lang="stylus">
	.icon
		display: inline-block
		vertical-align: top
		background-size: cover
		&.icon-brand
			background-image: url('brand@2x.png')
		&.icon-decrease
			background-image: url('decrease_1@2x.png')
		&.icon-bulletin
			background-image: url('bulletin@2x.png')
		&.icon-discount
			background-image: url('discount_1@2x.png')
		&.icon-guarantee
			background-image: url('guarantee_1@2x.png')
		&.icon-invoice
			background-image: url('invoice_1@2x.png')
		&.icon-special
			background-image: url('special_1@2x.png')
</style>