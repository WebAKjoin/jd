<template>
  <div class="box">
  		<!--<mt-loadmore :bottom-method="loadTop"  ref="loadmore">-->
  			<head-v></head-v>
				<section>
					<div class="logo">
						<swiper :datas="alldata.index.banner"></swiper>
					</div>
					<div class='banner'>
								<img src="../../static/image/img/banner/newpeople.jpg" alt="" />
						</div>
					<item-v :datas="alldata"></item-v>
					<kuaibao-v></kuaibao-v>
					<miao-v :datas="alldata"></miao-v>
					<fens></fens>
					<fenlei-v :datas="alldata.index.jdms.otherData"></fenlei-v>
					<swiper :datas="alldata.index.xpz.banner"></swiper>
					<div class="aish">
							<img src="../../static/image/img/hr/1 (6).jpg" alt="" />
					</div>
					<fenlei-v :datas="alldata.index.xpz.firstData"></fenlei-v>
					<div class="aish">
							<img src="../../static/image/img/hr/1 (7).jpg" alt="" />
					</div>
					<!--<swiper :datas="alldata.index.lovelife.secData"></swiper>-->
					<fenlei-v :datas="alldata.index.xpz.firstData"></fenlei-v>
				</section>
  		<!--</mt-loadmore>-->
			<!--<div class='foot'>
				<ul>
						<li>
								<i class="icon iconfont icon-shouye"></i>
								<span>首页</span>
						</li>
						<li>
								<i class="icon iconfont icon-fenlei"></i>
								<span>分类</span>
						</li>
						<li>
								<i class="icon iconfont icon-faxian"></i>
								<span>发现</span>
						</li>
						<li>
								<i class="icon iconfont icon-gouwuchekong"></i>
								<span>购物车</span>
						</li>
						<li>
							<i class="icon iconfont icon-wode"></i>
							<span>我的</span>
						</li>
				</ul>-->
				<!--{{alldata}}-->
		  	<!--<ul>
		  		<router-link tag="li">
		  			<i class="icon iconfont icon-shouye"></i>
		  			<span>首页</span>
		  		</router-link>
		  		<router-link tag="li">
		  			<i class="icon iconfont icon-fenlei"></i>
		  			<span>分类</span>
		  		</router-link>
		  		<router-link tag="li">
		  			<i class="icon iconfont icon-faxian"></i>
		  			<span>发现</span>
		  		</router-link>
		  		<router-link tag="li">
		  			<i class="icon iconfont icon-gouwuchekong"></i>
		  			<span>购物车</span>
		  		</router-link>
		  		<router-link tag="li">
		  			<i class="icon iconfont icon-wode"></i>
		  			<span>我的</span>
		  		</router-link>
		  	</ul>-->
		  </div>

  </div>
</template>

<script>
	import head from "./head.vue"
	import swiper from "./swiper.vue"
	import item from "./item.vue"
	import kuaibao from "./kuaibao.vue"
	import miao from "./miao.vue"
	import fenlei from "./fenlei.vue"
	import fens from "./fens.vue"
	import main from "./main.vue"
	import {
				Loadmore 
	} from 'mint-ui'
	
	import {mapState,mapActions,mapMutations} from 'vuex';
	export default {
	  name: 'hello',
	  data(){
	  	return{
	  		data:null
	  	}
	  },
	  methods:{
	  	...mapActions(['actionsData']),
//	  	...mapMutations([''])
	  	loadTop() {
	        var _this = this
	        this.topStatus = "loading"
	        setTimeout(function() {
	            _this.topStatus = false
	            _this.$refs.loadmore.onTopLoaded();
	        }, 1000)
	    }
//			loadBottom() {
//				//...// 加载更多数据
//				  this.allLoaded = true;// 若数据已全部获取完毕
//				  this.$refs.loadmore.onBottomLoaded();
//			}
	  },
	  computed:{
	  	...mapState(["alldata"])
	  },
	  components:{
	  	'head-v':head,
	  	swiper,
	  	'item-v':item,
	  	"kuaibao-v":kuaibao,
	  	"miao-v":miao,
	  	"fenlei-v":fenlei,
	  	fens,
//	  	[Loadmore.name]:Loadmore
	  },
	  created(){
	  	this.actionsData(this)
	  },
	  mounted(){
				var _this=this;
	  		this.axios.get('/data').then(function(data){
	  				_this.data=data;
	  		})
	  		console.log(this)
	  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
