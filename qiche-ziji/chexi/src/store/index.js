import Vue from 'vue'
import Vuex from 'vuex'
import creareLogger from 'vuex/dist/logger';

// 引入子模块
import home from './modules/home'
import Zxdj from './modules/Zxdj'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    Zxdj
  },
  plugins: [creareLogger()]
})
