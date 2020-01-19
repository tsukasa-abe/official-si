<template>
  <section class="portfolio">
    <div class="container" v-for="post in posts"
      v-bind:key="post.fields.path">
      <nuxt-link v-bind:to="{ name: 'portfolio-path', params: { path: post.fields.path }}" class="wrapper">
        <img v-bind:src="post.fields.image.fields.file.url"/>
      </nuxt-link>
    </div>
  </section>
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
// .container {
//   margin: 0 auto;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// }
.portfolio {
  padding-left: 300px;
  img {
    padding: 50px 50px 50px 0;
  }
}
</style>
