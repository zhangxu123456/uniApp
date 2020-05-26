<template>
	<view class="indexContent">
		<view class="page-swiper">
			<swiper class="carousel">
				<swiper-item v-for="(item,key) in carouselList" :key="key" class="carousel-item">
					<image :src="item.src"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="page-select">
			<view class="search-box">
				<text class="iconfont iconsousuo fangdajing"></text>
				<input class="ser-input" type="text" value="输入关键字搜索"  />
			</view>
		</view>
		<view class="cate-section">
			<view class="cate-item">
				<image src="/static/temp/c3.png"></image>
				<text>环球美食</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c5.png"></image>
				<text>个护美妆</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c6.png"></image>
				<text>营养保健</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c7.png"></image>
				<text>家居厨卫</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c8.png"></image>
				<text>速食生鲜</text>
			</view>
		</view>
		<view class="page-notice">
			<text class="newNotice">最新上架</text>
			<text class="newtext">每周上架一款我亲测试用过的产品</text>
		</view>
		<view class="page-newgoods">
			<image src="/static/temp/ad3.jpg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carouselList: ''
			}
		},
		onLoad() {
			this.carouselList = this.$api.carouselList
			console.log(this.$api)
		},
		methods: {

		}
	}
</script>

<style lang="scss">
.indexContent{
	.page-swiper{
		.carousel{
			width: 100%;height: 350upx;
			.carousel-item{
				width: 100%;
				height: 100%;
				image{width: 100%;height: 100%;}
			}
		}
	}
	.page-select{padding: 10upx;background: $uni-text-color-grey;
		.search-box{display: flex;align-items: center;}
		.ser-input{
			width: 100%;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			font-size: 28upx;
			color:$uni-color-primary;
			border-radius: 2px;
			background: rgba(255,255,255,.6);
		}
	}
	.cate-section{
		display: flex;
		justify-content:space-around ;
		align-items: center;
		flex-wrap:nowrap;
		padding: 30upx 22upx; 
		.cate-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size:26upx;
			color: #303133;;
		}
		image {
			width: 88upx;
			height: 88upx;
			margin-bottom: 14upx;
			border-radius: 50%;
			opacity: .7;
			box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
		}
	}
	.page-notice{
		display: flex; flex-direction: column;align-items: center;
		.newNotice{font-size: 30upx;}
		.newtext{font-size: 24upx;}
	}
	.page-newgoods{
		image{width: 100%;}
	}
	
}
</style>
