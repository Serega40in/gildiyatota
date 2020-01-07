<template>
    <v-container>
        <v-flex row wrap>
            <v-flex v-for="article in articles" v-bind:key="article.id">
                <!--<v-card :to="{name:'article',params:{id:article.id}}" class="mx-auto pa-3">
                    <v-card-title>{{article.title}}</v-card-title>
                    <v-card-subtitle>{{article.author}}</v-card-subtitle>
                    &lt;!&ndash;<p>{{article.date}}</p>&ndash;&gt;
                    <v-card-text v-html="article.bodytext.substring(0,80)+'...'"></v-card-text>
                </v-card>-->
                <v-card :to="{name:'article',params:{id:article.id}}" class="ma-2">
                    <div class="tl_page_wrap">
                        <div class="tl_page">
                            <main class="tl_article tl_article_editable">
                                <header class="tl_article_header">
                                    <h1 dir="auto">{{article.title}}</h1>
                                    <address dir="auto">
                                        <a rel="author">{{article.author}}</a>
                                        <time datetime="2020-01-06T22:24:08+0000">{{article.date.toDate() | formatDate}}</time>
                                    </address>
                                </header>
                                <article v-html="article.bodytext.substring(0,150)+' __________________'" id="_tl_editor" class="tl_article_content ql-container ql-disabled"></article>
                            </main>
                        </div>
                    </div>
                </v-card>
                <v-spacer></v-spacer>
            </v-flex>
        </v-flex>
    </v-container>
</template>

<script>
    import Vue from 'vue'
    import moment from 'moment'

    Vue.filter('formatDate', function(value) {
        if (value) {
            return moment(String(value)).format('LL')
        }
    })

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
