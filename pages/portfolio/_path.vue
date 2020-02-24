<template lang="pug">
  section.portfolio-path
    img(v-lazy='post.fields.image.fields.file.url')
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
    // padding: 50px 0;
    // max-width: 90%;
    // height: 100vh;
    // margin: 0 auto;
    padding: 50px 20px;
    max-width: 90%;
  }
}
</style>
