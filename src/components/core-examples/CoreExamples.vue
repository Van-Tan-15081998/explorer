<template>
  <div>
    <h3>Core component example</h3>
    <hr>
    <h5>Button</h5>
    <core-button
        :type="'normal'"
    />
    <core-button
        :type="'loading'"
    />
    <core-button
        :type="'loading'"
        :icon-size="20"
        :icon-color="'green'"
        :background-color="'yellow'"
    />
    <core-button
        :type="'icon-text'"
        :left-icon="'fa-solid fa-puzzle-piece'"
    />
    <core-button
        :type="'icon-text'"
        :right-icon="'fa-solid fa-puzzle-piece'"
    />
    <core-button
        :type="'normal'"
        :text="'Testing'"
        :background-color="'orange'"
        :width="100"
        :height="50"
    />
    <core-button
        :type="'normal'"
        :text="'Testing Button'"
        :background-color="'pink'"
        :width="100"
        :height="50"
    />
    <core-button
        :type="'normal'"
        :text="'Testing Button'"
        :background-color="'pink'"
        :text-color="'red'"
        :box-shadow="'#CCCCCC 12px 12px 6px -4px'"
        :border-color="'blue'"
    />
    <core-button
        :type="'progress'"
        :progress-status="status"
        :text="'Bấm để gửi'"
        :height="50"
    />
    <hr>
    <h5>Card</h5>
    <core-card/>
    <hr>
    <h5>Collapse</h5>
    <core-collapse/>
    <hr>
    <h5>Dropdown</h5>
    <core-dropdown/>
    <hr>
    <h5>Form Checkbox</h5>
    <core-form-checkbox/>
    <hr>
    <h5>Form Datepicker</h5>
    <core-form-datepicker/>
    <hr>
    <h5>Form Radio</h5>
    <core-form-radio/>
    <hr>
    <h5>Form Text Input</h5>
    <core-form-text-input/>
    <hr>
    <h5>Form Textarea</h5>
    <core-form-textarea/>
    <hr>
    <h5>Form Image</h5>
    <core-image/>
    <hr>
    <h5>Form Label</h5>
    <core-label/>
    <hr>
		<h5>Color Block</h5>
		<core-color-block/>
		<hr>
		<h5>Form</h5>
		<core-form/>
		<hr>
		<h5> Form Multi Select</h5>
		<core-form-multi-select/>
		<hr>
  </div>
</template>

<script>
import CoreColorBlock from "@/core/core-components/color-block/CoreColorBlock";
import CoreButton from "@/core/core-components/button/CoreButton";
import CoreCard from "@/core/core-components/card/CoreCard";
import CoreCollapse from "@/core/core-components/collapse/CoreCollapse";
import CoreDropdown from "@/core/core-components/dropdown/CoreDropdown";
import CoreFormCheckbox from "@/core/core-components/form-checkbox/CoreFormCheckbox";
import CoreFormDatepicker from "@/core/core-components/form-datepicker/CoreFormDatepicker";
import CoreFormRadio from "@/core/core-components/form-radio/CoreFormRadio";
import CoreFormTextInput from "@/core/core-components/form-text-input/CoreFormTextInput";
import CoreFormTextarea from "@/core/core-components/form-textarea/CoreFormTextarea";
import CoreImage from "@/core/core-components/image/CoreImage";
import CoreLabel from "@/core/core-components/label/CoreLabel";
import CoreForm from "@/core/core-components/form/CoreForm";
import CoreFormMultiSelect from "@/core/core-components/form-multi-select/CoreFormMultiSelect";
export default {
name: "CoreExamples",
  components: {
		CoreColorBlock,
    CoreButton,
    CoreCard,
    CoreCollapse,
    CoreDropdown,
    CoreFormCheckbox,
    CoreFormDatepicker,
    CoreFormRadio,
    CoreFormTextInput,
    CoreFormTextarea,
    CoreImage,
    CoreLabel,
		CoreForm,
		CoreFormMultiSelect
  },
  data() {
    return {
      status: false
    }
  },
  created() {
    let app = this;
    setTimeout(() => {app.status = !app.status }, 3000);
  }
}
</script>

<style scoped>

</style>