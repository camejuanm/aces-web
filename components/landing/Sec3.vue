<template>
  <LoadingHandler v-if="$fetchState.pending" add-class="vh-60" />
  <section v-else id="about" class="team-section">
    <div class="grid container">
      <div class="grid_column">
        <h1 class="title">
          ACES <br />
          Generation XII
        </h1>
        <div id="visi" class="mb-12 mt-24">
          <span>Visi:</span>
          <div class="full-width" v-html="dataProfile[0].visi"></div>
        </div>
        <div id="misi">
          <span>Misi:</span>
          <div class="full-width" v-html="dataProfile[0].misi"></div>
        </div>
        <VueSlickCarousel class="slider" v-bind="sliderOptions">
          <div v-for="(people, index) in dataPengurus" :key="index">
            <div class="slider-item">
              <div class="card-wrapper">
                <img
                  :src="
                    people.image
                      ? `${people.image}`
                      : 'assets/img/image-none.png'
                  "
                  class="card-image"
                  alt=""
                />
                <div class="card-text">
                  <span>{{ people.jobdesk }}</span>
                  <span>{{ people.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'TeamSection',
  data() {
    return {
      dataPengurus: {},
      dataProfile: {},

      sliderOptions: {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 448,
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
      this.$axios.get(
        `${this.$apiurl()}/frontliners?generation=aces-generation-12`
      ),
      this.$axios.get(`${this.$apiurl()}/generations`)
    ])
      .then(res => {
        this.dataPengurus = res[0].data
        this.dataProfile = res[1].data
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.response)
      })
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.team {
  &-section {
    width: 100%;
    background-color: #fff;
    padding: 3em 0 4em 0;
    font-family: Poppins-Light, sans-serif;
  }
}

p {
  font-size: 0.9em;
  @media #{$md} {
    font-size: 1em;
  }
}

.title {
  margin: 0;
  text-align: left;

  padding: 8px 0;
  border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
}

.slider {
  margin-top: 2em;
  padding: 2em 0;
  border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);

  &-item {
    margin-right: 1em;

    @media #{$large} {
      margin-right: 2em;
    }
  }
}

.card {
  &-wrapper {
    background: #fff;
    box-shadow: 3px 3px 10px #d9d9d9;
    max-width: 360px;
    border-radius: 10px;
    display: flex;
    align-items: flex-end;
    cursor: pointer;
  }

  &-image {
    border-radius: 10px 0 0 10px;
    max-width: 6.5em;
  }

  &-text {
    padding: 1em 2em 1em 1em;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

ul {
  padding: 0;
  list-style: none;
}

.vh-60 {
  height: 60vh;
}
</style>
