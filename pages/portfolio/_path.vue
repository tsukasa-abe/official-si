<template lang="pug">
  section.portfolio-path
    v-lazy-image(:src='post.fields.image.fields.file.url')
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
.portfolio-path {
  padding-left: 300px;
  img {
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
  }
}
</style>
