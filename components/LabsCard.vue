<template>
  <nuxt-link
    :to="generateLink(data.slug)"
    class="flex flex-col shadow full-width pl-8 pr-8"
  >
    <div class="labs-card flex flex-col">
      <h4 class="m-0">{{ data.title }}</h4>
      <span class="text-small author mt-8">Author: {{ data.author.name }}</span>
      <p class="text-small" v-html="data.excerpt"></p>
      <div class="flex flex-row col-gap-12">
        <span
          class="text-small label"
          :class="
            data.labscategory.name === 'Web Development'
              ? 'label-blue'
              : data.labscategory.name === 'IoT'
              ? 'label-yellow'
              : 'label-grey'
          "
          >{{ data.labscategory.name }}</span
        >
      </div>
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
        name: 'labs-slug',
        params: { slug: params }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.labs-card {
  padding: 12px 12px 20px 12px;
  background-color: #fff;
  color: #222;
  min-width: 100%;
  max-height: 230px;
  overflow: hidden;
  box-shadow: 0px 8px 16px 5px rgba(159, 159, 159, 0.13);
  border-radius: 4px;

  h4 {
    font-size: 1em;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .author {
    color: #929292;
  }

  p {
    color: #929292;
    text-align: justify;
    overflow: hidden;
    max-height: 72px;
    min-height: 72px;
  }

  .label {
    border-radius: 3px;
  }
}
</style>
