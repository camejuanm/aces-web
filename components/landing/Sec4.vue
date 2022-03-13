<template>
  <section class="hero-section">
    <div class="container">
      <div class="grid">
        <div class="grid_column" col="s12,l6" style="padding-right: 3em">
          <h3>CURRENT ACTIVITIES</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ducimus aliquid earum? Maiores libero laboriosam
            architecto, corporis quam aliquam, magnam similique atque repellat
            voluptatibus debitis cumque esse ad dolorum nemo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            doloremque minus quae, repudiandae corrupti laudantium accusamus ut
            ducimus, ex quod a ipsam praesentium officiis saepe ullam
            repellendus omnis? Ab, consequuntur illum! Quo culpa fugiat eum
            aperiam, necessitatibus amet voluptas inventore.
          </p>
        </div>
        <div class="grid_column" col="s12,l6" style="padding-top: 2em">
          <span>ACES </span><br /><span class="font--bold">TUTOR</span>
          <img
            src="/img/current-activities.png"
            alt="documentation"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CurrentActiviesSection'
}
</script>

<style lang="scss" scoped>
.hero-section {
  width: 100%;
  padding: 3em 0 3em 0;

  background: url('/img/bg-aces.png') no-repeat center center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;
}
</style>
