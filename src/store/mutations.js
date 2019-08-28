import { SET_ACTIVE_TAG } from './mutation-types'

const mutations = {
  [SET_ACTIVE_TAG](state, {routeName, value}) {
    state.activeTag = value
  }
}

export default mutations
