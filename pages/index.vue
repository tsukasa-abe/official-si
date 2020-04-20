<template lang="pug">
  section.top
    client-only
      swiper(:options="swiperOption")
        swiper-slide.top__portfolio(v-for='post in posts', :post="post", , v-bind:key='post.fields.path')
          img(v-lazy='post.fields.image.fields.file.url')
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
const MAX_ENTRY = 4;

export default {
  data() {
    return {
      posts: [],
      swiperOption: {
        slidesPerView: 1,
        loopedSlides: 4,
        effect: 'fade',
        speed: 2000,
        autoplay: {
          delay: 5000
        },
        autoplayDisableOnInteraction: false
      }
    }
  },
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CTF_PAGE_TYPE_ID,
      order: 'sys.createdAt',
      limit: MAX_ENTRY
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
.top {
  &__portfolio {
    padding-left: 300px;
  }
  img {
    padding: 50px 20px;
    max-width: 90%;
    // 下記仮
    // padding: 50px 0;
    // max-width: 90%;
    // height: 100vh;
    // margin: 0 auto;
  }
}
</style>
