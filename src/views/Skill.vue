<template>
  <div class="section">
    <div class="container">
      <div class="title has-text-centered">
        Skill
      </div>
      <div class="columns">
        <div class="column">
          <article class="message is-info">
            <div class="message-header">
              <p>Java</p>
              <button @click="isClosedJava=!isClosedJava" :class="{hidden: isClosedJava}">▲</button>
              <button @click="isClosedJava=!isClosedJava" :class="{hidden: !isClosedJava}">▼</button>
            </div>
            <div class="message-body" :class="{hidden: isClosedJava}">
              {{getMessages.java}}
            </div>
          </article>
          <article class="message is-info">
            <div class="message-header">
              <p>Visual Basic (VBA)</p>
              <button @click="isClosedHtml=!isClosedHtml" :class="{hidden: isClosedHtml}">▲</button>
              <button @click="isClosedHtml=!isClosedHtml" :class="{hidden: !isClosedHtml}">▼</button>
            </div>
            <div class="message-body" :class="{hidden: isClosedHtml}">
              {{getMessages.vba}}
            </div>
          </article>
        </div>
        <div class="column">
          <article class="message is-info">
            <div class="message-header">
              <p>HTML & CSS</p>
              <button @click="isClosedVba=!isClosedVba" :class="{hidden: isClosedVba}">▲</button>
              <button @click="isClosedVba=!isClosedVba" :class="{hidden: !isClosedVba}">▼</button>
            </div>
            <div class="message-body" :class="{hidden: isClosedVba}">
              {{getMessages.html_css}}
            </div>
          </article>
          <article class="message is-info">
            <div class="message-header">
              <p>Java Script</p>
              <button @click="isClosedJavaScript=!isClosedJavaScript" :class="{hidden: isClosedJavaScript}">▲</button>
              <button @click="isClosedJavaScript=!isClosedJavaScript" :class="{hidden: !isClosedJavaScript}">▼</button>
            </div>
            <div class="message-body" :class="{hidden: isClosedJavaScript}">
              {{getMessages.js}}
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Skill",
    data() {
      return {
        isClosedJava: true,
        isClosedHtml: true,
        isClosedVba: true,
        isClosedJavaScript: true
      }
    },
    computed: {
      language() {
        return this.$store.getters.language
      },
      getMessages() {
        return require('./skill_' + this.language + '.json')
      }
    }
  }
</script>

<style>
  .hidden {
    display: none;
  }
</style>