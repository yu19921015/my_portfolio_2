<template>
  <nav class="navbar is-spaced">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/">
          <img src="../assets/index.png" class="img-index">
        </router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
           data-target="navMenuMore" @click="showNav=!showNav" :class="{'is-active': showNav}">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div id="navMenuMore" class="navbar-menu" :class="{'is-active': showNav}">
        <div class="navbar-end">
          <a class="navbar-item" @click="showNav=!showNav">
            <router-link to="/introduction">
              Introduction
            </router-link>
          </a>
          <a class="navbar-item" @click="showNav=!showNav">
            <router-link to="/career">
              <!--<span class="has-text-primary">Career</span>-->
              Career
            </router-link>
          </a>
          <a class="navbar-item" @click="showNav=!showNav">
            <router-link to="/skill">
              Skill
            </router-link>
          </a>
          <a class="navbar-item" @click="showNav=!showNav">
            <router-link to="/portfolio">
              Portfolio
            </router-link>
          </a>
          <a class="navbar-item" @click="showNav=!showNav">
            <router-link to="/contact">
              Contact
            </router-link>
          </a>
          <a class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Language
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                <div class="dropdown-text" @click="changeToJapanese">Japanese</div>
              </a>
              <a class="navbar-item">
                <div class="dropdown-text" @click="changeToEnglish">English</div>
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
  export default {
    name: "Navigation",
    data() {
      return {
        showNav: false
      }
    },
    methods: {
      changeToJapanese() {
        this.$store.commit('setLanguage', 'ja')
      },
      changeToEnglish() {
        this.$store.commit('setLanguage', 'en')
      }
    }
  }
</script>

<style>
  .img-index {
    width: 200px;
  }

</style>