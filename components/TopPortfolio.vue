<template lang="pug">
  nuxt-link.wrapper(v-bind:to="{ name: 'portfolio-path', params: { path: path }}")
    .top-portfolio
      img(v-lazy='image.fields.file.url')
</template>

<script>
export default {
 props: ['path', 'image']
}
</script>

<style lang="scss" scoped>
.top-portfolio {
  padding-left: 300px;
  img {
    padding: 50px 50px 50px 0;
  }
}
</style>
