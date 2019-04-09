import Vue from 'vue';
import App from './App.vue';
import maskMsg from './components/mask.vue';
import Star from './components/star.vue';

//引入重置样式
import './assets/stylus/reset.styl';
//引入字体图标样式
import './assets/stylus/icon.css';

//设置分类的全局组件
Vue.component('maskMsg',maskMsg);
//设置星星的全局组件
Vue.component('star',Star);

new Vue({
	el: "#app",
	template: '<App/>',
	components: {App},
	data:{
		msg: 'Vuejsasdffb'
	}
})