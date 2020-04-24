<template lang="pug">
  div
    section.top
      client-only
        swiper(:options="swiperOption")
          swiper-slide.top__portfolio(v-for='post in postsLimit', :post="post", , v-bind:key='post.fields.path')
            img(v-lazy='post.fields.image.fields.file.url')
    About
    Portfolio
    Contact
</template>

<script>
import About from '~/components/sections/About.vue'
import Portfolio from '~/components/sections/Portfolio.vue'
import Contact from '~/components/sections/Contact.vue'
import { mapState } from 'vuex'


export default {
  components: {
    About,
    Portfolio,
    Contact
  },
  data() {
    return {
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
  computed: {
    ...mapState(['posts']),
    postsLimit() {
      // 最初の４件のみ取得する
      return this.posts.slice(0, 4);
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  img {
    padding: 50px 0 0;
    width: 1200px;
    @include pc-large {
      width: 1300px;
    }
    @include sp {
      width: 100%;
      padding: 0;
    }
  }
}
</style>
