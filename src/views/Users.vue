<template>
    <v-container>
        <v-layout row wrap>
            <v-flex v-for="user in users" v-bind:key="user.id" xs12 sm10 md8 offset-sm1 offset-md-2>
                <v-card :to="{name:'user',params:{id:user.id}}" class="ma-1 mt-3">
                    <div class="tl_page_wrap">
                        <div class="tl_page">
                            <main class="tl_article tl_article_editable">
                                <v-flex row wrap xs12 md12 class="ma-auto pa-7">
                                    <v-row xs12 md12 sm12>
                                        <header class="tl_article_header">
                                            <h1 dir="auto">{{user.displayName}}</h1>
                                            <address dir="auto">
                                                <a rel="author">{{user.email}}</a>
                                            </address>
                                        </header>
                                    <v-spacer></v-spacer>
                                        <v-avatar class="ma-auto" primary size="150">
                                            <img :src="user.photoURL" alt="user photo">
                                        </v-avatar>
                                    </v-row>
                                    <v-flex xs12 md12 sm12 class="mt-5">
                                        <v-spacer></v-spacer>
                                        <v-btn>Смотреть профиль</v-btn>
                                    </v-flex>
                                </v-flex>
                            </main>
                        </div>
                    </div>
                </v-card>
                <v-spacer></v-spacer>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    export default {
        computed: {
            users() {
                return this.$store.getters.getUsers
            }
        }
    }
</script>

<style scoped>

</style>
