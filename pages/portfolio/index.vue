<template lang="pug">
  section.portfolio
    .container(v-for='post in posts', v-bind:key='post.fields.path')
      nuxt-link.wrapper(v-bind:to="{ name: 'portfolio-path', params: { path: post.fields.path }}")
        img(v-lazy='post.fields.image.fields.file.url')
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
  data (){
    return {
      posts: []
    }
  },
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CTF_PAGE_TYPE_ID,
      order: "sys.createdAt"
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
    .catch(console.error)
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  padding-left: 300px;
  column-count: 2;
  column-gap: 0;
  img {
    padding: 10px;
  }
}
</style>
