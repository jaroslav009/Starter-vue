<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import AddList from './components/AddList.vue';
import List from './components/List.vue'
export default {
  name: 'app',
  components: {
    AddList,
    List,
  }
  
}
</script>
