<template>
  <section class="project pt-64 pb-64">
    <div class="container flex flex-col row-gap-12">
      <span>/Our project</span>
      <span class="h2 mt-32 mb-64"
        >We not just part of system. <br />
        We create it!</span
      >
      <VueSlickCarousel class="#project-slider" v-bind="sliderOptions">
        <div v-for="(data, index) of menu" :key="index">
          <div class="slider-item">
            <div class="card-wrapper">
              <img :src="data.img" class="card-image" alt="" />
              <div class="card-desc flex flex-col mt-18">
                <span class="title">{{ data.title }}</span>
                <p>{{ data.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectSection',
  data() {
    return {
      menu: [
        {
          img: 'assets/img/project-slide-1.jpg',
          title: 'Research & Experiment',
          description: 'Submit karyamu dan dapatkan poin SKKM!'
        },
        {
          img: 'assets/img/project-slide-2.jpg',
          title: 'Program Activities',
          description: 'Through the wave carry friendship'
        },
        {
          img: 'assets/img/project-slide-3.jpg',
          title: 'Web Portal',
          description: 'Search information that you need'
        }
      ],
      sliderOptions: {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40px',
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerPadding: '60px',
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
  methods: {}
}
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  background-color: #222;
  color: #fff;

  font-family: 'Poppins-ExtraLight', sans-serif;

  .h2 {
    font-family: 'Poppins-Thin', sans-serif;
  }

  .slider {
    width: 100%;

    &-item {
      margin-right: 1em;

      @media #{$md} {
        margin-right: 2em;
      }

      .card {
        &-wrapper {
          font-family: 'Poppins-Thin', sans-serif;
          img {
            -webkit-user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;

            object-fit: cover;
            width: 300px;
            height: 300px;
            @media #{$md} {
              height: 400px;
              width: 720px;
            }
          }
        }
        &-desc {
          .title {
            font-size: 1.5em;
          }
        }
      }
    }
  }
}
</style>
