<template lang="pug">
  div
    client-only
      .side-navi.pc-none(:style="{left: snScroll}")
        nuxt-link.title(to='/') Soichiro Ikeda
        nav.side-navi__list
          ul
            li.sidemenu
              nuxt-link(v-scroll-to="'#about'" to="/#about") About
            li.sidemenu
              nuxt-link(to='/portfolio') Portfolio
            li.sidemenu
              nuxt-link(v-scroll-to="'#contact'" to="/#contact") Contact
        .side-navi--footer.pc-none
          span ©️  Soichiro Ikeda
      SlideMenu.burger.sp-none(right='' width='200' @openMenu="handleOpenMenu" @closeMenu="handleCloseMenu")
        nuxt-link(to='/' @click.native="bmClick") Home
        nuxt-link(v-scroll-to="'#about'" to="/#about" @click.native="bmClick") About
        nuxt-link(to='/portfolio' @click.native="bmClick") Portfolio
        nuxt-link(v-scroll-to="'#contact'" to="/#contact" @click.native="bmClick") Contact
</template>

<script>
export default {
  data: function() {
    return {
      snScroll: 0,
      w: 100
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, false);
    // vue-scrolltoの別ページ遷移用
    if ($nuxt.$route.hash) {
      this.scrollToHash()
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll, false);
  },
  methods: {
    handleScroll: function() {
      const body = document.querySelector('body')
      this.snScroll = -window.scrollX + "px";
      // 横スクロール時画像などの描写が削られてしまうため下記付与
      if (this.snScroll == '0px') {
        body.style.width = '100%';
      } else {
        body.style.width = '130%';
      }
    },
    // オープンしたら表示
    handleOpenMenu: function () {
      const bg = document.querySelector('.burger');
      bg.classList.add('custom-overlay');
    },
    // クローズしたら非表示
    handleCloseMenu: function () {
      const bg = document.querySelector('.burger');
      bg.classList.remove('custom-overlay');
    },
    // メニューを閉じる＆オーバーレイを非表示
    bmClick: function () {
      const body = document.querySelector('body');
      body.classList.remove('bm-overlay');
      const bg = document.querySelector('.burger');
      bg.classList.remove('custom-overlay');
      const elem = document.getElementsByClassName('bm-menu');
      elem[0].style.width = "0";
    },
    scrollToHash () {
      var hash = $nuxt.$route.hash
      this.$nextTick(() => {
        this.$scrollTo(hash, 0, { offset: -120 })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.side-navi {
  width: 300px;
  min-width: 300px;
  height: 100vh;
  position: fixed;
  z-index: 2;
  .title {
    font-family: $f-shadows;
    font-size: 2.5rem;
    font-weight: $fw-bold;
    text-align: center;
    margin: 50px 0;
  }
  &__list {
    display: flex;
    justify-content: center;
    .sidemenu + .sidemenu {
      margin-top: 2.5rem;
    }
    .sidemenu {
      a {
        font-size: 1.8rem;
      }
    }
  }
  &--footer {
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    text-align: center;
    span {
      color: #888888;
      font-size: 1.6rem;
    }
  }
}
</style>
