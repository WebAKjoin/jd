// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from "vuex";
import jquery from "jquery";
import axios from "axios";
import vueAxios from "vue-axios";
import mintUi from "mint-ui";

Vue.use(vueAxios,axios)
Vue.use(Vuex);

Vue.use(router);
Vue.use(mintUi);
Vue.config.productionTip = false;
var data=require("../static/js/dataConfig.js")
var tool = {
	 install:function(Vue){
   		 Object.defineProperty(Vue.prototype,"$",{
   		 		value:jquery
   		 })
	 }
}
Vue.use(tool);
var store = new Vuex.Store({
    state: {
        alldata: data
    },
    actions: {
       actionsData(context, $this) {
            $this.axios("localhost:8080/data").then(rs => {
                context.commit("getData", rs.data)
            })
        }
    },
    mutations: {
        getdata(state, data) {
            state.alldata = data
        }
    }
})


//var router = new Router({
//	routes:[
//		{
//			name:'index',
//			path:'/',
//			components:main
//		}
//		,{
//			name:'fenlei',
//			path:'/fenlei',
//			components:{
//				
//			}
//		},{
//			name:'faxian',
//			path:'/faxian',
//			components:{
//				
//			}
//		},{
//			name:'gouwuche',
//			path:'/gouwuche',
//			components:{
//				
//			}
//		},{
//			name:'wode',
//			path:'/wode',
//			components:{
//				
//			}
//		}
//	]
//})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
