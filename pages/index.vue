<template>
  <main class="site-main">
    <landingAnnouncer
      :title="webConf.announcement_title"
      :url="webConf.announcement_link"
    />
    <landingHeroSection
      :background="webConf.hero_image"
      :text="webConf.header_hero"
    />
    <landingHighlightArticle />
    <landingWebFeatures />
    <landingMedrel />
    <landingAcesSection />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      webConf: {}
    }
  },
  async fetch() {
    await Promise.all([
      this.$axios.get(`${this.$apiurl()}/websiteconfiguration`)
    ])
      .then(res => {
        this.webConf = res[0].data
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.response)
      })
  }
}
</script>

<style lang="scss" scoped></style>
