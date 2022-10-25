<template>
	<div v-if="errors && errors.length >0">
		<div v-for="item in errors" :key="item" class="feedback_form error">{{item}}</div>
	</div>
</template>

<script>
export default {
	name: "ShowError",
	props: {
		errors: {
			type: Array,
		}
	}
}
</script>

<style scoped lang="scss">
.feedback_form {
	margin-top: 5px;
	height: 25px;
	font-size: 14px;
	color: red;
}
</style>