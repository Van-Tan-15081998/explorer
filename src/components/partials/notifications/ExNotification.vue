<template>
	<div
			@click="cancel"
			v-if="notification"
			class="list_notification">
		<div
				class="notification-block"
				:class="notification['state']"
		>
			<div class="notification-icon">
				<font-awesome-icon
						v-if="notification['state'] === 'error'"
						icon="fa-solid fa-circle-exclamation"
						class="icon-error"
				/>
				<font-awesome-icon
						v-if="notification['state'] === 'warning'"
						icon="fa-solid fa-triangle-exclamation"
						class="icon-warning"
				/>
				<font-awesome-icon
						v-if="notification['state'] === 'success'"
						icon="fa-regular fa-circle-check"
						class="icon-success"
				/>
			</div>
			<div class="notification-content">
				<b v-if="notification['state'] === 'success'">Thành Công [{{notification['id']}}]</b>
				<b v-else-if="notification['state'] === 'error'">Thất bại [{{notification['id']}}]</b>
				<b v-else>Cảnh báo</b>
				<p>{{ notification['message'] }}</p>
			</div>
			<div @click="cancel" class="notification-cancel">
				<font-awesome-icon
						icon="fa-solid fa-xmark"
						class="icon-cancel"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ExNotification",
		data() {
			return {
				notification: null,
				mark: null
			};
		},
		methods: {
			cancel() {
				this.notification = null;
			},
			getTime () {
				const today = new Date()
				const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
				return time
			}
		},
		watch: {

		},
		created() {
			this.exEventBus.on(
				this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
				(data) => {
					this.notification = null
					this.notification = {
						id: this.getTime(),
						state: data.state,
						message: data.message,
					}
				}
			)
		},
	};
</script>

<style scoped lang="scss">
	@import "@/assets/css/colors.scss";
	.list_notification {
		position: fixed;
		width: 500px;
		min-height: 100px;
		max-height: 500px;
		top: 50px;
		right: 5px;
		overflow-y: scroll;
		z-index: 1000;
		padding: 5px;
		transition: 0.3s;


		.notification-block {
			&:hover {
				cursor: pointer;
			}

			width: 450px;
			height: 70px;
			border-radius: 5px;
			overflow: hidden;
			background-color: white;
			box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.35);
			margin-top: 5px;
			animation: bounce-in 0.5s;

			.notification-icon {
				position: relative;
				float: left;
				height: 100%;
				width: 15%;
				display: inline-flex;
				flex-direction: column;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				align-content: center;

				.icon-error {
					display: block;
					font-size: 35px;
					color: $danger;
				}

				.icon-warning {
					display: block;
					font-size: 35px;
					color: #eca000;
				}

				.icon-success {
					display: block;
					font-size: 35px;
					color: #54cc00;
				}
			}

			.notification-content {
				position: relative;
				float: left;
				height: 100%;
				width: 75%;
				display: inline-flex;
				flex-direction: column;
				flex-wrap: wrap;
				justify-content: center;
				align-items: flex-start;
				align-content: flex-start;

				p {
					margin: 0px !important;
				}
			}

			.notification-cancel {
				position: relative;
				float: right;
				height: 100%;
				width: 10%;
				display: inline-flex;
				flex-direction: column;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				align-content: center;
				cursor: pointer;
				background-color: #54cc00;

				&:hover {
					.icon-cancel {
						transform: scale(1.1);
					}
				}

				.icon-cancel {
					font-size: 20px;
					transition: all 0.3s cubic-bezier(0.38, 0.24, 0.28, 1.17);
				}
			}
		}

		.notification-block.success {
			border: 1px solid #54cc00;

			.notification-cancel {
				background-color: #54cc00;
			}
		}

		.notification-block.error {
			border: 1px solid $danger;

			.notification-cancel {
				background-color: $danger;
			}
		}

		.notification-block.warning {
			border: 1px solid #eca000;

			.notification-cancel {
				background-color: #eca000;
			}
		}

		.bounce-enter-active {
			animation: bounce-in 0.5s;
		}

		.bounce-leave-active {
			animation: bounce-out 0.5s;
		}

		@keyframes bounce-in {
			0% {
				opacity: 0;
				transform: translateY(-10px);
			}

			100% {
				opacity: 1;
				transform: translateY(0px);
			}
		}

		@keyframes bounce-out {
			0% {
				opacity: 1;
				transform: translateY(0px);
			}

			100% {
				opacity: 0;
				transform: translateY(10px);
				display: none;
			}
		}
	}
</style>
