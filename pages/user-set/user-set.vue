<template>
	<view>
		<card  v-for="(item, index) in list" :key="index" 
			:headTitle="item.label" bodyStyle="background:#ffffff;">
			<uni-list-item v-for="(list, listIndex) in item.value" :key="listIndex"
			:title="list.title" @click="navigate(list.path)"></uni-list-item>
		</card>
		<view class="p-3">
			<button type="default" class="user-set-btn">退出登录</button>
		</view>
	</view>
</template>

<script>
	import card from "@/components/common/card.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	
	export default {
		components:{
			card,
			uniListItem
		},
		data() {
			return {
				list: [
					{
						label: "账户管理",
						value: [
							{title: "个人资料", path: ""},
							{title: "修改密码", path: ""},
						]
					},
					{
						label: "服务中心",
						value: [
							{title: "邀请好友", path: ""},
							{title: "意见反馈", path: ""},
							{title: "清除缓存", path: ""},
							{title: "用户协议", path: ""},
							{title: "关于我们", path: ""},
						]
					}
				]
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
page{
	background: #EEEEEE;
}
.user-set-btn{
	width: 100%;
	margin: 20upx 0;
	background: #FF0000!important;
	border: 0!important;
	color: #FFFFFF!important;
}
	
</style>
