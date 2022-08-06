<template>
  <div id="app" class="sticky-footer-container">
    <div class="sticky-footer-container-item">
      <Header />
    </div>
    <div class="sticky-footer-container-item --pushed">
      <nuxt />
    </div>
    <div class="sticky-footer-container-item">
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="scss" scoped></style>
