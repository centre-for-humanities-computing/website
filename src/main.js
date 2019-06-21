import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import moment from 'moment'
import _ from 'lodash'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'vuetify/dist/vuetify.min.css'
import LoadScript from 'vue-plugin-load-script'

Vue.config.productionTip = false

Vue.use(LoadScript)

Vue.loadScript('IEShim.js')
  .then(() => {
    Vue.prototype.moment = moment
    Vue.prototype._ = _

    Vue.use(Vuetify)
    Vue.use(VueAwesomeSwiper)

    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    })
  })
  .catch((err) => {
    console.error(err)
  })
