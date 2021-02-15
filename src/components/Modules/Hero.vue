<template>
  <div class="row mt-4">
    <div class="col-md-6 col-sm-12 col-lg-6">
      <div class="d-flex h-100">
        <div class="justify-content-center align-self-center" id="hero-left">
          <h2>
            <strong>Vuenue for your delicious</strong><br />
            Food menu in your gadget
          </h2>
          <p>Gunakan vuenue untuk aplikasi pemesanan menu makanan anda</p>
          <router-link to="/foods" class="btn btn-lg btn-warning">Pesan sekarang</router-link>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-6 d-sm-none d-md-block">
      <div class="d-flex w-100 justify-content-center" id="hero-right">
        <img src="assets/img/undraw.svg" width="80%" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  mounted () {
    this.$sr.reveal('#hero-left', {
      duration: 2000,
      origin: 'bottom',
      distance: '50px'
    })
    this.$sr.reveal('#hero-right', {
      duration: 2000,
      delay: 1000,
      origin: 'top',
      distance: '50px'
    })
  }
}
</script>

<style scoped>
</style>
