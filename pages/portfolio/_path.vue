<template>
  <section class="portfolio-path">
    <img class="" v-bind:src="post.fields.image.fields.file.url"/>
  </section>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
 async asyncData ({ env, params }) {
   return await client.getEntries({
     'content_type': env.CTF_PAGE_TYPE_ID,
     'fields.path': params.path,
     order: '-sys.createdAt'
   }).then(entries => {
     return {
       post: entries.items[0],
     }
   })
   .catch(console.error)
 }
}

</script>

<style lang="scss" scoped>

</style>
