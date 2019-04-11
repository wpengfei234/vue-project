<template>
	<header class='header'>
		<div class="content">
			<!--头部内容开始-->
			<div class="infomation">
				<div class="logo">
					<img :src="seller.avatar" width='64' height='64'>
				</div>
				<div class="description">
					<h2 class="title"><icon name='brand' :size='{width: 30,height: 18}'></icon>{{seller.name}}</h2>
					<div class="delivery">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
					<div class="activity" v-if='seller.supports'><icon name='decrease' :size='{width: 12,height: 12}'></icon><p>{{seller.supports[0].description}}</p></div>
				</div>
				<div class="sellerNumber" v-if='seller.supports'  @click='show()'>
					<span>{{seller.supports.length}}个</span>
					<span class="icon-keyboard_arrow_right"></span>
				</div>
			</div>
			<div class="bulletin" @click='show()'>
				<icon name='bulletin' :size='{width:22,height:12}'></icon>
				<p>{{seller.bulletin}}</p>
				<span class="icon-keyboard_arrow_right"></span>
			</div>
		</div>
		<!--头部内容结束-->
		<!--头部背景图片开始-->
		<div class="background" :style='bgImg' v-if='seller.avatar'></div>
		<!--头部背景图片结束-->
		<transition name='slide'>
			<!--遮罩层开始-->
			<div class="mask" v-show='visible'>
				<div class="mask-title" v-if="seller.score">
					<h2>{{seller.name}}</h2>
					<!--评价的星星开始-->
					<star :score='seller.score'/>
					<!--评价的星星结束-->
				</div>
				<div class="preferential">
					<maskMsg :title='"优惠信息"'/>
					<ul class='list' v-if='seller.supports'>
						<li v-for='item,index of seller.supports' :key='index'>
							<icon :name='classMap[index]' :size='{width:16,height:16}'></icon>
							<span>{{item.description}}</span>
						</li>
					</ul>
				</div>
				<div class="announcement">
					<maskMsg :title='"商家公告"'/>
					<p>{{seller.bulletin}}</p>
				</div>
				<div class="icon-close" @click='show()'></div>
			</div>
			<!--遮罩层结束-->
		</transition>		
	</header>
</template>
<script>
	export default {
		name: 'seller-header',
		data() {
			return {
				seller: {},
				visible: false
			}
		},
		methods: {
			show() {
				this.visible = !this.visible;
			}
		},
		computed: {
			// 背景图片样式 
			bgImg() {
				return {
					background: `url(${this.seller.avatar})`
				}
			}
		},
		// 组件创建后  发请求 
		created() {
			this.classMap = ['decrease','discount','discount','special','special'];
			// 没有key,发第一次请求 
			if(!localStorage.getItem('key')) {
				this.$axios({
					url: 'http://localhost:9999/api/key',
					method: 'post'
				}).then(res => {
					if(!res.data.code) {
						localStorage.setItem('key',res.data.key);
						this.$axios({
							url: 'http://localhost:9999/api/seller',
							params: {
								token: res.data.key
							}
						}).then(res => {
							if(!res.data.code) {
								this.seller = res.data.data
							}
						});
					}
				}).catch(err => {
					
				})
				
			// 如果key存在,直接从本地去取
			}else {
				let key = localStorage.getItem('key');
				this.$axios({
					url: 'http://localhost:9999/api/seller',
					params: {
						token: key
					}
				}).then(res => {
					if(!res.data.code) {
						this.seller = res.data.data;
					}
				})
			}
			
		}
	}
</script>
<style lang='stylus'>
	@import '../../assets/stylus/variable.styl';
	.header
		.content
			background: $bg-color-light
			.infomation
				box-sizing: border-box
				width: 100%
				position: relative
				display: flex
				padding: 24px 12px 18px 24px
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
							margin-right: 6px
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
			&.slide-enter,&.slide-leave-to
				transform: translateY(-100%)
			&.slide-enter-active,&.slide-leave-active
				transition: 500ms
			&.slide-enter-to,&.slide-leave
				transform: translateY(0)
			.mask-title
				padding-top: 64px
				h2
					font-size: $font-size-large
					font-weight: 350
					color: $font-color-lighter
					line-height: 16px
					text-align: center
			.star
				padding-top: 16px
				.star-item
					margin: 0 6px
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
				left: 50%
				bottom: 32px
				margin-left: -16px
				font-size: 32px
				color: $font-color-darkest
</style>