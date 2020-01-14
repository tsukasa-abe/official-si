<template>
  <div class="side-navi">
    <h1 class="title">
      Soichiro Ikeda
    </h1>
    <nav class="side-navi__list">
      <ul>
        <li class="sidemenu">
          <nuxt-link to="/about" class="navbar-item">about</nuxt-link>
        </li>

        <li class="sidemenu">
          <a>
            portfolio
          </a>
        </li>

        <li class="sidemenu">
          <a>
            contact
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.side-navi {
  // background-color: #f9f9f9;
  // background-color: #f5fbff;
  width: 300px;
  height: 100vh;
  // box-shadow: 1px 2px 8px 2px rgba(0,0,0,.1);
  position: fixed;

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
