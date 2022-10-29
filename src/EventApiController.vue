<template>
	<div></div>
</template>

<script>
	export default {
		name: "EventApiController",

		created() {
			// API Lấy tất cả dữ liệu cần thiết
			this.exEventBus.on(this.exAppSetting.event.API.GET_DATA, (data) => {
				this.exAppUtils.apiSerivce
					.post(this.exAppSetting.api.GET_DATA, data)
					.then((response) => {
						if (response['error_code'] === 0) {
							console.log("GET DATA SUCCESS");

							// Set dữ liệu cho vuex-store
							this.$store.dispatch(
								"set_list_blog",
								response.data
							);

							this.exEventBus.emit(
								this.exAppSetting.event.API.GET_DATA_SUCCESS,
								response.data
							);
						} else {
							this.exEventBus.emit(
								this.exAppSetting.event.API.GET_DATA_ERROR,
								response
							);
						}
					});
			});

			// Get all product
			this.exEventBus.on(
				this.exAppSetting.event.API.PRODUCT.GET_ALL_PRODUCT,
				(data) => {
					this.exAppUtils.apiSerivce
						.get(
							this.exAppSetting.api.PRODUCT.GET_ALL_PRODUCT,
							data
						)
						.then((response) => {
							if (response['error_code'] === 0) {
								this.exEventBus.emit(
									this.exAppSetting.event.API.PRODUCT
										.GET_ALL_PRODUCT_SUCCESS,
									response.data
								);
							} else {
								this.exEventBus.emit(
									this.exAppSetting.event.API.PRODUCT
										.GET_ALL_PRODUCT_ERROR,
									response
								);
							}
						});
				}
			);

			// Get product by id
			this.exEventBus.on(
				this.exAppSetting.event.API.PRODUCT.GET_PRODUCT_BY_ID,
				(data) => {
					console.log(data);
					this.exAppUtils.apiSerivce
						.post(
							this.exAppSetting.api.PRODUCT.GET_PRODUCT_BY_ID,
							data
						)
						.then((response) => {
							if (response['error_code'] === 0) {
								this.exEventBus.emit(
									this.exAppSetting.event.API.PRODUCT
										.GET_PRODUCT_BY_ID_SUCCESS,
									response.data
								);
							} else {
								this.exEventBus.emit(
									this.exAppSetting.event.API.PRODUCT
										.GET_PRODUCT_BY_ID_ERROR,
									response
								);
							}
						});
				}
			);

			// Delete product by id
			this.exEventBus.on(
				this.exAppSetting.event.API.PRODUCT.DELETE_PRODUCT_BY_ID,
				(data) => {
					let productId = data.id;
					this.exAppUtils.apiSerivce
						.post(
							this.exAppSetting.api.PRODUCT.DELETE_PRODUCT_BY_ID,
							data
						)
						.then((response) => {
							console.log(response);
							if (response['error_code'] === 0) {
								this.exEventBus.emit(
									this.exAppSetting.event.API.PRODUCT
										.DELETE_PRODUCT_BY_ID_SUCCESS,
									productId
								);
							} else {
								this.exEventBus.emit(
									this.exAppSetting.event.API.PRODUCT
										.DELETE_PRODUCT_BY_ID_ERROR,
									response
								);
							}
						});
				}
			);

			// Get all blog
			this.exEventBus.on(
				this.exAppSetting.event.API.BLOG.GET_ALL_BLOG,
				(data) => {
					this.exAppUtils.apiSerivce
						.get(this.exAppSetting.api.BLOG.GET_ALL_BLOG, data)
						.then((response) => {
							if (response['error_code'] === 0) {
								this.exEventBus.emit(
									this.exAppSetting.event.API.BLOG
										.GET_ALL_BLOGT_SUCCESS,
									response.data
								);
							} else {
								this.exEventBus.emit(
									this.exAppSetting.event.API.BLOG
										.GET_ALL_BLOG_ERROR,
									response
								);
							}
						});
				}
			);

			// Get Word with paginate
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.GET_WORD_PAGINATE,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.GET_WORD_PAGINATE,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.GET_WORD_PAGINATE_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.GET_WORD_PAGINATE_ERROR,
												response
										);
									}
								});
					}
			);

			// Get type word
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.GET_TYPE_WORD,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.GET_TYPE_WORD,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.GET_TYPE_WORD_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.GET_TYPE_WORD_ERROR,
												response
										);
									}
								});
					}
			);

			// Get word by id
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.GET_WORD_BY_ID,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.GET_WORD_BY_ID_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.GET_WORD_BY_ID_ERROR,
												response
										);
									}
								});
					}
			);

			// Save Word
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.SAVE_WORD,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.SAVE_WORD,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.SAVE_WORD_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.SAVE_WORD_ERROR,
												response
										);
									}
								});
					}
			);

      // Save Word Mean
      this.exEventBus.on(
          this.exAppSetting.event.API.WORD.SAVE_WORD_MEAN,
          (data) => {
            this.exAppUtils.apiSerivce
							.post(
									this.exAppSetting.api.WORD.SAVE_WORD_MEAN,
									data
							)
							.then((response) => {
								if (response['error_code'] === 0) {
									this.exEventBus.emit(
											this.exAppSetting.event.API.WORD
													.SAVE_WORD_MEAN_SUCCESS,
											response.data
									);
								} else {
									this.exEventBus.emit(
											this.exAppSetting.event.API.WORD
													.SAVE_WORD_MEAN_ERROR,
											response
									);
								}
							});
          }
      );

			// Save Eng Word Mean
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.SAVE_ENG_WORD_MEAN,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.SAVE_ENG_WORD_MEAN,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.SAVE_ENG_WORD_MEAN_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.SAVE_ENG_WORD_MEAN_ERROR,
												response
										);
									}
								});
					}
			);

			// Save Vie Word Mean By Type Word
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.SAVE_VIE_WORD_MEAN_BY_TYPE_WORD,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.SAVE_VIE_WORD_MEAN_BY_TYPE_WORD,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.SAVE_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.SAVE_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR,
												response
										);
									}
								});
					}
			);

			// Save Eng Word Mean By Type Word
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.SAVE_ENG_WORD_MEAN_BY_TYPE_WORD,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.SAVE_ENG_WORD_MEAN_BY_TYPE_WORD,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.SAVE_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.SAVE_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR,
												response
										);
									}
								});
					}
			);

			// Save Word Mean By Type Word
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.SAVE_EXAMPLE,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.SAVE_EXAMPLE,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.SAVE_EXAMPLE_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.SAVE_EXAMPLE_ERROR,
												response
										);
									}
								});
					}
			);

			// Add or update example to vie word mean by type word
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.ADD_OR_UPDATE_EXAMPLE_TO_VIE_WORD_MEAN_BY_TYPE_WORD,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.ADD_OR_UPDATE_EXAMPLE_TO_VIE_WORD_MEAN_BY_TYPE_WORD,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.ADD_OR_UPDATE_EXAMPLE_TO_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.ADD_OR_UPDATE_EXAMPLE_TO_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR,
												response
										);
									}
								});
					}
			);

			// Add or update example to eng word mean by type word
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.ADD_OR_UPDATE_EXAMPLE_TO_ENG_WORD_MEAN_BY_TYPE_WORD,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.ADD_OR_UPDATE_EXAMPLE_TO_ENG_WORD_MEAN_BY_TYPE_WORD,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.ADD_OR_UPDATE_EXAMPLE_TO_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.ADD_OR_UPDATE_EXAMPLE_TO_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR,
												response
										);
									}
								});
					}
			);

			// Delete example of vie word mean by type word
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.DELETE_EXAMPLE_OF_VIE_WORD_MEAN_BY_TYPE_WORD,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.DELETE_EXAMPLE_OF_VIE_WORD_MEAN_BY_TYPE_WORD,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.DELETE_EXAMPLE_OF_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.DELETE_EXAMPLE_OF_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR,
												response
										);
									}
								});
					}
			);

			// Delete example of eng word mean by type word
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.DELETE_EXAMPLE_OF_ENG_WORD_MEAN_BY_TYPE_WORD,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.DELETE_EXAMPLE_OF_ENG_WORD_MEAN_BY_TYPE_WORD,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.DELETE_EXAMPLE_OF_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.DELETE_EXAMPLE_OF_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR,
												response
										);
									}
								});
					}
			);

			// Update vie word mean by type word
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.UPDATE_VIE_WORD_MEAN_BY_TYPE_WORD,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.UPDATE_VIE_WORD_MEAN_BY_TYPE_WORD,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.UPDATE_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.UPDATE_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR,
												response
										);
									}
								});
					}
			);

			// Update eng word mean by type word
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.UPDATE_ENG_WORD_MEAN_BY_TYPE_WORD,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.UPDATE_ENG_WORD_MEAN_BY_TYPE_WORD,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.UPDATE_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.UPDATE_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR,
												response
										);
									}
								});
					}
			);

			// Delete vie word mean by type word
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.DELETE_VIE_WORD_MEAN_BY_TYPE_WORD,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.DELETE_VIE_WORD_MEAN_BY_TYPE_WORD,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.DELETE_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.DELETE_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR,
												response
										);
									}
								});
					}
			);

			// Delete eng word mean by type word
			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.DELETE_ENG_WORD_MEAN_BY_TYPE_WORD,
					(data) => {
						this.exAppUtils.apiSerivce
								.post(
										this.exAppSetting.api.WORD.DELETE_ENG_WORD_MEAN_BY_TYPE_WORD,
										data
								)
								.then((response) => {
									if (response['error_code'] === 0) {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.DELETE_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
												response.data
										);
									} else {
										this.exEventBus.emit(
												this.exAppSetting.event.API.WORD
														.DELETE_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR,
												response
										);
									}
								});
					}
			);


		},
	};
</script>
