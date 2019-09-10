import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Article from './components/Article.vue'
// import Teaching from './components/home/Teaching.vue'
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/teaching',
    //   name: 'teaching',
    //   component: Teaching
    // }
  ].concat(store.state.articles.map((a) => {  
    console.log("path should be ", '/' + a.article_link)
    return { 
      path: '/' + a.article_link,
      name: a.article_link,
      component: Article,
      props: { static_page: a.article_source }
    }
  }))
})
