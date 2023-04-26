<template>
  <!--eslint - disable-->
  <navbar></navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar"

export default {
  components: {
    Navbar
  }
}
</script>

<style>
.app {
  margin: 20px 20px;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>