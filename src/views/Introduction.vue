<template>
  <div class="self-introduction">
    <div class="columns">
      <div class="column">
        <div class="title has-text-centered">
          Introduction
        </div>
        <div class="content">
          <p class="is-size-4">小山　優</p>
          <p class="is-size-4">Yu Koyama</p>
          <p class="is-size-4">{{getMessages.birthday}}</p>
          <br>
          <p>{{getMessages.message_1}}</p>
          <p>{{getMessages.message_2}}</p>
          <p>{{getMessages.message_3}}</p>
          <p>{{getMessages.message_4}}</p>
          <p>{{getMessages.message_5}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Introduction",
    data() {
      return {
        // message: require('./introduction_ja.json')
      }
    },
    computed: {
      language() {
        return this.$store.getters.language
      },
      getMessages() {
        return require('./introduction_' + this.language + '.json')
      }
    }
  }
</script>

<style>
  @media (max-width: 768px) {
    .self-introduction {
      margin-top: 3rem;
      margin-left: 3rem;
      margin-right: 3rem;
    }
  }

  @media (min-width: 769px) {
    .self-introduction {
      margin-top: 5rem;
      margin-left: 10rem;
      margin-right: 10rem;
    }
  }
</style>