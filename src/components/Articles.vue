<template>
    <v-container>
        <v-card class="accent">
            <v-flex v-for="article in articles" v-bind:key="article.id" class="ma-5 pa-5">
                <v-flex>
                    <h1>{{article.title}}</h1>
                    <p>{{article.author}}</p>
                    <p>{{article.date}}</p>
                    <p v-html="article.bodytext"></p>
                </v-flex>

            </v-flex>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        computed: {
            articles() {
                return this.$store.getters.getArticles
            }
        }
    }
</script>

<style scoped>

</style>
