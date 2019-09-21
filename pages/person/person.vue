<template>
	<view >
		
		<!-- 头部 -->
		<view class="position-relative d-flex a-center animated fadeIn faster" style="320rpx;">
			<loading-plus v-if="beforeReady"></loading-plus>
			
			<image src="../../static/images/bg.jpg" style="height: 320rpx;width: 100%;"></image>
			<view class="iconfont icon-xiaoxi position-absolute text-white"
			style="font-size: 50rpx;top: 75rpx;right:20rpx;z-index: 10;"
			@click="navigate('msg-list')"></view>
			
			<view class="d-flex a-center position-absolute left-0 right-0" style="bottom: 50rpx;">
				<image src="../../static/images/demo/demo6.jpg" style="height: 145rpx;width:145rpx;border: 5rpx solid;"
				class="rounded-circle border-light ml-4" @click="navigate('user-userinfo')"></image>
				<navigator url="../login/login">
					<view class="ml-2 text-white font-md">用户昵称</view>
				</navigator>
				<view class="d-flex a-center j-center a-self-end ml-auto px-2"
				style="height: 70rpx;background: #FFD43F;color: #CC4A00;border-top-left-radius: 40rpx;border-bottom-left-radius: 40rpx;">
					<view class="line-h iconfont icon-huangguan mr-1"></view>
					会员积分 2.22
				</view>	
			</view>
		</view>
	
		<!-- <card>
			<view class="d-flex a-center j-sb" slot="title">
				<text class="font-md font-weight-100">作图记录</text>
				<view class="text-secondary font">
					查看更多 <text class="iconfont icon-you font"></text>
				</view>
			</view>
			<view class="d-flex a-center">
				<view class="flex-1 d-flex flex-column a-center j-center py-3" hover-class="bg-light-secondary"
				v-for="i in 4" :key="i">
					<view class="iconfont icon-cpu font-lg line-h"></view>
				</view>
			</view>
		</card> -->
		<!-- 分割线 -->
		<!-- <divider></divider> -->
		<uni-list-item title="作图记录" :showExtraIcon="true" leftIcon="icon-gengduo" 
		leftIconStyle="color:#FDBF2E;"></uni-list-item>
		<uni-list-item title="我的收藏" :showExtraIcon="true" leftIcon="icon-service" 
		leftIconStyle="color:#FDBF2E;"></uni-list-item>
		<divider></divider>
		<uni-list-item title="会员开通" :showExtraIcon="true" leftIcon="icon-huangguan" 
		leftIconStyle="color:#FDBF2E;" @click="navigate('pay-member')"></uni-list-item>
		<uni-list-item title="帮助中心" :showExtraIcon="true" leftIcon="icon-VIP" 
		leftIconStyle="color:#FDBF2E;"></uni-list-item>
		<divider></divider>
		<uni-list-item title="账户设置" :showExtraIcon="true" leftIcon="icon-icon_set_up" 
		leftIconStyle="color:#FDBF2E;" @click="navigate('user-set')"></uni-list-item>
		
	</view>
</template>

<script>
	import loading from "@/common/mixin/loading.js"
	
	import card from "@/components/common/card.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	
	export default {
		mixins: [loading],
		components: {
			card,
			uniListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			navigate(path) {
				if(!path) return;
				uni.navigateTo({
					url: `/pages/${path}/${path}`
				})
			}
		}
	}
</script>

<style>

</style>
