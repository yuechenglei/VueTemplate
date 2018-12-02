import Vue from 'vue'
import Vuex from 'vuex'

// use: action -> mutation -> state -> view
// define: view -> state -> mutation -> action

Vue.use(Vuex)

// step1
const state = { // states
  lockIds: [],
  mouseoverIds: [],
  tooltip: {on: false, left: -100, top: -100, html: ''},
  testStatus: 'none', // 示例
  matrixSplitFlag: {},

}
const getters = {}

// step2
const types = { // define symbol, msg name
  UPDATE_TOOLTIP: 'UPDATE_TOOLTIP',
  UPDATE_LOCK_IDS: 'UPDATE_LOCK_IDS',
}

const mutations = { // define change state function (sync)
  [types.UPDATE_TOOLTIP] (state, payload) {
    state.tooltip = payload
  },
  [types.UPDATE_LOCK_IDS] (state, payload) {
    // must sync code
    state.lockIds = payload
  },
  [types.UPDATE_MATRIX_SPLIT_FLAG_STATUS] (state, payload) {
    // must sync code
    let oldObj = state['matrixSplitFlag']
    let newObj = {}
    Object.keys(oldObj).forEach(key => {
      newObj[key] = oldObj[key]
    })
    newObj[payload.basicId] = payload.val

    state['matrixSplitFlag'] = newObj
  },

}

// step 3
// asyn
const actions = { // define commit symbol with payload function (sync | async)
  updateTooltip ({commit}, payload) {
    commit(types.UPDATE_TOOLTIP, payload)
  },
  updateLockIds ({commit}, payload) {
    commit(types.UPDATE_LOCK_IDS, payload)
  },
  updateMatrixSplitFlag ({commit}, payload) {
    commit(types.UPDATE_MATRIX_SPLIT_FLAG_STATUS, payload)
  },

}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
