<template>
	<div>
		<div v-if="loading">
			<ExLoadingOnPage />
		</div>
		<div v-else>
			<table class="table">
				<thead class="thead-light">
					<tr>
						<th scope="col">No</th>
						<th scope="col">Id</th>
						<th scope="col">Name</th>
						<th scope="col">Price</th>
						<th scope="col">Quantity</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<Transition name="slice">
					<tbody>
						<tr v-for="(item, index) in listProduct" :key="index">
							<td></td>
							<td>{{ item.id }}</td>
							<td>{{ item.name }}</td>
							<td>{{ item.price }}</td>
							<td>{{ item.quantity }}</td>
							<td>
								<button
									class="detail"
									@click="goToDetailProductPage(item.id)"
								>
									<font-awesome-icon
										icon="fa-solid fa-magnifying-glass"
									/>
								</button>
								<button class="update">
									<font-awesome-icon
										icon="fa-solid fa-pencil"
									/>
								</button>
								<button
									class="delete"
									@click="deleteProduct(item.id)"
								>
									<font-awesome-icon
										icon="fa-solid fa-trash-can"
									/>
								</button>
								<!-- <button @click="goToDetailProductPage(item.id)">
								Detail
							</button> -->
							</td>
						</tr>
					</tbody>
				</Transition>
			</table>
		</div>

		<Teleport to="body">
			<!-- use the modal component, pass in the prop -->
			<ModalConfirmDeleteProduct
				:show="showModal"
				@close="showModal = false"
			>
				<template #header>
					<h3>custom header</h3>
				</template>
			</ModalConfirmDeleteProduct>
		</Teleport>
	</div>
</template>

<script>
	import ExLoadingOnPage from "../partials/loading/ExLoadingOnPage.vue";
	import ModalConfirmDeleteProduct from "../partials/modals/product/delete/ModalConfirmDeleteProduct.vue";

	export default {
		name: "ExProduct",
		data() {
			return {
				listProduct: [],
				loading: true,

				showModal: false,
				productToDelete: null,
			};
		},
		components: {
			ExLoadingOnPage,
			ModalConfirmDeleteProduct,
		},
		setup() {},
		created() {
			this.exEventBus.emit(
				this.exAppSetting.event.API.PRODUCT.GET_ALL_PRODUCT,
				null
			);

			this.exEventBus.on(
				this.exAppSetting.event.API.PRODUCT.GET_ALL_PRODUCT_SUCCESS,
				(data) => {
					this.listProduct = data;
					this.loading = false;
				}
			);

			console.log("Get danh sách product");

			this.exEventBus.on(
				this.exAppSetting.event.API.PRODUCT
					.DELETE_PRODUCT_BY_ID_SUCCESS,
				(data) => {
					console.log(data);
					// this.listProduct.forEach((element) => {
					// 	if (element.id === data) {
					// 		this.listProduct = this.listProduct.slice(element);
					// 	}
					// });

					this.listProduct = this.listProduct.filter(function (item) {
						return item.id !== data;
					});

					this.exEventBus.emit(
						this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
						{ state: "success", message: "Xóa Product thành công" }
					);
				}
			);

			this.exEventBus.on(
				this.exAppSetting.event.API.PRODUCT.DELETE_PRODUCT_BY_ID_ERROR,
				(data) => {
					console.log(data);

					this.exEventBus.emit(
						this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
						{ state: "error", message: data.error_msg }
					);
				}
			);
		},
		mounted() {},
		methods: {
			goToDetailProductPage(id) {
				this.$router.push({
					name: "product-management/detail-product",
					params: { id: id },
				});
			},

			deleteProduct(id) {
				this.listProduct.forEach((element) => {
					if (element.id === id) {
						this.productToDelete = element;

						// Truyền dữ liệu product cho modal confirm delete
						this.exEventBus.emit(
							this.exAppSetting.event.PASS_DATA.PRODUCT
								.CONFIRM_DELETE_PRODUCT,
							this.productToDelete
						);
					}
				});
				this.showModal = true;
			},
		},
	};
</script>

<style scoped lang="scss">
	td {
		vertical-align: middle !important;
	}
	$colors: (
		detail: #18a2b8,
		update: #27a746,
		delete: #dc3645,
	);
	@each $button, $color in $colors {
		.#{$button} {
			--color: #{$color};
			--hover: #{adjust-hue(
					$color,
					45deg
				)}; // Điều chỉnh màu sắc của màu với một mức độ từ -360deg đến 360deg.
		}
	}
	button {
		color: var(--color);
		transition: 0.25s;

		&:hover,
		&:focus {
			border-color: var(--hover);
			color: --color;
		}
	}
	button {
		background: none;
		border: 1px solid;
		border-radius: 2px;
		font: inherit;
		line-height: 1;
		margin: 4px;
		padding: 4px 8px;
	}

	.detail {
		&:hover,
		&:focus {
			box-shadow: 0 4px 4px -3px var(--hover);
			transform: translateY(-2px);
		}
		&:active {
			background-color: var(--color);
			color: white;
		}
	}

	.update {
		&:hover,
		&:focus {
			box-shadow: 0 4px 4px -3px var(--hover);
			transform: translateY(-2px);
		}
		&:active {
			background-color: var(--color);
			color: white;
		}
	}

	.delete {
		&:hover,
		&:focus {
			box-shadow: 0 4px 4px -3px var(--hover);
			transform: translateY(-2px);
		}
		&:active {
			background-color: var(--color);
			color: white;
		}
	}

	// alert box
	.alert {
		padding: 20px;
		background-color: white;
		color: blue;
	}

	.closebtn {
		margin-left: 15px;
		color: blue;
		font-weight: bold;
		float: right;
		font-size: 22px;
		line-height: 20px;
		cursor: pointer;
		transition: 0.3s;
	}

	.closebtn:hover {
		color: black;
	}

	.slice-enter-active {
		animation: slice-in 0.5s;
	}
	.slice-leave-active {
		animation: slice-out 0.5s;
	}

	@keyframes slice-in {
		0% {
			opacity: 0;
			transform: translateX(20px);
		}

		100% {
			opacity: 1;
			transform: translateX(0px);
		}
	}
	@keyframes slice-out {
		0% {
			opacity: 1;
			transform: translateX(0px);
		}

		100% {
			opacity: 0;
			transform: translateX(20px);
		}
	}
</style>
