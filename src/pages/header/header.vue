<template>
	<header class='header'>
		<div class="content">
			<!--头部内容开始-->
			<div class="infomation">
				<div class="logo">
					<img :src="seller.avatar" width='64' height='64'>
				</div>
				<div class="description">
					<h2 class="title"><i class='icon'></i>{{seller.name}}</h2>
					<div class="delivery">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
					<div class="activity" v-if='seller.supports'><i class='icon'></i><p>{{seller.supports[0].description}}</p></div>
				</div>
				<div class="sellerNumber" v-if='seller.supports'  @click='show'>
					<span>{{seller.supports.length}}个</span>
					<span class="icon-keyboard_arrow_right"></span>
				</div>
			</div>
			<div class="bulletin" @click='show'>
				<i class='icon'></i>
				<p>{{seller.bulletin}}</p>
				<span class="icon-keyboard_arrow_right"></span>
			</div>
		</div>
		<!--头部内容结束-->
		<!--头部背景图片开始-->
		<div class="background" :style='bgImg' v-if='seller.avatar'></div>
		<!--头部背景图片结束-->
		<!--遮罩层开始-->
		<div class="mask"v-show='visible'>
			<div class="mask-title" v-if="seller.score">
				<h2>{{seller.name}}</h2>
				<!--评价的星星开始-->
				<star :score='3.6'/>
				<!--评价的星星结束-->
			</div>
			<maskMsg :title='"优惠信息"'/>
			<ul class='list' v-if='seller.supports'>
				<li v-for='item,index of seller.supports' :key='index'><i class="icon"></i><span>{{item.description}}</span></li>
			</ul>
			<maskMsg :title='"商家公告"'/>
			<p>{{seller.bulletin}}</p>
			<div class="icon-close" @click='show'></div>
		</div>
		<!--遮罩层结束-->
	</header>
</template>
<script>
	import axios from 'axios';
	
	export default{
		name: 'cmp-header',
		data(){
			return {
				seller: {},
				visible: false
			}
		},
		computed:{
			bgImg(){
				return {
					background:`url(${this.seller.avatar})`
				}
			}
		},
		methods: {
			show(){
				this.visible = !this.visible
			}
		},
		created(){
			axios({
				url: 'http://localhost:9090/api/key',
				method: 'post'
			}).then(res => {
				if(!res.data.code){
					axios({
						url: 'http://localhost:9090/api/seller',
						params: {
							token: res.data.key,
						}
					}).then(res => {
						if(!res.data.code){
							console.log(res.data.data);
							this.seller = res.data.data;
						}
					})
				}
			}).catch(err => {
				
			})
		}
	}
</script>
<style lang='stylus'>
	@import '../../assets/stylus/variable.styl';
	.header
		.content
			background: $bg-color-light
			.infomation
				position: relative
				display: flex
				padding: 24px 12px 18px 24px
				box-sizing: border-box
				.logo
					width: 64px
					height: 64px
					img
						border-radius: 2px
				.description
					flex: 1
					display: flex
					flex-direction: column
					color: $font-color-lighter
					padding: 2px 0 2px 16px
					box-sizing: border-box
					.title
						display: flex
						font-size: $font-size-large
						font-weight: bold
						line-height: 18px
						.icon
							display: inline-block
							margin-right: 6px
							width: 30px
							height: 18px
							background: url('brand@2x.png')
							background-size: cover
					.delivery
						font-size: 12px
						font-weight: 100
						line-height: 12px
						padding-top: 8px
					.activity
						display: flex
						padding-top: 10px
						p
							font-size: $font-size-smallest
							font-weight: 100
							line-height: 12px
							padding-left: 4px
						.icon
							display: inline-block
							width: 12px
							height: 12px											
							background: url('decrease_1@2x.png')
							background-size: cover
				.sellerNumber
					position: absolute
					right: 12px
					bottom: 18px
					padding: 2px 8px
					font-size: $font-size-smallest
					color: $font-color-lighter
					font-weight: 100
					text-align: center
					line-height: 24px
					border-radius: 20px
					background: $bg-color-lighter
					box-sizing: border-box
					.icon-keyboard_arrow_right
						position: relative
						top: 1px
						font-size: $font-size-smallest
						color: $font-color-lighter
						font-weight: 100
						text-align: center
						line-height: 24px
			.bulletin
				display: flex
				align-items: center
				height: 28px
				font-size: $font-size-smallest
				color: $font-color-lighter
				font-weight: 100
				line-height: 28px
				padding: 0 12px
				background: $bg-color-lighter
				box-sizing: border-box
				p
					display: inline-block
					float: left
					width: 90%
					overflow: hidden
					white-space: nowrap
					text-overflow: ellipsis
					padding-left: 4px
				.icon
					display: inline-block
					width: 22px
					height: 12px
					background: url('bulletin@2x.png')
					background-size: cover
				.icon-keyboard_arrow_right
					float: right
					padding-left: 4px
		.background
			position: absolute
			top: 0
			left: 0
			width: 100%
			height: 130px
			z-index: -1
			filter: blur(10px)
		.mask
			position: fixed
			top: 0
			left: 0
			width: 100%
			height: 100%
			padding: 0 36px
			background: $bg-color-dark
			box-sizing: border-box
			z-index: 4
			.mask-title
				padding-top: 64px
				h2
					font-size: $font-size-large
					font-weight: 350
					color: $font-color-lighter
					line-height: 16px
					text-align: center
			.list
				padding: 0 24px;
				box-sizing: border-box
				li
					display: flex
					padding-bottom: 12px
					span
						font-size: $font-size-small
						font-weight: 100
						color: $font-color-lighter
						line-height: $font-size-smal
						padding-left: 6px
					i
						display: inline-block
						width: 16px
						height: 16px
					&:nth-of-type(1)
						.icon
							background: url('decrease_1@3x.png')
							background-size: cover
					&:nth-of-type(2)
						.icon
							background: url('discount_1@3x.png')
							background-size: cover
					&:nth-of-type(3)
						.icon
							background: url('discount_1@3x.png')
							background-size: cover
					&:nth-of-type(4)
						.icon
							background: url('guarantee_1@3x.png')
							background-size: cover
					&:nth-of-type(5)
						.icon
							background: url('guarantee_1@3x.png')
							background-size: cover
			p
				position: relative
				font-size: $font-size-small
				font-weight: 100
				color: $font-color-lighter
				line-height: 24px
				padding: 0 24px
				box-sizing: border-box
			.icon-close
				position: absolute
				left: 45%
				bottom: 32px
				font-size: 32px
				color: $font-color-darkest
</style>