<template>
	<div class="overlay">
		<div class="overlay-content">
			<span class="spinner three"></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ExLoadingOnPage",
	};
</script>

<style scoped lang="scss">
	.overlay {
		height: calc(100% - 55px);
		width: calc(100% - 240px);
		position: fixed;
		z-index: 10;
		top: 55px;
		right: 0;
		background-color: #3f3f3f;
		overflow-y: hidden;
		transition: 0.5s;

		.overlay-content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateY(-50%) translateX(-50%);
			width: 40px;
			height: 40px;

			.spinner.three {
				display: inline-block;
				overflow: visible;
				text-indent: -999em;
				position: relative;
				border-radius: 100% 0% !important;
				z-index: 10;
				background: #fff;
				top: -2px;
				left: 10px;
				width: 5px;
				height: 3px;
				transform: rotate(70deg);
				box-shadow: 0px 0px 3px 2px rgba(128, 249, 47, 0.4),
					0 0 5px 3px rgba(128, 249, 47, 0.4) inset;
				border: none;
				transform-origin: 10px 10px;
				animation: spin 13s ease infinite;
			}
			.spinner.three:after {
				content: "";
				display: block;
				position: absolute;
				border-radius: 100% 0% !important;
				z-index: 10;
				background: #fff;
				width: 6px;
				height: 4px;
				transform: rotate(140deg);
				box-shadow: 0px 0px 3px 2px rgba(162, 249, 47, 0.4),
					0 0 5px 2px rgba(162, 249, 47, 0.4) inset;
				animation: spin2 17s linear infinite;
				transform-origin: 10px 10px;
			}
			.spinner.three:before {
				content: "";
				display: block;
				position: absolute;
				border-radius: 100% 0% !important;
				z-index: 10;
				background: #fff;
				width: 7px;
				height: 5px;
				transform: rotate(70deg);
				box-shadow: 0px 0px 5px 3px rgba(94, 249, 47, 0.4),
					0 0 5px 1px rgba(94, 249, 47, 0.4) inset;
				animation: spin2 13s linear infinite;
				transform-origin: 10px 10px;
			}
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(360deg);
		}
		14% {
			transform: rotate(470deg);
		}
		18% {
			transform: rotate(490deg);
		}
		20% {
			transform: rotate(520deg);
		}
		22% {
			transform: rotate(540deg);
		}
		26% {
			transform: rotate(940deg);
		}
		30% {
			transform: rotate(1080deg);
		}
		40% {
			transform: rotate(1340deg);
		}
		45% {
			transform: rotate(1440deg);
		}
		55% {
			transform: rotate(1500deg);
		}
		56% {
			transform: rotate(1520deg);
		}
		86% {
			transform: rotate(3220deg);
		}
		100% {
			transform: rotate(3600deg);
		}
	}

	@keyframes spin2 {
		0% {
			transform: rotate(40deg);
		}
		100% {
			transform: rotate(3640deg);
		}
	}
</style>
