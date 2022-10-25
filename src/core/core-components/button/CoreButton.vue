<template>
  <div
    @click="onClick()"
    class="core-button base-button"
     :style="
       {
         'width': width + 'px' ,
         'height': height + 'px',
         'color' : textColor,
         'background-color' : backgroundColor,
         'border-radius' : borderRadius + 'px',
         'margin' : margin + 'px',
         'margin-left' : marginLeft + 'px',
         'margin-top' : marginTop + 'px',
         'margin-right' : marginRight + 'px',
         'margin-bottom' : marginBottom + 'px',
         'padding' : padding + 'px',
         'padding-left' : paddingLeft + 'px',
         'padding-top' : paddingTop + 'px',
         'padding-right' : paddingRight + 'px',
         'padding-bottom' : paddingBottom + 'px',
         'font-size' : fontSize,
         'box-shadow' : boxShadow,
         'border-color' : borderColor
        }"
  >
    <div v-if="type==='base'">
      <button>Base Button</button>
    </div>
    <div v-else-if="type==='normal'">
      <div>
        {{ text }}
      </div>
    </div>

    <div v-else-if="type==='loading'" class="spinner-border"
         :style="
         {'width': iconSize + 'px' ,
         'height': iconSize + 'px',
         'color' : iconColor,
          }" role="status">
      <span class="sr-only">Loading...</span>
    </div>

    <div v-else-if="type==='icon-text'">
      <font-awesome-icon v-if="leftIcon" :icon="leftIcon"/>
      {{ text }}
      <font-awesome-icon v-if="rightIcon" :icon="rightIcon"/>
    </div>

    <font-awesome-icon v-else-if="type==='icon'" :icon="icon"/>

  </div>
</template>

<script>
export default {
  name: "CoreButton",
  props: {
    type: String,

    // Detail config
    animation: String,
    width: Number,
    height: Number,
    margin: Number,
    marginLeft: Number,
    marginTop: Number,
    marginRight: Number,
    marginBottom: Number,
    padding: Number,
    paddingLeft: Number,
    paddingTop: Number,
    paddingRight: Number,
    paddingBottom: Number,
    backgroundColor: String,
    borderColor: String,
    borderRadius: Number,
    boxShadow: String,
    disable: Boolean,
    icon: String,
    leftIcon: String,
    rightIcon: String,
    iconColor: String,
    iconSize: Number,
    textColor: String,
    onClick: Function,
    text: String,
    fontSize: Number,
  }
}
</script>

<style scoped lang="scss">
.core-button {
  &.base-button {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  cursor: pointer;
  border: 1px solid black;
  padding: 2px;
  margin: 2px;
  border-radius: 2px;
  box-shadow: #CCCCCC 2px 2px 2px 0px;
  background-color: grey;
  color: whitesmoke;
  user-select: none;

	&.base-decoration {
		background-color: #4EB0FF;
		padding: 5px 10px;
		color: #2C2C2C;

		&:hover {
			background-color: #F5C500;
			color: #2C2C2C;
		}
	}

  &:hover {
    background-color: white;
    color: grey;
  }
  &:active {
    transform: translateY(2px);
  }

  .spinner-border {
    display: flex !important;
  }

}
</style>