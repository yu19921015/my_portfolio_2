<template>
  <div id="app">
    <div id="nav">
      <Navigation></Navigation>
    </div>
    <router-view/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navigation from '@/components/Navigation.vue'

  export default {
    name: 'app',
    components: {
      Navigation
    }
  }
</script>


<style>

</style>
