<template>
	 <div class="fenlei">
	 	<dl v-for="i in datas">
	 		<dd>
	 			<h3>{{i.name}}</h3>
	 			<p>{{i.text}}</p>
	 		</dd>
	 		<dt>
	 			<img :src="i.img" alt="" />
	 		</dt>
	 	</dl>
	 	<!--<dl>
	 		<dd>
	 			<h3>发现好货</h3>
	 			<p>发现品质生活</p>
	 		</dd>
	 		<dt>
	 			<img src="../../static/image/img/product/01 (103).jpg" alt="" />
	 		</dt>
	 	</dl>
	 	<dl>
	 		<dd>
	 			<h3>排行榜</h3>
	 			<p>网罗全民挚爱</p>
	 		</dd>
	 		<dt>
	 			<img src="../../static/image/img/product/01 (139).jpg" alt="" />
	 		</dt>
	 	</dl>
	 	<dl>
	 		<dd>
	 			<h3>闪购</h3>
	 			<p>1元好货送你</p>
	 		</dd>
	 		<dt>
	 			<img src="../../static/image/img/product/01 (161).jpg" alt="" />
	 		</dt>
	 	</dl>-->
	 </div>
</template>

<script>
	export default{
		name:'fenlei',
		data(){
			return{
				
			}
		},
		props:['datas']
	}
</script>

<style>
	
</style>	