<template>
  <section class="top">
    <div>
      <TopPortfolio v-for="post in posts"
        v-bind:key="post.fields.path"
              :image="post.fields.image"
              :path="post.fields.path"
      />
    </div>
  </section>
</template>

<script>
import TopPortfolio from '~/components/TopPortfolio.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
  transition: 'slide-left',
  components: {
    TopPortfolio
  },
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

</style>
