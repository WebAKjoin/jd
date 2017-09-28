<template>
	<div>
		<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class='swiper-content'>
		    <!-- slides -->
		    <swiper-slide v-for="i in datas">
		    	<img :src="i.img" alt="" />
		    </swiper-slide>
		    <!--<div class="swiper-pagination"  slot="pagination"></div>-->
		  </swiper>
	</div>
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
          autoplay: 3000,
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
	.swiper-content{
		width:100%;
		height:100%;
	}
</style>