<template lang="pug">
  // このファイルは、Railsでいうapplication.html.erbみたいなやつ※headerやfooterを管理する
  div
    SideNavi
    //- Loading
    transition(name='page', mode="out-in")
      .os-center
        nuxt
</template>

<script>
import SideNavi from '~/components/SideNavi.vue'
// import Loading from '~/components/Loading.vue'

export default {
  components: {
    SideNavi,
    // Loading
  },
  mounted () {
    setTimeout(function () {
      document.getElementsByTagName("html")[0].classList.add("loading-delay");
    }, 2000);
  }
}
</script>

<style lang="scss">
.page-enter {
  opacity: 0;
}
.page-enter-active {
  transition: opacity 3s;
}
</style>
