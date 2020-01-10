<template>
  <v-app id="inspire">
    <app-header></app-header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import AppHeader from "./components/AppHeader"
  import AppFooter from "./components/AppFooter"
  export default {
    components:{
      AppHeader,
      AppFooter
    }
  }
</script>
<style>
/*  .theme--light.v-application {
    background: radial-gradient(rgba(23, 96, 112, 0.4117647058823529), rgba(222, 208, 47, 0.65))!important;
  }*/
  .theme--light.v-application {
    background: radial-gradient(rgba(35, 143, 166, 0.35), rgba(229, 214, 43, 0.59)) !important;
  }
</style>
