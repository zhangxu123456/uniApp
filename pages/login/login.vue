<template>
	<view>
		<button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">使用微信登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			getUserInfo(res){
				console.log(res)
			}
		},
		onLoad(options) { //onLoad进入页面时执行 options 是路由的参数
			console.log(options)
			uni.login({
				success(res) {
					console.log(res)
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
