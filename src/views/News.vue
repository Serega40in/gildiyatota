<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1>
                <v-container>
                    <v-layout row>
                        <v-flex xs6 md7>
                            <v-text-field label='Поиск' v-model="searchTerm"></v-text-field>
                        </v-flex>
                        <v-flex offset-1 xs5 md4>
                            <v-select label='Раздел' :items="section" v-model="section" multiple disabled></v-select>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex offset-sm1 offset-xs2 xs12 sm12 md12><h1>Новости Гильдии</h1></v-flex>
            <v-flex v-for="article in sortedList" v-bind:key="article.id" onsort="!article.date" xs12 sm10 md8 offset-sm1 offset-md-2>
                <v-card :to="{name:'article',params:{id:article.id}}" class="ma-1 mt-3">
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
                                <article v-html="article.bodytext.substring(0,170)+'.......'" id="_tl_editor" class="tl_article_content ql-container ql-disabled"></article>
                                <v-flex row wpar xs12 md12 sm12>
                                    <v-flex></v-flex>
                                    <v-spacer></v-spacer>
                                    <v-btn>Читать</v-btn>
                                </v-flex>
                            </main>
                        </div>
                    </div>
                </v-card>
                <!--<v-flex v-html="`<script async src='https://telegram.org/js/telegram-widget.js?7' data-telegram-post='gildiyatota/{{i}}' data-width='100%' data-userpic='false'></script>`">
                </v-flex>-->
                <v-spacer></v-spacer>
            </v-flex>
        </v-layout>
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
        data(){
            return {
                searchTerm: null,
                section: ['Новости'],
                sections: ['Новости', 'Статьи', 'Медитации', 'База Знаний'],
            }
        },
        computed: {
            articles() {
                return this.$store.getters.getArticles
            },
            filteredArticles(){
                let articles = this.articles
                if(this.searchTerm)
                    articles = articles.filter(b =>
                        b.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0
                        || b.bodytext.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0)

                if(this.section.length)
                    articles = articles.filter(b => this.section.filter(val => b.section.indexOf(val) !== -1).length > 0)

                return articles
            },
            sortedList() {
                let fa = this.filteredArticles
                let sortByDate = function (d1, d2) {return (d2.date > d1.date) ? 1 : -1;};
                return fa.sort(sortByDate);
            }
        }
    }
</script>

<style scoped>

</style>
