<template>
    <v-card flat>
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
                                v-model="newAuthor"
                                label="Автор"
                                required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <quill-editor v-model="newBodytext"></quill-editor>
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
                newBodytext: '',
                newSection: '',
                newTags: '',
                section: ['Новости', 'Статьи', 'Дневники'],
/*                editorOption: {
                    theme: 'bubble'
                }*/
            }
        },
        methods: {
            resetForm () {
                this.newTitle = '',
                this.newAuthor = '',
                this.newBodytext = '',
                this.newSection = '',
                this.newTags = ''
            },
            addArticle() {
                this.snackbar = true
                Vue.$db.collection('articles').add({
                    title: this.newTitle,
                    author: this.newAuthor,
                    bodytext: this.newBodytext,
                    section: this.newSection,
                    tags: this.newTags,
                    date: new Date()
                })
                this.resetForm()
            }
        },
        computed: {
            formIsValid () {
                return (
                    this.newTitle &&
                    this.newAuthor &&
                    this.newBodytext &&
                    this.newSection
                )
            }
        },
    }
</script>

<style scoped>

</style>
