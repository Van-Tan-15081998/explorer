<template>
	<div
			class="select_container"
			v-if="list.length > 0"
	>
		<div class="selected_item_block" v-for="item in list" :key="item.id">
			<div
					class="selected_item">{{item.text}}
			</div>
			<div class="unselect_button">
				<font-awesome-icon
						icon="fa-solid fa-check"
						class="btn-icon"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CoreFormShowSelected",
	props: {
		list: Array
	}
}
</script>

<style scoped lang="scss">

.select_container {
	width: 250px;
	min-height: 40px;
	padding: 2px;
	border-top: 1px solid green;
	border-right: 1px solid green;
	box-shadow: #CCCCCC -5px 7px 3px -2px;

	&.expand {
		height: auto;
	}

	.selected_item_block {
		display: inline-flex;
		margin: 4px;

		.selected_item {
			z-index: 10;
			padding: 5px 10px;
			border-radius: 5px 0px 0px 5px;
			background-color: #4EB0FF;
		}

		.unselect_button {
			width: 20px;
			height: auto;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: white;
			border-radius: 0px 5px 5px 0px;
			border: 1px solid #4EB0FF;
			color: green;
		}
	}
}

</style>