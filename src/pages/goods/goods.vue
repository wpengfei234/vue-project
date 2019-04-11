<template>
	<div class="goods">
		<div class="main">
			<div class="menu">
				<ul>
					<li v-for='item of goods' :key='item.name' class='goods-item'>
						<span><icon v-if='item.type === 2' name='special' :size='{width:14,height:14}' class='icon'/>{{item.name}}</span>
					</li>
				</ul>
			</div>
			<div class="goods-list">
				<div class="goods-list-title" v-for='item of goods' :key='item.name'>
					<div>
						<h3>{{item.name}}</h3>
						<ul>
							<li v-for='(item1,index) of item.foods' :key='index'>
								<img :src="item1.icon">
								<div>
									<p class='goodsTitle'>{{item1.name}}</p>
									<p class='name'>{{item1.description}}</p>
									<p class='month'>
										<span class='monthCount'>月销{{item1.sellCount}}份</span><span class="good">好评率{{item1.rating}}%</span>
									</p>
									<p class='price'>
										<span class='newPrice'>￥{{item1.price}}</span><del v-if='item1.oldPrice' class='oldPrice'>￥{{item1.oldPrice}}</del>
									</p>
								</div>
								<count/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'goods',
		data(){
			return {
				goods: []
			}
		},
		created(){
			let key = localStorage.getItem('key');
			this.$axios({
				url: 'http://localhost:9999/api/goods',
				params: {
					token: key
				}
			}).then(res => {
				if(!res.data.code){
					console.log(res.data.data[0])
					this.goods = res.data.data;
				}
			}).catch(err => {
				
			})
		}
	}
</script>
<style lang='stylus'>
	@import '../../assets/stylus/variable.styl';
	.goods 
		.main
			display: flex
			.menu 
				width: 80px
				height: 580px
				.goods-item
					position: relative
					display: flex
					align-items: center
					height: 54px
					padding: 0 12px
					line-height: 14px
					box-sizing: border-box
					font-size: $font-size-small
					background: #f3f5f7
					&::after 
						content: ''
						position: absolute
						bottom: 0
						left: 12px
						width: 56px
						height: 1px
						background: $line-color-light
			.goods-list 
				flex: 1
				height: 485px
				overflow: auto
				.goods-list-title
					h3
						height: 26px
						color: $font-colorer
						line-height: 26px
						padding-left: $font-size-middle
						border-left: 2px solid #d9dde1
						background: #f3f5f7
					ul 
						padding: 0 18px
						box-sizing: border-box
						li
							display: flex
							position: relative
							
							border-bottom: 1px solid $line-color-light
							img
								width: 57px
								height: 57px
								padding: 18px 10px 0 18px
							div
								flex: 1
								padding: 0 18px
								box-sizing: border-box
								.goodsTitle
									font-size:	$font-size-middle
									color: $font-color
									line-height: $font-size-middle
									padding: 20px 0 8px
									box-sizing: border-box
								.name
									font-size: $font-size-smallest
									color: $font-colorer
									line-height: $font-size-smallest
									padding-bottom: 8px
								.month
									font-size: $font-size-smallest
									color: $font-colorer
									line-height: $font-size-smallest
									padding-bottom: 8px
									.monthCount
										padding-right: $font-size-small
								.price
									padding-bottom: 18px
									.newPrice
										font-size: $font-size-smallest / $font-size-middle
										color: $font-color-dark
										font-weight: normal/700
										line-height: 24px
									.oldPrice
										font-size: $font-size-smallest
										color: $font-colorer
										font-weight: normal/700
										line-height: 24px
							.count
								position: absolute
								right: 0
								bottom: $font-size-larger
								height: 24px
								
</style>						
	