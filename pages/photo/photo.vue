<template>
	<view class="animated fadeIn faster" style="background: #F5F5F5;">
		<loading-plus v-if="beforeReady"></loading-plus>
		<text>敬请期待。。。</text>
	</view>
</template>

<script>
	import loading from "@/common/mixin/loading.js"
	export default {
		mixins: [loading],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
