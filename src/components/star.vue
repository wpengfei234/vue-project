<template lang="html">
  <div class="star" :class='iconClass'>
    <span v-for='item,index of starClasses' class="star-item" :class='item':key='index'>
    </span>
  </div>
</template>
<script>
	export default {
		/*
		  星星的规则
			1.总共五颗
			2.亮，暗，半亮组合规则
			  根据商家得分来的
				比如3.8
				整数部分是3:  3颗亮的
				小数: 0.8 > 0.5  进一位   再来一颗亮的
				最后一颗暗的
		  封装star组件:
			1.星星的尺寸
			  small   24 * 24
			  middle  36 * 36
			  large   48 * 48
			2.关联一个数据 score
		*/
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
			  default: 'middle'
			}
		},
		computed: {
			// 计算星星型号
			iconClass() {
			  return 'star-' + this.size;
			},
			// 根据得分计算一个starClasses
			starClasses() {
				let array = [];
				// 得分的整数部分
				let integer = parseInt(this.score);
				for(let i = 1; i <= integer; i++) {
				
					/*
					  on: 亮
					  off: 暗
					  half: 半
					*/
					array.push('on');
				}
				let decimal = this.score % 1;
				if(decimal === 0.5) {
					// 半亮半暗
					array.push('half');
				}else if(decimal > 0.5) {
					//向上取整
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
		padding-top: 16px
		.star-item
			display: inline-block
			margin: 0 8px
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
		&.star-36,&.star-middle
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