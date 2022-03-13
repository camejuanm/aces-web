<template>
  <section class="community-section">
    <div class="grid container">
      <div class="grid_column community">
        <div class="card-wrapper">
          <div class="card-item">
            <img src="/img/icon-aceslabs.png" class="card-icon" alt="" />
            <span class="card-text"> ACES Labs </span>
          </div>
          <div class="card-item">
            <img src="/img/icon-news.png" class="card-icon" alt="" />
            <span class="card-text"> ACES News </span>
          </div>
          <div class="card-item">
            <img src="/img/icon-globe-gear.png" class="card-icon" alt="" />
            <span class="card-text"> Open Project </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CommunitySection'
}
</script>
<style lang="scss" scoped>
.community-section {
  background-color: #f2f2f2;
  color: #222;
  font-family: Poppins, sans-serif;
}
.community {
  height: auto;
  padding: 3em 0 3em 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.title {
  margin: 0;
  text-align: left;
}

.card {
  &-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1em;
    margin-top: 1em;
    @media #{$large} {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  &-item {
    cursor: pointer;
    padding: 1em 2em;
    background: #f2f2f2;
    box-shadow: 5px 5px 10px #dadada, -5px -5px 10px #ffffff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 1em;
    max-width: 100%;

    @media #{$large} {
      width: 300px;
    }
  }

  &-icon {
    max-width: 3em;
  }

  &-text {
    font-size: 1.25em;
  }
}

p {
  font-size: 0.9em;
  @media #{$md} {
    font-size: 1em;
  }
}
</style>
