<template>
  <section>
      <button class="button is-info" @click="isClosed=!isClosed">
        {{name}}
      </button>
      <div class="notification" :class="{hidden: isClosed}">
        <div class="content item">
          <p v-html="item"></p>
        </div>
      </div>
  </section>
</template>


<script>
  export default {
    name: "Collapse",
    props: {
      name: String,
      item: String
    },
    data() {
      return {
        isClosed: true
      }
    }
  }
</script>

<style>
  .hidden {
    display: none;
  }

  .item {
    font-size: 12px;
  }
</style>