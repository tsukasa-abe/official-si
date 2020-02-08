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
  img {
    max-width: 100%;
  }
}
</style>
