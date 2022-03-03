<template>
  <footer class="site-footer">
    <div class="grid container">
      <div class="grid_column" col="s12,m4">
        <h3>ACES</h3>
        <span>Copyright &copy; 2022</span>
      </div>
      <div class="grid_column" col="s12,m4">
        <h6>Contact Us</h6>
        <ul>
          <li>Email : aces@umn.ac.id</li>
          <li>Instagram : acesumn</li>
        </ul>
      </div>
      <div class="grid_column" col="s12,m4">
        <h6>Made with love @ACES GEN XII</h6>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>
<style lang="scss" scoped>
.site-footer {
  background: url('/img/background-footer.png');
  background-size: cover;
  background-position: center center;
  padding: 5em 0;
  color: #fff;
  font-family: Poppins, sans-serif;

  h3 {
    margin: 0;
  }

  h6 {
    margin: 0;
    font-weight: 500;
    font-family: Poppins-Bold, sans-serif;
  }
}

ul {
  padding: 0;
  li {
    list-style: none;
    margin-bottom: 1em;
  }
}

.grid {
  gap: 2em;

  @media #{$md} {
    gap: 0;
  }
}
</style>
