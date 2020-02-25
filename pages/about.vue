<template lang="pug">
  section.about
    .about--text.animated.fadeInDown
      .a-name
        p 池田　聡一朗
      .a-body
        p 1986年生まれ フォトグラファー 独学で写真を学び、
        p 20xx年より単身名古屋へ
        p 以来名古屋をはじめとする世界中の少数民族を撮影、発表。
        p 唯一無二の色彩と独特なダンスが評価され
        p 20xx年 入浴隊難誌で「猟奇的な変態100人」へ選出
        p また同年、冗談社出版文化賞 写真賞を受賞
    img(v-lazy="require(`~/assets/images/photographer_1.jpg`)")
</template>

<script>

</script>

<style lang="scss" scoped>
.about {
  font-family: $f-noto;
  // padding: 250px 0 0;
  padding-left: 300px;
  display: flex;
  // justify-content: center;
  align-items: center;
  height: 100vh;
  &--text {
    margin-left: 70px;
    color: #888888;
    // padding-top: 400px;
    width: 400px;
    // text-align: center;
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
    filter: grayscale(1);
    // border-radius: 15px;
    box-shadow: 0 2px 1px rgba(0,0,0,0.09),
                0 4px 2px rgba(0,0,0,0.09),
                0 8px 4px rgba(0,0,0,0.09),
                0 16px 8px rgba(0,0,0,0.09),
                0 32px 16px rgba(0,0,0,0.09);
  }
}
</style>
