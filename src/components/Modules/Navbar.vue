<template>
  <b-navbar toggleable="lg" type="light">
    <b-navbar-brand href="#">Vuenue</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Foods</router-link>
          </li>
        </ul>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/keranjang">
              Keranjang
              <b-icon icon="cart2"></b-icon>
              <span class="badge badge-warning ml-2">
                {{ getCart.length }}
              </span>
            </router-link>
          </li>
        </ul>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Vuenue</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/foods">Foods</router-link>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/keranjang">
                    Keranjang
                    <b-icon icon="cart2"></b-icon>
                    <span class="badge badge-warning ml-2">
                        {{ getCart.length }}
                    </span>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav> -->
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapState(['getCart'])
  },
  mounted () {
    this.$store.dispatch('getCart', 'http://localhost:3000/keranjangs')
  }
}
</script>

<style scoped>
</style>
