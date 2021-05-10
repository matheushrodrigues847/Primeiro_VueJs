<template>
    <h1 class="centralizado">{{ texto }}</h1>
</template>

<script>
export default {
   data(){
       return {
           texto: 'Cadastro'
       }
   }
}
</script>

<style scoped>
    .centralizado{
        text-align: center;
    }
</style>