import firebase from 'firebase'

export default {
    state: {
        user: {
            isAuthenticated: false,
            uid: null,
            displayName: '',
            email: '',
            photoURL: '',
            isAnonymous: true,
            providerData: ''
        }
    },
    mutations: {
        SET_USER(state, payload) {
            state.user.isAuthenticated = true,
            state.user.uid = payload.uid,
            state.user.displayName = payload.displayName,
            state.user.email = payload.email,
            state.user.photoURL = payload.photoURL,
            state.user.isAnonymous = payload.isAnonymous,
            state.user.providerData = payload.providerData
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
