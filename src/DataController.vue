<template>
	<div></div>
</template>

<script>
	export default {
		name: "DataController",
		data() {
			return {};
		},

		created() {
			// Check local data of user
			this.checkPage();

			// Lấy tất cả dữ liệu cần thiết từ API
			this.getData();

			this.exEventBus.on(
				this.exAppSetting.event.API.GET_DATA_SUCCESS,
				(data) => {
					console.log(data);
				}
			);
		},

		methods: {
			// Lấy tất cả dữ liệu cần thiết từ API
			getData() {
				this.exEventBus.emit(
					this.exAppSetting.event.API.GET_DATA,
					null
				);
			},

			checkPage() {},
		},
	};
</script>
