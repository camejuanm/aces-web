<template>
  <section>
    <div class="announcer-container flex v-center h-center">
      <div class="container flex flex-col lg-flex-row v-center h-center">
        <span> {{ title }} </span>
        <a :href="url" class="btn-primary fit-content">More Info</a>
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
    background: url('/assets/img/background-announcer.jpg') no-repeat center
      right;
    background-size: cover;
    padding: 1em 0;
    min-height: 80px;
    color: #fff;

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
    }

    @media #{$large} {
      min-height: 90px;
    }

    .container {
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
