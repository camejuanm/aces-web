<template>
  <LoadingHandler v-if="$fetchState.pending" add-class="vh-60" />
  <main v-else class="site-main container">
    <section class="blog-header">
      <span class="h1 title"> {{ dataArticle.title }} </span>
      <span class="date">{{ $formatCurrentDate(dataArticle.created_at) }}</span>
    </section>
    <section class="blog-content">
      <div class="blog-content-wrapper" v-html="dataArticle.body"></div>
    </section>
    <section class="blog-footer">
      <div class="share-wrapper">
        <span class="h5 font--bold">Bagikan Artikel</span>
        <div class="share-media">
          <button class="button-share">
            <img src="/img/icon-instagram.svg" alt="" />
          </button>
          <button class="button-share">
            <img src="/img/github.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      dataArticle: null
    }
  },
  async fetch() {
    await Promise.all([
      this.$axios.get(`${this.$apiurl()}/posts/${this.$route.params.slug}`)
    ])
      .then(res => {
        this.dataArticle = res[0].data
        // eslint-disable-next-line no-console
        console.log(this.dataArticle)
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.response)
      })
  }
}
</script>

<style lang="scss" scoped>
.site-main {
  font-family: Poppins-Light, sans-serif;
  padding: 1em 0;
}
.blog {
  &-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 1em;
    padding: 1em 0;

    border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);

    @media #{$large} {
      align-items: center;
    }

    &-image {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media #{$large} {
        align-items: center;
      }

      gap: 8px;
      img {
        width: 100%;
        max-width: 568px;
      }
    }

    .source-image {
      font-size: 80%;
      color: #696969;
    }

    .title {
      font-family: Italiana, serif;
    }

    .date {
      color: #696969;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
    padding: 1em 0;
    max-width: 100%;

    &-wrapper {
      max-width: 100%;
      overflow: hidden;

      @media #{$large} {
        max-width: 920px;
      }

      * {
        img {
          max-width: 100%;
        }
      }
    }
  }

  &-footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1em 0;

    .share-wrapper {
      display: flex;
      flex-direction: column;
      gap: 12px;

      width: 100%;
      max-width: 920px;
    }

    .share-media {
      display: flex;
      gap: 1em;

      button {
        width: 3em;
        height: 3em;

        background: rgb(255, 145, 72);
        border: 1px solid rgba($color: #000000, $alpha: 0.5);
        border-radius: 6px;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
        }
      }
    }
  }
}

.vh-60 {
  height: 60vh;
}
</style>
