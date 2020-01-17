<template>
    <v-container>
        <v-card class="text-center pa-2">
            <h1 class="mb-10">{{user.displayName}}</h1>
            <v-container class="text-center">
                <v-flex row wrap xs12 md12 class="ma-auto pa-7">
                    <v-row  xs6 md6>
                        <v-col cols="12" sm="6">
                            <form action="submit">
                                <v-text-field disabled v-model="user.displayName" label="Имя"></v-text-field>
                                <v-text-field disabled v-model="user.email" label="Email"></v-text-field>
                            </form>
                        </v-col>
                    </v-row>
                    <v-row class="text-center" xs6 md6>
                        <v-avatar class="ma-auto" primary size="150">
                            <img :src="user.photoURL" alt="user photo">
                        </v-avatar>
                    </v-row>
                </v-flex>
            </v-container>
        </v-card>
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
            user(){
                return this.$store.getters.getUsers.find(a => a.id == this.id)
            }
        }
    }
</script>

<style scoped>

</style>
