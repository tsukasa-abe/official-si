<template lang="pug">
  div
    client-only
      .side-navi.pc-none
        nuxt-link.title.navbar-item(to='/') Soichiro Ikeda
        nav.side-navi__list
          ul
            li.sidemenu
              nuxt-link.navbar-item(to='/about') About
            li.sidemenu
              nuxt-link.navbar-item(to='/portfolio') Portfolio
            li.sidemenu
              nuxt-link.navbar-item(to='/contact') Contact
      SlideMenu.burger.sp-none(right='' width='250' @openMenu="handleOpenMenu" @closeMenu="handleCloseMenu")
        nuxt-link(to='/' @click.native="bmClick") Home
        nuxt-link(to='/about' @click.native="bmClick") About
        nuxt-link(to='/portfolio' @click.native="bmClick") Portfolio
        nuxt-link(to='/contact' @click.native="bmClick") Contact
</template>

<script>
export default {
  methods: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.side-navi {
  width: 300px;
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
}
</style>
