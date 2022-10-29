<template>
	<Transition name="modal-custom">
		<div v-if="show" class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header core_child_space_between">
						<h3>Cập nhật từ vựng</h3>
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
										<div class="tab-item core_child_center" title="Nghĩa" @click="openTab(1)" :class="openTabIndex === 1 ? 'opening' : ''"><font-awesome-icon class="tab_icon search" icon="fa-solid fa-magnifying-glass" /></div>

										<div
												class="tab-item core_child_center"
												title="Nghĩa Theo Từ Loại [Vie]"
												@click="openTab(2)"
												:class="openTabIndex === 2 ? 'opening' : ''"
										>
											<font-awesome-icon
													class="tab_icon"
													icon="fa-solid fa-diagram-project" />
										</div>

										<div
												class="tab-item core_child_center"
												title="Nghĩa Theo Từ Loại [Eng]"
												@click="openTab(3)"
												:class="openTabIndex === 3 ? 'opening' : ''"
										>
											<font-awesome-icon
													class="tab_icon"
													icon="fa-solid fa-diagram-project" />
										</div>
										<div
												class="tab-item core_child_center"
												title="Nghĩa Tiếng Anh"
												@click="openTab(4)"
												:class="openTabIndex === 4 ? 'opening' : ''"
										>
											<font-awesome-icon
													class="tab_icon"
													icon="fa-solid fa-magnifying-glass-arrow-right" />
										</div>
										<div class="tab-item core_child_center" title="Ví dụ" @click="openTab(5)" :class="openTabIndex === 5 ? 'opening' : ''">
											<font-awesome-icon class="tab_icon" icon="fa-solid fa-book" />
										</div>
										<div class="tab-item core_child_center" title="Ngữ cảnh" @click="openTab(6)" :class="openTabIndex === 6 ? 'opening' : ''">
											<font-awesome-icon class="tab_icon" icon="fa-solid fa-users-gear" />
										</div>
										<div class="tab-item core_child_center" title="Từ đồng nghĩa" @click="openTab(7)" :class="openTabIndex === 7 ? 'opening' : ''">
											<font-awesome-icon class="tab_icon" icon="fa-solid fa-copy" />
										</div>
										<div class="tab-item core_child_center" title="Kết hợp từ" @click="openTab(8)" :class="openTabIndex === 8 ? 'opening' : ''">
											<font-awesome-icon class="tab_icon" icon="fa-solid fa-puzzle-piece" />
										</div>
										<div class="tab-item core_child_center" title="Họ từ" @click="openTab(9)" :class="openTabIndex === 9 ? 'opening' : ''">
											<font-awesome-icon class="tab_icon" icon="fa-solid fa-network-wired" />
										</div>
									</li>
								</ul>
							</div>
							<div class="word-block">
								<div class="core_child_space_between edit-word">

									<div class="input_wrapper">
										<div class="label_form">Từ vựng</div>
										<div class="input_validator" :class="getError('word') ? 'error' : ''">
											<input
													v-model="formData.word.word"
													class="input_form" type="text" placeholder="Placeholder">
											<div class="input_validator_status">
												<font-awesome-icon
														v-if="getError('word')"
														icon="fa-solid fa-circle-exclamation"
														class="input_icon"
												/>
											</div>
										</div>
										<show-error :errors="getError('word')"/>
									</div>

									<div class="between-input"></div>

									<div class="input_wrapper">
										<div class="label_form">Độ phổ biến</div>
										<div class="rank_select">
											<div
													:class="{'active_rank': selectedPopularityColor(item)}"
													class="rank_item" v-for="item in defaultData.popularity" :key="item">
												<font-awesome-icon
														@click="setPopularity(item)"
														icon="fa-solid fa-star"
														class="btn_icon"
												/>
												<div class="rank_text">{{item.value}}</div>
											</div>
										</div>
									</div>
								</div>

								<div class="core_child_standard_sequence edit-pronounce">
									<div class="input_wrapper">
										<div class="label_form">Phát âm US</div>
										<div class="input_validator" :class="getError('us') ? 'error' : ''">
											<input
													v-model="formData.word.us"
													class="input_form" type="text" placeholder="Placeholder">
											<div class="input_validator_status">
												<font-awesome-icon
														v-if="getError('us')"
														icon="fa-solid fa-circle-exclamation"
														class="input_icon"
												/>
											</div>
										</div>
										<show-error :errors="getError('us')"/>
									</div>

									<div class="between_input"></div>

									<div class="input_wrapper">
										<div class="label_form">Phát âm UK</div>
										<div class="input_validator" :class="getError('uk') ? 'error' : ''">
											<input
													v-model="formData.word.uk"
													class="input_form" type="text" placeholder="Placeholder">
											<div class="input_validator_status">
												<font-awesome-icon
														v-if="getError('uk')"
														icon="fa-solid fa-circle-exclamation"
														class="input_icon"
												/>
											</div>
										</div>
										<show-error :errors="getError('uk')"/>
									</div>

								</div>
								<div class="btb-save-word core_child_center">
									<core-button
											:type="'icon-text'"
											:left-icon="'fa-solid fa-floppy-disk'"
											:text="'Lưu'"
											class="base-decoration"
											@click="saveWord"
									/>
								</div>

							</div>
							<div class="content">
								<div class="content_item" v-if="openTabIndex === 1">
									<div class="input_wrapper">
										<div class="label_form">Nghĩa Thông Dụng</div>
										<div class="textarea_validator" :class="getError('mean') ? 'error' : ''">
											<textarea
													v-model="formData.wordMeanPopularity.mean"
													class="textarea_form" rows="3"

											></textarea>
											<div class="textarea_validator_status">
												<font-awesome-icon
														v-if="getError('mean')"
														icon="fa-solid fa-circle-exclamation"
														class="input_icon"
												/>
											</div>
										</div>
										<show-error :errors="getError('mean')"/>
									</div>
									<div class="core_child_center">
										<core-button
												v-if="wordId"
												:type="'icon-text'"
												:left-icon="'fa-solid fa-floppy-disk'"
												:text="'Lưu'"
												class="base-decoration"
												@click="saveWordMeanPopularity()"
										/>
									</div>
								</div>

								<div class="content_item type_word_mean" v-if="openTabIndex === 2">
									<div class="left_type_word_mean">
										<div class="header">
											<div class="input_wrapper width_220">
												<div class="label_form">Thêm Loại Từ Và Nghĩa [Vie]</div>
												<div class="multi_select_validator">
													<select class="multi_select" v-model="formData.selectVieTypeWord">
														<option value="0" selected>Default</option>
														<option v-for="item in defaultData.typeWord"
																		:key="item.id"
																		:value="item"
														>{{item['vie_description']}}</option>
													</select>
													<div class="multi_select_validator_status">
														<font-awesome-icon
																v-if="getError('type_word_id')"
																icon="fa-solid fa-circle-exclamation"
																class="input_icon"
														/>
													</div>
												</div>
												<show-error :errors="getError('type_word_id')"/>
											</div>
											<core-button
													:type="'icon'"
													:icon="'fa-solid fa-plus'"
													:width="60"
													:height="35"
													:margin-top="30"
													class="base-decoration"
													@click="addVieWordMeanByTypeWord(formData.selectVieTypeWord)"
											/>
										</div>
									</div>

									<div class="right_type_word_mean">
