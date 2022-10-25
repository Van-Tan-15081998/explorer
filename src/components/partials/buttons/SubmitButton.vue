<template>
	<div>
		<div class="button-submit" @click="startFunction">
			<Transition name="bounce">
				<div
					v-if="confirmButtonState === 'normal'"
					class="submit-block"
				>
					<div class="submit-text">
						<font-awesome-icon
							icon="fa-solid fa-down-long"
							class="btn-icon"
						/>Xác nhận
					</div>
				</div>
			</Transition>
			<Transition name="bounce">
				<div
					v-if="confirmButtonState === 'loading'"
					class="loading-block"
				>
					<div class="dot-pulse"></div>
				</div>
			</Transition>
			<Transition name="bounce">
				<div
					v-if="confirmButtonState === 'complete'"
					class="submit-completed-block"
				>
					<div class="submit-text">
						<font-awesome-icon
							icon="fa-solid fa-check"
							class="btn-icon"
						/>Hoàn tất
					</div>
				</div>
			</Transition>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SubmitButton",
		props: {
			confirmButtonState: String,
		},
		methods: {
			startFunction() {
				// let app = this;
				// this.state = "loading";
				// setTimeout(() => {
				// 	this.state = !this.stateLoading;
				// 	setTimeout(() => {
				// 		this.stateLoading = !this.stateLoading;
				// 		this.stateComplete = !this.stateComplete;
				// 		setTimeout(() => {
				// 			app.reset();
				// 		}, 1000);
				// 	}, 1000);
				// }, 0);
			},

			reset() {
				// this.confirmButtonState = "normal";
			},
		},
	};
</script>

<style scoped lang="scss">
	@import "@/assets/css/colors.scss";
	@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

	.button-submit {
		width: 200px;
		height: 40px;
		background-color: white;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
			rgba(0, 0, 0, 0.23) 0px 3px 6px;
		border-radius: 30px;
		cursor: pointer;
		user-select: none;
		overflow: hidden;
		transition: all 0.3s cubic-bezier(0.38, 0.24, 0.28, 1.17);

		&:active {
			transform: translateY(2px);
			box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
				rgba(0, 0, 0, 0.23) 0px 3px 6px;
			background-color: aqua;
		}

		&:hover {
			box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 8px,
				rgba(0, 0, 0, 0.23) 0px 3px 8px;
		}

		.submit-block {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			.submit-text {
				font-weight: bold;
				color: forestgreen;
				transition: all 0.3s cubic-bezier(0.38, 0.24, 0.28, 1.17);

				.btn-icon {
					margin-right: 10px;
				}
			}
		}

		.loading-block {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.submit-completed-block {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.3s cubic-bezier(0.38, 0.24, 0.28, 1.17);

			.submit-text {
				color: forestgreen;
				font-weight: bold;
				.btn-icon {
					margin-right: 10px;
				}
			}
		}
	}

	.dot-pulse {
		position: relative;
		left: -9999px;
		width: 10px;
		height: 10px;
		border-radius: 5px;
		background-color: $info;
		color: $info;
		box-shadow: 9999px 0 0 -5px $info;
		animation: dotPulse 1.5s infinite linear;
		animation-delay: 0.25s;
	}

	.dot-pulse::before,
	.dot-pulse::after {
		content: "";
		display: inline-block;
		position: absolute;
		top: 0;
		width: 10px;
		height: 10px;
		border-radius: 5px;
		background-color: $info;
		color: $info;
	}

	.dot-pulse::before {
		box-shadow: 9984px 0 0 -5px $info;
		animation: dotPulseBefore 1.5s infinite linear;
		animation-delay: 0s;
	}

	.dot-pulse::after {
		box-shadow: 10014px 0 0 -5px $info;
		animation: dotPulseAfter 1.5s infinite linear;
		animation-delay: 0.5s;
	}

	@keyframes dotPulseBefore {
		0% {
			box-shadow: 9984px 0 0 -5px $info;
		}
		30% {
			box-shadow: 9984px 0 0 2px $info;
		}
		60%,
		100% {
			box-shadow: 9984px 0 0 -5px $info;
		}
	}

	@keyframes dotPulse {
		0% {
			box-shadow: 9999px 0 0 -5px $info;
		}
		30% {
			box-shadow: 9999px 0 0 2px $info;
		}
		60%,
		100% {
			box-shadow: 9999px 0 0 -5px $info;
		}
	}

	@keyframes dotPulseAfter {
		0% {
			box-shadow: 10014px 0 0 -5px $info;
		}
		30% {
			box-shadow: 10014px 0 0 2px $info;
		}
		60%,
		100% {
			box-shadow: 10014px 0 0 -5px $info;
		}
	}

	@keyframes drop {
		0% {
			opacity: 1;
			transform: translateY(0px);
		}
		100% {
			opacity: 0;
			transform: translateY(100px);
		}
	}

	.bounce-enter-active {
		animation: bounce-in 0.3s;
	}
	.bounce-leave-active {
		display: none;
	}

	@keyframes bounce-in {
		0% {
			transform: scale(0.95);
		}

		100% {
			transform: scale(1);
		}
	}
</style>
