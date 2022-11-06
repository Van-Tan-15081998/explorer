<template>
  <div>
    <div class="word_item_block" :class="isExpanded ? 'expanded' : ''">
      <div class="tabs">
        <ul>
          <li>
            <div
                class="tab_item core_child_center"
                title="Nghĩa"
                @click="openTab(1)"
                :class="openTabIndex === 1 ? 'opening' : ''"
            >
              <font-awesome-icon
                  class="tab_icon search"
                  icon="fa-solid fa-magnifying-glass"
              />
            </div>
            <div
                class="tab_item core_child_center"
                title="Nghĩa Theo Từ Loại [Vie]"
                @click="openTab(2)"
                :class="openTabIndex === 2 ? 'opening' : ''"
            >
              <font-awesome-icon
                  class="tab_icon"
                  icon="fa-solid fa-diagram-project" />
            </div>
						<div
								class="tab_item core_child_center"
								title="Nghĩa Theo Từ Loại [Eng]"
								@click="openTab(3)"
								:class="openTabIndex === 3 ? 'opening' : ''"
						>
							<font-awesome-icon
									class="tab_icon"
									icon="fa-solid fa-diagram-project" />
						</div>
						<div
								class="tab_item core_child_center"
								title="Nghĩa Tiếng Anh"
								@click="openTab(4)"
								:class="openTabIndex === 4 ? 'opening' : ''"
						>
							<font-awesome-icon
									class="tab_icon"
									icon="fa-solid fa-magnifying-glass-arrow-right" />
						</div>
						<div
								class="tab_item core_child_center"
								title="Ví dụ"
								@click="openTab(5)"
								:class="openTabIndex === 5 ? 'opening' : ''"
						>
							<font-awesome-icon
									class="tab_icon"
									icon="fa-solid fa-book"
							/>
						</div>
            <div
                class="tab_item core_child_center"
                title="Ngữ cảnh"
                @click="openTab(6)"
                :class="openTabIndex === 6 ? 'opening' : ''"
            >
              <font-awesome-icon
                  class="tab_icon"
                  icon="fa-solid fa-users-gear"
              />
            </div>
            <div
                class="tab_item core_child_center"
                title="Từ đồng nghĩa"
                @click="openTab(7)"
                :class="openTabIndex === 7 ? 'opening' : ''"
            >
              <font-awesome-icon
                  class="tab_icon"
                  icon="fa-solid fa-copy"
              />
            </div>
            <div
                class="tab_item core_child_center"
                title="Kết hợp từ"
                @click="openTab(8)"
                :class="openTabIndex === 8 ? 'opening' : ''"
            >
              <font-awesome-icon
                  class="tab_icon"
                  icon="fa-solid fa-puzzle-piece"
              />
            </div>
            <div
                class="tab_item core_child_center"
                title="Họ từ"
                @click="openTab(9)"
                :class="openTabIndex === 9 ? 'opening' : ''"
            >
              <font-awesome-icon
                  class="tab_icon"
                  icon="fa-solid fa-network-wired"
              />
            </div>
            <div
                class="tab_item core_child_center"
                title="Cập nhật"
                @click="openModalUpdateWord"
                :class="openTabIndex === 10 ? 'opening' : ''"
            >
              <font-awesome-icon
                  class="tab_icon"
                  icon="fa-solid fa-pen"
              />
            </div>
            <div
                class="tab_item core_child_center"
                @click="isExpanded = !isExpanded"
            >
              <font-awesome-icon
                  class="tab_icon"
                  icon="fa-solid fa-maximize"
              />
            </div>
          </li>
        </ul>
      </div>
      <div class="word_content_block">
        <div class="word_type_word">
					<div class="word">
						<p>{{ wordData.word.word }}</p>
					</div>
					<div class="type_word">
						adj
					</div>
					<div class="type_word">
						adj
					</div>
					<div class="popularity_block">
						<div class="popularity_item">
							<font-awesome-icon
									icon="fa-solid fa-star"
							/>
							<b>
								{{wordData.word.popularity}}
							</b>
						</div>
					</div>
				</div>
        <div class="pronounce">
          <div class="pronounce_us">
            <b class="title_pronounce">US: </b>
            <p>{{ wordData.word.us !== null ? wordData.word.us : '' }}</p>
          </div>
          <div class="pronounce_uk">
            <b class="title_pronounce">UK: </b>
            <p>{{ wordData.word.uk !== null ? wordData.word.uk : '' }}</p>
          </div>
        </div>
      </div>
      <div class="word_content">
        <div class="content_item" v-if="openTabIndex === 1">
          <label class="word_mean_label">Nghĩa thông dụng</label>
					<p class="word_mean">
						{{wordData.wordMeanPopularity.mean}}
					</p>
        </div>
        <div class="content_item" v-if="openTabIndex === 2">
          <div
							v-for="item in wordData.vie_word_mean_by_type_word"
							:key="item['id']"
							class="word_mean_by_type_word">
							<p class="type_word">{{ getVieTypeWordName(item['type_word_id'])}}</p>
							<div class="mean_example">
								<div class="mean">
									{{ item['mean'] }}
								</div>
								<div class="examples">
									<div
											v-for="i in item['examples']"
											:key="i['id']"
											class="example_item" >
										{{ i['example'] }}
									</div>
								</div>
							</div>
					</div>
        </div>
				<div class="content_item" v-if="openTabIndex === 3">
					<div
							v-for="item in wordData.eng_word_mean_by_type_word"
							:key="item['id']"
							class="word_mean_by_type_word">
						<p class="type_word">{{ getEngTypeWordName(item['type_word_id'])}}</p>
						<div class="mean_example">
							<div class="mean">
								{{ item['mean'] }}
							</div>
							<div class="examples">
								<div
										v-for="i in item['examples']"
										:key="i['id']"
										class="example_item" >
									{{ i['example'] }}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="content_item" v-if="openTabIndex === 4">
					<div class="word_mean_by_type_word">
						<p class="type_word">{{ getEngTypeWordName(wordData.engWordMean['type_word_id'])}}</p>
						<div class="mean_example">
							<div class="mean">
								{{ wordData.engWordMean['mean'] }}
							</div>
							<div class="examples">
								<div class="example_item" >
									{{ wordData.engWordMean['example'] }}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="content_item" v-if="openTabIndex === 5">
					<div class="word_examples">
						<div class="examples">
							<div
									v-for="item in wordData.examples"
									:key="item['id']"
									class="example_item" >
								{{ item['example'] }}
							</div>
						</div>
					</div>
				</div>
        <div class="content_item" v-if="openTabIndex === 6">
          <h4>Ngữ cảnh</h4>
        </div>
        <div class="content_item" v-if="openTabIndex === 7">
          <h4>Từ đồng nghĩa</h4>
        </div>
        <div class="content_item" v-if="openTabIndex === 8">
          <h4>Kết hợp từ</h4>
        </div>
        <div class="content_item" v-if="openTabIndex === 9">
          <h4>Họ từ</h4>
        </div>
        <div class="content_item" v-if="openTabIndex === 10">
          <h4>More</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExWordItemBlock",
  props: {
    word: Object,
		type_word: Array
  },
  data() {
    return {
      openTabIndex: 1,
      isExpanded: false,

			wordData: {
				vie_word_mean_by_type_word: [],

				eng_word_mean_by_type_word: [],

				word: {
					id:null,
					word: null,
					popularity: 0,
					us: null,
					uk: null
				},

				examples: [],

				engWordMean: {
					id: null,
					word_id: null,
					mean: null,
					example: null,
					type_word_id: null
				},

				wordMeanPopularity: {
					mean: null,
					is_popularity: 1,
					word_id: null
				},
			},
    };
  },
  created() {
		console.log(111, this.type_word)

		if (this.word) {
			if(this.word['word']) {
				this.wordData.word.word = this.word['word']
			}
			if(this.word['popularity']) {
				this.wordData.word.popularity = this.word['popularity']
			}
			if(this.word['pronounce']['us']) {
				this.wordData.word.us = this.word['pronounce']['us']
			}
			if(this.word['pronounce']['uk']) {
				this.wordData.word.uk = this.word['pronounce']['uk']
			}
			if(this.word['examples']) {
				this.wordData.examples = this.word['examples']
			}
			if(this.word['eng_word_mean']) {
				this.wordData.engWordMean = this.word['eng_word_mean']
			}
			if(this.word['word_mean_popularity']) {
				this.wordData.wordMeanPopularity = this.word['word_mean_popularity']
			}
			if(this.word['vie_word_mean_by_type_word']) {
				this.wordData.vie_word_mean_by_type_word = this.word['vie_word_mean_by_type_word']
			}
			if(this.word['eng_word_mean_by_type_word']) {
				this.wordData.eng_word_mean_by_type_word = this.word['eng_word_mean_by_type_word']
			}
		}
  },

	computed: {

	},

  methods: {
    openTab(index) {
      switch (index) {
        case 1:
          this.openTabIndex = 1;
          break;
        case 2:
          this.openTabIndex = 2;
          break;
        case 3:
          this.openTabIndex = 3;
          break;
        case 4:
          this.openTabIndex = 4;
          break;
        case 5:
          this.openTabIndex = 5;
          break;
        case 6:
          this.openTabIndex = 6;
          break;
        case 7:
          this.openTabIndex = 7;
          break;
        case 8:
          this.openTabIndex = 8;
          break;
				case 9:
					this.openTabIndex = 9;
					break;
      }
      console.log(this.openTabIndex);
    },
    openModalUpdateWord() {
      this.exEventBus.emit(
          this.exAppSetting.event.MODAL.WORD.OPEN_MODAL_UPDATE_WORD,
          {wordId: this.word.id}
      );
    },

		getVieTypeWordName (id) {
			let typeWord = this.type_word.find((element) => {
				return element['id'] === id
			})
			if(typeWord) {
				return typeWord['vie_description']
			}
			return 'default'
		},

		getEngTypeWordName (id) {
			let typeWord = this.type_word.find((element) => {
				return element['id'] === id
			})
			if(typeWord) {
				return typeWord['eng_description']
			}
			return 'default'
		}
  },
}
</script>

