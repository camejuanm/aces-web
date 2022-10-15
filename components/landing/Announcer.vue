<template>
  <section v-if="title !== ''">
    <div class="announcer-container flex v-center h-center">
      <img
        v-lazy-load
        src="/assets/img/bg-banner-3.jpg"
        class="image-background"
        alt=""
      />
      <div class="container flex flex-col lg-flex-row v-center h-center">
        <span> {{ title }} </span>
        <a v-if="url != '-'" :href="url" class="btn-primary fit-content">
          More Info
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AnnouncerSection',
  props: {
    title: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.announcer {
  &-container {
    position: relative;

    padding: 1em 0;
    min-height: 80px;
    color: #fff;

    img {
      position: absolute;
      z-index: 0;

      width: 100%;
      object-fit: cover;
      min-height: 100%;
      left: 0;

      filter: brightness(70%);
    }

    span {
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 5px 12px;

      @media #{$large} {
        width: 80%;
      }
    }

    .btn-primary {
      margin-top: 8px;
      background-color: #fff;
      color: #222;
      font-weight: 300;
    }

    @media #{$large} {
      min-height: 90px;
    }

    .container {
      position: relative;
      z-index: 1;
      text-align: center;

      @media #{$large} {
        text-align: left;
        justify-content: space-between;
        align-items: flex-start;
      }
    }
  }
}
</style>
