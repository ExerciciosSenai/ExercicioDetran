<template>
<DIV>
<ul v-for="dados in dadosVeiculo" :key="dados.PLACA">
    <li v-if="dados.PLACA">PLACA: {{dados.PLACA}}</li>
    <li v-if="dados.LOCALIDADE">LOCALIDADE: {{dados.LOCALIDADE}}</li>
    <li v-if="dados.DADOS_INFRACAO.VALOR">VALOR: {{dados.DADOS_INFRACAO.VALOR}}</li>
    <li v-if="dados.DADOS_INFRACAO.DATAHORA">DATA E HORA: {{dados.DADOS_INFRACAO.DATAHORA}}</li>
    <li v-if="dados.DADOS_INFRACAO.TIPO">TIPO: {{dados.DADOS_INFRACAO.TIPO}}</li>
     <li v-if="dados.DADOS_INFRACAO.VEL_MAXIMA">VELOCIDADE MAXIMA: {{dados.DADOS_INFRACAO.VEL_MAXIMA}}km/h </li>
</ul>
<button @click="voltar()">VOLTAR </button>
</DIV>
  


</template>

<script>
export default {
    computed: {
        dadosVeiculo(){
                    return this.$store.state.dadosVeiculo
        }
    }, methods:{
        voltar: function(){
             this.$router.push("/")
        }
    }
}
</script>

<style>

</style>