import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./router.js";

import { createStore } from 'vuex'

const store = createStore({
    state() {
      return {
        theme:"white",
      }
    },
    mutations: {
        toggle(state, payload) {
          state.theme = payload;
        }
    },
  })

createApp(App)
.use(router)
.use(store)
.mount('#app')
