<template>
<v-container>
    <v-snackbar
            v-model="snackbar"
            absolute
            top
            right
            color="success"
    >
        <span>Статья создана!</span>
        <v-icon dark>mdi-checkbox-marked-circle</v-icon>
    </v-snackbar>
    <div class="tl_page_wrap">
        <div class="tl_page">
            <v-form ref="form" @submit.prevent="addArticle()">
            <main class="tl_article tl_article_editable tl_article_edit title_focused">
                <header class="tl_article_header">
                    <h1 dir="auto"></h1>
                    <address dir="auto">
                        <a rel="author"></a>
                        <time datetime=""></time>
                    </address>
                </header>
                <article id="_tl_editor" class="tl_article_content ql-container">
                        <v-textarea
                                class="empty tl_article_h1"
                                data-placeholder="Заголовок"
                                data-label="Title"
                                v-model="newTitle"
                                label="Заголовок"
                                auto-grow
                                rows="1"
                                row-height="38px"
                                required
                        ></v-textarea>
                        <v-textarea
                                tag="address"
                                data-placeholder="Ваше имя"
                                data-label="Author"
                                class="empty tl_article_address"
                                v-model="getUser.displayName"
                                label="Ваше имя"
                                auto-grow
                                rows="1"
                                row-height="15px"
                                height="18px"
                                required
                        ></v-textarea>
                    <quill-editor v-model="newBodytext"
                                  :options="editorOption"
                                  class="empty"></quill-editor>
                    <v-container fluid>
                        <v-row>
                            <v-col cols="5" sm="5" md="5" xs="5">
                                <v-select
                                        class="tl_article_address"
                                        v-model="newSection"
                                        :items="section"
                                        label="Раздел"
                                        multiple
                                        required
                                ></v-select>
                            </v-col>
                            <v-col cols="2" sm="2" md="2" xs="2"></v-col>
                            <v-col cols="5" sm="5" md="5" xs="5">
                                <v-text-field
                                        class="tl_article_address"
                                        v-model="newTags"
                                        label="Тэги"
                                        required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <div class="ql-clipboard" contenteditable="true" tabindex="-1"></div>
                    <div id="_tl_tooltip" class="tl_tooltip">
                        <div class="buttons">
                            <span class="button_hover"></span>
                            <span class="button_group">
                                <button id="_bold_button"></button>
                                <button id="_italic_button"></button>
                                <button id="_link_button"></button>
                            </span>
                            <span class="button_group">
                                <button id="_header_button"></button>
                            <button id="_subheader_button"></button>
                            <button id="_quote_button"></button>
                        </span>
                        </div>
                        <div class="prompt">
                            <span class="close"></span>
                            <div class="prompt_input_wrap"><input type="url" class="prompt_input"></div>
                        </div>
                    </div>
                    <div id="_tl_blocks" class="tl_blocks" style="top: 90px;">
                    <div class="buttons">
                        <button id="_image_button"></button>
                        <button id="_embed_button"></button>
                    </div>
                </div></article>

                <aside class="tl_article_buttons">
                    <div class="account account_top"></div>
                    <button id="_edit_button" class="button edit_button">Редактировать</button>
<!--                    <button id="_publish_button" class="button publish_button"
                            :disabled="!formIsValid"
                            text
                            color="primary"
                            type="submit">Опубликовать</button>-->
                    <v-btn
                            :disabled="!formIsValid"
                            text
                            color="primary"
                            type="submit"
                    >Опубликовать</v-btn>
                    <div class="account account_bottom"></div>
                    <div id="_error_msg" class="error_msg"></div>
                </aside>
            </main>
            </v-form>
        </div>
    </div>
</v-container>
</template>

<script>
    import Vue from 'vue'


    export default {
        data () {
            return {
                snackbar: false,
                newTitle: '',
                newAuthor: '',
                newBodytext: 'Ваша история...',
                newSection: '',
                newTags: '',
                section: ['Новости', 'Статьи', 'Медитации', 'База Знаний','Мероприятия'],
                editorOption: {
                    theme: 'bubble',
                    modules: {
                        toolbar: [
                            [{ header: [1, 2, false] }],
                            ['bold', 'italic', 'underline'],
                            ['image','video', 'link']
                        ]
                    },
                },
            }
        },
        methods: {
            resetForm () {
                this.newTitle = '',
                this.newBodytext = '',
                this.newSection = '',
                this.newTags = ''
            },
            addArticle() {
                this.snackbar = true
                Vue.$db.collection('articles').add({
                    title: this.newTitle,
                    author: this.getUser.displayName,
                    bodytext: this.newBodytext,
                    section: this.newSection,
                    tags: this.newTags,
                    date: new Date()
                })
                this.resetForm()
            }
        },
        computed: {
            getUser() {
                return this.$store.getters.getUser
            },
            formIsValid () {
                return (
                    this.newTitle &&
                    this.newBodytext &&
                    this.newSection
                )
            }
        },
    }
</script>

<style>
/*    .ql-container {

    }
    .ql-editor {
        min-height: 300px!important;
    }
    .ql-toolbar {
        border: 0px!important;
    }*/
    .quill-editor {
        border: 0px!important;
        min-height: 190px!important;
        border-radius: 20px!important;
    }

</style>
