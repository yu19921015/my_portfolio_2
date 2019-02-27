<template>
  <div class="home">
    <div class="hero img-hero is-fullheight">
      <strong class="home-intro">
        {{getMessages.message_1}}<br>
        {{getMessages.message_2}}
      </strong>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  computed: {
    language() {
      return this.$store.getters.language
    },
    getMessages() {
      return require('./home_' + this.language + '.json')
    }
  }
}
</script>

<style>
  @media (min-width: 769px) {
    .img-hero {
      background: url(../assets/home.jpg) no-repeat center center;
      background-size: cover;
    }

    .home-intro {
      margin-top: 5rem;
      margin-left: 10rem;
      margin-right: 10rem;
      font-size: 1.75rem;
    }
  }

  @media (max-width: 768px) {
    .img-hero {
      background: url(../assets/mobile-home.jpg) no-repeat center center;
      background-size: cover;
    }

    .home-intro {
      margin-top: 3rem;
      margin-left: 3rem;
      margin-right: 3rem;
      font-size: 1.25rem;
    }
  }
</style>