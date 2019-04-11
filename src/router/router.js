import Vue from 'vue';
import VueRouter from 'vue-router';
import Seller from '../pages/seller/seller.vue';
import Goods from '../pages/goods/goods.vue';
import Ratings from '../pages/ratings/ratings.vue';

// 给vue添加插件 扩展vue的功能  给vue的原型添加$router,$route
Vue.use(VueRouter);


/* 路由规则的配置 */
export default new VueRouter({
	routes: [
		{
			path: '/goods',
			component: Goods
		},{
			path: '/ratings',
			component: Ratings
		},{
			path: '/seller',
			component: Seller
		}
	]
})