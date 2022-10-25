<template>
	<div>
		<ExNavFrame />
		<div class="ex-content-block">
			<div class="ex-main-content-detail">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import ExNavFrame from "../nav_frame/ExNavFrame.vue";

	export default {
		name: "ExMainContent",
		components: {
			ExNavFrame,
		},
		data() {
			return {
				contentScreen: "",
			};
		},
		created() {},

		computed: {
			contentScreenComputed() {
				return this.contentScreen;
			},
		},
	};
</script>

<style scoped lang="scss">
	@import "@/assets/css/colors.scss";
	.ex-content-block {
		position: absolute;
		top: 55px;
		left: 240px;
		height: calc(100% - 55px);
		width: calc(100% - 240px);
		background-color: #1F1F1F;
	}

	.ex-main-content-detail {
		height: calc(100% - 10px);
		width: calc(100% - 20px);
		margin: 10px 10px 0px 10px;
		overflow-y: scroll;
	}
</style>
