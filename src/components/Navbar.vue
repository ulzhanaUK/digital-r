<template>
  <div>
 <nav class="uk-navbar-container" uk-navbar>
      <button
        style="width:50%"
        class="switch notes"
        @click="switchComponent('karta')"
        :disabled="currentComp === 'karta'"
      >Map</button>
      <button
        style="width:50% "
        class="switch messages"
        @click="switchComponent('tabledata')"
        :disabled="currentComp === 'tabledata'"
      >Holes</button>

</nav>
</div>
</template>

<script>
import { bus } from '../main.js';
export default {
    props: {
        currentComp: {
            type: String,
            required: true
        }
    },

    methods: {
        switchComponent(comp) {
            bus.$emit('switchComp', comp);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  padding: 15px;
}
body {
  background: black;
}
.uk-navbar-container:not(.uk-navbar-transparent) {
    background: #000000;
}
button.switch {
  background: none;
  border: 1px solid black;
  margin: 0;
  cursor: pointer;
}

button.switch[disabled='disabled'] {
  background-color: #6621ca;
  color: white;
  border-color: #6621ca;
}

button.switch:not([disabled='disabled']):hover {
  background-color: black;
  border-color: #6621ca;
  color: lightgray;
}

button.messages {
  border-color: #6621ca;
  color: white;
}


button.notes {
  border-color: #6621ca;
  color: white;
}
</style>
