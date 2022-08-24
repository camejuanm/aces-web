<template>
  <nuxt-link
    :to="generateLink(data.slug)"
    class="article-card flex flex-col shadow full-width text-black"
  >
    <img
      :src="
        data.image ? data.image : `${$baseurl()}/assets/img/default-image.jpg`
      "
      alt=""
    />
    <span v-if="data.category.name != ''" class="category">{{
      data.category.name
    }}</span>
    <div class="flex flex-col p-16">
      <h6 class="title text-black m-0">
        {{ data.title }}
      </h6>
      <p class="text-small preview-content" v-html="data.excerpt"></p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    generateLink(params) {
      return {
        name: 'article-slug',
        params: { slug: params }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.article-card {
  position: relative;
  background: white;

  box-shadow: 0px 8px 16px 5px rgba(159, 159, 159, 0.13);
  min-height: 300px;
  max-height: 300px;
  overflow: hidden;

  .category {
    position: absolute;
    top: 10px;
    left: 10px;

    padding: 8px 6px;

    font-weight: 400 !important;
    font-size: 12px;

    background-color: #fff;

    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }

  img {
    object-fit: cover;
    object-position: center center;
    max-height: 160px;
    min-height: 160px;
  }
}

a {
  color: $dark !important;
}

.title {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-weight: normal;
}

.preview-content {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3.4em;
  line-height: 1.6em;
}

.point {
  @media #{$md} {
    min-height: 27px;
  }
}
</style>
