<template lang="pug">
  section.portfolio
    .portfolio--title#portfolio
      h1 Portfolio
    .portfolio--img
      nuxt-link(to='/portfolio')
        img(v-lazy="require(`~/assets/images/portfolios.png`)")
        .mask
          .caption Click Here!
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.portfolio {
  width: 1180px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @include sp {
    width: 100%;
    height: auto;
  }
  &--title {
    width: 100%;
    padding: 20rem 0;
    @include sp {
      padding: 10rem 0;
    }
    h1 {
      text-align: center;
      font-size: 3.5rem;
      font-weight: bold;
      color: #888888;
    }
  }
  &--img {
    overflow: hidden;
    position: relative;
    img {
      // padding-top: 10rem;
      // padding: 10rem 50px 20px;
      // width: 1200px;
      @include pc-large {
        width: 1300px;
      }
      @include sp {
        width: 100%;
        padding: 0;
        // padding-top: 6rem;
      }
    }
    .caption {
      font-size: 5rem;
      font-weight: bold;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      background-color:rgba(0,0,0,0.6);
      transition: all 0.2s ease;
      border-radius: 2rem;
      @include sp {
        opacity: 1;
        border-radius: 1rem;
      }
    }
  }
  &--img:hover .mask {
    opacity: 1;
  }
}
</style>
