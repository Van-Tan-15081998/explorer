<template>
	<div>
		<div v-if="loading">
			<ExLoadingOnPage />
		</div>
		<div v-else>
			<div>
				<h3>Detail Product</h3>
				<div class="detail-content ex-child-standard-sequence" >
					<div v-for="item in listWord" :key="item">
						<ExWordItemBlock :word="item"/>
					</div>
					<div class="paginate-block ex-child-center">
						<vue-awesome-paginate
								:total-items="50"
								:items-per-page="5"
								:max-pages-shown="5"
								:current-page="1"
								:on-click="onClickHandler"
								class="paginate"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ExLoadingOnPage from "../partials/loading/ExLoadingOnPage.vue";

	import ExWordItemBlock from "@/components/word/ExWordItemBlock";

	export default {
		name: "ExDetailProduct",
		data() {
			return {
				loading: true,
				product: null,
				openTabIndex: 1,
				quantity: 10,
				isExpanded: false,
				listWord: []
			};
		},
		components: {
			ExLoadingOnPage,
			ExWordItemBlock
		},
		created() {
			this.getProductById();

			this.exEventBus.emit(
					this.exAppSetting.event.API.WORD.GET_WORD_PAGINATE,
					{ page: 1 }
			);

			this.exEventBus.on(
				this.exAppSetting.event.API.PRODUCT.GET_PRODUCT_BY_ID_SUCCESS,
				(data) => {
					this.product = data;
					this.loading = false;
				}
			);

			this.exEventBus.on(
					this.exAppSetting.event.API.WORD.GET_WORD_PAGINATE_SUCCESS,
					(data) => {
						this.listWord = [];
						this.listWord = data;
					}
			);
		},
		methods: {
			getProductById() {
				let id = this.$route.params.id;
				console.log(id);
				this.exEventBus.emit(
					this.exAppSetting.event.API.PRODUCT.GET_PRODUCT_BY_ID,
					{ id: id }
				);
			},
			openTab (index) {
				switch (index) {
					case 1: this.openTabIndex = 1
						break
					case 2: this.openTabIndex = 2
						break
					case 3: this.openTabIndex = 3
						break
					case 4: this.openTabIndex = 4
						break
					case 5: this.openTabIndex = 5
						break
					case 6: this.openTabIndex = 6
						break
					case 7: this.openTabIndex = 7
						break
					case 8: this.openTabIndex = 8
						break
				}
				console.log(this.openTabIndex)
			},
			onClickHandler (page) {
				console.log('chuyển trang' + page)
				this.exEventBus.emit(
						this.exAppSetting.event.API.WORD.GET_WORD_PAGINATE,
						{ page: page }
				);
			},

		},
	};
</script>

<style scoped lang="scss">

.detail-content {
	position: relative;
	padding: 20px;

	.paginate-block {
		width: calc(100% - 300px);
		position: fixed;
		bottom: 10px;
		ul {
			margin-bottom: 0px !important;
		}
		.paginate {
			padding: 5px 20px 5px 20px;
			border-radius: 40px;
			background-color: white;
			box-shadow: #CCCCCC 3px 3px 5px 4px;
		}
	}
}
</style>