<!--										old-->
										<div
												class="type_word_mean_item"
												v-for="(item, index) in formData.vie_word_mean_by_type_words_old" :key="item">
											<div class="type">
												<b>{{getVieTypeWordName(item.type_word_id)}}</b>
												<core-button
														:type="'icon'"
														:icon="'fa-solid fa-xmark'"
														:width="30"
														:height="25"
														:margin-top="30"
														:margin-left="30"
														class="base-decoration"
														@click="deleteVieTypeWordMeanOld(item['id'])"
												/>
											</div>
											<div class="mean_and_example">
												<div class="mean">
													<div class="input_wrapper">
														<div class="label_form">Nghĩa</div>
														<div class="input_validator success">
															<input
																	v-model="item.mean"
																	class="input_form" type="text" placeholder="Placeholder">
															<div class="input_validator_status">
																<font-awesome-icon
																		@click="updateVieTypeWordMeanOld(item['id'], item['mean'])"
																		icon="fa-solid fa-check"
																		class="input_icon add"
																/>
															</div>
														</div>
													</div>

												</div>
												<div class="examples">
													<div class="label_single">Ví dụ</div>
													<div class="example">
														<div class="input_wrapper" v-for="i in item.examples" :key="i">
															<div class="input_validator success">
																<input
																		v-model="i.example"
																		class="input_form" type="text" placeholder="Placeholder">
																<div class="input_validator_status">
																	<font-awesome-icon
																			@click="saveVieExampleItemOld(item, i)"
																			icon="fa-solid fa-check"
																			class="input_icon add"
																	/>
																	<font-awesome-icon
																			@click="deleteVieExampleItemOld(i['id'])"
																			icon="fa-solid fa-trash-can"
																			class="input_icon delete"
																	/>
																</div>
															</div>
														</div>
													</div>

													<div class="core_child_center">
														<core-button
																:type="'icon'"
																:icon="'fa-solid fa-plus'"
																:width="60"
																:height="35"
																:margin-top="10"
																class="base-decoration"
																@click="addExampleToVieWordMeanByTypeWordOld(index, item['type_word_id'])"
														/>
													</div>

												</div>
											</div>
										</div>

