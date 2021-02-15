<template>
  <div>
    <Breadcrumb page="Keranjang" />
    <div class="row mt-3">
      <div class="col">
        <h2>Keranjang <strong>Saya</strong></h2>
        <div class="table-responsive mt-3" v-if="getCart.length > 0">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Foto</th>
                <th scope="col">Makanan</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Harga</th>
                <th scope="col">Total Harga</th>
                <th scope="col">Hapus</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in getCart" :key="item.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>
                  <img
                    :src="'assets/img/' + item.product.gambar"
                    alt="gambar produk"
                    class="img-fluid shadow"
                    width="250"
                  />
                </td>
                <td>
                  <strong>{{ item.product.nama }}</strong>
                </td>
                <td>{{ item.keterangan ? item.keterangan : " - " }}</td>
                <td>{{ item.jumlah }}</td>
                <td>Rp. {{ item.product.harga }}</td>
                <td>
                  Rp.
                  {{ item.jumlah ? item.product.harga * item.jumlah : " - " }}
                </td>
                <td align="center" class="text-danger">
                  <button class="btn btn-danger" @click="deleteItem(item.id)">
                    <b-icon-trash />
                  </button>
                </td>
              </tr>
              <tr>
                <td colspan="6" align="right">
                  <strong>Total harga :</strong>
                </td>
                <td align="center">
                  <strong>Rp. {{ totalHarga }}</strong>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row justify-content-end" v-if="getCart.length > 0">
      <b-col cols="12" md="4">
        <form class="mt-4" @submit.prevent="checkOut">
          <div class="form-group">
            <label for="item">Nama pemesan :</label>
            <input
              type="text"
              placeholder="Nama ..."
              class="form-control"
              v-model="pesan.nama"
            />
          </div>
          <div class="form-group">
            <label for="item">Nomor kursi :</label>
            <input
              type="text"
              placeholder="Nomor Meja"
              class="form-control"
              v-model="pesan.noMeja"
            />
          </div>
          <button type="submit" class="btn btn-warning float-right">
            <b-icon-cart /> Pesan
          </button>
        </form>
      </b-col>
    </div>
    <div class="row mt-4" v-else>
       <div class="col text-center">
           <img src="../../public/assets/img/nodata.svg" alt="nodata" class="img-fluid mb-4" width="250">
           <h1><strong>Oops Keranjang Kosong!?</strong></h1>
           <p><strong>Kembali ke menu foods dan pilih menu kesukaanmu</strong></p>
       </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Breadcrumb from '../components/Modules/Breadcrumb'

export default {
  name: 'Kranjang',
  components: {
    Breadcrumb
  },
  data () {
    return {
      pesan: {}
    }
  },
  computed: {
    ...mapState(['getCart']),
    totalHarga () {
      return this.getCart.reduce((item, data) => {
        return item + data.product.harga * data.jumlah
      }, 0)
    }
  },
  methods: {
    deleteItem (item) {
      this.$store.dispatch('deleteItem', item).then((result) => {
        if (result.status === 200) {
          this.$toast.open({
            message: 'Berhasil hapus item',
            type: 'error',
            position: 'top-right'
          })
          this.$store.dispatch('getCart', 'http://localhost:3000/keranjangs')
        } else {
          this.$toast.open({
            message: 'Network Error',
            type: 'error',
            position: 'top-right'
          })
        }
      })
    },
    checkOut () {
      this.pesan.menu = this.getCart
      //   this.getCart.forEach(element => {
      //     this.$store.dispatch('updateSoldItem', element.product)
      //   })
      if (this.pesan.nama && this.pesan.noMeja) {
        this.$store.dispatch('checkOut', this.pesan).then((result) => {
          this.getCart.map((itemDelAll) => {
            return this.$store
              .dispatch('deleteItem', itemDelAll.id)
              .catch((error) => console.log(error))
          })
          this.$toast.open({
            message: 'Success Dipesan!',
            type: 'success',
            position: 'top-right'
          })
          this.$router.push('/pesanan-sukses')
        })
      } else {
        this.$toast.open({
          message: 'Silahkan input : nama & no meja!',
          type: 'error',
          position: 'top-right'
        })
      }
    }
  },
  mounted () {
    this.$store.dispatch('getCart', 'http://localhost:3000/keranjangs')
  }
}
</script>

<style scoped>
</style>
