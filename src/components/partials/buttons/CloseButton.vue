<template>
	<div>
		<div class="button-close">
			<div class="close-block">
				<div class="close-text">
					<font-awesome-icon
						icon="fa-solid fa-xmark"
						class="btn-icon"
					/>Đóng
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CloseButton",
	};
</script>

<style scoped lang="scss">
	.button-close {
		width: 200px;
		height: 40px;
		background-color: white;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
			rgba(0, 0, 0, 0.23) 0px 3px 6px;
		border-radius: 30px;
		cursor: pointer;
		user-select: none;
		overflow: hidden;
		transition: all 0.1s cubic-bezier(0.38, 0.24, 0.28, 1.17);

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

		.close-block {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			.close-text {
				font-weight: bold;
				color: forestgreen;
				transition: all 0.3s cubic-bezier(0.38, 0.24, 0.28, 1.17);

				.btn-icon {
					margin-right: 10px;
				}
			}
		}
	}
</style>
