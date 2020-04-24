<template lang="pug">
  section.about#about
    .about--title
      h1 About
    .about__content
      .about__content--desc
        .a-name
          p 池田　聡一朗
        .a-body
          p 1986年生まれ フォトグラファー 独学で写真を学び、20xx年より単身名古屋へ
          p 以来名古屋をはじめとする世界中の少数民族を撮影、発表。
          p 唯一無二の色彩と独特なダンスが評価され20xx年 入浴隊難誌で「猟奇的な変態100人」へ選出
          p また同年、冗談社出版文化賞 写真賞を受賞
      .about__content--img
        img(v-lazy="require(`~/assets/images/photographer_1.jpg`)")
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.about {
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
      padding-right: 2rem;
      text-align: center;
      font-size: 3.5rem;
      font-weight: bold;
      color: #888888;
      @include sp {
        padding-right: 0;
      }
    }
  }
  &__content {
    display: flex;
    align-items: center;
    @include sp {
      flex-direction: column-reverse;
      align-items: inherit;
      height: auto;
      align-items: center;
    }
    &--desc {
      font-family: $f-noto;
      color: #888888;
      width: 400px;
      @include sp {
        padding: 30px 15px 0;
        width: 500px;
      }
      @include sp-small {
        width: 100%;
      }
      .a-name {
        p {
          font-size: 2.5rem;
          font-weight: bold;
          @include sp {
            font-size: 2rem;
          }
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
        @include sp {
          font-size: 1.5rem;
        }
      }
    }
    &--img {
      margin-left: 50px;
      @include sp {
        margin-left: 0;
      }
      img {
        width: 500px;
        filter: grayscale(1);
        @include sp-small {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
