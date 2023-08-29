import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'

Vue.directive('phone', {
  bind(el) {
    el.oninput = function (e) {
      if (!e.isTrusted) {
        return
      }
      const x = this.value.replace(/[^\d]/g, '').match(/([\d]{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      if (!x[2] && x[1] !== '') {
        this.value = x[1] === '7' ? x[1] : '7' + x[1]
      } else {
        this.value = !x[3] ? x[1] + x[2] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? ' ' + x[4]: '') + (x[5] ? ' ' + x[5]: '')
      }
    }
  }
})

Vue.config.productionTip = false
Vue.use(Vuelidate)
new Vue({
  render: h => h(App),
}).$mount('#app')
