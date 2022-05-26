<template>
  <section class="info-section container mb-64">
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
    <div class="grid container info-container pb-48">
      <div class="grid_column title">
        <h1>Upcoming agenda</h1>
      </div>
      <div class="agenda">
        <div class="date">
          <span class="box"></span>
          <div class="pl-12 pr-12">
            <span class="date-day">21</span>
            <span class="date-month">Aug</span>
          </div>
        </div>
        <p class="agenda-text">
          <span class="agenda-description">
            ACES DAY : Sharing Magang MBKM & Program Bangkit
          </span>
          <button class="btn-primary">More Info</button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InfoSection',
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
.info {
  &-section {
    position: relative;
    display: flex;
    justify-content: center;

    background: #151515;
    color: #fff;
    border-radius: 8px;

    font-family: Poppins-Light, sans-serif;
  }
  &-container {
    z-index: 2;
  }
}

.title {
  position: relative;
  text-align: left;

  h1 {
    font-weight: 300 !important;
    letter-spacing: 1px;

    margin-bottom: 0;
  }
}

.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  background-image: url('../../static/assets/img/bg-banner-1.png');
  background-size: cover;
  border-radius: 8px;
  overflow: hidden;

  svg {
    position: absolute;
    bottom: -5em;
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
  align-items: flex-start;
  flex-direction: row;

  margin-top: 1em;
  gap: 12px;

  .date {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: space-between;

    background: #fff;
    color: #151515;
    font-family: Poppins-medium, sans-serif;
    height: 100%;
    min-height: 90px;
    max-height: 90px;

    &-day {
      font-size: 2.2em;
    }

    .box {
      padding: 0 6px;
      height: 16px;
      width: 100%;
      background: #d9d9d9;
    }
  }

  &-text {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    color: #fff;
  }

  &-title {
    font-size: 80%;
  }

  &-description {
    background: #fff;
    color: #151515;

    padding: 6px 1em;
    text-align: center;
  }
}

.btn-primary {
  border-radius: 0;
  font-weight: normal;
}
</style>
