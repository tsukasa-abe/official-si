<template>
  <nuxt-link v-bind:to="{ name: 'portfolio-path', params: { path: path }}" class="wrapper">
    <div class="top-portfolio">
      <img v-bind:src="image.fields.file.url"/>
    </div>
  </nuxt-link>
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
