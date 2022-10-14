<template>
  <div
    class="full-width flex flex-col h-center v-center text-center pt-40 pb-40 m-auto"
  >
    <span class="spinner"></span>
    <span v-if="caption != null" class="mt-12 text-grey">{{ caption }}</span>
    <span class="text-grey mt-12"
      >[Please wait, we collecting data from server]</span
    >
  </div>
</template>

<script>
export default {
  props: {
    addClass: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped></style>
