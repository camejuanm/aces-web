<template>
  <LoadingHandler v-if="$fetchState.pending" add-class="vh-60" />
  <main v-else class="site-main">
    <div class="article-image flex h-center">
      <img
        v-if="dataArticle.image != null"
        :src="dataArticle.image"
        class="full-width"
        alt=""
      />
    </div>
    <div class="container">
      <section class="article-header">
        <h1 class="h1 f-24 title m-0">{{ dataArticle.title }}</h1>
        <span class="date"
          >Author: {{ dataArticle.author.name }} |
          {{ $formatCurrentDate(dataArticle.updated_at) }}</span
        >
      </section>
      <section class="article-content">
        <div class="article-content-wrapper" v-html="dataArticle.body"></div>
      </section>
    </div>
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
  font-family: 'Poppins-Light', sans-serif;
  padding: 0;

  @media #{$large} {
    padding-top: 2em;
  }
}

.container {
  max-width: 920px;
}

.article {
  &-image {
    position: relative;
    z-index: 0;
    overflow: hidden;

    width: 100%;
    margin: 0 auto;
    max-width: 920px;

    @media #{$large} {
      padding-left: 3em;
    }

    img {
      max-width: 920px;
    }
  }

  &-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    background: #fff;
    width: 100%;

    position: relative;
    z-index: 3;

    gap: 1em;
    padding: 2em 0;

    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);

    @media #{$md} {
      margin-top: -3em;
      padding-left: 1em;
      width: 85%;
      border: none;
    }

    @media #{$md} {
      padding-left: 1em;
      width: 85%;
    }

    @media #{$large} {
      padding-left: 0;
    }

    .title {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
    }

    .date {
      color: #696969;
    }
  }

  &-content {
    overflow: hidden;
    max-width: 920px;

    @media #{$md} {
      padding: 0 1em;
    }

    @media #{$large} {
      padding: 0;
    }

    &-wrapper {
      ::v-deep p {
        img[style] {
          width: 100%;
          max-width: 100%;
        }
      }

      ::v-deep a {
        text-decoration: underline;
        color: $dark;
      }
    }
  }
}

.vh-60 {
  height: 60vh;
}
</style>
