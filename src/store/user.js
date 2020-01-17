import firebase from 'firebase'
import Vue from 'vue'

export default {
    state: {
        user: {
            id: '',
            isAuthenticated: false,
            uid: null,
            displayName: 'Анонимус',
            email: 'aninim@none.ru',
            photoURL: 'https://firebasestorage.googleapis.com/v0/b/gildiyatota.appspot.com/o/Tribal%20Marijuana%20Leaf%20Royalty%20Free%20Vector%20Image.jpg?alt=media&token=de2f5e30-73af-4ce0-9fb3-2c717dba6d41',
            isAnonymous: true,
            providerData: ''
        }
    },
    mutations: {
        SET_USER(state, payload) {
            state.user.isAuthenticated = true
            Vue.$db.collection('users').where('uid','==',payload.uid).get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(s => {
                        const data = s.data()
                        state.user.id = s.id,
                        state.user.uid = data.uid,
                        state.user.displayName = data.displayName,
                        state.user.email = data.email,
                        state.user.photoURL = data.photoURL,
                        state.user.isAnonymous = data.isAnonymous,
                        state.user.providerData = data.providerData
                        })
                        if (state.user.uid !== payload.uid) {
                            state.user.uid = payload.uid,
                            state.user.displayName = payload.displayName,
                            state.user.email = payload.email,
                            state.user.photoURL = payload.photoURL,
                            state.user.isAnonymous = payload.isAnonymous,
                            state.user.providerData = payload.providerData
                            if(state.user.isAnonymous) {return}
                            Vue.$db.collection('users').add({
                                uid: payload.uid,
                                displayName: payload.displayName,
                                email: payload.email,
                                photoURL: payload.photoURL,
                                providerData: payload.providerData
                            })

                        }
                    })
                    .catch()

        },
        UNSET_USER(state) {
            state.user = {
                isAuthenticated: false,
                uid: null,
                displayName: '',
                email: '',
                photoURL: '',
                isAnonymous: true,
                providerData: ''
            }
        }
    },
    actions: {
/*        SIGNUP({commit},payload){
            commit('SET_PROCESSING', true)
            commit('CLEAR_ERROR')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    commit('SET_PROCESSING', false)
                })
                .catch(function(error) {
                    commit('SET_PROCESSING', false)
                    commit('SET_ERROR', error.message)

                });
        },
        SIGNIN({commit},payload){
            commit('SET_PROCESSING', true)
            commit('CLEAR_ERROR')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    commit('SET_PROCESSING', false)
                })
                .catch(function(error) {
                    commit('SET_PROCESSING', false)
                    commit('SET_ERROR', error.message)

                });
        },*/
        SIGNOUT() {
            firebase.auth().signOut();
        },
        STATE_CHANGED({commit}, payload){
            if (payload){
                commit('SET_USER', payload)
            } else {
                commit('UNSET_USER')
            }

        }
    },
    getters: {
        isUserAuthenticated: (state) => state.user.isAuthenticated,
        getUser: (state) => state.user
    }
}
