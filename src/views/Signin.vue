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
/*        state: {
            user: {
                isAuthenticated: false,
                uid: null
            }
        },*/
        mounted() {
            let uiConfig = {
/*                callbacks: {
                    signInSuccessWithAuthResult: function(authResult, ) {
                        this.state.user.uid = authResult.user
                        this.state.user.isUserAuthenticated = true
                        alert(authResult.user)
                        // Do something with the returned AuthResult.
                        // Return type determines whether we continue the redirect automatically
                        // or whether we leave that to developer to handle.
                        return true;
                    },
                },*/
                signInSuccessUrl: '/profile',
                signInOptions: [
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
                ]
            };
/*            let ui = new firebaseui.auth.AuthUI(firebase.auth());

            ui.start('#firebaseui-auth-container', uiConfig);*/

            let ui = firebaseui.auth.AuthUI.getInstance();
            if (!ui) {
                ui = new firebaseui.auth.AuthUI(firebase.auth());
            }
            ui.start('#firebaseui-auth-container', uiConfig);
            this.$store.getters.isUserAuthenticated = true
        }
    }

</script>

<style scoped>

</style>
