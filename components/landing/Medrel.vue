<template>
  <section class="medrel pt-32">
    <div
      class="container flex flex--wrap col-gap-24 row-gap-24 v-center h-center"
    >
      <img
        v-for="data of medrel"
        :key="data.name"
        :src="data.image"
        class="medrel-item"
        alt=""
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'MedrelSection',
  data() {
    return {
      medrel: [
        {
          name: 'UMN',
          image: '/assets/img/logo-umn.jpg'
        },
        {
          name: 'aces labs',
          image: '/assets/img/aces-labs-lg.jpg'
        },
        {
          name: 'Your Logo',
          image: '/assets/img/img-logo.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.medrel {
  &-item {
    max-width: 120px;
    max-height: 100px;
    overflow: hidden;
  }
}
</style>
