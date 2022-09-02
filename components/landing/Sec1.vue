<template>
  <section class="hero-section" :lazy-background="background">
    <span class="border-box-1"></span>
    <div class="container">
      <span class="border-box"></span>

      <div class="flex flex-col hero-desc full-width pl-12 pr-12">
        <span class="title mt-64">
          {{ text }}
        </span>
      </div>
      <div
        class="flex flex-row hero-nav f-space-between full-width h-center pl-12 pr-12"
      >
        <div class="flex flex-row col-gap-24">
          <a href="#about" style="color: #fff; font-weight: normal"
            >/About us</a
          >
        </div>
        <div class="flex md-only">Part of <a href="#">umn.ac.id</a></div>
      </div>
    </div>
  </section>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'BannerHero',
  props: {
    background: {
      type: String,
      default: '/assets/img/background-hero.jpg'
    },
    text: {
      type: String,
      default: 'ASSOCIATION OF COMPUTER ENGINEERING STUDENTS'
    }
  }
}
</script>
<style lang="scss" scoped>
.hero {
  &-section {
    width: 100%;
    max-width: 100%;
    min-height: 80vh;
    display: flex;

    color: #fff;
    font-family: 'Poppins-ExtraLight', sans-serif;

    // background: url('/assets/img/background-hero.jpg') no-repeat center center;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;

    @media #{$large} {
      min-height: 60vh;
      max-height: 60vh;
    }

    a {
      color: $blue;
      font-weight: bold;
    }

    .container {
      position: relative;
    }

    .border-box {
      min-width: 100%;
      min-height: 100%;
      border-left: 1px solid rgba($color: #969696, $alpha: 0.5);
      border-right: 1px solid rgba($color: #969696, $alpha: 0.5);

      position: absolute;
      left: 0;
    }

    .border-box-1 {
      min-width: 100%;
      min-height: 85%;
      top: 5%;
      border-top: 1px solid rgba($color: #969696, $alpha: 0.5);
      border-bottom: 1px solid rgba($color: #969696, $alpha: 0.5);

      position: absolute;
      left: 0;
    }
  }
  &-desc {
    position: absolute;
    bottom: 20%;

    .title {
      width: 100%;
      margin-bottom: 3em;
      font-family: 'Poppins-ExtraLight', sans-serif;
      font-size: 2.5em;
      letter-spacing: 2px;

      @media #{$md} {
        max-width: 70%;
      }
      @media #{$large} {
        max-width: 60%;
      }
      @media #{$xl} {
        max-width: 40%;
      }
    }
  }

  &-nav {
    position: absolute;
    bottom: 10%;
  }
}
</style>
