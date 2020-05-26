<template>
	<view>
		write
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
			let loginRes = this.checkLogin('../write/write',2);
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
