import Vue from 'vue'
// import router from './routes/index.js'
import App from './App.vue'
import VueNoty from "vuejs-noty"
import "vuejs-noty/dist/vuejs-noty.css"
// import Foo from './components/Foo.vue'
// import Bar from './components/Bar.vue'

Vue.config.productionTip = false

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueNoty)


import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Home from './views/Home.vue'
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/home', component: Home},
]

// // 3. 创建 router 实例，然后传 `routes` 配置
// // 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// router.start(App,"router-view")


const auth = localStorage.getItem('auth');


new Vue({
    router,
    data:{
        auth: auth? JSON.parse(auth) : {}
    },
    render: h => h(App),
}).$mount('#app')