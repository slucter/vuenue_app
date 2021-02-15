<template>
  <b-row class="mt-5 mb-5">
    <b-col
      class="mb-4"
      md="4"
      cols="12"
      v-for="data in getList"
      :key="data.id"
    >
      <div class="d-flex w-100 h-100 justify-content-center">
        <CardFoods :food="data" />
      </div>
    </b-col>
  </b-row>
</template>

<script>
import CardFoods from '../../components/Modules/CardFoods'
import { mapState } from 'vuex'

export default {
  props: ['urlGet', 'cari'],
  components: {
    CardFoods
  },
  computed: {
    ...mapState(['getList'])
  },
  mounted () {
    this.$store.dispatch('getList', this.urlGet)
  }
}
</script>

<style scoped>
</style>
