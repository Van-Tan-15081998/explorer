<template>
	<div class="core_form">
		<div class="input_wrapper">
			<div class="label_form">Từ vựng</div>
			<div class="input_validator error">
				<input class="input_form" type="text" placeholder="Placeholder">
				<div class="input_validator_status">
					<font-awesome-icon
							icon="fa-solid fa-circle-exclamation"
							class="input_icon"
					/>
				</div>
			</div>
			<div class="feedback_form error">A message here.</div>
		</div>

		<div class="input_wrapper">
			<div class="label_form">Từ vựng</div>
			<div class="input_validator success">
				<input class="input_form" type="text" placeholder="Placeholder">
				<div class="input_validator_status">
					<font-awesome-icon
							icon="fa-regular fa-circle-check"
							class="input_icon"
					/>
				</div>
			</div>
			<div class="feedback_form success">A message here.</div>
		</div>

		<div class="input_wrapper">
			<label class="label_form">Nghĩa Tiếng Anh</label>
			<div class="textarea_validator success">
				<textarea class="textarea_form" rows="3"

				></textarea>
				<div class="textarea_validator_status">
					<font-awesome-icon
							icon="fa-regular fa-circle-check"
							class="input_icon"
					/>
				</div>
			</div>
			<div class="feedback_form textarea success">A message here.</div>
		</div>

		<div class="input_wrapper">
			<div class="radio_group">
				<div class="radio_item">
					<div class="radio">
						<div class="toggle_check_cross_no_yes">
							<input id="toggle_check_cross_no_yes" type="checkbox"/>
							<label class="toggle-item" for="toggle_check_cross_no_yes">
								<div class="check"></div>
							</label>
						</div>
					</div>
					<div class="label">

					</div>
				</div>
			</div>
		</div>

		<div class="input_wrapper">
			<div class="radio_group">
				<div class="radio_item">
					<div class="radio">
						<div class="toggle_check_cross_no_yes">
							<input id="toggle_check_cross_no_yes_2" type="checkbox"/>
							<label class="toggle-item" for="toggle_check_cross_no_yes_2">
								<div class="check"></div>
							</label>
						</div>
					</div>
					<div class="label">

					</div>
				</div>
			</div>
		</div>

		<div class="input_wrapper">
			<div class="toggle_checkbox">
				<input id="toggle_checkbox" type="checkbox"/>
				<label class="toggle_item_checkbox" for="toggle_checkbox">
					<div class="check"></div>
				</label>
				<div class="name">Checkbox</div>
			</div>
			<div class="feedback_form success">A message here.</div>
		</div>

		<div class="input_wrapper">
			<core-form-show-selected
					:list="selectedList"
			/>
			<select class="multi_select" v-model="selectedList" multiple>
				<option value="" @click="emptyList()">Default</option>
				<option v-for="item in selectList"
								:key="item.id"
								:value="item"
				>{{item.text}}</option>
			</select>
			<div class="feedback_form success">A message here.</div>
		</div>

		<div class="input_wrapper">
			<div class="label_form">Độ phổ biến</div>
			<div class="rank_select">
				<div
						:class="{'active_rank': selectedRankColor(item)}"
						class="rank_item" v-for="item in ranks" :key="item.id">
					<font-awesome-icon
							@click="setRank(item)"
							icon="fa-solid fa-star"
							class="btn_icon"
					/>
					<div class="rank_text">{{item.id}}</div>
				</div>
			</div>
			<div class="feedback_form success">A message here.</div>
		</div>

	</div>
</template>

