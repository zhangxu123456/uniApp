import Vue from 'vue'
import App from './App'

import Json from './Json.js'

Vue.config.productionTip = false
Vue.prototype.$api = Json

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
