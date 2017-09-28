<template>
	<div>
		加载中
	</div>
</template>

<script>
	export default{
		name:'loading',
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		mounted(){
			if(this.$route.params.url== "index"){
				var _this=this;
				this.axios.get("/api/index").then(function(data){
					
				})
			}
		}
	}
</script>

<style>
</style>