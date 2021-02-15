<template>
  <div>
    <Breadcrumb :page="$route.params.nama"/>
    <div class="row">
        <b-col cols="12" md="6" lg="6" class="mb-3">
            <img :src="'../../../assets/img/'+foodDetail.gambar" class="img-fluid">
        </b-col>
        <b-col cols="12" md="6" lg="6">
            <h2><strong>{{foodDetail.nama}}</strong></h2>
            <hr />
            <h4>Harga : Rp. <strong>{{foodDetail.harga}}</strong></h4>
            <form class="mt-4" @submit.prevent="submitPesanan">
                <div class="form-group">
                    <label for="jumlah">Jumlah pesanan</label>
                    <b-form-spinbutton id="jumlah" v-model="pesan.jumlah" min="1" max="100"></b-form-spinbutton>
                </div>
                <div class="form-group">
                    <label for="keterangan">Tambah keterangan</label>
                    <textarea id="keterangan" placeholder="Spt : pedes, nasi setengah ..." class="form-control" v-model="pesan.keterangan">
                    </textarea>
                </div>
                <button type="submit" class="btn btn-warning">
                    <b-icon-cart /> Pesan
                </button>
            </form>
        </b-col>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Breadcrumb from '../components/Modules/Breadcrumb'

export default {
  name: 'Details',
  components: {
    Breadcrumb
  },
  data () {
    return {
      url: 'http://localhost:3000/products/',
      pesan: {
        jumlah: 1,
        keterangan: '',
        product: null
      }
    }
  },
  computed: {
    ...mapState(['foodDetail'])
  },
  methods: {
    submitPesanan () {
      this.pesan.product = this.foodDetail
      if (!this.pesan.jumlah) return this.$toast.open({ message: 'Masukan jumlah pesanan!', type: 'error', position: 'top-right' })
      this.$store.dispatch('pesanFoods', this.pesan)
        .then((result) => {
          this.$toast.open({
            message: 'Pesanan masuk keranjang',
            type: 'success',
            position: 'top-right'
          })
          this.$router.push('/keranjang')
        })
        .catch((eror) => {
          console.log(eror)
        })
    }
  },
  mounted () {
    this.$store.dispatch('getDetail', {
      url: this.url,
      id: this.$route.params.id
    })
  }
}
</script>

<style scoped>
</style>
