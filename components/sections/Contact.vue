<template lang="pug">
  section.contact
    .contact--text.animated.fadeInDown
      .c-name
        p Contact
      .c-body#contact
        span お仕事のご依頼やお問い合わせは
        a(href='mailto:soichiro.ikeda@gmail.com', target='_blank', rel="noopener noreferrer") こちらへ
        span からお願いします。
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.contact {
  width: 1180px;
  height: 600px;
  display: flex;
  justify-content: center;
  padding: 20rem 0;
  @include sp {
    padding: 10rem 0;
    width: 100%;
    height: auto;
  }
  &--text {
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
      @include tab {
        padding: 30px 15px 0;
        // width: 500px;
      }
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
