<template>
	<div class="star" :class='iconClass'>
		<span v-for='(item,index) of starClasses'
       class="star-item"
       :class='item'
       :key='index'>
		</span>
	</div>
</template>

<script>
	export default {
		name: 'star',
		props: {
			// 商家的得分
			score: {
				type: Number,
				required: true
			},
			// 星星的型号
			size: {
				type: [Number,String],
				default: 'medium'
			}
		},
		computed: {
			// 计算星星父级的class
			iconClass() {
				return 'star-' + this.size;
			},
			// 根据得分计算一个starClasses的数组  星星的组合规则
			starClasses() {
				let array = [];
				let integer = parseInt(this.score);
				for(let i = 1; i <= integer; i++) {
					array.push('on');
				}
				let decimal = this.score % 1;
				if(decimal === 0.5) {
					array.push('half');
				}else if(decimal > 0.5) {
					array.push('on');
				}
				while(array.length < 5) {
					array.push('off')
				}
				return array;
			}
		}
	}
</script>
<style lang="stylus">
	.star
		display: flex
		justify-content: center
		align-items: center
		.star-item
			display: inline-block
			background-size: cover
		/* 小型 */
		&.star-24,&.star-small
			.star-item
			width: 12px
			height: 12px
			&.on
				background-image: url('star24_on@2x.png')
			&.off
				background-image: url('star24_off@2x.png')
			&.half
				background-image: url('star24_half@2x.png')
		/* 中型 */
		&.star-36,&.star-medium
			.star-item
				width: 18px
				height: 18px
				&.on
					background-image: url('star36_on@2x.png')
				&.off
					background-image: url('star36_off@2x.png')
				&.half
					background-image: url('star36_half@2x.png')
		/* 大型 */
		&.star-48,&.star-large
			.star-item
				width: 24px
				height: 24px
				&.on
					background-image: url('star48_on@2x.png')
				&.off
					background-image: url('star48_off@2x.png')
				&.half
					background-image: url('star48_half@2x.png')
</style>