<template>
  <div class="home">
    <h2>FAKE DETRAN</h2>
    <h1>Consulte sua placa:</h1><br>
    <consultaComp/>
  </div>
</template>

<script>
import consultaComp from "../components/consultaComp.vue"


export default {
  name: 'Home',
  components: {
   consultaComp
  }
}
</script>
