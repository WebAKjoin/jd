<template>
	<div class='ms'>
		<h3>
			<img src="../../static/image/img/icon/57fdff2eNb7cd186f.png" alt="" />
			<span class="zheng">12点场</span>
			<span id="dj">
					
			</span>
			<p>
				京选尖货轮番炒
				<img src="../../static/image/img/icon/arrow_rt(1).png" alt="" />
			</p>
		</h3>
		
		<ul class="oul">
			<li v-for="i in datas.index.jdms.srollData">
				<img :src="i.img" alt="" />
				<span>￥{{i.currentPrice}}</span>
			</li>
			<!--<li>
				<img src="../../static/image/img/product/01 (1).png" alt="" />
				<span>￥29.9</span>
			</li>
			<li>
				<img src="../../static/image/img/product/01 (1).png" alt="" />
				<span>￥29.9</span>
			</li>
			<li>
				<img src="../../static/image/img/product/01 (1).png" alt="" />
				<span>￥19.9</span>
			</li>
			<li>
				<img src="../../static/image/img/product/01 (1).png" alt="" />
				<span>￥168</span>
			</li>
			<li>
				<img src="../../static/image/img/product/01 (1).png" alt="" />
				<span>￥59</span>
			</li>-->
		</ul>
	</div>
</template>

<script>
	function cetim(){
		var newtime=new Date();
		var oldtime=new Date('2017/9/28 00:00:00');
		var cha=oldtime*1-newtime*1;
		var date=Math.floor(cha/1000/60/60/24);
		var hours=Math.floor((cha-date*1000*60*60*24)/1000/60/60);
		var minutes=Math.floor((cha-date*24*60*60*1000-hours*1000*60*60)/1000/60);
		var seconds=Math.floor((cha-date*24*60*60*1000-hours*1000*60*60-minutes*1000*60)/1000);
		var dj=document.getElementById('dj');
		dj.innerHTML = hours+":"+minutes+':'+seconds;
	}
	function change(t){
        if(t<10){
            t="0"+t;
        }
        return t;
    }
	setInterval(cetim,1000);
	export default{
		name:'miaosha',
		data(){
			return{
				
			}
		},
		props:['datas']
	}
</script>

<style>
	
</style>