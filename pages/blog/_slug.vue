<template>
  <main class="site-main container">
    <section class="blog-header">
      <span class="h1 title"
        >ACES DAY : Adaptasi Kegiatan Bonding Dimasa Pandemi</span
      >
      <span class="date">21 Maret 2022</span>
      <div class="blog-header-image">
        <img src="/img/DSCF2719.JPG" alt="" />
        <span class="source-image">ACES-Documentation</span>
      </div>
    </section>
    <section class="blog-content">
      <div class="blog-content-wrapper">
        <span class="author">Author : PR ACES Gen. XII</span>
        <p>
          <span class="font--bold">Lorem ipsum </span> dolor sit amet
          consectetur, adipisicing elit. Voluptatem nihil enim sunt harum
          inventore repudiandae labore sed sapiente blanditiis quae vitae ex,
          aut suscipit laborum tenetur magni quaerat ratione fuga quia cum
          itaque obcaecati earum necessitatibus saepe. Provident modi tempora,
          deleniti natus molestiae deserunt atque id asperiores nobis,
          distinctio impedit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ex a
          doloremque blanditiis corporis magni assumenda dolorem. Distinctio
          soluta nesciunt cum facilis excepturi pariatur a! Eaque a veniam
          expedita aperiam, veritatis laborum sapiente sit? Officiis
          exercitationem dignissimos tempora? Reiciendis, ab omnis. Tempore,
          magnam vero cupiditate porro deleniti aliquam voluptatibus ratione.
        </p>
      </div>
    </section>
    <section class="blog-footer">
      <div class="share-wrapper">
        <span class="h5 font--bold">Bagikan Artikel</span>
        <div class="share-media">
          <button class="button-share">
            <img src="/img/icon-instagram.svg" alt="" />
          </button>
          <button class="button-share">
            <img src="/img/github.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.site-main {
  font-family: Poppins-Light, sans-serif;
  padding: 1em 0;
}
.blog {
  &-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 1em;
    padding: 1em 0;

    border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);

    @media #{$large} {
      align-items: center;
    }

    &-image {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media #{$large} {
        align-items: center;
      }

      gap: 8px;
      img {
        width: 100%;
        max-width: 568px;
      }
    }

    .source-image {
      font-size: 80%;
      color: #696969;
    }

    .title {
      font-family: Italiana, serif;
    }

    .date {
      color: #696969;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
    padding: 1em 0;

    &-wrapper {
      max-width: 920px;
    }
  }

  &-footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1em 0;

    .share-wrapper {
      display: flex;
      flex-direction: column;
      gap: 12px;

      width: 100%;
      max-width: 920px;
    }

    .share-media {
      display: flex;
      gap: 1em;

      button {
        width: 3em;
        height: 3em;

        background: rgb(255, 145, 72);
        border: 1px solid rgba($color: #000000, $alpha: 0.5);
        border-radius: 6px;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
