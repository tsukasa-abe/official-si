<template lang="pug">
  // このファイルは、Railsでいうapplication.html.erbみたいなやつ※headerやfooterを管理する
  div
    SideNavi
    transition(name='page')
      nuxt
</template>

<script>
import SideNavi from '~/components/SideNavi.vue'
// import TweenMax from 'gsap'

export default {
  components: {
    SideNavi
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
</style>
