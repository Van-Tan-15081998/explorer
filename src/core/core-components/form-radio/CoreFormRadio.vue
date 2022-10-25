<template>
  <div>
		<div class="toggle-wrapper">
			<div class="toggle-checkcross-no-yes">
				<input id="toggle-checkcross-no-yes" type="checkbox"/>
				<label class="toggle-item" for="toggle-checkcross-no-yes">
					<div class="check"></div>
				</label>
			</div>
			<div class="name">No & Yes</div>
		</div>
  </div>
</template>

<script>
export default {
  name: "CoreFormRadio"
}
</script>

<style scoped lang="scss">

//body {
//  background: #2e394d;
//  display: flex;
//  flex-wrap: wrap;
//  justify-content: center;
//  align-items: center;
//}

// * {
// 	box-sizing: border-box;
// 	&:before, &:after {
// 		content: '';
// 		position: absolute;
// 	}
// }

input {
  height: 20px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 20px;
}

.toggle-wrapper {
  flex: 1 1 calc(100% / 3);
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  @media (max-width: 960px) {
    flex: 1 1 calc(100% / 2);
  }
  @media (max-width: 700px) {
    flex: 1 1 100%;
  }
  &:nth-child(1) {
    // background: #dec387;
    background-color: #1A1A1A;
  }
  &:nth-child(2) {
    // background: #de8797;
    background-color: #1A1A1A;
  }
  &:nth-child(3) {
    // background: #87aade;
    background-color: #1A1A1A;
  }
}

.name {
  width: 80%;
  position: absolute;
  font: 500 14px 'Rubik', sans-serif;
  letter-spacing: .5px;
  text-transform: uppercase;
  text-shadow: 0 1px 1px rgba(0,0,0,0.4);
  bottom: 15px;
  right: 15px;
  text-align: right;
}

.toggle {
  position: relative;
  display: inline-block;
}

label.toggle-item {
  width: 60px;
  background: #2e394d;
  height: 25px;
  display: inline-block;
  border-radius: 50px;
  margin: 10px;
  position: relative;
  transition: all .3s ease;
  transform-origin: 20% center;
  cursor: pointer;

  box-sizing: border-box;
  &:before, &:after {
    content: '';
    position: absolute;
  }

  &:before {
    display: block;
    transition: all .2s ease;
    width: 10px;
    height: 10px;
    top: 2px;
    left: 2px;
    border-radius: 2em;
    border: 2px solid #88cf8f;
    transition: .3s ease;
  }
}

.normal {
  label {
    background: #af4c4c;
    border: .5px solid rgba(117, 117, 117, 0.31);
    box-shadow: inset 0px 0px 4px 0px rgba(0,0,0,0.2), 0 -3px 4px rgba(0,0,0,0.15);
    &:before {
      border: none;
      width: 20px;
      height: 20px;
      box-shadow: inset 0.5px -1px 1px rgba(0, 0, 0, 0.35);
      background: #fff;
      transform: rotate(-25deg);
    }
    &:after {
      background: transparent;
      height: calc(100% + 8px);
      border-radius: 30px;
      top: -5px;
      width: calc(100% + 8px);
      left: -4px;
      z-index: 0;
      box-shadow: inset 0px 2px 4px -2px rgba(0,0,0,0.2), 0px 1px 2px 0px rgba(151, 151, 151, 0.2);
    }
  }
}

#normal:checked + label {
  background: #4caf50;
  &:before {
    left: 35px;
  }
}

.transparent {
  label {
    background: transparent;
    border: 3px solid #fff;
    height: 33px;
    &:before {
      border: 3px solid rgb(255, 136, 0);
      width: 18px;
      height: 18px;
      top: 2px;
      left: 2px;
      background: #fff;
    }
  }
}

#transparent:checked + label {
  &:before {
    transform: translateX(26px);
  }
}

.checkcross {
  label:before {
    content: none;
  }
  .check {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    background: #8BC34A;
    transition: .4s ease;
    top: 2px;
    left: 2px;

    box-sizing: border-box;
    &:before, &:after {
      content: '';
      position: absolute;
    }

    &:before, &:after {
      height: 2px;
      border-radius: 10px;
      background: #fff;
      transition: .4s ease;
    }
    &:before {
      width: 10px;
      transform: rotate(-45deg) translate(-2px, 12px);
    }
    &:after {
      width: 6px;
      transform: rotate(45deg) translate(11px, 5px);
    }
  }
}

