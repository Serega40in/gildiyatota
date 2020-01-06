<template>
    <v-container>
        <v-flex row wrap>
            <v-flex v-for="article in articles" v-bind:key="article.id" class="ma-5 pa-5">
                <v-card :to="{name:'article',params:{id:article.id}}" class="accent pa-3">
                    <h1>{{article.title}}</h1>
                    <p>{{article.author}}</p>
                    <p>{{article.date}}</p>
                    <p v-html="article.bodytext"></p>
                </v-card>
                <v-spacer></v-spacer>
            </v-flex>
        </v-flex>
    </v-container>
</template>

<script>
    export default {
        computed: {
            articles() {
                return this.$store.getters.getArticles
            }
        },
        props: {
            "article": {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
