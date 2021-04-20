<template>
  <div style="border-radius: 4px; border: solid 1px #DADADA; padding: 24px;">
    <div v-if="step === 1">
      <h2>STEP 1</h2>

      <p>
        Details about the game: <b>{{name}}</b> (ID: <b>{{id}}</b>)
      </p>
    </div>

    <div v-else-if="step === 2">
      <h2>STEP 2</h2>

      <p>
        Some other details...
      </p>
    </div>

    <div v-else-if="step === 3">
      <h2>STEP 3</h2>

      <div :class="isMobile ? 'silver mob-grid-layout': 'silver desk-grid-layout'">
        <div class="box aqua"><h1>1</h1></div>
        <div class="box maroon"><h1>2</h1></div>
        <div class="box orange"><h1>3</h1></div>
        <div class="box purple"><h1>4</h1></div>
      </div>
    </div>

    <div style="display: flex; justify-content: center; margin-top: 48px;">
      <button class="cp" @click="step -= 1" :disabled="step === 1" style="margin-right: 12px;">Previous</button>
      <button class="cp" @click="step += 1" :disabled="step === 3">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameDetail',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      step: 1,
    }
  },
  computed: {
    isMobile() {
      return /iPhone|iPad|iPod|Android|webOS|Windows Phone/i.test(navigator.userAgent)
    }
  }
}
</script>

<style scoped>
.box {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.silver {
  background-color: #DDD;
  padding: 24px;
  display: grid;
  justify-items: stretch;
}
.silver.desk-grid-layout {
  grid-template: 
      "aqua maroon"
      "orange purple";
}
.silver.mob-grid-layout {
  grid-template: 
      "aqua purple"
      "maroon maroon"
      "orange orange";
}
.aqua {
  background-color: #7FDBFF;
  grid-area: aqua;
}
.maroon {
  background-color: #85144b;
  grid-area: maroon;
}
.orange {
  background-color: #FF851B;
  grid-area: orange;
}
.purple {
  background-color: #B10DC9;
  grid-area: purple;
}
h1 {
  color: white;
}
</style>