<!--										new-->
										<div class="type_word_mean_item" v-for="(item, index) in formData.vie_word_mean_by_type_words" :key="item">
											<div class="type">
												<b>{{getVieTypeWordName(item.type_word_id)}}</b>
												<core-button
														:type="'icon'"
														:icon="'fa-solid fa-xmark'"
														:width="30"
														:height="25"
														:margin-top="30"
														:margin-left="30"
														class="base-decoration"
														@click="deleteVieTypeWordMean(index)"
												/>
											</div>
											<div class="mean_and_example">
												<div class="mean">
													<div class="input_wrapper">
														<div class="label_form">Nghĩa</div>
														<div class="input_validator">
															<input
																	v-model="item.mean"
																	class="input_form" type="text" placeholder="Placeholder">
															<div class="input_validator_status">
															</div>
														</div>
													</div>

												</div>
												<div class="examples">
													<div class="label_single">Ví dụ</div>
													<div class="example">
														<div class="input_wrapper" v-for="(i, _index) in item.examples" :key="i">
															<div class="input_validator success">
																<input
																		v-model="i.example"
																		class="input_form" type="text" placeholder="Placeholder">
																<div class="input_validator_status">
																	<font-awesome-icon
																			@click="deleteVieExampleItem(index, _index)"
																			icon="fa-solid fa-trash-can"
																			class="input_icon delete"
																	/>
																</div>
															</div>
														</div>
													</div>
													<core-button
															:type="'icon'"
															:icon="'fa-solid fa-plus'"
															:width="50"
															:height="30"
															:margin-top="10"
															class="base-decoration"
															@click="addExampleToVieWordMeanByTypeWord(index, item.type_word_id)"
													/>
												</div>
											</div>
										</div>

										<div
												v-if="allowedToPerform && formData.vie_word_mean_by_type_words.length > 0"
												class="core_child_center">
											<core-button
													:type="'icon-text'"
													:left-icon="'fa-solid fa-floppy-disk'"
													:text="'Lưu'"
													class="base-decoration"
													@click="saveVieWordMeanByTypeWord()"
											/>
										</div>
									</div>
								</div>

								<div class="content_item type_word_mean" v-if="openTabIndex === 3">
									<div class="left_type_word_mean">
										<div class="header">
											<div class="input_wrapper width_220">
												<div class="label_form">Thêm Loại Từ Và Nghĩa [Eng]</div>
												<div class="multi_select_validator">
													<select class="multi_select" v-model="formData.selectEngTypeWord">
														<option value="0" selected>Default</option>
														<option v-for="item in defaultData.typeWord"
																		:key="item.id"
																		:value="item"
														>{{item['eng_description']}}</option>
													</select>
													<div class="multi_select_validator_status">
														<font-awesome-icon
																v-if="getError('type_word_id')"
																icon="fa-solid fa-circle-exclamation"
																class="input_icon"
														/>
													</div>
												</div>
												<show-error :errors="getError('type_word_id')"/>
											</div>
											<core-button
													:type="'icon'"
													:icon="'fa-solid fa-plus'"
													:width="60"
													:height="35"
													:margin-top="30"
													class="base-decoration"
													@click="addEngWordMeanByTypeWord(formData.selectEngTypeWord)"
											/>
										</div>
									</div>
									<div class="right_type_word_mean">
										<div class="type_word_mean_item" v-for="(item, index) in formData.eng_word_mean_by_type_words_old" :key="item">
											<div class="type">
												<b>{{getEngTypeWordName(item.type_word_id)}}</b>
												<core-button
														:type="'icon'"
														:icon="'fa-solid fa-xmark'"
														:width="30"
														:height="25"
														:margin-top="30"
														:margin-left="30"
														class="base-decoration"
														@click="deleteEngTypeWordMeanOld(item['id'])"
												/>
											</div>
											<div class="mean_and_example">
												<div class="mean">
													<div class="input_wrapper">
														<div class="label_form">Nghĩa</div>
														<div class="input_validator success">
															<input
																	v-model="item.mean"
																	class="input_form" type="text" placeholder="Placeholder">
															<div class="input_validator_status">
																<font-awesome-icon
																		@click="updateEngTypeWordMeanOld(item['id'], item['mean'])"
																		icon="fa-solid fa-check"
																		class="input_icon add"
																/>
															</div>
														</div>
													</div>
												</div>
												<div class="examples">
													<div class="label_single">Ví dụ</div>
													<div class="example">
														<div class="input_wrapper" v-for="i in item.examples" :key="i">
															<div class="input_validator success">
																<input
																		v-model="i.example"
																		class="input_form" type="text" placeholder="Placeholder">
																<div class="input_validator_status">
																	<font-awesome-icon
																			@click="saveEngExampleItemOld(item, i)"
																			icon="fa-solid fa-check"
																			class="input_icon add"
																	/>
																	<font-awesome-icon
																			@click="deleteEngExampleItemOld(i['id'])"
																			icon="fa-solid fa-trash-can"
																			class="input_icon delete"
																	/>
																</div>
															</div>
														</div>
													</div>
													<div class="core_child_center">
														<core-button
																:type="'icon'"
																:icon="'fa-solid fa-plus'"
																:width="60"
																:height="35"
																:margin-top="10"
																class="base-decoration"
																@click="addExampleToEngWordMeanByTypeWord(index, item['type_word_id'])"
														/>
													</div>
												</div>
											</div>
										</div>

										<div class="type_word_mean_item" v-for="(item, index) in formData.eng_word_mean_by_type_words" :key="item">
											<div class="type">
												<b>{{getEngTypeWordName(item.type_word_id)}}</b>
												<core-button
														:type="'icon'"
														:icon="'fa-solid fa-xmark'"
														:width="30"
														:height="25"
														:margin-top="30"
														:margin-left="30"
														class="base-decoration"
														@click="deleteEngTypeWordMean(index)"
												/>
											</div>
											<div class="mean_and_example">
												<div class="mean">
													<div class="input_wrapper">
														<div class="label_form">Nghĩa</div>
														<div class="input_validator">
															<input
																	v-model="item.mean"
																	class="input_form" type="text" placeholder="Placeholder">
															<div class="input_validator_status">
															</div>
														</div>
													</div>
												</div>
												<div class="examples">
													<div class="label_single">Ví dụ</div>
													<div class="example">
														<div class="input_wrapper" v-for="(i, _index) in item.examples" :key="i">
															<div class="input_validator success">
																<input
																		v-model="i.example"
																		class="input_form" type="text" placeholder="Placeholder">
																<div class="input_validator_status">
																	<font-awesome-icon
																			@click="deleteEngExampleItem(index, _index)"
																			icon="fa-solid fa-trash-can"
																			class="input_icon delete"
																	/>
																</div>
															</div>
														</div>
													</div>
													<core-button
															:type="'icon'"
															:icon="'fa-solid fa-plus'"
															:width="50"
															:height="30"
															:margin-top="10"
															class="base-decoration"
															@click="addExampleToEngWordMeanByTypeWord(index, item.type_word_id)"
													/>
												</div>
											</div>
										</div>

										<div
												v-if="allowedToPerform && formData.eng_word_mean_by_type_words.length > 0"
												class="core_child_center">
											<core-button
													:type="'icon-text'"
													:left-icon="'fa-solid fa-floppy-disk'"
													:text="'Lưu'"
													class="base-decoration"
													@click="saveEngWordMeanByTypeWord()"
											/>
										</div>
									</div>

								</div>

								<div class="content_item" v-if="openTabIndex === 4">

									<div class="input_wrapper">
										<div class="label_form">Nghĩa Tiếng Anh</div>
										<div class="textarea_validator" :class="getError('mean') ? 'error' : ''">
										<textarea
												v-model="formData.engWordMean.mean"
												class="textarea_form" rows="2"

										></textarea>
											<div class="textarea_validator_status">
												<font-awesome-icon
														v-if="getError('mean')"
														icon="fa-solid fa-circle-exclamation"
														class="input_icon"
												/>
											</div>
										</div>
										<show-error :errors="getError('mean')"/>
									</div>

									<div class="input_wrapper width_300">
										<div class="label_form">Loại Từ</div>
										<div class="multi_select_validator">
											<select class="multi_select"
															:class="getError('type_word_id') ? 'error' : ''"
															v-model="formData.selectTypeWordEngWordMean">
												<option value="0" selected>Default</option>
												<option v-for="item in defaultData.typeWord"
																:key="item.id"
																:value="item"
												>{{item['acronym']}}</option>
											</select>
											<div class="multi_select_validator_status">
												<font-awesome-icon
														v-if="getError('type_word_id')"
														icon="fa-solid fa-circle-exclamation"
														class="input_icon"
												/>
											</div>
										</div>
										<show-error :errors="getError('type_word_id')"/>
									</div>

									<div class="input_wrapper">
										<div class="label_form">Ví dụ</div>
										<div class="textarea_validator" :class="getError('example') ? 'error' : ''">
										<textarea
												v-model="formData.engWordMean.example"
												class="textarea_form" rows="2"

										></textarea>
											<div class="textarea_validator_status">
												<font-awesome-icon
														v-if="getError('example')"
														icon="fa-solid fa-circle-exclamation"
														class="input_icon"
												/>
											</div>
										</div>
										<show-error :errors="getError('example')"/>
									</div>
									<div class="core_child_center">
										<core-button
												v-if="wordId"
												:type="'icon-text'"
												:left-icon="'fa-solid fa-floppy-disk'"
												:text="'Lưu'"
												class="base-decoration"
												@click="saveEngWordMean()"
										/>
									</div>
								</div>

								<div class="content_item" v-if="openTabIndex === 5">
									<div class="examples">
										<div class="example">
											<div class="label_single">Ví dụ</div>
											<div class="input_wrapper" v-for="item in formData.examples" :key="item">
												<div class="input_validator">
													<input
															v-model="item.example"
															class="input_form" type="text" placeholder="Placeholder">
													<div class="input_validator_status">
														<font-awesome-icon
																icon="fa-regular fa-circle-check"
																class="input_icon"
														/>
													</div>
												</div>
											</div>
											<show-error :errors="getError('example')"/>
										</div>
										<core-button
												:type="'icon'"
												:icon="'fa-solid fa-plus'"
												:width="50"
												:height="30"
												:margin-top="10"
												class="base-decoration"
												@click="addExample()"
										/>
									</div>
									<div class="core_child_center">
										<core-button
												v-if="formData.examples.length > 0 && wordId"
												:type="'icon-text'"
												:left-icon="'fa-solid fa-floppy-disk'"
												:text="'Lưu'"
												class="base-decoration"
												@click="saveExample()"
										/>
									</div>
								</div>
								<div class="content_item" v-if="openTabIndex === 6">
									<h4>Ngữ cảnh - Đang phát triển</h4>
								</div>
								<div class="content_item" v-if="openTabIndex === 7">
									<h4>Từ đồng nghĩa - Đang phát triển</h4>
								</div>
								<div class="content_item" v-if="openTabIndex === 8">
									<h4>Kết hợp từ - Đang phát triển</h4>
								</div>
								<div class="content_item" v-if="openTabIndex === 9">
									<h4>Họ từ - Đang phát triển</h4>
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
import ShowError from "@/components/partials/widgets/ShowError";
export default {
	name: "ModalUpdateWord",
	components: {
		CoreButton,
		ShowError
	},
	watch: {

	},
	data () {
		return {
			openTabIndex: 1,
			wordId: null,

			defaultData: {
				popularity: [
					{
						value: 0
					},
					{
						value: 1
					},
					{
						value: 2
					},
					{
						value: 3
					},
					{
						value: 4
					},
					{
						value: 5
					},
				],
				typeWord: []
			},

			formData: {
				selectVieTypeWord: 0,

				selectEngTypeWord: 0,

				vie_word_mean_by_type_words_old: [],

				eng_word_mean_by_type_words_old: [],

				vie_word_mean_by_type_words: [],

				eng_word_mean_by_type_words: [],

				word: {
					word: null,
					popularity: 0,
					us: null,
					uk: null
				},

				examples_old: [],

				examples: [],

				selectTypeWordEngWordMean: null,
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

			formErrors: null,
		}
	},
	props: {
		show: Boolean,
	},
	computed: {
		allowedToPerform () {
			return this.wordId ? true: false
		}
	},
	created() {
		this.exEventBus.on(
				this.exAppSetting.event.PASS_DATA.WORD.UPDATE_WORD,
				(data) => {
					this.wordId = data
					console.log(this.wordId)

					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.GET_WORD_BY_ID_SUCCESS,
				(data) => {

					this.resetAllFormData()

					if(data['vie_word_mean_by_type_word']) { this.formData.vie_word_mean_by_type_words_old = data['vie_word_mean_by_type_word']}
					if(data['eng_word_mean_by_type_word']) { this.formData.eng_word_mean_by_type_words_old = data['eng_word_mean_by_type_word']}

					if(data['word']) {
						this.formData.word.word = data['word']
					}

					if(data['popularity']) {
						this.formData.word.popularity = data['popularity']
					}

					if(data['pronounce']['us']) {
						this.formData.word.us = data['pronounce']['us']
					}

					if(data['pronounce']['uk']) {
						this.formData.word.uk = data['pronounce']['uk']
					}

					if(data['word_mean_popularity']['mean']) {
						this.formData.wordMeanPopularity.mean = data['word_mean_popularity']['mean']
					}

					if(data['word_mean_popularity']['is_popularity']) {
						this.formData.wordMeanPopularity.is_popularity = data['word_mean_popularity']['is_popularity']
					}

					if(data['word_mean_popularity']['word_id']) {
						this.formData.wordMeanPopularity.word_id = data['word_mean_popularity']['word_id']
					}

					if(data['examples']) {
						this.formData.examples = data['examples']
					}

					if(data['eng_word_mean']) {
						this.formData.engWordMean.id = data['eng_word_mean']['id']
						this.formData.engWordMean.mean = data['eng_word_mean']['mean']
						this.formData.engWordMean.example = data['eng_word_mean']['example']
						this.formData.engWordMean.word_id = data['eng_word_mean']['word_id']
						this.formData.engWordMean.type_word_id = data['eng_word_mean']['type_word_id']

						this.formData.selectTypeWordEngWordMean = this.defaultData.typeWord.find((item) => {
							return item['id'] === this.formData.engWordMean.type_word_id
						})
					}
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.GET_WORD_BY_ID_ERROR,
				(data) => {
					console.log(data)
				}
		);

		this.exEventBus.emit(
				this.exAppSetting.event.API.WORD.GET_TYPE_WORD,
				null
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
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD.SAVE_WORD_SUCCESS,
				(data) => {
					this.wordId = data['id']

					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);

					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "success", message: "Thành công" }
					);
				}
		);
		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.SAVE_WORD_ERROR,
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.SAVE_WORD_MEAN_SUCCESS,
				() => {
					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "success", message: "Thành công" }
					);
				}
		);
		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.SAVE_WORD_MEAN_ERROR,
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.SAVE_ENG_WORD_MEAN_SUCCESS,
				() => {
					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "success", message: "Thành công" }
					);
				}
		);
		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.SAVE_ENG_WORD_MEAN_ERROR,
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.SAVE_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
				() => {
					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "success", message: "Thành công" }
					);
				}
		);
		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.SAVE_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR,
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.SAVE_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
				() => {
					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "success", message: "Thành công" }
					);
				}
		);
		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.SAVE_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR,
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.SAVE_EXAMPLE_SUCCESS,
				() => {
					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "success", message: "Thành công" }
					);
				}
		);
		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.SAVE_EXAMPLE_ERROR,
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.ADD_OR_UPDATE_EXAMPLE_TO_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
				() => {
					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "success", message: "Thành công" }
					);
				}
		);
		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.ADD_OR_UPDATE_EXAMPLE_TO_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR,
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.ADD_OR_UPDATE_EXAMPLE_TO_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
				() => {
					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "success", message: "Thành công" }
					);
				}
		);
		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.ADD_OR_UPDATE_EXAMPLE_TO_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR,
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.DELETE_EXAMPLE_OF_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
				() => {
					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "success", message: "Thành công" }
					);
				}
		);
		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.DELETE_EXAMPLE_OF_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR,
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.DELETE_EXAMPLE_OF_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
				() => {
					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "success", message: "Thành công" }
					);
				}
		);
		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.DELETE_EXAMPLE_OF_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR,
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.UPDATE_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
				() => {
					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "success", message: "Thành công" }
					);
				}
		);
		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.UPDATE_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR,
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.DELETE_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
				() => {
					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "success", message: "Thành công" }
					);
				}
		);
		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.DELETE_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR,
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.UPDATE_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
				() => {
					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "success", message: "Thành công" }
					);
				}
		);
		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.UPDATE_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR,
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.DELETE_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS,
				() => {
					this.exEventBus.emit(
							this.exAppSetting.event.API.WORD.GET_WORD_BY_ID,
							{id: this.wordId}
					);
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "success", message: "Thành công" }
					);
				}
		);
		this.exEventBus.on(
				this.exAppSetting.event.API.WORD
						.DELETE_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR,
				(data) => {
					this.setFormError(data['error_msg'])
					this.exEventBus.emit(
							this.exAppSetting.event.NOTIFICATION.OPEN_NOTIFICATION,
							{ state: "error", message: "Thất bại" }
					);
				}
		);

	},
	methods: {
		resetAllFormData () {
			this.formData.word = {
				word: null,
				popularity: 0,
				us: '_',
				uk: '_'
			}
			this.formData.selectTypeWord = 0
			this.formData.vie_word_mean_by_type_words_old = []
			this.formData.eng_word_mean_by_type_words_old = []
			this.formData.vie_word_mean_by_type_words = []
			this.formData.eng_word_mean_by_type_words = []
			this.formData.examples = []
			this.formData.selectTypeWordEngWordMean = 0
			this.formData.engWordMean = {
				word_id: null,
				mean: null,
				example: null,
				type_word_id: null
			}
			this.formData.wordMeanPopularity = {
				mean: null,
				is_popularity: 1,
				word_id: null
			}
		},
		resetAllFormDataNotWord () {
			this.formData.selectTypeWord = 0
			this.formData.vie_word_mean_by_type_words = []
			this.formData.eng_word_mean_by_type_words = []
			this.formData.examples = []
			this.formData.selectTypeWordEngWordMean = 0
			this.formData.engWordMean = {
				word_id: null,
				mean: null,
				example: null,
				type_word_id: null
			}
			this.formData.wordMeanPopularity = {
				mean: null,
				is_popularity: 1,
				word_id: null
			}
		},
		setFormError (data) {
			this.formErrors = data
		},
		resetFormError () {
			this.formErrors = null
		},
		getError (errorKey) {
			return this.formErrors ? this.formErrors[errorKey] ? this.formErrors[errorKey] : null : null
		},
		getVieTypeWordName (id) {
			let typeWord = this.defaultData.typeWord.find((item) => {
				return item.id === id
			})

			return typeWord['vie_description']
		},

		getEngTypeWordName (id) {
			let typeWord = this.defaultData.typeWord.find((item) => {
				return item.id === id
			})

			return typeWord['eng_description']
		},

		saveWord () {
			this.wordId = null
			this.resetFormError()
			this.exEventBus.emit(
					this.exAppSetting.event.API.WORD.SAVE_WORD,
					// this.formData.word
					{
						word: this.formData.word.word ? String(this.formData.word.word).trim() : null,
						popularity: this.formData.word.popularity,
						us: this.formData.word.us ? String(this.formData.word.us).trim() : null,
						uk: this.formData.word.uk ? String(this.formData.word.uk).trim() : null,
					}
			);
		},

		saveWordMeanPopularity () {
			this.resetFormError()
			if (this.allowedToPerform) {
				this.formData.wordMeanPopularity.word_id = this.wordId
				this.exEventBus.emit(
						this.exAppSetting.event.API.WORD.SAVE_WORD_MEAN,
						this.formData.wordMeanPopularity
				);
			}
		},

		saveEngWordMean () {
			this.resetFormError()
			if (this.allowedToPerform) {
				this.formData.engWordMean.word_id = this.wordId
				this.formData.engWordMean.type_word_id = this.formData.selectTypeWordEngWordMean.id
				this.exEventBus.emit(
						this.exAppSetting.event.API.WORD.SAVE_ENG_WORD_MEAN,
						this.formData.engWordMean
				);
			}
		},

		saveVieWordMeanByTypeWord () {
			this.resetFormError()
			if (this.allowedToPerform) {
				console.log(this.formData.vie_word_mean_by_type_words)

				this.exEventBus.emit(
						this.exAppSetting.event.API.WORD.SAVE_VIE_WORD_MEAN_BY_TYPE_WORD,
						{word_mean_by_type_words: this.formData.vie_word_mean_by_type_words}
				);
			}
		},

		saveEngWordMeanByTypeWord () {
			this.resetFormError()
			if (this.allowedToPerform) {
				console.log(this.formData.eng_word_mean_by_type_words)

				this.exEventBus.emit(
						this.exAppSetting.event.API.WORD.SAVE_ENG_WORD_MEAN_BY_TYPE_WORD,
						{word_mean_by_type_words: this.formData.eng_word_mean_by_type_words}
				);
			}
		},

		saveExample () {
			this.resetFormError()
			if (this.allowedToPerform) {
				this.exEventBus.emit(
						this.exAppSetting.event.API.WORD.SAVE_EXAMPLE,
						{
							examples: this.formData.examples
						}
				);
			}
		},

		saveVieExampleItemOld(typeWordMean, example) {
			let data = {
				id: example['id'],
				example: example['example'],
				type_word_id: typeWordMean['type_word_id'],
				word_id: typeWordMean['word_id'],
				word_mean_id: typeWordMean['id'],
				is_vie_mean: true
			}
			this.exEventBus.emit(
					this.exAppSetting.event.API.WORD.ADD_OR_UPDATE_EXAMPLE_TO_VIE_WORD_MEAN_BY_TYPE_WORD,
					data
			);
		},

		saveEngExampleItemOld(typeWordMean, example) {
			let data = {
				id: example['id'],
				example: example['example'],
				type_word_id: typeWordMean['type_word_id'],
				word_id: typeWordMean['word_id'],
				word_mean_id: typeWordMean['id'],
			}
			this.exEventBus.emit(
					this.exAppSetting.event.API.WORD.ADD_OR_UPDATE_EXAMPLE_TO_ENG_WORD_MEAN_BY_TYPE_WORD,
					data
			);
		},

		addVieWordMeanByTypeWord (typeWord) {
			if(typeWord) {
				this.formData.vie_word_mean_by_type_words.push({
					word_id: this.wordId,
					type_word_id: typeWord.id,
					mean: null,
					examples: [],
				})
			}
		},

		addEngWordMeanByTypeWord (typeWord) {
			if(typeWord) {
				this.formData.eng_word_mean_by_type_words.push({
					word_id: this.wordId,
					type_word_id: typeWord.id,
					mean: null,
					examples: [],
				})
			}
		},

		addExampleToVieWordMeanByTypeWordOld (index, typeWordId) {
			this.formData.vie_word_mean_by_type_words_old.forEach((element, _index) => {
				if (_index === index) {
					element.examples.push({
						id: null,
						example: null,
						word_id: this.wordId,
						type_word_id: typeWordId,
					})
				}
			})
		},

		addExampleToVieWordMeanByTypeWord (index, typeWordId) {
			this.formData.vie_word_mean_by_type_words.forEach((element, _index) => {
				if (_index === index) {
					element.examples.push({
						id: null,
						example: null,
						word_id: this.wordId,
						type_word_id: typeWordId,
					})
				}
			})
		},

		addExampleToEngWordMeanByTypeWord (index, typeWordId) {
			this.formData.eng_word_mean_by_type_words.forEach((element, _index) => {
				if (_index === index) {
					element.examples.push({
						example: null,
						word_id: this.wordId,
						type_word_id: typeWordId,
					})
				}
			})
		},

		deleteVieExampleItemOld (id) {
			this.exEventBus.emit(
					this.exAppSetting.event.API.WORD.DELETE_EXAMPLE_OF_VIE_WORD_MEAN_BY_TYPE_WORD,
					{id: id}
			);
		},

		deleteEngExampleItemOld (id) {
			this.exEventBus.emit(
					this.exAppSetting.event.API.WORD.DELETE_EXAMPLE_OF_ENG_WORD_MEAN_BY_TYPE_WORD,
					{id: id}
			);
		},

		deleteVieExampleItem (wordMeanByTypeWordIndex, exampleIndex) {
			this.formData.vie_word_mean_by_type_words[wordMeanByTypeWordIndex].examples.splice(exampleIndex, 1)
		},

		deleteEngExampleItem (wordMeanByTypeWordIndex, exampleIndex) {
			this.formData.eng_word_mean_by_type_words[wordMeanByTypeWordIndex].examples.splice(exampleIndex, 1)
		},

		addExample () {
			this.formData.examples.push({
				example: null,
				word_id: this.wordId
			})
		},

		deleteVieTypeWordMean (index) {
			this.formData.vie_word_mean_by_type_words.splice(index, 1)
		},

		deleteEngTypeWordMean (index) {
			this.formData.eng_word_mean_by_type_words.splice(index, 1)
		},

		deleteVieTypeWordMeanOld (id) {
			this.exEventBus.emit(
					this.exAppSetting.event.API.WORD.DELETE_VIE_WORD_MEAN_BY_TYPE_WORD,
					{id: id}
			);
		},

		deleteEngTypeWordMeanOld (id) {
			this.exEventBus.emit(
					this.exAppSetting.event.API.WORD.DELETE_ENG_WORD_MEAN_BY_TYPE_WORD,
					{id: id}
			);
		},

		updateVieTypeWordMeanOld (id, mean) {
			this.exEventBus.emit(
					this.exAppSetting.event.API.WORD.UPDATE_VIE_WORD_MEAN_BY_TYPE_WORD,
					{id: id, mean: mean}
			);
		},

		updateEngTypeWordMeanOld (id, mean) {
			this.exEventBus.emit(
					this.exAppSetting.event.API.WORD.UPDATE_ENG_WORD_MEAN_BY_TYPE_WORD,
					{id: id, mean: mean}
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
				case 9: this.openTabIndex = 9
					break
			}
		},
		close () {
			this.resetFormError()
			this.resetAllFormData()
			this.exEventBus.emit(
					this.exAppSetting.event.MODAL.WORD.CLOSE_MODAL_UPDATE_WORD
			);
		},

		emptyList () {
			this.selectedList = []
		},
		setPopularity (popularity) {
			this.formData.word.popularity = popularity.value
		},
		selectedPopularityColor (popularity) {
			if (popularity.value <= this.formData.word.popularity) {
				return true
			}
			return false
		}
	}
}
</script>

