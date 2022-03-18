<template>
  <nav class="nav-wrapper" :class="{ navActive: isActive }">
    <div class="toggler">
      <span @click="toggler">X</span>
    </div>
    <ul class="nav-item">
      <li class="nav-link"><nuxt-link to="/blog">Blog</nuxt-link></li>
      <li class="nav-link"><nuxt-link to="/labs">Labs</nuxt-link></li>
      <li class="nav-link"><nuxt-link to="/about">About</nuxt-link></li>
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
.nav {
  &-wrapper {
    position: fixed;
    top: 0;
    right: 0;

    width: 100%;
    height: 100vh;

    background: #fff;

    transition: 0.5s ease;
    transform: translateX(100%);

    @media #{$large} {
      width: 100%;
      height: auto;

      position: relative;
      transform: translateX(0);

      background-color: transparent;
      backdrop-filter: none;
    }
  }

  &-item {
    display: flex;
    flex-direction: column;
    gap: 1.5em;

    padding: 0 2em;

    @media #{$large} {
      flex-direction: row;
      padding: 0;
    }
  }

  &-link {
    font-size: 1.6em;

    a {
      color: #161616;
    }

    @media #{$large} {
      font-size: 1em;
    }
  }
}

.toggler {
  padding: 0 2em;
  margin: 2em 0 2em 0;

  @media #{$large} {
    display: none;
  }
}

.navActive {
  transform: translateX(0);
}
</style>
