<template>
    <div class="row mt-5">
      <div class="col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/foods">Foods</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ page }}
            </li>
          </ol>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: ['page']
}
</script>
