<template>
  <section class="hero-section">
    <div class="background-image">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1438 157"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 73.5C61.3333 17.3333 283.8 -59.3 695 83.5C1106.2 226.3 1361 122.667 1437 53"
          stroke="url(#paint0_linear_221_3)"
          stroke-width=".5"
          class="path"
        />
        <defs>
          <linearGradient
            id="paint0_linear_221_3"
            x1="1305"
            y1="21.0003"
            x2="-76"
            y2="46.5003"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#48AAD5" />
            <stop offset="0.342712" stop-color="#B8EAFF" />
            <stop offset="1" stop-color="#61B9DE" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1438 157"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-2.5 1C193 139 417.5 206.5 719.5 92C1134.5 -65.3426 1244 60 1441 164.5"
          stroke="url(#paint0_linear_221_1)"
          stroke-width="0.5"
          class="path1"
        />
        <defs>
          <linearGradient
            id="paint0_linear_221_1"
            x1="1305"
            y1="21.0003"
            x2="-76"
            y2="46.5003"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1E1FD" />
            <stop offset="0.30268" stop-color="#247EA5" />
            <stop offset="0.701854" stop-color="#B8EAFF" />
            <stop offset="1" stop-color="#9ADFFC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="grid container hero-container">
      <div class="grid_column title">
        <h1>Association of Computer Engineering Students</h1>
      </div>
      <div class="grid_column moto">
        <p>We not just the part of system, we create it!</p>
      </div>
      <div class="agenda">
        <div class="date">
          <span class="date-day">21</span>
          <span class="date-month">Maret</span>
        </div>
        <p class="agenda-text">
          <span class="agenda-title">Save The Date!</span>
          <span class="agenda-description">
            ACES DAY : Sharing Magang MBKM & Program Bangkit
          </span>
        </p>
      </div>
    </div>
    <div class="card-container">
      <div class="card-wrapper">
        <span class="font--bold">News :</span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, soluta?
        <span class="font--bold">Read more ...</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  mounted() {
    this.animatePath0()
    this.animatePath1()
  },
  methods: {
    animatePath0() {
      this.$anime({
        targets: '.path',
        d: [
          {
            value:
              'M-2.5 1C193 139 417.5 206.5 719.5 92C1134.5 -65.3426 1244 60 1441 164.5'
          },
          {
            value:
              'M1.5 73.5C61.3333 17.3333 283.8 -59.3 695 83.5C1106.2 226.3 1361 122.667 1437 53'
          }
        ],
        easing: 'easeInOutQuad',
        duration: 10000,
        loop: true
      })
    },
    animatePath1() {
      this.$anime({
        targets: '.path1',
        d: [
          {
            value:
              'M1.5 73.5C61.3333 17.3333 283.8 -59.3 695 83.5C1106.2 226.3 1361 122.667 1437 53'
          },
          {
            value:
              'M-2.5 1C193 139 417.5 206.5 719.5 92C1134.5 -65.3426 1244 60 1441 164.5'
          }
        ],
        easing: 'easeInOutQuad',
        duration: 10000,
        loop: true
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.hero {
  &-section {
    height: 93vh;
    position: relative;
    display: flex;
    justify-content: center;

    background: #151515;
    color: #fff;

    font-family: Poppins-Light, sans-serif;

    @media #{$md} {
      height: 70vh;
    }
  }
  &-container {
    position: absolute;
    top: 0;
    z-index: 2;
  }
}

.title {
  font-family: Italiana, sans-serif;
  position: relative;
  padding-top: 45%;
  text-align: center;

  @media #{$md} {
    padding-top: 15%;
  }
  @media #{$large} {
    padding-top: 13%;
    text-align: left;
  }

  h1 {
    font-weight: 300 !important;
    letter-spacing: 1px;

    margin-bottom: 0;
  }
}

.moto {
  color: #fff;
  font-size: 1.25em;
  text-align: center;

  @media #{$md} {
    font-size: 1.25em;
  }
  @media #{$large} {
    text-align: left;
  }
}

.background-image {
  position: absolute;
  width: 100%;
  height: 30vh;
  bottom: 0;

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.card {
  &-container {
    position: absolute;
    top: 0;
    gap: 1px;

    width: 100%;
    padding: 1em 0;

    background: #fff;
    color: #151515;

    display: flex;
    justify-content: center;
  }
  &-wrapper {
    width: 93%;
    max-width: 1280px;

    padding: 1.2em 0;

    border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);

    img {
      max-width: 100%;
    }
  }
}

.agenda {
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 1em;
  gap: 12px;

  @media #{$large} {
    align-items: flex-start;
    flex-direction: row;
  }

  .date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #54bbff;
    color: #151515;
    font-family: Poppins-medium, sans-serif;

    padding: 6px 1em;

    &-day {
      font-size: 2.2em;
    }
  }

  &-text {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #fff;

    @media #{$large} {
      align-items: flex-start;
    }
  }

  &-title {
    font-size: 80%;
  }

  &-description {
    background: #fff;
    color: #151515;

    padding: 6px 1em;
    margin: 6px 0 0 0;

    text-align: center;
  }
}
</style>
