<template>
  <nav class="main-nav" :class="{ navActive: isActive }">
    <ul>
      <li class="toggler" @click="toggler">X</li>
      <li class="nav-link"><nuxt-link to="/about">NEWS</nuxt-link></li>
      <li class="nav-link"><nuxt-link to="/about">LABS</nuxt-link></li>
      <li class="nav-link"><nuxt-link to="/about">ABOUT</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggler() {
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="scss" scoped>
.main-nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  background-color: rgba($color: #222, $alpha: 0.7);
  backdrop-filter: blur(5px);
  -moz-backdrop-filter: blur(5px);
  height: 100vh;
  transition: 0.5s ease;
  transform: translateX(100%);

  @media #{$large} {
    position: relative;
    width: 100%;
    transform: translateX(0);
    background-color: transparent;
    backdrop-filter: none;
    height: auto;
    padding: 0;
  }

  > ul {
    padding: 10px 0 0 0;
    margin: 0;
    @media #{$large} {
      display: flex;
      padding: 0;
      gap: 2em;
      width: 100%;
      justify-content: flex-end;
    }

    > li {
      list-style: none;
      padding: 1em 2em;
      @media #{$large} {
        padding: 0;
      }

      a {
        color: #fff;
      }
    }
  }
}

.navActive {
  transform: translateX(0);
}

.toggler {
  @media #{$large} {
    display: none;
  }
}
</style>
