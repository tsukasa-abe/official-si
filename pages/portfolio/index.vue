<template lang="pug">
  section.portfolio
    .container
      //- div(v-for='(image, index) in images', :key='image.fields.id')
      div(v-for='post in posts', v-bind:key='post.fields.path')
        nuxt-link(v-bind:to="{ name: 'portfolio-path', params: { path: post.fields.path }}")
          v-lazy-image(:src='post.fields.image.fields.file.url', v-inview:animate="'fadeInUp'")
        //- img.thumbnail(v-lazy='image.fields.image.fields.file.url', @click='openGallery(index)', v-inview:animate="'fadeInUp'")
      //- client-only
        light-box(ref='lightbox', :images='images', :show-light-box='false', :show-caption='true')
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
  data() {
    return {
      // images: [
      //   {
      //     thumb: '~/assets/images/abe.jpg',
      //     src: '~/assets/images/abe.jpg',
      //     id: 1
      //   }
      // ]
      posts: []
    }
  },
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CTF_PAGE_TYPE_ID,
      order: 'sys.createdAt'
    }).then(entries => {
      return {
        // images: entries.items
        posts: entries.items
      }
    })
    .catch(console.error)
  },
  // methods: {
  //   openGallery(index) {
  //     this.$refs.lightbox.showImage(index);
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.portfolio {
  padding-top: 20px;
  padding-left: 300px;
  column-count: 2;
  column-gap: 0;
  img {
    padding: 10px;
    max-width: 100%;
  }
  // img.thumbnail {
  //   // height: 100px;
  //   cursor: pointer;
  // }
}
</style>
