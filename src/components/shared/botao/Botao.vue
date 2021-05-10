<template>
    <button :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {
   props:['tipo','rotulo']
}
</script>

<style scoped>

</style>