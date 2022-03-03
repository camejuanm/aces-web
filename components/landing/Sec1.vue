<template>
  <section class="hero-section">
    <div class="grid container">
      <div class="grid_column title">
        <h1>Association of Computer Engineering Students</h1>
      </div>
      <div class="grid_column moto">
        <p>We not just the part of system, we create it!</p>
      </div>
      <div class="grid_column">
        <div class="news">
          <p>
            <span>Current news : </span> ipsum dolor sit amet consectetur
            adipisicing elit. Eum provident maxime repellendus assumenda,
            accusantium blanditiis odio aspernatur quas delectus voluptates? sit
            amet consectetur adipisicing elit ...
            <nuxt-link :to="`/`">Read more.</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>
<style lang="scss" scoped>
.hero {
  &-section {
    background-image: linear-gradient(
        to right,
        rgba($color: #222, $alpha: 1),
        rgba($color: #222, $alpha: 0.5)
      ),
      url('/img/aces-bg.JPG');
    background-size: cover;
    background-position: center center;
    width: 100%;
    position: relative;
    color: #fff;
    font-family: Poppins-Light, sans-serif;
  }
}

.title {
  font-family: Italiana, sans-serif;
  position: relative;
  padding-top: 8%;

  @media #{$md} {
    padding-top: 6%;
  }

  h1 {
    font-weight: 300 !important;
    letter-spacing: 1px;
    font-size: 2em;
    margin-bottom: 0.5em;

    @media #{$md} {
      font-size: 2.5em;
    }
  }
}

.moto {
  color: #fff;
  font-size: 1.25em;

  @media #{$md} {
    font-size: 1.25em;
  }
}

.news {
  display: flex;
  position: relative;
  margin-top: 3em;
  background: linear-gradient(
    to left,
    rgba($color: #222, $alpha: 0),
    rgba($color: #adadad, $alpha: 0.3),
    rgba($color: #222, $alpha: 0)
  );

  @media #{$md} {
    margin-top: 5em;
  }

  p {
    font-size: 0.9em;
    width: 95%;
    padding: 1em 0 1em 0;

    span {
      font-weight: 400;
      color: $primary;
    }
  }
}
</style>
