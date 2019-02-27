<template>
  <div class="portfolio">
    <div class="columns">
      <div class="column">
        <div class="title has-text-centered">
          Portfolio
        </div>
        <div class="content">
          <p>{{getMessages.message_1}}</p>
          <p>{{getMessages.message_2}}</p>
          <a href="https://github.com/yu19921015" target="_blank">
            <span class="icon">
            <i class="fab fa-github fa-lg"></i>
            </span>
            <span>&nbsp;yu19921015</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Portfolio",
    computed: {
      language() {
        return this.$store.getters.language
      },
      getMessages() {
        return require('./portfolio_' + this.language + '.json')
      }
    }
  }
</script>

<style>
  @media (max-width: 768px) {
    .portfolio {
      margin-top: 3rem;
      margin-left: 3rem;
      margin-right: 3rem;
    }
  }

  @media (min-width: 769px) {
    .portfolio {
      margin-top: 5rem;
      margin-left: 10rem;
      margin-right: 10rem;
    }
  }
</style>