<style scoped lang="scss">
.detail-block {
	position: relative;
	width: 900px;
	height: 800px;
	overflow: hidden;
	.tabs {
		position: absolute;
		width: 100%;
		height: 50px;
		top: 0px;
		left: 0px;
		border-bottom: 1px solid #6D757D;
		box-sizing: border-box;
		background-color: #3C3C3C;

		ul {
			padding: 0px !important;
			margin: 0px !important;

			li {
				list-style: none;
				display: inline-flex;

				.tab-item {
					width: calc(900px * 0.1111111111111111);
					height: 50px;
					cursor: pointer;
					user-select: none;

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
		height: 300px;
		top: 50px;
		left: 0px;
		padding: 15px;

		.edit-word {
			align-content: center !important;
			width: 100%;
			.input_wrapper {
				width: 48%;
				height: 120px;
			}
			.between_input {
				width: 2%;
				height: 120px;
			}
			.btb-save-word {
				width: 8%;
				height: 120px;
			}
		}
		.edit-pronounce {
			align-content: center !important;
			width: 100%;
			.input_wrapper {
				width: 48%;
				height: 120px;
			}
			.between_input {
				width: 4%;
				height: 120px;
			}
			.btn-save-pronounce {
				height: 120px;
			}
		}
	}


	.content {
		position: absolute;
		width: 100%;
		height: calc(100% - 350px);
		bottom: 0px;
		left: 0px;
		border-top: 1px solid #6D757D;

		.content_item {
			position: relative;
			width: 100%;
			height: 100%;
			padding: 15px;
			overflow-y: scroll;

			&.type_word_mean {
				display: inline-flex;

				.left_type_word_mean {
					position: fixed;
					.header {
						display: inline-flex;
						flex-wrap: wrap;
						margin-bottom: 10px;

						.multi_select {
							margin-top: 0px;
						}
					}
				}
				.right_type_word_mean {
					position: absolute;
					right: 15px;
					width: 65%;
					padding-left: 20px;
					padding-bottom: 20px;

					.type_word_mean_item {
						.type {
							margin-bottom: 5px;
						}
						margin-bottom: 10px;
						.mean_and_example {
							margin-left: 40px;
							padding: 0px 0px 15px 15px;
							border-left: 1px solid black;
							border-bottom: 1px solid black;

							.mean {
								margin-bottom: 10px;
							}

							.examples {
								.add_example_to_old {

								}
							}
						}
					}
				}
			}
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

.modal-header {
	padding: 10px !important;
	h3 {
		margin-top: 0;
		color: #42b883;
	}
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
</style>