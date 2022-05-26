<template>
  <div class="hero-section">
    <section id="banner-hero" class="slide-banner">
      <div class="relative">
        <VueSlickCarousel v-bind="settingsBanner">
          <div v-for="i in 3" :key="i" class="relative">
            <img class="full-width" :src="`assets/img/slide-1.png`" alt="" />
            <div
              class="banner-content container flex flex-col v-center f-space-between"
            >
              <div class="full-width flex f-space-between">
                <span>
                  Part of
                  <a
                    href="https://umn.ac.id"
                    class="blue-link f-bold"
                    target="blank"
                    >umn.ac.id</a
                  >
                </span>
                <span>#TheFewTheProud</span>
              </div>
              <div class="flex flex-col">
                <span class="hero-description"> We Are . . . </span>
                <h1 class="hero-title">THE ACES</h1>
                <span class="hero-description">
                  Association of Computer Engineering Students
                </span>
              </div>
            </div>
          </div>
          <template #customPaging>
            <div class="custom-dot"></div>
          </template>
        </VueSlickCarousel>
      </div>
    </section>
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'BannerHero',
  data() {
    return {
      settingsBanner: {
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.hero {
  &-section {
    width: 100%;
    background-color: #fff;
    font-family: Poppins-Light, sans-serif;
  }
  &-title {
    font-size: 72px;
    margin: 0;

    @media #{$large} {
      font-size: 90px;
    }
  }
  &-description {
    font-size: 14px;
    @media #{$large} {
      font-size: 18px;
    }
  }
}

.slide-banner {
  padding-bottom: 40px;

  .custom-dot {
    border-left: 1px solid #e6ecec;
    border-bottom: 6px solid #e6ecec;
    color: #cdd3da;
    cursor: pointer;

    margin: 0 3px;
  }
  .slick-active {
    .custom-dot {
      font-weight: bold;
      border-bottom-color: $primary;
    }
  }
  img {
    object-fit: cover;
    overflow: hidden;
    height: 350px;
    min-height: 350px;
    max-height: 350px;

    @media #{$large} {
      height: 550px;
      min-height: 550px;
      max-height: 550px;
    }
  }
  .banner-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 90%;
    height: 60%;

    @media #{$large} {
      width: 100%;
      top: 35%;
      height: 55%;
    }
  }
}

.relative {
  position: relative !important;
}

.blue-link {
  color: #08a3fa;
}
</style>
