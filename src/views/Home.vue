<template>
  <v-container class="home" grid-list-md>
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
