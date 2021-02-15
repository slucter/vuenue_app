<template>
  <div id="app">
    <div class="container">
      <Navbar />
      <router-view/>
      <footer class="text-center">
        <hr>
          <span>2020 &copy; copyright - Muhamad irhashdianto</span>
      </footer>
    </div>
  </div>
</template>

<style>

</style>

<script>
import Navbar from '@/components/Modules/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
