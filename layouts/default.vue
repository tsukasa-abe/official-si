<template lang="pug">
  // このファイルは、Railsでいうapplication.html.erbみたいなやつ※headerやfooterを管理する
  div
    SideNavi
    //- Loading
    transition(name='page', mode="out-in")
      .main-content
        .container
          nuxt
</template>

<script>
import SideNavi from '~/components/SideNavi.vue'
// import Loading from '~/components/Loading.vue'

export default {
  components: {
    SideNavi,
    // Loading
  }
}
</script>

<style>
.page-enter {
  opacity: 0;
}
.page-enter-active {
  transition: opacity 3s;
}
/* .container {
  width: 1200px;
  margin: 0 auto;
} */
</style>
