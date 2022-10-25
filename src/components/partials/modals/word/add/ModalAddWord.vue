<template>
  <Transition name="modal-custom">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header core_child_space_between">
            <h3>Tạo từ vựng</h3>
            <core-button
                @click="close()"
                :type="'icon'"
                :icon="'fa-solid fa-xmark'"
                :padding="5"
            />
          </div>

          <div class="modal-body">
            <div class="detail-block">
              <div class="tabs">
                <ul>
                  <li>
                    <div class="tab-item core_child_center" title="Nghĩa" @click="openTab(1)" :class="openTabIndex === 1 ? 'opening' : ''"><font-awesome-icon class="tab-icon search" icon="fa-solid fa-magnifying-glass" /></div>
                    <div
                        class="tab-item core_child_center"
                        title="Nghĩa Tiếng Anh"
                        @click="openTab(2)"
                        :class="openTabIndex === 2 ? 'opening' : ''"
                    >
                      <font-awesome-icon
                          class="tab-icon"
                          icon="fa-solid fa-magnifying-glass-arrow-right" />
                    </div>
                    <div
                        class="tab-item core_child_center"
                        title="Nghĩa Theo Từ Loại"
                        @click="openTab(3)"
                        :class="openTabIndex === 3 ? 'opening' : ''"
                    >
                      <font-awesome-icon
                          class="tab-icon"
                          icon="fa-solid fa-diagram-project" />
                    </div>
                    <div class="tab-item core_child_center" title="Ngữ cảnh" @click="openTab(4)" :class="openTabIndex === 4 ? 'opening' : ''"><font-awesome-icon class="tab-icon" icon="fa-solid fa-users-gear" /></div>
                    <div class="tab-item core_child_center" title="Ví dụ" @click="openTab(5)" :class="openTabIndex === 5 ? 'opening' : ''"><font-awesome-icon class="tab-icon" icon="fa-solid fa-book" /></div>
                    <div class="tab-item core_child_center" title="Từ đồng nghĩa" @click="openTab(6)" :class="openTabIndex === 6 ? 'opening' : ''"><font-awesome-icon class="tab-icon" icon="fa-solid fa-copy" /></div>
                    <div class="tab-item core_child_center" title="Kết hợp từ" @click="openTab(7)" :class="openTabIndex === 7 ? 'opening' : ''"><font-awesome-icon class="tab-icon" icon="fa-solid fa-puzzle-piece" /></div>
                    <div class="tab-item core_child_center" title="Họ từ" @click="openTab(8)" :class="openTabIndex === 8 ? 'opening' : ''"><font-awesome-icon class="tab-icon" icon="fa-solid fa-network-wired" /></div>
                  </li>
                </ul>
              </div>
              <div class="word-block">
                <div class="core_child_space_between edit-word">
                  <div class="input__wrapper">
                    <label class="label-form">Từ vựng</label>
                    <div class="input-validator">
                      <input class="input-form success"
                             v-model="dataForm.word.word"
                             type="text"
                             placeholder="Placeholder">
                      <div class="input-validator-status">
                        <i class="fa fa-check success"></i>
                      </div>
                    </div>
                    <p class="feedback-form success">A message here.</p>
                  </div>

                  <div class="btb-save-word core_child_center">
                    <core-button
                        :type="'icon-text'"
                        :left-icon="'fa-solid fa-floppy-disk'"
                        :text="'Lưu'"
                        @click="saveWord"
                    />
                  </div>
                </div>

                <div class="core_child_standard_sequence edit-pronounce">
                  <div class="input__wrapper">
                    <label class="label-form">Phát âm US</label>
                    <div class="input-validator">
                      <input class="input-form success"
                             v-model="dataForm.word.us"
                             type="text" placeholder="Placeholder">
                      <div class="input-validator-status">
                        <i class="fa fa-check success"></i>
                      </div>
                    </div>
                    <p class="feedback-form success">A message here.</p>
                  </div>
                  <div class="between-input">

                  </div>
                  <div class="input__wrapper">
                    <label class="label-form">Phát âm UK</label>
                    <div class="input-validator">
                      <input class="input-form success"
                             v-model="dataForm.word.uk"
                             type="text"
                             placeholder="Placeholder">
                      <div class="input-validator-status">
                        <i class="fa fa-check success"></i>
                      </div>
                    </div>
                    <p class="feedback-form success">A message here.</p>
                  </div>

                  <div class="btn-save-pronounce core_child_center">
                    <core-button
                        :type="'icon-text'"
                        :left-icon="'fa-solid fa-floppy-disk'"
                        :text="'Lưu'"
                        @click="savePronounce"
                    />
                  </div>
                </div>

              </div>
              <div class="content">
                <div class="content-item" v-if="openTabIndex === 1">
                  <div class="input__wrapper">
                    <label class="label-form">Nghĩa của từ vựng</label>
                    <div class="textarea-validator">
                      <textarea class="success" rows="3"
                                v-model="dataForm.vieMean"
                      ></textarea>
                      <div class="input-validator-status">
                        <i class="fa fa-check success"></i>
                      </div>
                    </div>
                    <p class="feedback-form success">A message here.</p>
                  </div>
                  <div class="core_child_center">
                    <core-button
                        :type="'icon-text'"
                        :left-icon="'fa-solid fa-floppy-disk'"
                        :text="'Lưu'"
                        @click="saveMean"
                    />
                  </div>
                </div>
                <div class="content-item" v-if="openTabIndex === 2">
                  <div class="input__wrapper">
                    <label class="label-form">Nghĩa Tiếng Anh</label>
                    <div class="textarea-validator">
                      <textarea class="success" rows="1"
                                v-model="dataForm.engMean.mean"
                      ></textarea>
                      <div class="input-validator-status">
                        <i class="fa fa-check success"></i>
                      </div>
                    </div>
                    <p class="feedback-form success">A message here.</p>
                  </div>
                  <div class="input__wrapper">
                    <label class="label-form">Ví dụ</label>
                    <div class="textarea-validator">
                      <textarea class="success" rows="1"
                                v-model="dataForm.engMean.example"
                      ></textarea>
                      <div class="input-validator-status">
                        <i class="fa fa-check success"></i>
                      </div>
                    </div>
                    <p class="feedback-form success">A message here.</p>
                  </div>
                  <div v-if="wordId !== null" class="core_child_center">
                    <core-button
                        :type="'icon-text'"
                        :left-icon="'fa-solid fa-floppy-disk'"
                        :text="'Lưu'"
                        @click="saveEngMean"
                    />
                  </div>
                </div>
                <div class="content-item" v-if="openTabIndex === 3">
                  <h4>Nghĩa Theo Từ Loại</h4>
                </div>
                <div class="content-item" v-if="openTabIndex === 4">
                  <h4>Ngữ cảnh</h4>
                </div>
                <div class="content-item" v-if="openTabIndex === 5">
                  <h4>Ví dụ</h4>
                </div>
                <div class="content-item" v-if="openTabIndex === 6">
                  <h4>Từ đồng nghĩa</h4>
                </div>
                <div class="content-item" v-if="openTabIndex === 7">
                  <h4>Kết hợp từ</h4>
                </div>
                <div class="content-item" v-if="openTabIndex === 8">
                  <h4>Họ từ</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import CoreButton from "@/core/core-components/button/CoreButton";
