<template lang="pug">
  section.portfolio
    .container(v-for='post in posts', v-bind:key='post.fields.path')
      nuxt-link(v-bind:to="{ name: 'portfolio-path', params: { path: post.fields.path }}")
        .box(v-scroll='handleScroll')
          v-lazy-image(:src='post.fields.image.fields.file.url')
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
  data() {
    return {
      posts: []
    }
  },
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CTF_PAGE_TYPE_ID,
      order: 'sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
    .catch(console.error)
  },
  methods: {
    handleScroll: function(evt, el) {
      console.log(window.scrollY);
      let top = el.getBoundingClientRect().top;
      if (window.scrollY >  top + window.pageYOffset - 600) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0)"
        );
        return true;
      }
      return false;
    }
  }
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
}

.box {
  opacity: 0;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
</style>
