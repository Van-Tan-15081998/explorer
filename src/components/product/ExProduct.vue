<template>
	<div class="core_child_standard_sequence">
		<div class="knowledge_page_background"></div>
		<div class="knowledge_block">
			<div class="part_left">
				<div class="knowledge_image core_child_center">
					<img src="https://live.staticflickr.com/65535/51494598937_e54f7c5cc7_b.jpg" alt="">
				</div>
				<div class="sub_menu">
					<ul>
						<li
								@click="openTab(1)"
								:class="{'selected': openTabIndex === 1}"
								class="core_child_center">Gia thế</li>
						<li
								@click="openTab(2)"
								:class="{'selected': openTabIndex === 2}"
								class="core_child_center">Item 2</li>
						<li
								@click="openTab(3)"
								:class="{'selected': openTabIndex === 3}"
								class="core_child_center">Item 3</li>
						<li
								@click="openTab(4)"
								:class="{'selected': openTabIndex === 4}"
								class="core_child_center">Item 4</li>
						<li
								@click="openTab(5)"
								:class="{'selected': openTabIndex === 5}"
								class="core_child_center">Item 5</li>
						<li
								@click="openTab(6)"
								:class="{'selected': openTabIndex === 6}"
								class="core_child_center">Item 6</li>
						<li
								@click="openTab(7)"
								:class="{'selected': openTabIndex === 7}"
								class="core_child_center">Item 7</li>
						<li
								@click="openTab(8)"
								:class="{'selected': openTabIndex === 8}"
								class="core_child_center">Item 8</li>
						<li
								@click="openTab(9)"
								:class="{'selected': openTabIndex === 9}"
								class="core_child_center">Item 9</li>
						<li
								@click="openTab(10)"
								:class="{'selected': openTabIndex === 10}"
								class="core_child_center">Item 10</li>
					</ul>
				</div>
			</div>
			<div class="part_right">
				<div class="content_item">
					<div class="knowledge_label">
						<p title="Hưng Đạo đại vương - Trần Quốc Tuấn - Đại tướng nhà Trần">
							Hưng Đạo đại vương - Trần Quốc Tuấn - Đại tướng nhà Trần
						</p>
					</div>
					<div class="detail_content">

						<div class="name_block">
							<div class="name_label core_child_center_right">
								Tên
							</div>
							<div class="name_content core_child_center">
								Trần Quốc Tuấn
							</div>
						</div>
						<div class="birth_block">
							<div class="birth_label core_child_center_right">
								Năm sinh - mất
							</div>
							<div class="birth_content core_child_center">
								1231 - 1300
							</div>
						</div>
						<div class="nation_block">
							<div class="nation_label core_child_center_right">
								Quốc gia
							</div>
							<div class="nation_content core_child_center">
								Đại Việt
							</div>
						</div>

						<div class="text_content_block">
							<div v-if="openTabIndex === 1">
								<p>
									Trần Hưng Đạo (chữ Hán:陳興道; 1231 – 1300), tên thật là Trần Quốc Tuấn (chữ Hán:陳國峻), tước hiệu Hưng Đạo đại vương, là một nhà chính trị, nhà quân sự, tôn thất hoàng gia Đại Việt thời Trần. Ông được biết đến trong lịch sử Việt Nam với việc chỉ huy quân đội đánh tan hai cuộc xâm lược của quân Nguyên – Mông năm 1285 và năm 1288. Phần lớn tài liệu nghiên cứu lịch sử và cả dân gian thời sau thường dùng tên gọi vắn tắt là "Trần Hưng Đạo" thay cho cách gọi đầy đủ là "Hưng Đạo đại vương Trần Quốc Tuấn", vốn bao gồm tước hiệu được sắc phong cho ông. Ông là 1 trong 14 vị anh hùng tiêu biểu của dân tộc Việt Nam.[1]

									Là con của thân vương An Sinh vương Trần Liễu và là cháu nội của Trần Thái Tổ, Trần Hưng Đạo có mối quan hệ mật thiết với hoàng tộc họ Trần và vua Trần Nhân Tông gọi ông bằng bác. Năm 1257, ông được vua Trần Thái Tông phong làm đại tướng chỉ huy các lực lượng ở biên giới đánh quân Mông Cổ xâm lược. Sau đó, ông lui về thái ấp ở Vạn Kiếp. Đến tháng 10 âm lịch năm 1283, nhà Nguyên (sau khi Mông Cổ thống nhất Trung Hoa) đe dọa đánh Đại Việt lần hai, Hưng Đạo vương được Thượng hoàng Trần Thánh Tông, và vua Trần Nhân Tông (lần lượt là em họ và cháu họ ông) phong làm Quốc công tiết chế, thống lĩnh quân đội cả nước. Trên cương vị này, năm 1285, ông lãnh đạo quân sĩ chặn đứng đội quân xâm lược do hoàng tử thứ chín Thoát Hoan. Sau những thất bại ban đầu, quân dân Việt dưới sự lãnh đạo của hai vua Trần, Thượng tướng Thái sư Trần Quang Khải và Hưng Đạo vương phản công mạnh mẽ, phá tan quân Nguyên trong các trận Hàm Tử, Chương Dương, Trường Yên, Vạn Kiếp,... đánh đuổi hoàn toàn quân Nguyên khỏi biên giới.

									Năm 1288, quân Nguyên trở lại xâm lược Đại Việt lần thứ ba. Khi tiếp tục được phong Quốc công tiết chế; Hưng Đạo vương khẳng định với vua Trần Nhân Tông: "Năm nay đánh giặc nhàn". Ông đã áp dụng thành công chiến thuật của Ngô Quyền, đánh bại hoàn toàn thủy quân nhà Nguyên do các tướng Phàn Tiếp và Ô Mã Nhi chỉ huy trong trận thủy chiến trên sông Bạch Đằng, buộc quân Nguyên lại phải rút về nước và vĩnh viễn từ bỏ tham vọng thôn tính phương Nam của họ. Tháng 4 âm lịch năm 1289, Trần Nhân Tông chính thức gia phong ông làm "Đại vương" dù chức quyền đứng đầu triều đình khi đó vẫn thuộc về Thượng tướng Thái sư Chiêu Minh Đại vương Trần Quang Khải.

									Sau đó, ông lui về Vạn Kiếp đến khi mất năm 1300. Trước lúc qua đời, ông khuyên Trần Anh Tông: "Phải khoan thư sức dân để làm kế sâu rễ bền gốc".[2] Ngoài ra, ông còn để lại các tác phẩm kinh điển như Hịch tướng sĩ, Binh thư yếu lược và Vạn Kiếp tông bí truyền thư đặt nền móng cho nghệ thuật quân sự Việt Nam kể từ thời Trần đến ngày nay.
								</p>
							</div>
							<div
									v-if="openTabIndex === 2">
								<p>Content - Item 2</p>
							</div>
							<div
									v-if="openTabIndex === 3">
								<p>Content - Item 3</p>
							</div>
							<div
									v-if="openTabIndex === 4">
								<p>Content - Item 4</p>
							</div>
							<div
									v-if="openTabIndex === 5">
								<p>Content - Item 5</p>
							</div>
							<div
									v-if="openTabIndex === 6">
								<p>Content - Item 6</p>
							</div>
							<div
									v-if="openTabIndex === 7">
								<p>Content - Item 7</p>
							</div>
							<div
									v-if="openTabIndex === 8">
								<p>Content - Item 8</p>
							</div>
							<div
									v-if="openTabIndex === 9">
								<p>Content - Item 9</p>
							</div>
							<div
									v-if="openTabIndex === 10">
								<p>Content - Item 10</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="knowledge_block">
			<div class="part_left">

			</div>
			<div class="part_right">

			</div>
		</div>
		<div class="knowledge_block">
			<div class="part_left">

			</div>
			<div class="part_right">

			</div>
		</div>
		<div class="knowledge_block">
			<div class="part_left">

			</div>
			<div class="part_right">
				<div class="content">

				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: "ExProduct",
		data() {
			return {
				openTabIndex: 1,
			}
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
					case 10:
						this.openTabIndex = 10;
						break;
				}
			},
		}
	};
