<template>
  <main class="site-main blog">
    <div class="blog-container">
      <section class="blog-header">
        <h1>Woah, you can found me!</h1>
        <hr />
      </section>
      <section class="blog-content">
        <img src="/img/DSCF2719.jpg" alt="aces-team" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          odit repudiandae deleniti, sint mollitia vitae, similique ratione
          fugit quasi totam possimus obcaecati? Est beatae mollitia repudiandae
          hic qui unde distinctio! Itaque voluptates soluta ipsum dolorum
          explicabo a voluptate autem porro aspernatur blanditiis ab doloribus
          maiores enim atque qui, optio aperiam ut corrupti distinctio sit,
          error laudantium. Dolorum, magnam. Expedita, est fugit esse eius
          explicabo voluptatum nisi harum sed neque debitis dolor maxime dolore
          alias numquam obcaecati officiis pariatur praesentium repudiandae
          ipsam id unde. Praesentium impedit, eligendi nam perspiciatis
          architecto nemo ipsum? Ipsum at quod, esse distinctio ducimus
          excepturi facilis repudiandae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          fugiat accusantium, officiis ducimus accusamus adipisci molestiae
          quod! Nulla sint pariatur, fugiat deserunt dolore dicta. Quibusdam
          necessitatibus quas temporibus magni nostrum incidunt qui possimus
          provident voluptate, quia sapiente obcaecati? Cum placeat tenetur quos
          quidem fugit sed quibusdam quae optio, officiis dignissimos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, ipsum?
        </p>
      </section>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
.site-main {
  background: #222;
}

.blog {
  display: flex;
  padding: 3em 0;
  flex-direction: column;
  align-items: center;
  width: 93%;
  margin: 3em auto;
  max-width: 920px;

  &-container {
    background: #fff;

    display: flex;
    flex-direction: column;

    border-radius: 6px;
    padding: 1em 1em;

    @media #{$large} {
      padding: 1em 3em;
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: left;
    img {
      width: 100%;
      max-width: 400px;
      margin: 1em 0;
      border-radius: 6px;
    }
  }
}

hr {
  border: 1px solid rgba($color: #000000, $alpha: 0.1);
}
</style>
