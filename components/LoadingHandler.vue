<template>
  <div
    :class="addClass"
    class="full-width flex h-center v-center text-center pt-40 pb-40 m-auto"
  >
    <span class="spinner"></span>
  </div>
</template>

<script>
export default {
  props: {
    addClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
