<template>
	<ul class='list'>
		
		<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class='swiper-content'>
		    <!-- slides -->
		    <swiper-slide>
		    	<li v-for="i in datas.index.tab">
					<img :src="i.img" alt="" />
					<span>{{i.name}}</span>
				</li>
		    </swiper-slide>
		    <swiper-slide>
		    	<li>
					<img src="../../static/image/img/nav/10.png" alt="" />
					<span>PLUS会员</span>
				</li>
		    </swiper-slide>
		    <!--<div class="swiper-pagination"  slot="pagination"></div>-->
		</swiper>
		
	</ul>
</template>

<script>
	require('swiper/dist/css/swiper.css')
	import Vue from 'vue'
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	Vue.use(VueAwesomeSwiper)
 
	export default {
	  data () {
		    return {
	        notNextTick: true,
	        swiperOption: {
	          pagination : '.swiper-pagination',
	          debugger: true,
	          onTransitionStart(swiper){
	            console.log(swiper)
	          }
		    }
		  }
		},
		props:['datas']
	}
</script>

<style>
	
</style>