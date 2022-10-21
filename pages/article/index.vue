<template>
  <main class="site-main">
    <section class="blog-header flex flex-col h-center">
      <img src="/assets/img/bg-banner-2.jpg" class="full-width" alt="" />
      <div class="text flex flex-col container">
        <p class="h1">
          Welcome <br />
          to Our Journey
        </p>
        <p class="subtitle">Keeps you up with ACES updates and our progress.</p>
      </div>
      <div
        v-if="!$fetchState.pending"
        class="full-width mb-32 container lg-only"
      >
        <Dropdown
          placeholder="Select category"
          class="filter-category"
          :active="category"
          :list="postCategory"
          :delete-btn="true"
          @clicked="changeCategory"
        />
      </div>
    </section>

    <div
      v-if="!$fetchState.pending && postCategory.length"
      class="full-width mb-16 container pl-16 pr-16 mobile-only"
    >
      <Dropdown
        placeholder="Select category"
        class="filter-category"
        :active="category"
        :list="postCategory"
        :delete-btn="true"
        @clicked="changeCategory"
      />
    </div>

    <LoadingHandler v-if="$fetchState.pending || isLoading" class="vh-40" />
    <section
      v-else-if="dataArticle"
      class="full-width grid row-gap-16 container"
    >
      <div
        v-for="data of dataArticle.data"
        :key="data.slug"
        class="grid_column article-wrapper"
        col="s12,m6,l4"
      >
        <ArticleCard :data="data" />
      </div>

      <div class="flex full-width v-center h-center container">
        <Pagination
          :current-page="dataArticle.current_page"
          :total-pages="dataArticle.last_page"
          :base-link="dataArticle.first_page_url.slice(0, -1)"
          @first-page="toLink(dataArticle.first_page_url)"
          @prev-page="toLink(dataArticle.prev_page_url)"
          @input-page="toLink"
          @next-page="toLink(dataArticle.next_page_url)"
          @last-page="toLink(dataArticle.last_page)"
        />
      </div>
    </section>
    <section v-else class="full-width flex v-center h-center vh-40">
      <span class="text-grey">Whoops, something was wrong.</span>
    </section>
  </main>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'AcesBlog',
  layouts: 'DefaultLayout',
  data() {
    return {
      currentTab: 'program-kerja',
      dataArticle: null,
      isLoading: true,
      postCategory: [],
      category: '',
      sliderOptions: {
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              centerMode: true,
              centerPadding: '10px'
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  async fetch() {
    await Promise.all([this.$axios.get(`${this.$apiurl()}/categories`)])
      .then(res => {
        this.postCategory = res[0].data
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.response)
      })
    await this.filterCategory('')
    this.isLoading = false
  },
  methods: {
    changeCategory(category) {
      this.category = category
      this.filterCategory(category)
    },
    async filterCategory(category = '') {
      this.isLoading = true
      await Promise.all([
        this.$axios.get(`${this.$apiurl()}/posts?category=${category}`)
      ])
        .then(res => {
          this.dataArticle = res[0].data
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error.response)
        })
      this.isLoading = false
    },
    async toLink(link) {
      this.isLoading = true
      if (link !== null) {
        await this.$axios.get(link).then(res => {
          this.dataArticle = res.data
        })
      }
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.h1 {
  @media #{$large} {
    font-size: 3em;
  }
}
.blog {
  &-header {
    text-align: center;
    font-weight: 400;
    position: relative;
    margin: 0 0 1em 0;
    min-height: 200px;

    color: #fff;

    @media #{$md} {
      min-height: 250px;
    }

    @media #{$large} {
      min-height: 300px;
      text-align: left;
      margin: 0 0 2em 0;
    }
    @media #{$xl} {
      min-height: 400px;
    }

    img {
      position: absolute;
      z-index: 0;

      width: 100%;
      object-fit: cover;
      min-height: 100%;
      left: 0;

      filter: brightness(70%);
    }

    .text {
      position: relative;
      z-index: 1;

      .h1 {
        font-family: Italiana, serif;
        margin: 0.5em 0 0 0;
      }

      p {
        margin: 0 0 2em 0;
      }
    }
  }
}

.filter-category {
  width: 100%;
  @media #{$large} {
    max-width: 300px;
  }
}

.site-main {
  font-family: Poppins-Light, sans-serif;
  display: flex;
  flex-direction: column;
}

.vh-40 {
  height: 40vh;
}

.article-wrapper {
  padding: 0 16px;
  @media #{$large} {
    padding: 0 8px;
  }
}
</style>
