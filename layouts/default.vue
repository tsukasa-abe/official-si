<template lang="pug">
  // このファイルは、Railsでいうapplication.html.erbみたいなやつ※headerやfooterを管理する
  div
    Header
    SideNavi
    .main
      transition(name='page', mode="out-in")
        nuxt
      Footer
</template>

<script>
import Header from '~/components/parts/Header.vue'
import Footer from '~/components/parts/Footer.vue'
import SideNavi from '~/components/parts/SideNavi.vue'
import Loading from '~/components/parts/Loading.vue'

export default {
  components: {
    Header,
    Footer,
    SideNavi,
    Loading
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
.main {
  padding-left: 300px;
  @include sp {
    padding-left: 0;
  }
}
</style>
