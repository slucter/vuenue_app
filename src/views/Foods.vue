<template>
  <div>
    <div class="row mt-5 mb-4">
      <div class="col">
        <h3>Daftar <strong>Makanan</strong></h3>
      </div>
    </div>
    <div class="row mt-3">
      <b-col cols="12" md="10">
        <b-input-group class="mb-3">
          <b-form-input @keyup="cariMakanan" v-model="cari"></b-form-input>
          <b-input-group-append>
            <b-button size="sm" text="Button" variant="warning"
              ><b-icon-search
            /></b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
      <b-col cols="12" md="2">
        <b-form-select v-model="selected" :options="options" class="h-90" @change="selectCat"></b-form-select>
      </b-col>
    </div>
    <CardSection :urlGet="url" :cari="cari" />
    <div class="row mt-4" v-if="getList.length === 0">
       <div class="col text-center">
           <img src="../../public/assets/img/nodata.svg" alt="nodata" class="img-fluid mb-4" width="250">
           <h1><strong>Oops Tidak Ditemukan!?</strong></h1>
           <p><strong>Yuk Cari Menu Lain Yang Tersedia</strong></p>
       </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardSection from '../components/Content/CardSection'

export default {
  components: {
    CardSection
  },
  computed: {
    ...mapState(['getList'])
  },
  data () {
    return {
      selected: 'All',
      options: [
        { value: 'All', text: 'Filter' },
        { value: 'All', text: 'All Menu' },
        { value: 'Makanan', text: 'Makanan' },
        { value: 'Minuman', text: 'Minuman' }
      ],
      cari: '',
      url: 'http://localhost:3000/products'
    }
  },
  methods: {
    cariMakanan () {
      this.$store.dispatch('cariFoods', this.cari)
    },
    selectCat () {
      switch (this.selected) {
        case 'All':
          this.$store.dispatch('cariFoods', this.cari)
          break
        case this.selected:
          this.$store.dispatch('filterBy', this.selected)
          break
        default:
          alert('default')
      }
    }
  }
}
</script>

<style scoped>
</style>
