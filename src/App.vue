<template>
	<div>
		<EventApiController />
		<DataController />
		<ExHome />
	</div>
</template>

<script>
	import DataController from "./DataController.vue";
	import EventApiController from "./EventApiController.vue";
	import ExHome from "./components/home/ExHome.vue";

	export default {
		name: "App",
		components: {
			DataController,
			EventApiController,
			ExHome,
		},
	};
</script>

<style></style>
