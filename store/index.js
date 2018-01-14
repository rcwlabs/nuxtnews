import axios from '../plugins/axios'

export const state = () => ({
  items: []
})

export const mutations = {
  setItems (state, items) {
    state.items = items
  }
}
export const actions = {
  async LOAD_ITEMS ({ commit }, dataUrl) {
    /*
      / -> topstories.json
      /new -> newstories.json
      /ask -> askstories.json
    */

    const response = await axios.get(dataUrl)
    const ids = response.data
    const tenIds = ids.slice(0, 10)

    const itemsPromises = tenIds.map(itemId => axios.get(`item/${itemId}.json`))
    const itemsResponses = await Promise.all(itemsPromises)
    const items = itemsResponses.map(res => res.data)

    commit('setItems', items)
  }
}
