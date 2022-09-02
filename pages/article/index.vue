<template>
  <main class="site-main container">
    <section class="blog-header grid">
      <div class="grid_column" col="l6">
        <p class="h1 title">
          Welcome <br />
          to Our Journey
        </p>
        <p class="subtitle">Keeps you up with ACES updates and our progress.</p>
      </div>
    </section>

    <div v-if="!$fetchState.pending" class="full-width mb-32">
      <DropdownCategory
        placeholder="Select category"
        class="filter-category"
        :active="category"
        :list="postCategory"
        :delete-btn="true"
        @clicked="changeCategory"
      />
    </div>

    <LoadingHandler v-if="$fetchState.pending || isLoading" add-class="vh-60" />
    <section v-else id="proker" class="grid row-gap-16">
      <div
        v-for="data of dataArticle.data"
        :key="data.slug"
        class="grid_column pl-8 pr-8"
        col="s12,m6,l3"
      >
        <ArticleCard :data="data" />
      </div>

      <div class="flex full-width v-center h-center">
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
        // for (const data of res[0].data) {
        //   this.postCategory = [...this.postCategory, data.slug]
        // }
        this.postCategory = res[0].data
        // eslint-disable-next-line no-console
        console.log(this.postCategory)
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

    margin: 1em 0 1em 0;

    @media #{$large} {
      text-align: left;
      margin: 0;
    }

    &-image {
      img {
        width: 100%;
        max-height: 320px;

        object-fit: cover;
        object-position: top center;
      }
    }

    .title {
      font-family: Italiana, serif;

      margin: 0.5em 0;
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

.vh-60 {
  height: 60vh;
}
</style>
