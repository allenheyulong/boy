<template>
	<view>
		<divider></divider>
		<uni-list-item title="头像" @tap="changeimg">
			<block slot="right">
				<image :src="userpic" mode="aspectFill" style="height: 100rpx;width: 100rpx;"
				class="rounded-circle border border-secondary"></image>
			</block>
		</uni-list-item>
		<uni-list-item title="昵称">
			<block slot="right">
				邓宇辰
			</block>
		</uni-list-item>
		<uni-list-item title="性别" @tap="changeOne(sex)"></uni-list-item>
		<divider></divider>
		<uni-list-item title="修改密码"></uni-list-item>
		<uni-list-item title="密保手机"></uni-list-item>
		
		
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	
	let sex = ['机密', '男', '女']
	export default {
		components:{
			uniListItem
		},
		data() {
			return {
				userpic: "../../static/images/demo/demo6.jpg",
				sex: '机密'
			}
		},
		methods: {
			// 修改头像
			changeimg() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success: (res) => {
						this.userpic = res.tempFilePaths
					}
				})
			},
			// 选择-- 性别
			changeOne(val) {
				let arr = []
				switch (vai) {
					case 'sex': arr = sex;
					break;
					// others
				}
				// 调显示操作菜单
				uni.showActionSheet({
					itemList: arr,
					success: res => {
						switch (val) {
							case 'sex': this.sex = arr[res.tapIndex];
							break;
							// others
						}
					}
				})
			}
		}
	}
</script>

<style>

</style>
