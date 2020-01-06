<template>
    <v-content>
        <v-container
                class="fill-height"
                fluid
        >
            <section id="firebaseui-auth-container"></section>
        </v-container>
    </v-content>
</template>

<script>
    import firebase from "firebase"
    import * as firebaseui from 'firebaseui'
    import "firebaseui/dist/firebaseui.css"

    export default {
        mounted() {
            let uiConfig = {
                signInSuccessUrl: '/successauth',
                signInOptions: [
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.EmailAuthProvider.PROVIDER_ID
                ]
            };
            let ui = new firebaseui.auth.AuthUI(firebase.auth());
            ui.start('#firebaseui-auth-container', uiConfig);
        },
    }
</script>

<style scoped>

</style>