<style scoped lang="scss">
.word_item_block {
  position: relative;
  width: 510px;
  height: 300px;
  overflow: hidden;
	box-shadow: #54E9B7 10px 10px 0px -2px;
  margin: 15px;
	background-color: #414141;

	border-top: 2px solid #EFEEEF;
	border-left: 2px solid #EFEEEF;
	border-right: 2px solid #EFEEEF;
	border-bottom: 2px solid #EFEEEF;

  .tabs {
    position: absolute;
    width: 100%;
    height: 50px;
    top: 0px;
    left: 0px;
    border-bottom: 1px solid #6d757d;
		background-color: #3C3C3C;

    ul {
      padding: 0px !important;
      margin: 0px !important;

      li {
        list-style: none;
        display: inline-flex;

        .tab_item {
          width: calc(510px * 0.0909090909090909);
          height: 50px;
          cursor: pointer;
          user-select: none;
					transition: 0.2s;

					&:hover {
						.tab_icon {
							color: #C2FA00;
						}
					}

          &:active {
						background-color: #F5C500 !important;
						box-shadow: #2C2C2C 0px 0px 0px 2px inset;
						.tab_icon {
							color: #2C2C2C;
						}
          }

          &.opening {
            background-color: #C2FA00;
						box-shadow: #2C2C2C 0px 0px 0px 2px inset;

            .tab_icon {
              color: #2C2C2C;
            }
          }

          .tab_icon {
            font-size: 18px;
            color: #6d757d;
          }

          .tab_icon.search {
            font-size: 20px;
          }
        }
      }
    }
  }

  .word_content_block {
    position: absolute;
    width: 100%;
    height: 90px;
    top: 50px;
    left: 0px;
    padding: 10px;
		//background-color: #4F4F4F; // OK
		background-color: lightgrey;

		.word_type_word {
			position: relative;
			height: 35px;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			align-content: center;
			margin-bottom: 12px;
			.word {
				display: inline-flex;
				margin-right: 20px;

				p {
					margin: 0px;
					font-size: 33px;
					font-weight: 600;
					color: #46B36D;
					line-height: 1;
					//text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
					text-shadow: -1px 0 #1F1F1F, 0 1px #1F1F1F, 1px 0 #1F1F1F, 0 -1px #1F1F1F;
				}
			}

			.type_word {
				display: inline-flex;
				height: 25px;
				background-color: #00bcd4;
				border-radius: 3px;
				padding: 0px 5px 0px 5px;
				margin-right: 10px;
			}

			.popularity_block {
				position: absolute;
				top: 0px;
				right: 0px;

				width: 38px;
				height: 35px;

				.popularity_item {
					position: relative;
					width: 100%;
					height: 100%;

					.fa-star {
						color: #4EB0FF;
						font-size: 34px;
					}

					b {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					}
				}
			}
		}

    .pronounce {
      width: 100%;
      height: 30px;

      .pronounce_us,
      .pronounce_uk {
        width: 50%;
        height: 100%;
        display: inline-flex;
        flcore_direction: row;
        flcore_wrap: wrap;
        align-items: center;
        font-size: 16px;
        font-weight: 400;

				.title_pronounce {
					margin-right: 15px;
				}

        p {
					font-size: 16px;
          margin: 0px !important;
          font-style: italic;
        }
      }
    }
  }

  .word_content {
    position: absolute;
    width: 100%;
    height: calc(100% - 140px);
    bottom: 0px;
    left: 0px;
    border-top: 1px solid #6d757d;
		background-color: lightgrey;

    .content_item {
      width: 100%;
      height: 100%;
      padding: 10px;

			overflow-y: scroll;

      .word_mean_label {
        font-size: 16px;
        color: #00CF00;
      }

			.word_mean {
				font-size: 30px;
				font-weight: 500;
				color: #314636;
				margin-top: 5px;
			}

			.word_mean_by_type_word {
				width: 100%;

				.type_word {
					font-size: 20px;
					font-weight: bold;
					margin: 0 !important;
					color: #EB6700;
				}

				.mean_example {
					background-color: #C2FA00;
					border: 1px solid;
					border-radius: 5px;
					padding: 15px;
					margin: 5px 5px 5px 20px;
					.mean {
						font-size: 22px;
						font-weight: 500;
					}

					.examples {
						margin-top: 5px;
						.example_item {
							font-size: 18px;
							font-weight: 400;
							background-color: white;
							color: #3C3C3C;
							border-radius: 2px;
							width: fit-content;
							margin: 2px;
							padding: 2px 5px 2px 5px;
						}
					}
				}
			}

			.word_examples {
				width: 100%;

				.examples {
					background-color: #C2FA00;
					border: 1px solid;
					border-radius: 5px;
					padding: 15px;
					margin: 5px 5px 5px 5px;

					.example_item {
						font-size: 18px;
						font-weight: 400;
						background-color: white;
						color: #3C3C3C;
						border-radius: 2px;
						width: fit-content;
						margin: 4px;
						padding: 2px 5px 2px 5px;
					}
				}
			}
    }
  }
}

.detail-block.expanded {
  width: 900px;
  height: 600px;

  .tabs {
    ul {
      li {
        .tab_item {
          width: calc(900px * 0.1);
        }
      }
    }
  }
}
</style>