export default {
  name: "ModalAddWord",
  components: {
    CoreButton
  },
  data () {
    return {
      openTabIndex: 1,
      wordId: null,
      dataForm : {
        word : {
          word: '',
          us: '',
          uk: '',
        },
        vieMean: [],
        engMean : {
          mean: '',
          example: '',
          word_id: null,
          type_word_id: null
        }
      }
    }
  },
  props: {
    show: Boolean,
  },
  created() {
    this.exEventBus.on(
        this.exAppSetting.event.PASS_DATA.WORD
            .UPDATE_WORD,
        (data) => {
          this.dataForm.concept.id = data.id;
          this.dataForm.concept.word = data.word;
          this.dataForm.concept.us = data.pronounce !== null ? data.pronounce.us : '';
          this.dataForm.concept.uk = data.pronounce !== null ? data.pronounce.uk : '';
          this.dataForm.concept.mean = data.mean !== null ? data.mean.mean : '';
        }
    );

  },
  methods: {
    setEngMean () {
      this.dataForm.engMean.word_id = this.wordId
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
    },
    close () {
      this.exEventBus.emit(
          this.exAppSetting.event.MODAL.WORD.CLOSE_MODAL_ADD_WORD
      );
    },
    saveWord () {
      console.log(this.dataForm.concept.word)
    },
    savePronounce () {
      console.log(this.dataForm.concept.us, this.dataForm.concept.uk)
      this.exEventBus.emit(
          this.exAppSetting.event.API.PRONOUNCE.SAVE_PRONOUNCE,
          { us: this.dataForm.concept.us, uk: this.dataForm.concept.uk, word_id: this.dataForm.concept.id }
      );
    },
    saveMean () {
      console.log(this.dataForm.concept.mean)
      console.log(this.dataForm.concept.id)
      this.exEventBus.emit(
          this.exAppSetting.event.API.WORD_MEAN.SAVE_WORD_MEAN,
          { mean: this.dataForm.concept.mean, word_id: this.dataForm.concept.id }
      );
    },
    saveEngMean () {
      if (this.wordId !== null) {
        this.setEngMean()
        this.exEventBus.emit(
            this.exAppSetting.event.API.WORD_MEAN.SAVE_WORD_MEAN,
            this.dataForm.engMean
        );
      }

    }
  }
}
</script>

