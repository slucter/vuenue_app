<template>
  <div>
    <Hero />
    <!-- Heading -->
    <HeadingFood />
    <!-- Card Food -->
    <CardSection :urlGet="url"/>
    <!-- Footer -->
  </div>
</template>

<script>
import Hero from '../components/Modules/Hero'
import CardSection from '../components/Content/CardSection'
import HeadingFood from '../components/Content/HeadingFood'

export default {
  components: {
    Hero,
    CardSection,
    HeadingFood
  },
  data () {
    return {
      url: 'http://localhost:3000/best-products'
    }
  }
}
</script>

<style scoped>
</style>
