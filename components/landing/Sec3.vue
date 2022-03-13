<template>
  <section class="team-section">
    <div class="grid container">
      <div class="grid_column">
        <h3 class="title">
          ACES <br />
          Generation XII
        </h3>
        <p>
          <span>Visi : </span> Menjadikan ACES sebagai himpunan yang aktif
          berkontribusi dan responsif bagi anggota, almamater, dan masyarakat.
        </p>
        <p>
          <span>Misi : </span>
          <ul>
            <li>- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, fugiat vero! Neque recusandae iure aliquam tempore amet, sapiente maiores voluptatem, sed reprehenderit culpa accusantium dolorem eum corrupti! Accusantium, labore inventore!</li>
            <li>- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum explicabo, quo laborum mollitia a dolore alias aliquam ad modi eius?</li>
            <li>- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo assumenda quae dolorem voluptates iusto?</li>
          </ul>
        </p>
        <VueSlickCarousel class="slider" v-bind="sliderOptions">
          <div v-for="people in pengurus" :key="people.name">
            <div class="slider-item">
              <div class="card-wrapper">
                <img :src="people.img" class="card-image" alt="" />
                <div class="card-text">
                  <span>{{ people.jabatan }}</span>
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
      sliderOptions: {
        arrows: false,
        dots: false,
        infinite: false,
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
      },
      pengurus: [
        {
          img: '/img/image-none.png',
          name: 'Abdul Ghofar Alhasyim',
          jabatan: 'Ketua'
        },
        {
          img: '/img/image-none.png',
          name: 'Richard Alvin Pratama',
          jabatan: 'Wakil Ketua'
        },
        {
          img: '/img/image-none.png',
          name: 'Raka Ihsan Danendra',
          jabatan: 'Sekretaris & Bendahara'
        },
        {
          img: '/img/image-none.png',
          name: 'Matthew Brandon Dani',
          jabatan: 'Koor. Research & Development'
        },
        {
          img: '/img/image-none.png',
          name: 'Gregorius Agung Nugroho',
          jabatan: 'Koor. Akademik'
        },
        {
          img: '/img/image-none.png',
          name: 'Julius Caesar Nurdiyana Putra',
          jabatan: 'Koor. Kesma'
        },
        {
          img: '/img/image-none.png',
          name: 'Kevin Fernando Wijaya Sumargo',
          jabatan: 'Kesma'
        },
        {
          img: '/img/image-none.png',
          name: 'Larasati',
          jabatan: 'Koor. Public Relation'
        },

        {
          img: '/img/image-none.png',
          name: 'Julia Theresia Fonataba',
          jabatan: 'Public Relation'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.team {
  &-section {
    width: 100%;
    background-color: #f2f2f2;
    padding: 1em 0 4em 0;
    font-family: Poppins, sans-serif;
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
}

.slider {
  margin-top: 2em;

  &-item {
    margin-right: 1em;

    @media #{$large} {
      margin-right: 2em;
    }
  }
}

.card {
  &-wrapper {
    background: #f2f2f2;
    box-shadow: 5px 5px 10px #dadada, -5px -5px 10px #ffffff;
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
</style>
