<template>
	<div class="count">
		<i class='icon-remove_circle_outline' v-if='count' @click='less()'></i>
		<input type="number" v-model='count' v-if='count'>
		<i class='icon-add_circle' @click='add()'></i>
	</div>
</template>
<script>
	export default{
		name:'count',
		data(){
			return {
				count: ''
			}
		},
		methods:{
			add(){
				this.count++;
			},
			less(){
				this.count--;
				if(this.count < 0){
					this.count = 0
				}
			}
		}
	}
</script>
<style lang='stylus'>
	@import '../../assets/stylus/variable.styl';
	.count
		display: flex
		align-items: center
		i
			color: #00a0dc
		input
			width: 24px
			font-size: $font-size-smallest
			color: $font-color-lightest
			line-height: 24px
			text-align: center
</style>