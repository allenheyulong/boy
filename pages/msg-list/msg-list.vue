<template>
	<view class="p-2">
		<view class="mb-2 p-2 bg-white rounded" hover-class="bg-light"
		v-for="(item, index) in list" :key="index" 
		@click="navigate('msg-detail')">
			<view class="text-dark font-md">{{item.title}}</view>
			<view class="font text-light-muted">{{item.desc}}</view>
			<view class="font text-light-muted">{{item.create_time}}</view>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						title: "会员日，只需5元开通会员",
						desc: "那女孩对我说 说我保护她的梦 说这个世界 对她这样的不多",
						create_time: "9月18日"
					},
					{
						title: "会员日，只需5元开通会员",
						desc: "那女孩对我说 说我保护她的梦 说这个世界 对她这样的不多",
						create_time: "9月18日"
					},
					{
						title: "会员日，只需5元开通会员",
						desc: "那女孩对我说 说我保护她的梦 说这个世界 对她这样的不多",
						create_time: "9月18日"
					},
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
	background-color: #EEEEEE;
}
</style>
