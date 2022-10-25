<template>
	<Transition>
		<div class="body-modal">
			<!-- <h3>Body</h3> -->
			<div class="icon-block">
				<Transition name="bounce">
					<font-awesome-icon
						v-if="modalBodyData.state === 'success'"
						icon="fa-regular fa-circle-check"
						class="body-modal-icon success"
					/>
				</Transition>
				<Transition name="bounce">
					<font-awesome-icon
						v-if="modalBodyData.state === 'cancel'"
						icon="fa-regular fa-circle-xmark"
						class="body-modal-icon cancel"
					/>
				</Transition>
				<Transition name="bounce">
					<font-awesome-icon
						v-if="modalBodyData.state === 'error'"
						icon="fa-solid fa-circle-exclamation"
						class="body-modal-icon error"
					/>
				</Transition>
				<Transition name="bounce">
					<font-awesome-icon
						v-if="modalBodyData.state === 'confirm'"
						icon="fa-solid fa-circle-exclamation"
						class="body-modal-icon confirm"
					/>
				</Transition>
			</div>

			<div
				v-if="modalBodyData.state === 'confirm'"
				class="confirm-message"
			>
				<b>{{ modalBodyData.message }}</b>
			</div>

			<div
				v-if="modalBodyData.state === 'success'"
				class="success-message"
			>
				<b>{{ modalBodyData.message }}</b>
			</div>

			<div v-if="modalBodyData.state === 'error'" class="error-message">
				<b>{{ modalBodyData.message }}</b>
			</div>

			<div v-if="modalBodyData.state === 'cancel'" class="cancel-message">
				<b>{{ modalBodyData.message }}</b>
			</div>
		</div>
	</Transition>
</template>

<script>
	export default {
		name: "ModalBody",
		props: {
			modalBodyData: Object,
		},
		data() {
			return {};
		},
	};
</script>

<style scoped lang="scss">
	@import "@/assets/css/colors.scss";

	.body-modal {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: center;

		.icon-block {
			height: 80px;
		}

		.body-modal-icon.success {
			display: block;
			font-size: 60px;
			color: $success;
			margin-bottom: 20px;
		}

		.body-modal-icon.cancel {
			display: block;
			font-size: 60px;
			color: $success;
			margin-bottom: 20px;
		}

		.body-modal-icon.error {
			display: block;
			font-size: 60px;
			color: $danger;
			margin-bottom: 20px;
		}

		.body-modal-icon.confirm {
			display: block;
			font-size: 60px;
			color: $danger;
			margin-bottom: 20px;
		}

		.success-message {
			color: $success;
		}
		.error-message {
			color: $danger;
		}
		.confirm-message {
			color: $danger;
		}
		.cancel-message {
			color: $success;
		}
	}

	.bounce-enter-active {
		animation: bounce-in 0.5s;
	}
	.bounce-leave-active {
		display: none;
	}

	@keyframes bounce-in {
		0% {
			transform: scale(0.9);
		}

		100% {
			transform: scale(1);
		}
	}
</style>