<style scoped lang="scss">
.detail-block {
  position: relative;
  width: 900px;
  height: 620px;
  overflow: hidden;
  .tabs {
    position: absolute;
    width: 100%;
    height: 50px;
    top: 0px;
    left: 0px;
    border-bottom: 1px solid #6D757D;
    box-sizing: border-box;

    ul {
      padding: 0px !important;
      margin: 0px !important;

      li {
        list-style: none;
        display: inline-flex;

        .tab-item {
          width: calc(900px * 0.125);
          height: 50px;
          cursor: pointer;
          user-select: none;

          &:active {
            background-color: #00A4EF;
          }
          &.opening {
            background-color: #00A4EF;
            .tab-icon {
              color: #ffc517;
            }
          }

          .tab-icon {
            font-size: 20px;
            color: #6D757D;

          }
          .tab-icon.search {
            font-size: 22px;
          }
        }
      }
    }
  }

  .word-block {
    position: absolute;
    width: 100%;
    height: 220px;
    top: 50px;
    left: 0px;
    padding: 15px;

    .edit-word {
      align-content: center !important;
      width: 100%;
      .input__wrapper {
        width: 90%;
        height: 120px;
      }
      .btb-save-word {
        width: 10%;
        height: 120px;
      }
    }
    .edit-pronounce {
      align-content: center !important;
      width: 100%;
      .input__wrapper {
        width: 44%;
        height: 120px;
      }
      .between-input {
        width: 2%;
        height: 120px;
      }
      .btn-save-pronounce {
        width: 10%;
        height: 120px;
      }
    }
  }


  .content {
    position: absolute;
    width: 100%;
    height: calc(100% - 310px);
    bottom: 0px;
    left: 0px;
    border-top: 1px solid #6D757D;

    .content-item {
      width: 100%;
      height: 100%;
      padding: 15px;
      overflow-y: scroll;
    }
  }
}

.modal-mask {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.1s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 900px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b883;
}

.modal-body {
  padding: 0px !important
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-footer.custom {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.label-form {
  font-weight: 500;
  display: block;
  margin-bottom: 5px;
  color: #212122;
}

input[type=text] {
  height: 50px;
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  font-size: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: 0.2s;
  outline: none;
}

input[type=text]:focus {
  border: 1px solid #03A9F4 !important;
}

input[type=text].success {
  border: 1px solid #8BC34A;
}

input[type=text].error {
  border: 1px solid #F44336;
}

.feedback-form {
  margin-top: 5px;
  color: #558b2f;
  margin-bottom: 5px;
}

.input-validator {
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  input[type=text] {
    height: 100%;
    width: 100%;
    padding: 12px 50px 12px 12px;
    margin: 8px 0;
    font-size: 16px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 6px;
    transition: 0.2s;
    outline: none;
  }

  input[type=text].success {
    border: 1px solid #8BC34A;
  }

  input[type=text].error {
    border: 1px solid #F44336;
  }

  .input-validator-status {
    position: absolute;
    right: 2px;
    width: 45px;
    height: 45px;
    z-index: 20;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    i.success {
      font-size:30px !important;
      color: #8BC34A !important;
    }

    i.error {
      font-size:30px !important;
      color: #F44336 !important;
    }
  }
}
.textarea-validator {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  textarea {
    height: 100%;
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    font-size: 16px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 6px;
    transition: 0.2s;
    outline: none;
  }

  textarea:focus {
    border: 1px solid #03A9F4 !important;
  }

  textarea.success {
    border: 1px solid #8BC34A;
  }

  textarea.error {
    border: 1px solid #F44336;
  }

  .input-validator-status {
    position: absolute;
    right: 2px;
    width: 45px;
    height: 45px;
    z-index: 20;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    i.success {
      font-size:30px !important;
      color: #8BC34A !important;
    }

    i.error {
      font-size:30px !important;
      color: #F44336 !important;
    }
  }
}
</style>