<template>
   <div class="consulta">
       <input type="text " placeholder="Informa a placa do seu veiculo" v-model="placa">
       <button @click="consultarPlaca()">Consultar</button>
       </div>

</template>

<script>
 const axios = require('axios')
export default {
    data:function(){
        return {
            placa: ''
        }
    },
    mounted(){
        axios.get("multas.json").then(multas => this.$store.state.multas = multas.data)
       
    },methods: {
        consultarPlaca: function(){
          this.$store.state.dadosVeiculo = this.$store.state.multas.filter(multa =>multa.PLACA == this.placa )
          this.$router.push("/resultado")
           
        }
    }
}
</script>
<style >

</style>