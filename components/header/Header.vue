<template>
  <header id="navbar" class="site-header">
    <div class="grid container">
      <div class="grid_column" col="s10,l4">
        <div class="nav-brand">
          <nuxt-link to="/">
            <img src="~assets/img/aces-logo.png" class="site-logo" alt="" />
            <span> ACES </span>
          </nuxt-link>
        </div>
      </div>

      <div class="grid_column toggler" col="s2">
        <img src="~static/img/menu-bar.svg" alt="" @click="navToggler" />
      </div>
      <div class="grid_column" col="s2,l8">
        <headerMainNav :is-active="navActive" @toggle="navToggler" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp',
  data() {
    return {
      navActive: false,
      sideNav: [
        {
          title: 'Getting Started',
          url: '/documentation'
        },
        {
          title: 'Typography',
          url: '/documentation/typography'
        }
      ]
    }
  },
  methods: {
    navToggler() {
      this.navActive = !this.navActive
    }
  }
}
</script>
<style lang="scss" scoped>
.site-header {
  display: flex;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #222;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  box-shadow: 0px 3px 4px rgba(#000, 0.15);

  @media #{$md} {
    height: 70px;
  }
}

.nav-brand {
  font-size: 1.25em;
  display: flex;
  align-items: center;

  .site-logo {
    width: 100%;
    max-width: 30px;
    margin-right: 0.5em;
  }

  span {
    letter-spacing: 2px;
    color: $primary;
  }
}

.toggler {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  @media #{$large} {
    display: none;
  }
  img {
    max-width: 2em;
  }
}
</style>
