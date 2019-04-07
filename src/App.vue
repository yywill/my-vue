<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="container">
      <router-view></router-view>
    
    </div>
    
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name:'app',
  components:{
    NavBar
  }

}
</script>

<style>
* {
  font-family: "Popins";
  border-radius: 0px!important;
}
body {
  background-color: #FBF8F3
}
</style>
