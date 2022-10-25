<template>
	<div>
		<ex-content />
	</div>
</template>

<script>
	import ExContent from "./content/ExContent.vue";

	import "@/assets/css/custom.css";
	import "@/assets/css/style.scss";

	export default {
		name: "ExHome",
		components: {
			ExContent,
		},
	};
</script>

<style scoped lang="scss"></style>
