<template>
	<div
			class="multi_select">
		<div
				@click.self="isShowSelectList = !isShowSelectList"
				:class="{'expand': listSelected.length > 0}"
				class="select_container">
				<div class="selected_item_block" v-for="item in listSelected" :key="item.id">
					<div
							class="selected_item">{{item.value}}
					</div>
					<div class="unselect_button"
						@click="unSelect(item)">
						<font-awesome-icon
								icon="fa-solid fa-xmark"
								class="btn-icon"
						/>
					</div>
				</div>
		</div>
		<div
				v-if="isShowSelectList"
				class="select_list"
				id="select_list_id"
				:class="{'expand': listSelect.length > 0}"
		>
			<div class="content">
				<ul>
					<li
							v-for="item in listSelect" :key="item.id"
							@click="select(item)"
					>{{item.value}}</li>
				</ul>
			</div>
			<div
					@click="isShowSelectList = !isShowSelectList"
					class="cancel_button">
				<b>Đóng</b>
			</div>
		</div>
	</div>
</template>

<script>
export default {
name: "CoreFormMultiSelect",
	data () {
	return {
		isShowSelectList: false,
		listSelect: [
			{
				id: 1,
				value: 'Text 1'
			},
			{
				id: 2,
				value: 'Text 2 Text'
			},
			{
				id: 3,
				value: 'Text 3'
			},
			{
				id: 4,
				value: 'Text 4 Text'
			},
			{
				id: 6,
				value: 'Text 6'
			},
			{
				id: 7,
				value: 'Text 7 Text'
			},
			{
				id: 8,
				value: 'Text 8'
			},
			{
				id: 9,
				value: 'Text 9 Text'
			},
			{
				id: 10,
				value: 'Text 10'
			},
		],
		listSelected: [

		]
	}
	},
	methods : {
		select (itemSelected) {

			let isExisted = this.listSelected.length > 0
					? this.listSelected.some((element) => {
						return element.id === itemSelected.id
					})
					:false

			if (!isExisted) {
				// add item to listSelected
				this.listSelected.push(itemSelected)

				// remove item in listSelect
				this.listSelect.forEach((element, index) => {
					if (element.id === itemSelected.id) {
						this.listSelect.splice(index, 1)
					}
				})
			}

		},
		unSelect (itemSelected) {
			let isExisted = this.listSelect.length > 0
					? this.listSelect.some((element) => {
						return element.id === itemSelected.id
					})
					:false

			if (!isExisted) {
				// add item to listSelected
				this.listSelect.push(itemSelected)

				// remove item in listSelect
				this.listSelected.forEach((element, index) => {
					if (element.id === itemSelected.id) {
						this.listSelected.splice(index, 1)
					}
				})
			}
		}
	},
}
</script>

<style scoped lang="scss">
.multi_select {
	position: relative;
	.select_container {
		width: 240px;
		min-height: 40px;
		padding: 2px;
		border-top: 1px solid green;
		border-right: 1px solid green;
		box-shadow: #CCCCCC -5px 7px 3px -2px;
		cursor: pointer;

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
				background-color: red;
				border-radius: 0px 5px 5px 0px;
				cursor: pointer;
				color: white;
			}
		}
	}

	.select_list {
		position: absolute;
		z-index: 100;
		width: 240px;
		height: 200px;
		margin-top: 5px;
		background-color: white;
		transition: 0.2s;
		border-radius: 0px 0px 5px 5px;
		border: 1px solid green;
		overflow: hidden;

		.content {
			width: 100%;
			height: calc(100% - 40px);
			overflow-y: scroll;

			ul {
				margin-bottom: 0px !important;
				li {
					padding: 10px 20px;
					color: black;

					&:hover {
						background-color: #86cfda;
						cursor: pointer;
					}
				}
			}
		}

		.cancel_button {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 40px;
			background-color: #00bcd4;
			cursor: pointer;
		}
	}
}
</style>