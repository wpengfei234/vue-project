import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router/router';

// 引入并注册全局组件
import maskMsg from './components/mask/mask.vue';
import Star from './components/star/star.vue';
import Icon from './components/icon/icon.vue'
import Count from './components/count/count.vue';

//引入重置样式
import './assets/stylus/reset.styl';
//引入字体图标样式
import './assets/stylus/icon.css';

//设置分类的全局组件
Vue.component('maskMsg',maskMsg);
//设置星星的全局组件
Vue.component('star',Star);
//设置图标的全局组件
Vue.component('icon',Icon);
//设置加减的全局组件
Vue.component('count',Count);

/*
	把axios的功能添加到vue的原型上，
	今后所有的组件都具备axios的能力了，
	组件内部通过this.$axios就可以使用了
*/
Vue.prototype.$axios = axios;

//挂载到vue上
new Vue({
	el: "#app",
	template: '<App/>',
	router,
	components: {App},
	data:{
		msg: 'Vuejsasdffb'
	}
})