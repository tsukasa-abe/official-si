<!-- このファイルは、Railsでいうapplication.html.erbみたいなやつ※headerやfooterを管理する -->
<template>
  <div>
    <SideNavi />
    <nuxt />
  </div>
</template>

<script>
import SideNavi from '~/components/SideNavi.vue'

export default {
  components: {
    SideNavi
  }
}
</script>

<style>
</style>
