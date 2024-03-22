const state = {
  theme: "idk",
};

const getters = {
  get_theme: (state) => {
    return state.theme;
  },
};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};