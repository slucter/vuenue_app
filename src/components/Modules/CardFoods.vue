<template>
  <div class="card shadow" style="width: 18rem">
    <img class="card-img-top" :src="'assets/img/'+food.gambar" :alt="food.name" />
    <div class="card-body">
      <h5 class="card-title">{{food.nama}}</h5>
      <p class="card-text">
        Harga : Rp. {{food.harga}}
      </p>
      <router-link :to="'/foods/details/'+food.id+'/'+food.nama" class="btn btn-warning">
          <b-icon icon="cart"></b-icon>
          Pesan
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['food'],
  mounted () {
    this.$sr.reveal('.card', {
      duration: 2000,
      origin: 'bottom',
      distance: '50px',
      reset: true
    })
  }
}
</script>

<style scoped>
</style>
