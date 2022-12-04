<template>
	<div>
		<div v-if="loading">
			<ExLoadingOnPage />
		</div>
		<div v-else>
			<div>
        <core-button
            :type="'icon-text'"
            :left-icon="'fa-solid fa-floppy-disk'"
            :text="'Thêm từ vựng'"
            @click="openModalAddWord"
						class="btn-add-word"
        />
				<div class="detail-content core_child_standard_sequence">
					<div v-for="item in listWord" :key="item">
						<ExWordItemBlock :word="item" :type_word="defaultData.typeWord"/>
					</div>
					<div class="paginate-block core_child_center">
						<vue-awesome-paginate
							:total-items="totalWordCount"
							:items-per-page="40"
							:max-pages-shown="5"
							:current-page="1"
							:on-click="onClickHandler"
							class="paginate"
						/>
					</div>
				</div>
			</div>
		</div>

		<Teleport to="body">
			<ModalUpdateWord
				:show="showModalUpdateWord"
				@close="showModalUpdateWord = false"
			>
				<template #header>
					<h3>custom header</h3>
				</template>
			</ModalUpdateWord>
		</Teleport>
    <Teleport to="body">
			<ModalAddNewWord
					:show="showModalAddWord"
					@close="showModalAddWord = false"
			>
				<template #header>
					<h3>custom header</h3>
				</template>
			</ModalAddNewWord>
    </Teleport>
	</div>
</template>

<script>
	import ExLoadingOnPage from "../partials/loading/ExLoadingOnPage.vue";

	import ExWordItemBlock from "@/components/word/ExWordItemBlock";

	import ModalUpdateWord from "../partials/modals/word/update/ModalUpdateWord";

	// import ModalAddWord from "@/components/partials/modals/word/add/ModalAddWord";

	import CoreButton from "@/core/core-components/button/CoreButton";

	import ModalAddNewWord from "@/components/partials/modals/word/add/ModalAddNewWord";

	export default {
		name: "ExWord",
		data() {
			return {
				loading: true,
				product: null,
				openTabIndex: 1,
				totalWordCount: 0,
				isExpanded: false,
				listWord: [],
				showModalUpdateWord: false,
        showModalAddWord: false,
				defaultData: {
					typeWord: []
				},
			};
		},
		components: {
			ExLoadingOnPage,
			ExWordItemBlock,
			ModalUpdateWord,
      // ModalAddWord,
      CoreButton,
			ModalAddNewWord
		},
		created() {
			this.exEventBus.emit(
				this.exAppSetting.event.API.WORD.GET_WORD_PAGINATE,
				{ page: 1 }
			);

			this.exEventBus.on(
				this.exAppSetting.event.API.WORD.GET_WORD_PAGINATE_SUCCESS,
				(data) => {
					this.listWord = [];
					this.listWord = data["data_word"];
					this.totalWordCount = data["total_word_count"];
					this.loading = false;
				}
			);

			this.exEventBus.on(
				this.exAppSetting.event.MODAL.WORD.OPEN_MODAL_UPDATE_WORD,
				(data) => {
					this.openModalUpdateWord(data.wordId);
				}
			);
			this.exEventBus.on(
				this.exAppSetting.event.MODAL.WORD.CLOSE_MODAL_UPDATE_WORD,
				() => {
					this.showModalUpdateWord = false;

				}
			);
      this.exEventBus.on(
          this.exAppSetting.event.MODAL.WORD.CLOSE_MODAL_ADD_WORD,
          () => {
            this.showModalAddWord = false;
          }
      );

			this.exEventBus.on(
					this.exAppSetting.event.API.WORD
							.GET_TYPE_WORD_SUCCESS,
					(data) => {
						this.defaultData.typeWord = data
					}
			);

			this.exEventBus.on(
					this.exAppSetting.event.API.WORD
							.GET_TYPE_WORD_ERROR,
					() => {
						this.exEventBus.emit(
								this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
								{ state: "error", message: "Thất bại" }
						);
					}
			);
		},
		methods: {
      openModalAddWord () {
        this.showModalAddWord = true;
      },
			onClickHandler(page) {
				console.log("chuyển trang" + page);
				this.exEventBus.emit(
					this.exAppSetting.event.API.WORD.GET_WORD_PAGINATE,
					{ page: page }
				);
			},
			openModalUpdateWord(wordId) {
				this.exEventBus.emit(
					this.exAppSetting.event.PASS_DATA.WORD.UPDATE_WORD,
						wordId
				);
				this.showModalUpdateWord = true;
			},
      updatePronounce(data) {
        this.listWord.forEach((item) => {
          if (item.id === data.id) {
            console.log(item)
            item.pronounce["us"] = data.us
            item.pronounce["uk"] = data.uk
            console.log(item)
          }
        })
      },
      updateWordMean(data) {
        this.listWord.forEach((item) => {
          if (item.id === data.id) {
            console.log(item)
            item.mean["mean"] = data.mean
            console.log(item)
          }
        })
      }
    },
	};
</script>

<style scoped lang="scss">
	.detail-content {
		position: relative;
		left: 0px;
		top: 100px;
		padding: 10px;
		z-index: 2;

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
				box-shadow: #cccccc 3px 3px 5px 4px;
			}
		}
	}
	.word_page_background {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #1F1F1F;
		background-image: url("../../assets/img/background-optimized-2.svg");
		background-repeat: repeat;
		background-size: 350px;
		z-index: 1;
	}

	.btn-add-word {
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 2;
	}
</style>
