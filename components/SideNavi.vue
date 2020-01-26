<template lang="pug">
  .side-navi
    nuxt-link.title.navbar-item(to='/') Soichiro Ikeda
    nav.side-navi__list
      ul
        li.sidemenu
          nuxt-link.navbar-item(to='/about') about
        li.sidemenu
          nuxt-link.navbar-item(to='/portfolio') portfolio
        li.sidemenu
          a
            | contact
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.side-navi {
  width: 300px;
  height: 100vh;
  // box-shadow: 1px 2px 8px 2px rgba(0,0,0,.1);
  position: fixed;
  z-index: 9999;

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
