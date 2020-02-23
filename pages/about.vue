<template lang="pug">
  section.about
    .about--text.animated.fadeInDown
      .a-name
        p Coming soon...
      .a-body
        //- p text
    //- v-lazy-image(:src="require(`~/assets/images/sample.jpg`)")
</template>

<script>

</script>

<style lang="scss" scoped>
.about {
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
    .a-name {
      p {
        font-size: 2.5rem;
        font-weight: bold;
      }
      p + p {
        font-size: 1.8rem;
        margin-top: 1rem;
      }
    }
    .a-body {
      font-size: 1.6rem;
      padding-top: 3rem;
      line-height: 1.5;
    }
  }
  img {
    // padding-left: 50px;
    margin-left: 50px;
    width: 600px;
    // filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.6));
    filter: drop-shadow(30px 30px 30px rgba(0, 0, 0, 1));
    // border-radius: 15px;
  }
}
</style>
