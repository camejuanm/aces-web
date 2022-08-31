<template>
  <LoadingHandler v-if="$fetchState.pending" add-class="vh-60" />
  <main v-else class="site-main container">
    <img :src="dataArticle.image" class="full-width" alt="" />
    <section class="article-header">
      <h1 class="h1 title m-0">{{ dataArticle.title }}</h1>
      <span class="date"
        >Author: {{ dataArticle.author.name }} |
        {{ $formatCurrentDate(dataArticle.updated_at) }}</span
      >
    </section>
    <section class="article-content">
      <div class="article-content-wrapper" v-html="dataArticle.body"></div>
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
  padding: 1em 0;
}

.container {
  max-width: 920px;
}

.article {
  &-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 1em;
    padding: 1em 0;

    border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);

    .title {
      font-family: 'Poppins-Light', sans-serif;
      font-weight: 300;
    }

    .date {
      color: #696969;
    }
  }

  &-content {
    text-align: justify;
    overflow: hidden;

    &-wrapper {
      p {
        img[style] {
          width: 100%;
          max-width: 100%;
        }
      }
    }
  }
}

.vh-60 {
  height: 60vh;
}
</style>
