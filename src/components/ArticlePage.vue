<template>
<v-container>
    <div>{{article.title}}</div>
    <v-spacer></v-spacer>
    <div>{{article.author}}</div>
    <v-spacer></v-spacer>
    <div v-html="article.bodytext"></div>
</v-container>
</template>

<script>
    export default {
        props: {
            'id': {
                type: String,
                required: true
            }
        },
        computed: {
            article(){
                return this.$store.getters.getArticles.find(a => a.id == this.id)
            }
        },
    }
</script>

<style scoped>

</style>
