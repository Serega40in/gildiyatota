<template>
<v-container>
    <div class="tl_page_wrap">
        <div class="tl_page">
            <main class="tl_article tl_article_editable">
                <header class="tl_article_header">
                    <h1 dir="auto">{{article.title}}</h1>
                    <address dir="auto">
                        <a rel="author">{{article.author}}</a>
                        <time datetime="2020-01-06T22:24:08+0000">January 07, 2020</time>
                    </address>
                </header>
                <article v-html="article.bodytext" id="_tl_editor" class="tl_article_content ql-container ql-disabled"></article>

            </main>
        </div>
    </div>
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

<style>
    .ql-editor .ql-video.ql-align-center {
        width: 800px;
        height: 460px;
    }
</style>
