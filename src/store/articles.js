import Vue from 'vue'

export default{
    state: {
        articles: [],
    },
    mutations: {
        SET_ARTICLES(state, payload) {
            state.articles = payload
        }
    },
    actions: {
        LOAD_ARTICLES({commit}) {
            Vue.$db.collection('articles')
                .get()
                .then(querySnapshot => {
                    let articles = []
                    querySnapshot.forEach(s => {
                        const data = s.data()
                        let article = {
                            id: s.id,
                            title: data.title,
                            author: data.author,
                            bodytext: data.bodytext,
                            date: data.date
                        }

                        articles.push(article)

                    })
                    commit('SET_ARTICLES', articles)
                })
                .catch()
        }
    },
    getters: {
        getArticles: (state) => state.articles
    }
}
