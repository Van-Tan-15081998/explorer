<template>
	<div class="core_child_standard_sequence">
		<div v-for="block in blocks" class="color_block" :key="block">
			<div class="left_part" :style="{'background-color': block.left_part.background_color}">
				<div
						class="item" v-for="left_part in block.left_part.items"
						:key="left_part.background_color"
						:style="{'background-color': left_part.background_color,
						'border-color': left_part.border_color
						}"
				>
					<div
							class="item_content"
							:style="{'color': left_part.text_color}"
					>
					</div>
				</div>
			</div>
			<div
					class="center_part"
					:style="{'background-color': block.center_part.background_color}"
			></div>
			<div
					class="right_part"
					:style="{'background-color': block.right_part.background_color}"
			>
				<h4
						:style="{'color': block.right_part.text_color}"
				>Right Part</h4>
				<div
						class="item" v-for="right_part in block.right_part.items"
						:key="right_part.background_color"
						:style="{'background-color': right_part.background_color,
						'border-color': right_part.border_color
						}"
				>	ABC
					<div
							class="item_content"
							:style="{'color': right_part.text_color}"
					>
					</div>
				</div>
			</div>
		</div>
		<div class="core_child_standard_sequence">
			<div class="button_block type_1">
				<div class="button">
					Button Testing
				</div>
			</div>

			<div class="button_block type_2">
				<div class="button">
					Button Testing
				</div>
			</div>

			<div class="button_block type_3">
				<div class="button">
					Button Testing
				</div>
			</div>

			<div class="button_block type_4">
				<div class="button">
					Button Testing
				</div>
			</div>

			<div class="button_block type_5">
				<div class="button">
					Button Testing
				</div>
			</div>

			<div class="button_block type_6">
				<div class="button">
					Button Testing
				</div>
			</div>

			<div class="button_block type_7">
				<div class="button">
					Button Testing
				</div>
			</div>

			<div class="button_block type_8">
				<div class="button">
					Button Testing
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CoreColorBlock",
	data() {
		return {
			blocks: [
					//_1
				{
					left_part: {
						background_color: '#5E260D',
						items: [
							{
								background_color: '#7ACFB2',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#54FA88',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#444540',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#674C3A',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#DA7B9B',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: ''
					},
					right_part: {
						text_color: '',
						background_color: '#7ACFB2',
						items: [
							{
								background_color: '#BDE8D9',
								border_color: '#955B4F',
								text_color: '',
							},
							{
								background_color: '#BDE8D9',
								border_color: '#955B4F',
								text_color: '',
							},
							{
								background_color: '#BDE8D9',
								border_color: '#955B4F',
								text_color: '',
							},
							{
								background_color: '#BDE8D9',
								border_color: '#955B4F',
								text_color: '',
							},
							{
								background_color: '#BDE8D9',
								border_color: '#955B4F',
								text_color: '',
							},
							{
								background_color: '#BDE8D9',
								border_color: '#955B4F',
								text_color: '',
							},
						]
					}
				},
					/////////////////////////////////
				//_2
				{
					left_part: {
						background_color: '#FBE5D0',
						items: [
							{
								background_color: '#4B5B51',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#CC7A24',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#717B3E',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#1AAECC',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#E4937D',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#A45D9F',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: '#75C8D0'
					},
					right_part: {
						text_color: '',
						background_color: '#FABA8A',
						items: [
							{
								background_color: '#FBE5D0',
								border_color: '#49F0EF',
								text_color: '',
							},
							{
								background_color: '#FBE5D0',
								border_color: '#49F0EF',
								text_color: '',
							},
							{
								background_color: '#FBE5D0',
								border_color: '#49F0EF',
								text_color: '',
							},
							{
								background_color: '#FBE5D0',
								border_color: '#49F0EF',
								text_color: '',
							},
							{
								background_color: '#FBE5D0',
								border_color: '#49F0EF',
								text_color: '',
							},
							{
								background_color: '#FBE5D0',
								border_color: '#49F0EF',
								text_color: '',
							},
						]
					}
				},
				/////////////////////////////////
				//_3
				{
					left_part: {
						background_color: '#F6CECF',
						items: [
							{
								background_color: '#F49BAD',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#933C09',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#BF6F32',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#D48E98',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#F06D87',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#4F8EA7',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: '#E13C5C'
					},
					right_part: {
						text_color: '',
						background_color: '#F49BAD',
						items: [
							{
								background_color: '#F5CFCE',
								border_color: '#E13C5C',
								text_color: '',
							},
							{
								background_color: '#F5CFCE',
								border_color: '#E13C5C',
								text_color: '',
							},
							{
								background_color: '#F5CFCE',
								border_color: '#E13C5C',
								text_color: '',
							},
							{
								background_color: '#F5CFCE',
								border_color: '#E13C5C',
								text_color: '',
							},
							{
								background_color: '#F5CFCE',
								border_color: '#E13C5C',
								text_color: '',
							},
							{
								background_color: '#F5CFCE',
								border_color: '#E13C5C',
								text_color: '',
							},
						]
					}
				},
				/////////////////////////////////
				//_4
				{
					left_part: {
						background_color: '#FDC0D0',
						items: [
							{
								background_color: '#FACA54',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#4F94B5',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#B35178',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#E45650',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#4F4F4F',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#F3F19A',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: ''
					},
					right_part: {
						text_color: '',
						background_color: '#FDC0D0',
						items: [
							{
								background_color: '#F7E0E0',
								border_color: '#DF5B69',
								text_color: '',
							},
							{
								background_color: '#F7E0E0',
								border_color: '#DF5B69',
								text_color: '',
							},
							{
								background_color: '#F7E0E0',
								border_color: '#DF5B69',
								text_color: '',
							},
							{
								background_color: '#F7E0E0',
								border_color: '#DF5B69',
								text_color: '',
							},
							{
								background_color: '#F7E0E0',
								border_color: '#DF5B69',
								text_color: '',
							},
							{
								background_color: '#F7E0E0',
								border_color: '#DF5B69',
								text_color: '',
							},
						]
					}
				},
				/////////////////////////////////
				//_5
				{
					left_part: {
						background_color: '#90E4FF',
						items: [
							{
								background_color: '#8791C8',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#DAB667',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#D3D5E4',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: '#53AABB'
					},
					right_part: {
						text_color: '',
						background_color: '#8ACBE7',
						items: [
							{
								background_color: '#C5E4F5',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#C5E4F5',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#C5E4F5',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#C5E4F5',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#C5E4F5',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#C5E4F5',
								border_color: '',
								text_color: '',
							},
						]
					}
				},
				/////////////////////////////////
				//_6
				{
					left_part: {
						background_color: '#936498',
						items: [
							{
								background_color: '#D8A3D2',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#DF534D',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#B281B0',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#732228',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#2A725C',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#ECCF93',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: '#D8A3D2'
					},
					right_part: {
						text_color: '',
						background_color: '#B87DC2',
						items: [
							{
								background_color: '#D8A3D2',
								border_color: '#835383',
								text_color: '',
							},
							{
								background_color: '#D8A3D2',
								border_color: '#835383',
								text_color: '',
							},
							{
								background_color: '#D8A3D2',
								border_color: '#835383',
								text_color: '',
							},
							{
								background_color: '#D8A3D2',
								border_color: '#835383',
								text_color: '',
							},
							{
								background_color: '#D8A3D2',
								border_color: '#835383',
								text_color: '',
							},
							{
								background_color: '#D8A3D2',
								border_color: '#835383',
								text_color: '',
							},
						]
					}
				},
				/////////////////////////////////
				//_7
				{
					left_part: {
						background_color: '#CD5A46',
						items: [
							{
								background_color: '#080808',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#B72B2A',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#E2B981',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#5EA294',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#95361F',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: '#F6DCA2'
					},
					right_part: {
						text_color: '',
						background_color: '#FACD7A',
						items: [
							{
								background_color: '#FBE5BC',
								border_color: '#BD583D',
								text_color: '',
							},
							{
								background_color: '#FBE5BC',
								border_color: '#BD583D',
								text_color: '',
							},
							{
								background_color: '#FBE5BC',
								border_color: '#BD583D',
								text_color: '',
							},
							{
								background_color: '#FBE5BC',
								border_color: '#BD583D',
								text_color: '',
							},
							{
								background_color: '#FBE5BC',
								border_color: '#BD583D',
								text_color: '',
							},
							{
								background_color: '#FBE5BC',
								border_color: '#BD583D',
								text_color: '',
							},
						]
					}
				},
				/////////////////////////////////
				//_8
				{
					left_part: {
						background_color: '#C858F8',
						items: [
							{
								background_color: '#F4E498',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#DB9E44',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#444540',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#4B9BD0',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#FAFAFA',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#155FA0',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: '#A1319E'
					},
					right_part: {
						text_color: '',
						background_color: '#CF5EE0',
						items: [
							{
								background_color: '#EBB6ED',
								border_color: '#8C2B9B',
								text_color: '',
							},
							{
								background_color: '#EBB6ED',
								border_color: '#8C2B9B',
								text_color: '',
							},
							{
								background_color: '#EBB6ED',
								border_color: '#8C2B9B',
								text_color: '',
							},
							{
								background_color: '#EBB6ED',
								border_color: '#8C2B9B',
								text_color: '',
							},
							{
								background_color: '#EBB6ED',
								border_color: '#8C2B9B',
								text_color: '',
							},
							{
								background_color: '#EBB6ED',
								border_color: '#8C2B9B',
								text_color: '',
							},
						]
					}
				},
				/////////////////////////////////
				//_9
				{
					left_part: {
						background_color: '#C6E2A8',
						items: [
							{
								background_color: '#393126',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#74BA96',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#DD5D63',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#A76A56',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#94C45D',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#FAFAFA',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: '#6A9660'
					},
					right_part: {
						text_color: '',
						background_color: '#AAD07D',
						items: [
							{
								background_color: '#D5E8BB',
								border_color: '#7DB166',
								text_color: '',
							},
							{
								background_color: '#D5E8BB',
								border_color: '#7DB166',
								text_color: '',
							},
							{
								background_color: '#D5E8BB',
								border_color: '#7DB166',
								text_color: '',
							},
							{
								background_color: '#D5E8BB',
								border_color: '#7DB166',
								text_color: '',
							},
							{
								background_color: '#D5E8BB',
								border_color: '#7DB166',
								text_color: '',
							},
							{
								background_color: '#D5E8BB',
								border_color: '#7DB166',
								text_color: '',
							},
						]
					}
				},
				/////////////////////////////////
				//_10
				{
					left_part: {
						background_color: '#C5E2AC',
						items: [
							{
								background_color: '#F9F2A8',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#E5F4EF',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#C8D88D',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#C8AB6F',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#D74E45',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#81ABB7',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: '#72C0B4'
					},
					right_part: {
						text_color: '',
						background_color: '#FFF1B0',
						items: [
							{
								background_color: '#FCF8D1',
								border_color: '#AADBCF',
								text_color: '',
							},
							{
								background_color: '#FCF8D1',
								border_color: '#AADBCF',
								text_color: '',
							},
							{
								background_color: '#FCF8D1',
								border_color: '#AADBCF',
								text_color: '',
							},
							{
								background_color: '#FCF8D1',
								border_color: '#AADBCF',
								text_color: '',
							},
							{
								background_color: '#FCF8D1',
								border_color: '#AADBCF',
								text_color: '',
							},
							{
								background_color: '#FCF8D1',
								border_color: '#AADBCF',
								text_color: '',
							},
						]
					}
				},
				/////////////////////////////////
				//_11
				{
					left_part: {
						background_color: '#9ADAFD',
						items: [
							{
								background_color: '#DC8B5C',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#444540',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#7E5748',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#44AF7B',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#F1B651',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#EADCC2',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: '#ECFDE5'
					},
					right_part: {
						text_color: '',
						background_color: '#64B2FC',
						items: [
							{
								background_color: '#AED7F5',
								border_color: '#ECFDE5',
								text_color: '',
							},
							{
								background_color: '#AED7F5',
								border_color: '#ECFDE5',
								text_color: '',
							},
							{
								background_color: '#AED7F5',
								border_color: '#ECFDE5',
								text_color: '',
							},
							{
								background_color: '#AED7F5',
								border_color: '#ECFDE5',
								text_color: '',
							},
							{
								background_color: '#AED7F5',
								border_color: '#ECFDE5',
								text_color: '',
							},
							{
								background_color: '#AED7F5',
								border_color: '#ECFDE5',
								text_color: '',
							},
						]
					}
				},
				/////////////////////////////////
				//_12
				{
					left_part: {
						background_color: '#003F62',
						items: [
							{
								background_color: '#562A1A',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#81D5F1',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#003F46',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#D84E51',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#FAFAFA',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '#EE641D',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: '#96B5FB'
					},
					right_part: {
						text_color: '',
						background_color: '#25658B',
						items: [
							{
								background_color: '#98B2C8',
								border_color: '#1B2B60',
								text_color: '',
							},
							{
								background_color: '#98B2C8',
								border_color: '#1B2B60',
								text_color: '',
							},
							{
								background_color: '#98B2C8',
								border_color: '#1B2B60',
								text_color: '',
							},
							{
								background_color: '#98B2C8',
								border_color: '#1B2B60',
								text_color: '',
							},
							{
								background_color: '#98B2C8',
								border_color: '#1B2B60',
								text_color: '',
							},
							{
								background_color: '#98B2C8',
								border_color: '#1B2B60',
								text_color: '',
							},
						]
					}
				},
				/////////////////////////////////
				//_13
				{
					left_part: {
						background_color: '',
						items: [
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: ''
					},
					right_part: {
						text_color: '',
						background_color: '',
						items: [
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
						]
					}
				},
				/////////////////////////////////
				//_14
				{
					left_part: {
						background_color: '',
						items: [
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: ''
					},
					right_part: {
						text_color: '',
						background_color: '',
						items: [
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
						]
					}
				},
				/////////////////////////////////
				//_15
				{
					left_part: {
						background_color: '',
						items: [
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
						]
					},
					center_part: {
						background_color: ''
					},
					right_part: {
						text_color: '',
						background_color: '',
						items: [
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
							{
								background_color: '',
								border_color: '',
								text_color: '',
							},
						]
					}
				},
				/////////////////////////////////
			],
			leftItems: 6,
			rightItems: 6
		}
	}
}
</script>

<style scoped lang="scss">
.color_block {
	position: relative;
	width: 550px;
	height: 350px;
	margin: 10px;

	.left_part, .right_part, .center_part {
		float: left;
	}
	.left_part, .right_part {
		height: 100%;
		width: 49%;
		padding: 10px;
	}
	.center_part {
		height: 100%;
		width: 2%;
	}
	.left_part {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		align-content: center;

		.item {
			width: 80px;
			height: 80px;
			margin: 5px;
			border-radius: 50%;

			display: flex;
			justify-content: center;
			align-items: center;
			align-content: center;
			border: 10px solid white;
			.item_content {
				font-size: 30px;
			}
		}
	}
	.right_part {
		h4 {
			width: 100%;
		}
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		align-content: center;

		.item {
			width: 80px;
			height: 80px;
			margin: 5px;
			border-radius: 50%;

			display: flex;
			justify-content: center;
			align-items: center;
			align-content: center;
			border: 10px solid white;
			.item_content {
				font-size: 30px;
			}
		}
	}

}
.button_block {
	width: 300px;
	height: 200px;
	border: 1px solid black;
	padding: 50px;
	margin: 10px;

	.button {
		border-radius: 30px;
		padding: 8px;
		transition: 0.3s;
	}

	&.type_1 {
		background-color: #00A529;
		.button {
			width: fit-content;
			border: 2px solid #FFFFFF;
			font-weight: bold;
			color: #FFFFFF;
			&:hover {
				background-color: #FFFFFF;
				color: #F38A00;
			}
		}
	}

	&.type_2 {
		background-color: #FFFFFF;
		.button {
			width: fit-content;
			border: 2px solid #F38A00;
			background-color: #F38A00;
			font-weight: bold;
			color: #FFFFFF;
			&:hover {
				background-color: #FFFFFF;
				color: #F38A00;
			}
		}
	}

	&.type_3 {
		background-color: #FFFFFF;
		.button {
			width: fit-content;
			background-color: #F38A00;
			font-weight: bold;
			color: #FFFFFF;
			&:hover {
				background-color: #00A529;
			}
		}
	}

	&.type_4 {
		background-color: #FFFFFF;
		.button {
			width: fit-content;
			background-color: #4EB0FF;
			font-weight: bold;
			color: #FFFFFF;
			&:hover {
				background-color: #F38A00;
			}
		}
	}

	&.type_5 {
		background-color: #1A1B1F;
		.button {
			width: fit-content;
			background-color: #1A1B1F;
			border: 2px solid #4FB9FF;
			font-weight: bold;
			color: #4FB9FF;
			&:hover {
				background-color: #4FB9FF;
				color: #FFFFFF;
			}
		}
	}

&.type_6 {
	background: linear-gradient(to right, #1A2980, #26D0CE);
	.button {
		width: fit-content;
		background-color: #FFFFFF;
		border: 2px solid #FFFFFF;
		font-weight: bold;
		color: black;
		&:hover {
			background-color: transparent;
			color: #FFFFFF;
		}
	}
}

	&.type_7 {
		background-color: #FFFFFF;
		.button {
			width: fit-content;
			background-color: #F38A00;
			font-weight: bold;
			color: #FFFFFF;
			&:hover {
				color: black;
			}
		}
	}

	&.type_8 {
		border: none;
		background: #fff;
		box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
		transition: all 0.3s ease-in;
		.button {
			width: fit-content;
			border: 2px solid #F38A00;
			background-color: #F38A00;
			font-weight: bold;
			color: #FFFFFF;
			&:hover {
				background-color: #FFFFFF;
				color: #F38A00;
			}
		}

		&:hover {
				box-shadow: 0px 17px 26px -16px rgba(0, 0, 0, 0.41);
		}
	}


}
</style>