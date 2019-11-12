import Vue from 'vue'
import Land from './LandingPage.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios);

export const riotAPI = new Vue({
  data: {
    curPatch: 'http://ddragon.leagueoflegends.com/cdn/8.24.1/'
  }
})

new Vue({
  render: h => h(Land),
}).$mount('#land')