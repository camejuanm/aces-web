<template>
  <main class="site-main">
    <section class="labs-header flex flex-col h-center">
      <img
        src="/assets/img/bg-banner-3.jpg"
        class="full-width bg-header"
        alt="Labs logo"
      />
      <div class="text flex flex-col container v-center">
        <div class="flex flex-row v-end">
          <img class="logo" src="/assets/img/icon-aceslabs.png" alt="" />
          <p class="h1 m-0">ACES LABS</p>
        </div>
        <p class="subtitle">We are not just part of system, We create it!</p>
      </div>
    </section>

    <LoadingHandler v-if="$fetchState.pending || isLoading" class="vh-40" />
    <section
      v-else-if="dataLabs.data.length"
      class="flex flex-col container pb-64"
    >
      <div
        class="flex flex-row f-space-between v-start pl-12 pr-12 mb-32 mt-12"
      >
        <h3 class="m-0">OUR AMAZING WORK</h3>
        <a href="/labs/explore" class="btn-yellow">Explore more</a>
      </div>
      <div class="full-width grid row-gap-16">
        <div
          v-for="data of dataLabs.data"
          :key="data.slug"
          class="grid_column col-gap-12"
          col="s12,m6,l6"
        >
          <LabsCard :data="data" />
        </div>
      </div>
    </section>
    <section v-else class="full-width flex v-center h-center vh-40">
      <span class="text-grey">Whoops, something was wrong.</span>
    </section>

    <section
      lazy-background="assets/img/labs-banner-3.jpg"
      class="labs-banner full-width mb-32"
    >
      <div class="content container flex flex-row">
        <div class="flex flex-col">
          <span>NEW COMMITS</span>
          <h3 class="m-0">Web Canteen UMN Pricelist</h3>
          <a href="/pricelist-canteen" class="btn-yellow fit-content mt-12"
            >Check it</a
          >
        </div>
      </div>
    </section>

    <section class="full-width mb-32">
      <div class="flex flex-col container">
        <h3 class="text-center">HOW TO SUBMIT YOUR WORK?</h3>
        <div class="grid step-submit">
          <div class="grid_column flex h-center" col="s12,m6">
            <img src="/assets/img/step-1.svg" alt="" />
          </div>
          <div class="grid_column" col="s12,m6">
            <h5>COME UP WITH AN IDEA</h5>
            <p>
              Research and create content about anything you are passinate with.
              (e.g. software, hardware, IoT)
            </p>
          </div>
        </div>
        <div class="grid step-submit">
          <div class="grid_column flex h-center" col="s12,m6">
            <img src="/assets/img/step-2.svg" alt="" />
          </div>
          <div class="grid_column reverse" col="s12,m6">
            <h5>PRESENT</h5>
            <p>Present your creation to the ACES LABS team.</p>
          </div>
        </div>
        <div class="grid step-submit">
          <div class="grid_column flex h-center" col="s12,m6">
            <img src="/assets/img/step-3.svg" style="max-width: 250px" alt="" />
          </div>
          <div class="grid_column" col="s12,m6">
            <h5>PUBLISH & EARN SKKM</h5>
            <p>
              You'll earn SKKM Minat & Bakat plus the content you created will
              be published to aces.umn.ac.id
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'LabsIndex',
  layouts: 'DefaultLayout',
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
.h1 {
  @media #{$large} {
    font-size: 3em;
  }
}
.labs {
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

    .bg-header {
      position: absolute;
      z-index: 0;

      width: 100%;
      object-fit: cover;
      min-height: 100%;
      left: 0;

      filter: brightness(70%);
    }

    .logo {
      max-width: 6em;
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

  &-banner {
    position: relative;
    padding: 2em 0;
    overflow: hidden;
    background-size: cover;
    .content {
      z-index: 1;
      color: $white;

      @media #{$large} {
        padding-left: 30%;
      }
      @media #{$xl} {
        padding-left: 20%;
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

.step-submit {
  max-width: 920px;
  margin: 2em auto;
  text-align: center;

  @media #{$md} {
    text-align: left;
  }
  img {
    max-width: 300px;
  }

  .reverse {
    @media #{$md} {
      order: -1;
    }
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
</style>
