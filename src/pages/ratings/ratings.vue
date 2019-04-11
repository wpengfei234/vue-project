<template>
	<div class="ratings">
		<div class="ratings-top">
			<div class="ratings-left">
				<div class='rating'>
					<h3>3.9</h3>
					<h4>综合评分</h4>
					<p>高于周边商家69.2%</p>
				</div>
			</div>
			<div class="ratings-right">
				<div class="ratings-item">
					服务态度
					<star :score='3.9'/>
					<span>3.9</span>
				</div>
				<div class="ratings-item">
					服务态度
					<star :score='4'/>
					<span>4.0</span>
				</div>
				<div class="ratings-item">
					送达时间
					<span>44分钟</span>
				</div>
			</div>
		</div>
		<div class="rating-line"></div>
	</div>
</template>

<script>
	export default {
		name: 'ratings',
		data(){
			return {
				ratings: []
			}
		},
		created(){
			let key = localStorage.getItem('key');
			this.$axios({
				url: 'http://localhost:9999/api/ratings',
				params: {
					token: key
				}
			}).then(res => {
				if(!res.data.code){
					console.log(res.data.data)
					this.ratings = res.data.data;
				}
			}).catch(err => {
				
			})
		}
	}
</script>

<style lang='stylus'>
	@import '../../assets/stylus/variable.styl';
	.ratings
		.ratings-top
			display: flex
			padding-top: 18px
			.ratings-left
				width: 137px
				height: 75px
				text-align: center
				border-right: 1px solid #ccc
				box-sizing: border-box
				.rating
					h3
						font-szie: 24px
						color: rgb(255,153,0)
						line-height: 28px
						padding-bottom: 6px
					h4
						font-size: $font-size-small
						color: $font-color
						line-height: $font-size-small
						padding-bottom: 8px
					p
						font-size: $font-size-smallest
						color: #c3c6c9
						line-height: $font-size-smallest
					
			.ratings-right
				flex: 1
				padding: 0 24px 18px 24px
				box-sizing: border-box
				.ratings-item
					display: flex
					font-size: $font-size-small
					color: $font-color
					line-height: $font-size-larger
					margin-bottom: 8px
					.star
						.star-item
							margin: 0 3px
							&:first-child
								margin-left: 12px
							&:last-child
								margin-right: 12px
					span
						font-size: $font-size-small
						color: rgb(255,153,0)
						line-height: $font-size-larger
					&:last-of-type
							span
								margin-left: 12px
								color: $font-color-lightest
		.rating-line
			width: 100%
			height: 17px
			border-top: 2px solid #e6e7e8
			border-bottom: 2px solid #e6e7e8
			background: #f3f5f7
								
								
								
								
								
</style>