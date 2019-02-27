<template>
  <div class="contact">
    <div class="columns">
      <div class="column">
        <div class="title has-text-centered">
          Contact
        </div>
        <div class="content">
          <p>{{getMessages.message_1}}</p>
            <span class="icon icon-envelope has-text-info">
            <i class="fas fa-envelope fa-lg"></i>
            </span>
            <span>yuu.koyama.3154@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Contact",
    computed: {
      language() {
        return this.$store.getters.language
      },
      getMessages() {
        return require('./contact_' + this.language + '.json')
      }
    }
  }
</script>

<style>
  @media (max-width: 768px) {
    .contact {
      margin-top: 3rem;
      margin-left: 3rem;
      margin-right: 3rem;
    }
  }

  @media (min-width: 769px) {
    .contact {
      margin-top: 5rem;
      margin-left: 10rem;
      margin-right: 10rem;
    }
  }

  .icon-envelope {
    margin-right: 0.5rem;
  }
</style>