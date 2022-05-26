<template>
  <section class="activities-section container">
    <div class="activities-title">
      <h1 class="f-32 m-0 p-0">WHAT WE DO</h1>
      <span>#We not just part of system, we create it!</span>
    </div>
    <div class="card-container mt-24">
      <div class="card">
        <img src="assets/img/activities-icon-1.png" alt="icon" />
        <div class="card-text pl-12">
          <span class="title">Research & Experiment</span>
          <span class="description">103 Student articles</span>
        </div>
      </div>
      <div class="card">
        <img src="assets/img/activities-icon-2.png" alt="icon" />
        <div class="card-text pl-12">
          <span class="title">Program Activities</span>
          <span class="description">Student Support</span>
        </div>
      </div>
      <div class="card">
        <img src="assets/img/activities-icon-3.png" alt="icon" />
        <div class="card-text pl-12">
          <span class="title">ACES News</span>
          <span class="description">Information updates</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ActivitiesSection'
}
</script>

<style lang="scss" scoped>
.activities {
  &-section {
    color: #222;
    padding-top: 24px;
    padding-bottom: 24px;
    font-family: Poppins-Light, sans-serif;
  }
  &-title {
    display: flex;
    flex-direction: column;

    @media #{$md} {
      flex-direction: row;
      justify-content: space-between;
    }
  }
}

.card-container {
  display: flex;
  flex-direction: column;
  row-gap: 1em;

  @media #{$large} {
    flex-direction: row;
    justify-content: space-between;
    column-gap: 1em;
    row-gap: 0;
  }

  .card {
    background: #fff;
    box-shadow: 3px 3px 10px #d9d9d9;
    border-radius: 6px;
    display: flex;

    width: 100%;
    min-height: 100px;
    max-height: 120px;

    @media #{$large} {
      max-width: 400px;
    }

    img {
      border-radius: 6px 0 0 6px;
      width: 100%;
      max-width: 100px;
    }

    &-text {
      display: flex;
      flex-direction: column;
      justify-content: center;

      height: 100px;

      .title {
        font-family: Poppins, sans-serif;
      }

      .description {
        color: #7c7c7c;
      }
    }
  }
}
</style>
