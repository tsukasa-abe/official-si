<template>
  <div class="container">
    <div>
      <SideNavi />
      <Portfolio />
    </div>
  </div>
</template>

<script>
import SideNavi from '~/components/SideNavi.vue'
import Portfolio from '~/components/Portfolio.vue'

export default {
  components: {
    SideNavi,
    Portfolio
  }
}
</script>

<style lang="scss" scoped>
// .container {
//   margin: 0 auto;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// }
</style>
