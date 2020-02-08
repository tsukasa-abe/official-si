<template lang="pug">
  section.about
    .about--text
      .a-name
        p 池田 聡一朗
        p Ikeda Soichiro
      .a-body
        p 1986年生まれ フォトグラファー 独学で写真を学び、
        p 2009年より単身アフリカへ
        p 以来アフリカをはじめとする世界中の少数民族を撮影、発表。
        p 唯一無二の色彩と直感的な生き方が評価され
        p 2017年日経ビジネス誌で「次代を創る100人」へ選出
        p また同年、講談社出版文化賞 写真賞を受賞
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
