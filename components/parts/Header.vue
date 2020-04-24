<template lang="pug">
   header

</template>

<style lang="scss" scoped>
header {
  display: none;
  @include sp {
    display: block;
    height: 90px;
  }
  @include sp-small {
    height: 60px;
  }
}
</style>