#checkcross:checked + label {
  .check {
    left: 38px;
    transform: rotate(360deg);
    background: #c34a4a;
    &:before {
      width: 14px;
      transform: rotate(-45deg) translate(-4px, 8px);
    }
    &:after {
      width: 14px;
      transform: rotate(45deg) translate(8px, 4px);
    }
  }
}


// Yes & No

.toggle-checkcross-yes-no {
  position: relative;
  display: inline-block;

  label.toggle-item {
    width: 60px;
    background: #2e394d;
    height: 30px;
    display: inline-block;
    border-radius: 50px;
    margin: 10px;
    position: relative;
    transition: all .3s ease;
    transform-origin: 20% center;
    cursor: pointer;
    box-sizing: border-box;

    &:before, &:after {
      content: none;
    }
  }

  .check {
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: absolute;
    background: #8BC34A;
    transition: .4s ease;
    top: 3px;
    left: 3px;

    box-sizing: border-box;
    &:before, &:after {
      content: '';
      position: absolute;
    }

    &:before, &:after {
      height: 2px;
      border-radius: 10px;
      background: #fff;
      transition: .4s ease;
    }
    &:before {
      width: 12px;
      transform: rotate(-45deg) translate(-2px, 14px);
    }
    &:after {
      width: 8px;
      transform: rotate(45deg) translate(12px, 6px);
    }
  }
}


#toggle-checkcross-yes-no:checked + label {
  .check {
    left: 33px;
    transform: rotate(360deg);
    background: #c34a4a;
    &:before {
      width: 15px;
      transform: rotate(-45deg) translate(-4px, 11px);
    }
    &:after {
      width: 15px;
      transform: rotate(45deg) translate(11px, 4px);
    }
  }
}

// No & Yes
.toggle-checkcross-no-yes {
  position: relative;
  display: inline-block;

  label.toggle-item {
    width: 60px;
    background: #2e394d;
    height: 30px;
    display: inline-block;
    border-radius: 50px;
    margin: 10px;
    position: relative;
    transition: all .3s ease;
    transform-origin: 20% center;
    cursor: pointer;
    box-sizing: border-box;

    &:before, &:after {
      content: none;
    }
  }

  .check {
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: absolute;
    background: #c34a4a;
    transition: .4s ease;
    top: 3px;
    left: 3px;

    box-sizing: border-box;
    &:before, &:after {
      content: '';
      position: absolute;
    }

    &:before, &:after {
      height: 2px;
      border-radius: 10px;
      background: #fff;
      transition: .4s ease;
    }
    &:before {
      width: 15px;
      transform: rotate(-45deg) translate(-4px, 11px);
    }
    &:after {
      width: 15px;
      transform: rotate(45deg) translate(11px, 4px);
    }
  }
}


#toggle-checkcross-no-yes:checked + label {
  .check {
    left: 33px;
    transform: rotate(360deg);
    background: #8BC34A;

    &:before {
      width: 12px;
      transform: rotate(-45deg) translate(-2px, 14px);
    }
    &:after {
      width: 8px;
      transform: rotate(45deg) translate(12px, 6px);
    }
  }
}

// Checkbox

.toggle-checkbox {
  position: relative;
  display: inline-block;

  label.toggle-item-checkbox {
    width: 24px;
    height: 24px;
    background: #2e394d;

    margin: 10px;
    position: relative;
    transition: all .1s ease;
    transform-origin: 20% center;
    cursor: pointer;
    box-sizing: border-box;
    overflow: hidden;

    .check {
      width: 20px;
      height: 20px;
      border: 2px solid white;
      border-radius: 5px;
      overflow: hidden;

      &:before, &:after {
        content: '';
        position: absolute;
        height: 2px;
        border-radius: 10px;
        background: #fff;
        transition: .1s ease;
        opacity: 0;
      }
      &:before {
        width: 12px;
        transform: rotate(0deg) translate(5px, 12px);
      }
      &:after {
        width: 8px;
        transform: rotate(0deg) translate(5px, 5px);
      }
    }
  }
}


#toggle-checkbox:checked + label {
  .check {
    &:before, &:after {
      opacity: 1;
    }

    &:before {
      width: 12px;
      transform: rotate(-45deg) translate(-2px, 12px);
    }
    &:after {
      width: 8px;
      transform: rotate(45deg) translate(10px, 6px);
    }
  }
}
</style>