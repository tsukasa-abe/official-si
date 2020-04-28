<template lang="pug">
  section.portfolio(:class="{'tab-style': $ua.isFromTablet()}")
    .os-center
      div(v-for='(image, index) in imagesDesc', :key='image.fields.id')
        img.thumbnail(v-lazy='image.fields.image.fields.file.url', @click='openGallery(index)', v-inview:animate="'fadeInUp'")
      client-only
        light-box(ref='lightbox', :images='imagesDesc', :show-light-box='false')
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['images']),
    imagesDesc() {
      // 降順にソートする
      return this.images.slice().reverse();
    }
  },
  created: function() {
    this.images.forEach(function(img) {
      this.$set(img, 'thumb', img.fields.image.fields.file.url)
      this.$set(img, 'src', img.fields.image.fields.file.url)
    }, this)
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  padding-top: 20px;
  column-count: 3;
  column-gap: 0;
  @include sp {
    padding-top: 0;
    padding-left: 0;
  }
  @include tab {
    column-count: 2;
  }
  @include sp-small {
    column-count: 1;
  }
  img {
    padding: 5px;
    max-width: 100%;
  }
}
</style>
