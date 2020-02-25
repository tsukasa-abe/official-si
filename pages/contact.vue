<template lang="pug">
  section.contact
    .contact--text.animated.fadeInDown
      .c-name
        p Contact
      .c-body
        span お仕事のご依頼やお問い合わせは
        a こちら
        span からお願いします。

</template>

<script>

</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  height: 92vh;
  // padding-top: 300px;
  &--text {
    // padding-top: 400px;
    // width: 300px;
    .c-name {
      p {
        text-align: center;
        font-size: 3.5rem;
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
      a {
        display: inline-block;
        text-decoration: underline;
      }
    }
    p, span {
      color: #888888;
    }
  }
}
</style>
