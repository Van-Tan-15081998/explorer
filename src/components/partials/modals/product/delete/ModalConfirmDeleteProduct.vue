<template>
	<Transition name="modal-custom">
		<div v-if="show" class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<ModalHeader></ModalHeader>
					</div>

					<div class="modal-body">
						<ModalBody :modalBodyData="modalBodyData"></ModalBody>
					</div>

					<div class="modal-footer custom">
						<CloseButton @click="close()"></CloseButton>
						<SubmitButton
							@click="deleteProduct()"
							:confirmButtonState="confirmButtonState"
						></SubmitButton>
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script>
	import SubmitButton from "../../../buttons/SubmitButton.vue";
	import CloseButton from "../../../buttons/CloseButton.vue";

	import ModalHeader from "../child_components/ModalHeader.vue";
	import ModalBody from "../child_components/ModalBody.vue";

	export default {
		name: "ModalConfirmDeleteProduct",
		props: {
			show: Boolean,
		},
		components: {
			SubmitButton,
			CloseButton,
			ModalHeader,
			ModalBody,
		},
		data() {
			return {
				product: null,
				modalBodyData: {
					message: "",
					state: "confirm",
				},
				confirmButtonState: "normal",
			};
		},
		created() {
			this.exEventBus.on(
				this.exAppSetting.event.PASS_DATA.PRODUCT
					.CONFIRM_DELETE_PRODUCT,
				(data) => {
					this.product = data;
					this.modalBodyData.message =
						"Bạn muốn xóa " + this.product.name;
				}
			);

			this.exEventBus.on(
				this.exAppSetting.event.API.PRODUCT
					.DELETE_PRODUCT_BY_ID_SUCCESS,
				() => {
					this.modalBodyData.message = "Xóa thành công";
					this.modalBodyData.state = "success";

					this.confirmButtonState = "complete";
				}
			);

			this.exEventBus.on(
				this.exAppSetting.event.API.PRODUCT.DELETE_PRODUCT_BY_ID_ERROR,
				() => {
					this.modalBodyData.message = "Có lỗi xảy ra";
					this.modalBodyData.state = "error";

					this.confirmButtonState = "complete";
				}
			);
		},
		methods: {
			deleteProduct() {
				this.confirmButtonState = "loading";
				this.exEventBus.emit(
					this.exAppSetting.event.API.PRODUCT.DELETE_PRODUCT_BY_ID,
					{ id: this.product.id }
				);
			},

			close() {
				this.modalBodyData.state = "cancel";
				this.modalBodyData.message = "Dừng thao tác";
				setTimeout(() => {
					this.$emit("close");
					this.reset();
				}, 300);
			},

			reset() {
				this.modalBodyData.state = "confirm";
				this.modalBodyData.message = "";

				this.confirmButtonState = "normal";
			},
		},
	};
</script>

<style>
	.modal-mask {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: table;
		transition: opacity 0.1s ease;
	}

	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
	}

	.modal-container {
		width: 500px;
		margin: 0px auto;
		padding: 15px 25px;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
		transition: all 0.3s ease;
	}

	.modal-header h3 {
		margin-top: 0;
		color: #42b883;
	}

	.modal-body {
		margin: 20px 0;
	}

	.modal-default-button {
		float: right;
	}

	.modal-enter-from {
		opacity: 0;
	}

	.modal-leave-to {
		opacity: 0;
	}

	.modal-enter-from .modal-container,
	.modal-leave-to .modal-container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}

	.modal-footer.custom {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: center;
	}
</style>
