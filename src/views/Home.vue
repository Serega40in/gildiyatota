<template>
  <v-container class="home" grid-list-md>
    <h1>HomePage</h1>
    <articles></articles>
  </v-container>
</template>

<script>
import Articles from '../components/Articles'
export default {
  name: 'home',
  components: {
    Articles
  }
}
</script>
