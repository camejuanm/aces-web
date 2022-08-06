<template>
  <main class="site-main container">
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
    </section>

    <ul class="blog-filter tabs-bar mb-32">
      <li
        class="tabs-bar-item"
        :class="{ 'tabs-bar-item-active': currentTab == 'program-kerja' }"
        @click="changeTab('program-kerja')"
      >
        Program Kerja
      </li>
      <li
        class="tabs-bar-item"
        :class="{ 'tabs-bar-item-active': currentTab == 'akademik' }"
        @click="changeTab('akademik')"
      >
        Akademik
      </li>
    </ul>

    <LoadingHandler v-if="$fetchState.pending || isLoading" add-class="vh-60" />
    <section v-else id="proker" class="grid row-gap-16">
      <div
        v-for="data of dataArticle.data"
        :key="data.slug"
        class="grid_column pl-8 pr-8"
        col="s12,m6,l3"
      >
        <ArticleCard :data="data" />
      </div>

      <div class="flex full-width v-center h-center">
        <Pagination
          :current-page="dataArticle.current_page"
          :total-pages="dataArticle.last_page"
          :base-link="dataArticle.first_page_url.slice(0, -1)"
          @first-page="toLink(dataArticle.first_page_url)"
          @previous-page="toLink(dataArticle.prev_page_url)"
          @input-page="toLink"
          @next-page="toLink(dataArticle.next_page_url)"
          @last-page="toLink(dataArticle.last_page)"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AcesBlog',
  layouts: 'DefaultLayout',
  data() {
    return {
      currentTab: 'program-kerja',
      dataArticle: null,
      isLoading: false
    }
  },
  async fetch() {
    await Promise.all([
      this.$axios.get(`${this.$apiurl()}/posts?category=program-kerja`)
    ])
      .then(res => {
        this.dataArticle = res[0].data
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.response)
      })
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab
      this.filterCategory(tab)
    },
    async filterCategory(category) {
      this.isLoading = true
      await Promise.all([
        this.$axios.get(`${this.$apiurl()}/posts?category=${category}`)
      ])
        .then(res => {
          this.dataArticle = res[0].data
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error.response)
        })
      this.isLoading = false
    },
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

    margin: 1em 0 1em 0;

    @media #{$large} {
      text-align: left;
      margin: 0;
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
}

.blog-filter {
  border-top: 1px solid #969696;
  border-bottom: 1px solid #969696;

  .tabs-bar-item {
    flex-grow: 1;
    @media #{$large} {
      flex-grow: unset;
      padding: 12px 40px;
    }
    &-active {
      background-color: #dfdfdf;
      font-weight: 300;
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
