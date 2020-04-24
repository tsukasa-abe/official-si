export const strict = false
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export const state = () => ({
  posts: [],
  images: []
})

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
    state.images = payload
  }
}

export const actions = {
  async getPosts({ commit }) {
    await client.getEntries({
      content_type: process.env.CTF_PAGE_TYPE_ID,
      order: 'sys.createdAt',
    }).then(entries =>
      commit('setPosts', entries.items)
    ).catch(console.error)
  }
}
