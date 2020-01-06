import Vue from 'vue'
import Vuex from 'vuex'
import articlesModule from '../store/articles'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        articlesModule
    }
})
