import { createStore } from 'vuex';
import get_theme from './modules/get_theme'; // Import your module

const store = createStore({
  modules: {
    get_theme
  }
});

export default store;