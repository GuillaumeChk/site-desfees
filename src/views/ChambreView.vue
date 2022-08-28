<template>
  <div class="chambre">
    <h1>chambre{{ chambre.name }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .chambre {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import  chambres  from '../data/chambres.json'
// import  equipments  from '../data/equipments.json'

let chambreName = $route.params.name
    let chambre = chambres.chambreName
</script>