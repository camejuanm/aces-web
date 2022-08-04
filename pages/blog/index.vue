<template>
  <LoadingHandler v-if="$fetchState.pending" add-class="vh-60" />
  <main v-else class="site-main container">
    <section class="blog-header grid">
      <div class="grid_column" col="l6">
        <p class="h1 title">
          Welcome <br />
          to Our Journey
        </p>
        <p class="subtitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
          minima.
        </p>
      </div>
      <div class="grid_column blog-header-image" col="l6">
        <img src="/img/blog-header.jpg" alt="" />
      </div>
    </section>

    <nav class="blog-filter">
      <li class="blog-filter-item">Program Kerja</li>
      <li class="blog-filter-item">Akademik</li>
    </nav>
  </main>
</template>

<script>
export default {
  name: 'AcesBlog',
  layouts: 'DefaultLayout',
  data() {
    return {
      dataArticle: null,
      isLoading: false
    }
  },
  async fetch() {
    await Promise.all([this.$axios.get(`${this.$apiurl()}/posts`)])
      .then(res => {
        this.dataArticle = res[0].data
        // eslint-disable-next-line no-console
        console.log(this.dataArticle)
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.response)
      })
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
.blog {
  &-header {
    text-align: center;
    font-weight: 400;

    margin: 0 0 2em 0;

    @media #{$large} {
      text-align: left;
      margin: 1em 0 0 0;
    }

    &-image {
      img {
        width: 100%;
        max-height: 320px;

        object-fit: cover;
        object-position: top center;
      }
    }

    .title {
      font-family: Italiana, serif;

      margin: 0.5em 0;

      @media #{$large} {
        margin: 1em 0;
      }
    }
  }
  &-filter {
    display: flex;
    justify-content: center;
    list-style: none;

    border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);

    font-family: Poppins-Light, sans-serif;

    margin: 0;
    order: -1;

    @media #{$large} {
      order: 0;
      margin: 1em 0;
      justify-content: flex-start;
    }

    &-item {
      padding: 1em 2em;

      cursor: pointer;

      transition: 0.3s ease-in-out;

      &:hover {
        background: #f0f0f0;
      }
    }
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}

.card {
  &-wrapper {
    padding: 6px 1em;

    display: flex;
    align-items: flex-start;

    .thumbnail {
      img {
        max-width: 130px;
      }
    }
  }

  &-text {
    margin: 0 0 0 1em;
    padding: 6px 0 8px 0;

    border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
    .title {
      padding: 0;
      color: #151511;
    }
    p {
      font-size: 80%;
      margin: 0;
    }
  }
}

.site-main {
  font-family: Poppins-Light, sans-serif;
  display: flex;
  flex-direction: column;
}

.vh-60 {
  height: 60vh;
}
</style>
