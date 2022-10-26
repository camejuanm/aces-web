<template>
  <main class="site-main labs">
    <section class="labs">
      <section
        lazy-background="/assets/img/bg-banner-3.jpg"
        class="labs-header flex flex-col h-center"
      >
        <div class="container content flex flex-col md-flex-row col-gap-12">
          <img class="logo" src="/assets/img/icon-aceslabs.png" alt="" />
          <div class="search-bar full-width">
            <i class="i-search text-grey"></i>
            <input
              v-model="keyword"
              type="text"
              class="search-input full-width form-input"
              placeholder="Search project..."
              @keyup.enter="filterCategory(category)"
            />
            <div
              class="filter flex flex-row v-center h-center col-gap-12 pr-12"
            >
              <span>IN</span>
              <DropdownLabs
                v-if="!$fetchState.pending"
                placeholder="All Category"
                class="filter-category"
                :active="category"
                :list="categoryList"
                :delete-btn="true"
                @clicked="changeCategory"
              />
            </div>
          </div>
        </div>
      </section>

      <LoadingHandler v-if="$fetchState.pending || isLoading" />
      <section
        v-else-if="dataLabs.data.length"
        class="grid row-gap-16 mt-32 mb-32 container"
      >
        <div
          v-for="data of dataLabs.data"
          :key="data.slug"
          class="grid_column col-gap-12"
          col="s12,m6,l6"
        >
          <LabsCard :data="data" />
        </div>

        <div class="flex full-width v-center h-center">
          <Pagination
            :current-page="dataLabs.current_page"
            :total-pages="dataLabs.last_page"
            :base-link="dataLabs.first_page_url.slice(0, -1)"
            @first-page="toLink(dataLabs.first_page_url)"
            @prev-page="toLink(dataLabs.prev_page_url)"
            @input-page="toLink"
            @next-page="toLink(dataLabs.next_page_url)"
            @last-page="toLink(dataLabs.last_page)"
          />
        </div>
      </section>
      <section v-else class="grid row-gap-16 mt-32 mb-32 container">
        <span class="full-width text-center text-grey"
          >Whoops sorry, we cant find any data.</span
        >
      </section>
    </section>
  </main>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'LabsExplore',
  data() {
    return {
      dataLabs: {},
      isLoading: true,
      category: '',
      keyword: '',
      categoryList: [
        { name: 'Internet Of Things' },
        { name: 'Web Development' }
      ],
      sliderOptions: {
        arrows: false,
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    }
  },
  async fetch() {
    await Promise.all([
      this.$axios.get(`${this.$apiurl()}/labs`),
      this.$axios.get(`${this.$apiurl()}/labs-categories`)
    ])
      .then(res => {
        this.dataLabs = res[0].data
        this.categoryList = res[1].data
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.response)
      })
    this.isLoading = false
  },
  methods: {
    async toLink(link) {
      this.isLoading = true
      if (link !== null) {
        await this.$axios.get(link).then(res => {
          this.dataArticle = res.data
        })
      }
      this.isLoading = false
    },
    changeCategory(category) {
      this.category = category
      this.filterCategory(category)
    },
    async filterCategory(category = '') {
      this.isLoading = true
      await Promise.all([
        this.$axios.get(
          `${this.$apiurl()}/labs?labscategory=${category}&search=${
            this.keyword
          }`
        )
      ])
        .then(res => {
          this.dataLabs = res[0].data
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error.response)
        })
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.labs {
  color: #222;
  font-family: 'Poppins-Light', sans-serif;

  &-header {
    text-align: center;
    font-weight: 400;
    position: relative;
    margin: 0 0 1em 0;
    min-height: 150px;
    color: #fff;
    background-size: cover;
    .logo {
      max-width: 3em;
    }
    .search-input {
      border-radius: 12px;
    }

    .content {
      align-items: center;
      row-gap: 12px;
    }
  }
}

.search-bar {
  position: relative;

  input {
    z-index: -1;
    padding-left: 3.5em;
    height: 50px;
  }
  i {
    position: absolute;
    top: 30%;
    left: 1em;
    z-index: 1;
  }

  .filter {
    position: absolute;
    top: 30%;
    right: 1em;
    z-index: 2;

    color: #000;
    font-size: 12px;
  }
}

.vh-60 {
  height: 60vh;
}
</style>
