<template lang="pug">
  section.contact
    .contact--text.animated.fadeInDown
      .c-name
        p Coming soon...
      .c-body
        //- p text
</template>

<script>

</script>

<style lang="scss" scoped>
.contact {
  // padding: 250px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  &--text {
    color: #888888;
    // padding-top: 400px;
    width: 400px;
    text-align: center;
    .c-name {
      p {
        font-size: 2.5rem;
        font-weight: bold;
      }
      p + p {
        font-size: 1.8rem;
        margin-top: 1rem;
      }
    }
    .c-body {
      font-size: 1.6rem;
      padding-top: 3rem;
      line-height: 1.5;
    }
  }
}
</style>
