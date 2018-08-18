<template>
  <div id="app">

    <navbar :current-comp="currentComp"></navbar>

    <div class="container">
      <component :is="currentComp"></component>
    </div>
  </div>
</template>


<script>
import navbar from '@/components/Navbar.vue';
import karta from '@/components/Map.vue';
import tabledata from '@/components/Table.vue';
import { bus } from '@/main.js';

export default {
  data() {
    return {
      currentComp: 'karta'
    };
  },

  created() {
      bus.$on('switchComp', comp => {
           this.currentComp = comp;
      })
  },

  components: {
    'navbar': navbar,
    'karta':karta,
    'tabledata':tabledata
  }
}
</script>

<style scoped>
body {
  background: black;
  height: 700px;
}
.container {
  width: 99%;
  border: 1px solid blue;
}
</style>
