import Vue from 'vue'
import Vuex from 'vuex'
import articlesModule from '../store/articles'
import userModule from '../store/user'
import usersModule from '../store/users'
import generalModule from '../store/general'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        generalModule,
        userModule,
        articlesModule,
        usersModule
    }
})
