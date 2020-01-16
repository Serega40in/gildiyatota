<template>
    <v-container>
        <div class="tl_page_wrap">
            <div class="tl_page">
                <main class="tl_article tl_article_editable">
                    <header class="tl_article_header">
                        <h1 dir="auto">Видео</h1>
                    </header>
                    <br>
                    <br>
                    <article id="_tl_editor" class="tl_article_content ql-container ql-disabled">
                        <div id="video"></div>
                        <div class="elfsight-app-6d0659be-7178-4a6e-9e5e-21b21e0be62b"></div>
                    </article>
                    <tel-comments></tel-comments>
                </main>

            </div>
        </div>
    </v-container>
</template>


<script>

    export default {
        created() {
            setTimeout(function () {
                let ckeditor = document.createElement('script');
                ckeditor.setAttribute('src', "https://apps.elfsight.com/p/platform.js");
                let divVideo = document.getElementById('video')
                divVideo.appendChild(ckeditor)
            }, 1)
        }

    }
</script>

<style>
.yottie-widget-inner a:last-child {
    display: none!important;
}
</style>