</script>

<style scoped lang="scss">
@import "../../assets/css/colors";
.knowledge_page_background {
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: #1F1F1F;
	background-image: url("../../assets/img/background-optimized-2.svg");
	background-repeat: repeat;
	background-size: 350px;
}
.knowledge_block {
	position: relative;
	width: 800px;
	height: 700px;
	margin: 0px 20px 15px 0px;
	overflow: hidden;
	border: 1px solid #555;
	box-shadow: #44463F 3px 3px 0px 0px;

	.part_left {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 300px;
		height: 100%;
		padding: 5px 0px;
		//background-color: #6f42c1;

		.knowledge_image {
			width: 300px;
			height: 300px;
			background-color: white;
			overflow: hidden;

			img {
				max-height: 100%;
				width: 100%;
			}
		}

		.sub_menu {
			width: 300px;
			height: calc(100% - 300px);
			overflow-y: scroll;
			ul {
				margin-bottom: 0px !important;
				padding: 5px;
				li {
					height: 35px;
					margin: 5px;
					font-size: 16px;
					cursor: pointer;
					user-select: none;
					border: 1px solid #555;
					border-top-left-radius: 20px;
					border-bottom-left-radius: 20px;
					border-right: none;
					color: lightgrey;
					transition: 0.1s;
					transform-origin: right;

					&:hover {
						border-color: #ffc517;
					}

					&:active {
						border-color: orange;
						transform: scaleX(0.96);
					}

					&.selected {
						font-size: 18px;
						border-color: orange;
						color: yellow;
					}
				}
			}
		}
	}
	.part_right {
		position: absolute;
		right: 0px;
		top: 0px;
		width: calc(100% - 300px);
		height: 100%;
		padding: 5px 0px;
		.content_item {
			width: 100%;
			height: 100%;
			padding: 0px 10px 0px 20px;

			.knowledge_label {
				height: 50px;
				width: 100%;

				p {
					line-height: 50px;
					font-size: 22px;
					color: white;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					margin: 0px !important;
				}
			}

			.name_block, .birth_block, .nation_block {
				display: inline-flex;
				height: 30px;
				width: 100%;
				margin-bottom: 5px;

				.name_label, .birth_label, .nation_label {
					width: 150px;
					height: 30px;
					border: 1px solid #555;
					border-left: none;
					color: lightgrey;
					font-size: 15px;
					padding-right: 20px;
				}

				.name_content, .birth_content, .nation_content {
					width: fit-content;
					height: 30px;
					padding: 0px 20px 0px 20px;
					border: 1px solid #555;
					border-left: none;
					border-bottom-right-radius: 20px;
					border-top-right-radius: 20px;

					color: yellow;
				}
			}

			.detail_content {
				position: relative;
				width: 100%;
				height: calc(100% - 50px);
				overflow: hidden;

				.text_content_block {
					margin: 5px 0px;
					width: 100%;
					height: 520px;
					background-color: #F5F6CF;
					overflow-y: scroll;
					padding: 5px;
					p {
						color: #555;
						font-size: 16px;
						line-height: 30px !important;
					}
				}
			}
		}
	}
}
</style>
