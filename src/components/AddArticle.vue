<template>
    <v-card class="text-center pa-2 ma-5">
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
        <v-form ref="form" @submit.prevent="addArticle()">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field
                                v-model="newTitle"
                                label="Заголовок"
                                required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field
                                v-model="getUser.displayName"
                                label="Автор"
                                required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <quill-editor v-model="newBodytext"
                                      :options="editorOption"></quill-editor>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-select
                                v-model="newSection"
                                :items="section"
                                label="Раздел"
                                multiple
                                required
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field
                                v-model="newTags"
                                label="Тэги"
                                required
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
            <v-card-actions>
                <v-btn
                        :disabled="!formIsValid"
                        text
                        color="primary"
                        type="submit"
                >Создать</v-btn>
            </v-card-actions>
        </v-form>

    </v-card>
</template>

<script>
    import Vue from 'vue'
/*    import Quill from 'quill/core';

    import Bubble from 'quill/themes/bubble';

    import Bold from 'quill/formats/bold';
    import Italic from 'quill/formats/italic';
    import Header from 'quill/formats/header';

    import "quill/dist/quill.core.css"


    Quill.register({
        'themes/bubble': Bubble,
        'formats/bold': Bold,
        'formats/italic': Italic,
        'formats/header': Header
    });*/


    export default {
/*        Quill,*/
        data () {
            return {
                snackbar: false,
                newTitle: '',
                newAuthor: '',
                newBodytext: `<h2><span class="ql-font-monospace">Напишите здесь вашу историю...</span></h2>`,
                newSection: '',
                newTags: '',
                section: ['Новости', 'Статьи', 'Медитации', 'База Знаний'],
                editorOption: {
                    theme: 'snow'
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
    .ql-container {
        border: none!important;
        border-top: 1px solid #ececec!important;
    }
    .ql-editor {
        min-height: 300px!important;
    }
    .ql-toolbar {
        border: 0px!important;
    }
    .quill-editor {
        border: 1px solid #ececec!important;
        min-height: 300px!important;
        border-radius: 20px!important;
    }
</style>
