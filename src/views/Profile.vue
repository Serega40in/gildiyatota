<template>
<v-container>
    <v-card class="text-center pa-2">
        <h1 class="mb-10">Профиль</h1>
        <v-container class="text-center">
            <v-flex row wrap xs12 md12 class="ma-auto pa-7">
                <v-row  xs6 md6>
                    <v-col cols="12" sm="6">
                        <form action="submit">
                            <v-text-field v-model="user.displayName" label="Имя"></v-text-field>
                            <v-text-field v-model="user.email" label="Email"></v-text-field>
                            <v-btn @click="submit">Сохранить</v-btn>
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
    import firebase from 'firebase'
    export default {
        data: () => ({
            displayName: 'Анонимус',
            email: 'aninim@none.ru',
            photoURL: 'https://firebasestorage.googleapis.com/v0/b/gildiyatota.appspot.com/o/Tribal%20Marijuana%20Leaf%20Royalty%20Free%20Vector%20Image.jpg?alt=media&token=de2f5e30-73af-4ce0-9fb3-2c717dba6d41',
            isAnonymous: true,
            uid: '',
            providerData: '',
        }),
        computed: {
            user() {
                let user = this.$store.getters.getUser
                if(user.isAnonymous == true) {
                    user.displayName = this.displayName,
                    user.email = this.email,
                    user.photoURL = this.photoURL
                }
                if(user.photoURL == '')
                    user.photoURL = this.photoURL
                return user
            }
        },
        methods: {
            submit(){
                let user = firebase.auth().currentUser;

                user.updateProfile({
                    displayName: this.displayName,
                    photoURL: this.photoURL,
                    email: this.email
                }).then(function() {
                    // Update successful.
                })
            }
        }
    }
</script>

<style scoped>

</style>
