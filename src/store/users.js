import Vue from 'vue'

export default{
    state: {
        users: [],
    },
    mutations: {
        SET_USERS(state, payload) {
            state.users = payload
        }
    },
    actions: {
        LOAD_USERS({commit}) {
            Vue.$db.collection('users')
                .get()
                .then(querySnapshot => {
                    let users = []
                    querySnapshot.forEach(s => {
                        const data = s.data()
                        let user = {
                            id: s.id,
                            uid: data.uid,
                            displayName: data.displayName,
                            email: data.email,
                            photoURL: data.photoURL,
                            providerData: data.providerData
                        }

                        users.push(user)

                    })
                    commit('SET_USERS', users)
                })
                .catch()
        }
    },
    getters: {
        getUsers: (state) => state.users
    }
}