<script>
// import CoreFormMultiSelect from "@/core/core-components/form-multi-select/CoreFormMultiSelect";
import CoreFormShowSelected from "@/core/core-components/form-show-selected/CoreFormShowSelected";
export default {
	name: "CoreForm",
	components: {
		// CoreFormMultiSelect,
		CoreFormShowSelected
	},
	data() {
		return {
			selectedRank : {
				id: null
			},
			ranks: [
				{
					id: 0
				}	,
				{
					id: 1
				}	,
				{
					id: 2
				}	,
				{
					id: 3
				}	,
				{
					id: 4
				}	,
				{
					id: 5
				}	,
			],
			selectList: [
				{
					id: 1,
					text: 'Text 1'
				},
				{
					id: 2,
					text: 'Text 2 Text'
				},
				{
					id: 3,
					text: 'Text 3'
				},
				{
					id: 4,
					text: 'Text 4 Text'
				},
				{
					id: 6,
					text: 'Text 6'
				},
				{
					id: 7,
					text: 'Text 7 Text'
				},
				{
					id: 8,
					text: 'Text 8'
				},
				{
					id: 9,
					text: 'Text 9 Text'
				},
				{
					id: 10,
					text: 'Text 10'
				},
			],
			selectedList: [

			]
		}
	},
	methods: {
		emptyList () {
			this.selectedList = []
		},
		setRank (rank) {
			console.log(rank)
			this.selectedRank = rank

			console.log(this.selectedRank)
		},
		selectedRankColor (item) {
			if (item.id <= this.selectedRank.id) {
				return true
			}
			return false
		}
	}
}
</script>

