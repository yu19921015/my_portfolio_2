<template>
  <div class="home">
    <div class="hero img-hero is-fullheight">
      <div class="">title</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style>
  @media (min-width: 769px) {
    .img-hero {
      background: url(../assets/home.jpg) no-repeat center center;
      background-size: cover;
    }
  }

  @media (max-width: 768px) {
    .img-hero {
      background: url(../assets/mobile-home.jpg) no-repeat center center;
      background-size: cover;
    }
  }
</style>