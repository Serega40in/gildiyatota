<template>
<v-container>
    <v-card class="text-center pa-2">
        <h1>Профиль</h1>
        <v-container class="text-center">
            <v-flex row wrap xs12 md12 class="ma-auto">
                <v-row xs6 md6>
                    <v-col cols="12" sm="6">
                        <v-text-field v-text="user.displayName" label="Имя"></v-text-field>
                        <v-text-field v-text="user.email" label="Email"></v-text-field>
                    </v-col>
                </v-row>
            </v-flex>
        </v-container>
    </v-card>
</v-container>
</template>

<script>
    export default {
        data: () => ({
            displayName: 'sdf',
            email: 'ghvg@bgvh.ru',
            photoURL: '',
            isAnonymous: true,
            uid: '',
            providerData: '',
        }),
        computed: {
            user() {
                return this.$store.getters.getUser
            }
        }
        /*created() {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    // User is signed in.
                    this.displayName = user.displayName;
                    this.email = user.email;
                    this.photoURL = user.photoURL;
                    this.isAnonymous = user.isAnonymous;
                    this.uid = user.uid;
                    this.providerData = user.providerData;
                    // ...
                } else {
                    // User is signed out.
                    // ...
                }
            })
        }*/
    }
</script>

<style scoped>

</style>
