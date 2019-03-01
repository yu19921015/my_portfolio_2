<template>
  <div class="career">
    <div class="column">
      <div class="title has-text-centered">
        Career
      </div>
      <div class="timeline career-area">
        <div class="timeline-item is-info">
          <div class="timeline-marker is-info"></div>
          <div class="timeline-content">
            <p class="heading">March 2011</p>
            <p>{{getMessages.march_2011}}</p>
            <Collapse class="detail-button" :name="buttonName" :item="getMessages.highSchool"></Collapse>
          </div>
        </div>
        <div class="timeline-item is-info">
          <div class="timeline-marker is-info"></div>
          <div class="timeline-content">
            <p class="heading">April 2011</p>
            <p>{{getMessages.april_2011}}</p>
          </div>
        </div>
        <div class="timeline-item is-info">
          <div class="timeline-marker is-info"></div>
          <div class="timeline-content">
            <p class="heading">April 2013</p>
            <p>{{getMessages.april_2013}}</p>
          </div>
        </div>
        <div class="timeline-item is-info">
          <div class="timeline-marker is-info"></div>
          <div class="timeline-content">
            <p class="heading">March 2015</p>
            <p>{{getMessages.march_2015}}</p>
            <Collapse class="detail-button" :name="buttonName" :item="getMessages.university"></Collapse>
          </div>
        </div>
        <div class="timeline-item is-info">
          <div class="timeline-marker is-info"></div>
          <div class="timeline-content">
            <p class="heading">April 2015</p>
            <p>{{getMessages.april_2015}}</p>
          </div>
        </div>
        <div class="timeline-item is-info">
          <div class="timeline-marker is-info"></div>
          <div class="timeline-content">
            <p class="heading">March 2017</p>
            <p>{{getMessages.march_2017}}</p>
            <Collapse class="detail-button" :name="buttonName" :item="getMessages.master"></Collapse>
          </div>
        </div>
        <div class="timeline-item is-info">
          <div class="timeline-marker is-info"></div>
          <div class="timeline-content">
            <p class="heading">April 2017</p>
            <p>{{getMessages.april_2017}}</p>
            <Collapse class="detail-button" :name="buttonName" :item="getMessages.simplex"></Collapse>
          </div>
        </div>
        <header class="timeline-header">
          <span class="tag is-medium is-info">Now</span>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
  import Collapse from '../components/Collapse'

  export default {
    name: "Career",
    components: {Collapse},
    component: {
      Collapse
    },
    data() {
      return {
        buttonName: "Detail"
      }
    },
    computed: {
      language() {
        return this.$store.getters.language
      },
      getMessages() {
        return require('./career_' + this.language + '.json')
      }
    }
  }
</script>

<style>
  @media (min-width: 769px) {
    .career-area {
      padding-left: 10%;
    }
  }

  .detail-button {
    margin-top: 1rem;
  }
</style>