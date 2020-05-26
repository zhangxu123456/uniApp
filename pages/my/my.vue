<template>
	<view>
		my
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			console.log('write')
			let loginRes = this.checkLogin('../my/my',2);
			if(!loginRes){
				return false;
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