<style scoped lang="scss">
input, textarea {
	font-size: 16px !important;
}
.core_form {
	width: 600px;
	height: 800px;
	border: 1px solid black;
	margin: 50px;
	padding: 20px;
}
.input_wrapper {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: flex-start;

	.rank_select {
		display: inline-flex;
		justify-content: flex-start;
		.rank_item {
			margin: 5px;
			user-select: none;
			.btn_icon {
				font-size: 25px;
				cursor: pointer;
				color: #6d757d;

				&:active {
					transform: scale(0.9);
				}
			}
			.rank_text {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			&:hover {
				.btn_icon {
					color: #eca000;
				}
				color: #eca000;
			}

			&.active_rank {
				.btn_icon {
					color: #eca000;
				}
				color: #eca000;
			}
		}
	}

	&.width_100 {
		width: 100px !important;
	}

	&.width_150 {
		width: 150px !important;
	}

	&.width_200 {
		width: 200px !important;
	}

	&.width_250 {
		width: 250px !important;
	}

	&.width_300 {
		width: 300px !important;
	}

	&.width_350 {
		width: 350px !important;
	}

	&.width_400 {
		width: 400px !important;
	}

	&.width_450 {
		width: 450px !important;
	}

	&.width_500 {
		width: 500px !important;
	}

	.multi_select {
		border: 1px solid green;
		width: 250px;
		margin-top: 20px;
		padding: 5px;
		box-shadow: #CCCCCC -5px 7px 3px -2px;

		&:focus {
			border: 1px solid blue !important;
			//border-style: inset;
			outline: none !important;
		}
	}

	.label_form {
		height: 30px;
		font-size: 16px;
		font-weight: 500;
	}

	.feedback_form {
		margin-top: 5px;
		height: 25px;
		font-size: 14px;
		&.textarea {
			margin-top: 0px;
		}
	}

	.input_validator {
		position: relative;
		width: 100%;
		height: 40px;
		input {
			position: absolute;
			left: 0px;
			top: 0px;
			height: 100%;
			width: 100%;
			padding: 0px 40px 0px 15px;
			outline: none;
			border-right: 1px solid green;
			border-top: 1px solid green;
			border-left: none;
			border-bottom: none;
			box-shadow: #CCCCCC -5px 7px 3px -2px;
			transition: 0.2s;

			&:focus {
				border-right: 1px solid blue !important;
				border-top: 1px solid blue !important;
			}

		}

		.input_validator_status {
			position: absolute;
			right: 0px;
			top: 0px;
			width: 40px;
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;

			.input_icon {
				display: none;
				font-size: 20px;
			}
		}
	}

	.input_validator {
		&.success {
			input {
				border-right: 1px solid green;
				border-top: 1px solid green;
			}
			.input_validator_status {
				.input_icon {
					display: block;
					color: green;
				}
			}
		}
		&.error {
			input {
				border-right: 1px solid red;
				border-top: 1px solid red;
			}
			.input_validator_status {
				.input_icon {
					display: block;
					color: red;
				}
			}
		}
	}

	.textarea_validator {
		position: relative;
		width: 100%;
		height: fit-content;
		textarea {
			width: 100%;
			padding: 5px 40px 5px 15px;
			outline: none;
			border-right: 1px solid green;
			border-top: 1px solid green;
			border-left: none;
			border-bottom: none;
			box-shadow: #CCCCCC -5px 7px 3px -2px;
			transition: 0.2s;

			&:focus {
				border-right: 1px solid blue !important;
				border-top: 1px solid blue !important;
			}

		}

		.textarea_validator_status {
			position: absolute;
			right: 0px;
			top: 0px;
			width: 40px;
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;

			.input_icon {
				display: none;
				font-size: 20px;
			}
		}
	}

	.textarea_validator {
		&.success {
			textarea {
				border-right: 1px solid green;
				border-top: 1px solid green;
			}
			.textarea_validator_status {
				.input_icon {
					display: block;
					color: green;
				}
			}
		}
		&.error {
			textarea {
				border-right: 1px solid red;
				border-top: 1px solid red;
			}
			.textarea_validator_status {
				.input_icon {
					display: block;
					color: red;
				}
			}
		}
	}

	.radio_group {
		.radio_item {
			.radio {
				input {
					height: 20px;
					left: 0;
					opacity: 0;
					position: absolute;
					top: 0;
					width: 20px;
				}
				.toggle_check_cross_no_yes {
					position: relative;
					display: inline-block;

					label.toggle-item {
						width: 60px;
						background: #2e394d;
						height: 30px;
						display: inline-block;
						border-radius: 50px;
						margin: 10px;
						position: relative;
						transition: all .3s ease;
						transform-origin: 20% center;
						cursor: pointer;
						box-sizing: border-box;

						&:before, &:after {
							content: none;
						}
					}

					.check {
						border-radius: 50%;
						width: 24px;
						height: 24px;
						position: absolute;
						background: #c34a4a;
						transition: .4s ease;
						top: 3px;
						left: 3px;

						box-sizing: border-box;
						&:before, &:after {
							content: '';
							position: absolute;
						}

						&:before, &:after {
							height: 2px;
							border-radius: 10px;
							background: #fff;
							transition: .4s ease;
						}
						&:before {
							width: 15px;
							transform: rotate(-45deg) translate(-4px, 11px);
						}
						&:after {
							width: 15px;
							transform: rotate(45deg) translate(11px, 4px);
						}
					}
				}


				#toggle_check_cross_no_yes:checked + label {
					.check {
						left: 33px;
						transform: rotate(360deg);
						background: #8BC34A;

						&:before {
							width: 12px;
							transform: rotate(-45deg) translate(-2px, 14px);
						}
						&:after {
							width: 8px;
							transform: rotate(45deg) translate(12px, 6px);
						}
					}
				}

				#toggle_check_cross_no_yes_2:checked + label {
					.check {
						left: 33px;
						transform: rotate(360deg);
						background: #8BC34A;

						&:before {
							width: 12px;
							transform: rotate(-45deg) translate(-2px, 14px);
						}
						&:after {
							width: 8px;
							transform: rotate(45deg) translate(12px, 6px);
						}
					}
				}
			}
			.label {

			}
		}
	}

	.toggle_checkbox {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		input {
			display: none !important;
		}

		label.toggle_item_checkbox {
			width: 26px;
			height: 26px;
			background: #fff;

			margin: 5px 5px 5px 0px;
			position: relative;
			transition: all .1s ease;
			transform-origin: 20% center;
			cursor: pointer;
			box-sizing: border-box;
			overflow: hidden;

			.check {
				width: 26px;
				height: 26px;
				border: 1px solid green;
				border-radius: 5px;
				overflow: hidden;
				transition: 0.2s;

				&:before, &:after {
					content: '';
					position: absolute;
					height: 2px;
					border-radius: 10px;
					background: green;
					transition: .1s ease;
					opacity: 0;
				}
				&:before {
					width: 12px;
					transform: rotate(0deg) translate(5px, 12px);
				}
				&:after {
					width: 8px;
					transform: rotate(0deg) translate(5px, 5px);
				}

				&:hover {
					border: 1px solid blue;
				}
				&:active {
					transform: scale(0.9);
				}
			}
		}
		.name {
			display: inline-flex;
		}
	}


	#toggle_checkbox:checked + label {
		.check {
			&:before, &:after {
				opacity: 1;
			}

			&:before {
				width: 14px;
				transform: rotate(-45deg) translate(-2px, 14px);
			}
			&:after {
				width: 9px;
				transform: rotate(45deg) translate(12px, 7px);
			}
		}
	}
}

</style>