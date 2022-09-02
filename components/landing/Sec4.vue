<template>
  <LoadingHandler v-if="$fetchState.pending" add-class="vh-60" />
  <section v-else class="article full-width mt-32 mb-32">
    <div class="container flex flex-col">
      <span class="m-0 title f-32 mb-12">SPOTLIGHT</span>
      <div class="full-width">
        <VueSlickCarousel v-if="dataArticle.length" v-bind="sliderOptions">
          <div
            v-for="(data, index) in dataArticle"
            :key="index"
            class="article-wrapper"
          >
            <ArticleCard :data="data" />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'ArticleSection',
  data() {
    return {
      isLoading: true,
      dataArticle: [],

      sliderOptions: {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
      }
    }
  },
  async fetch() {
    this.isLoading = true
    await Promise.all([this.$axios.get(`${this.$apiurl()}/posts`)])
      .then(res => {
        this.dataArticle = res[0].data.data
        // eslint-disable-next-line no-console
        console.log(this.dataArticle)
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.response)
      })
    this.isLoading = false
  }
}
</script>

<style lang="scss" scoped>
.article {
  &-wrapper {
    margin-right: 1em;
    padding: 8px 0 8px 0;

    .article-card {
      max-width: 320px;
    }
  }
  .title {
    font-family: 'Poppins-ExtraLight', sans-serif;
  }
}
</style>
