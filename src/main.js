// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



// 引入css/less
import './assets/css/common/reset.css'
import './assets/css/common/common.css'
import '!style-loader!css-loader!less-loader!./assets/css/common/common.less';
import './assets/css/iconfont/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})