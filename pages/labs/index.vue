<template>
  <main class="site-main labs">
    <LoadingHandler v-if="$fetchState.pending || isLoading" add-class="vh-60" />
    <section v-else class="labs">
      <section class="labs-highlight pb-48">
        <div class="container flex flex-col row-gap-18 full-widht">
          <h3 class="text-center">ACES LABS</h3>
          <VueSlickCarousel class="slider" v-bind="sliderOptions">
            <div v-for="i of 3" :key="i" class="flex">
              <LabsCard
                v-if="i <= dataLabs.data.length"
                :data="dataLabs.data[i - 1]"
              />
            </div>
          </VueSlickCarousel>
        </div>
      </section>
      <section class="labs-banner full-width">
        <div class="container">
          <div class="text-banner flex flex-col">
            <h4 class="m-0">Submit your research and get skkm point!</h4>
            <nuxt-link to="#" class="btn-yellow fit-content text-small mt-8"
              >Submit now</nuxt-link
            >
          </div>
          <img src="assets/img/labs-banner-1.jpg" alt="banner" />
        </div>
      </section>

      <section class="grid row-gap-16 mt-12 mb-32 container">
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
    </section>
  </main>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'LabsIndex',
  data() {
    return {
      dataLabs: {},

      isLoading: true,
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
    await Promise.all([this.$axios.get(`${this.$apiurl()}/labs`)])
      .then(res => {
        this.dataLabs = res[0].data
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
          // eslint-disable-next-line no-console
          console.log('===>', res)
          this.dataArticle = res.data
        })
      }
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.labs {
  color: #222;
  font-family: 'Poppins-Light', sans-serif;

  &-highlight {
    background-color: #f2f2f2;
    h3 {
      letter-spacing: 2px;
    }
  }

  &-banner {
    @media #{$md} {
      margin-top: 2em;
    }
    .container {
      position: relative;
      width: 100%;

      @media #{$md} {
        width: 93%;
      }
    }

    .text-banner {
      position: absolute;
      height: 100%;
      widows: 100%;

      color: #fff;
      padding: 0 2em;

      margin: 1em auto;

      h4 {
        font-weight: 300;
      }

      a {
        font-weight: normal;
      }
    }

    img {
      width: 100%;
      height: 140px;
      object-fit: cover;
      object-position: center right;
      @media #{$md} {
        height: 120px;
      }
      @media #{$large} {
        max-height: 130px;
      }
    }
  }
}

.vh-60 {
  height: 60vh;
}
</style>
