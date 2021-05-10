<template>
    <nav>
      <ul>
        <li v-for="(rota, i) in rotas" :key="i">
          <router-link :to="rota.path ? rota.path: '/'">{{ rota.titulo }}</router-link>
        </li>
        
      </ul>
    </nav>
</template>

<script>
export default {
    props:{
        rotas:{
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    nav{
        padding: 2rem 0;
    }
    ul{
        display: flex;
    }
    ul li{
        list-style: none;   
    }

    ul li:first-child{
        margin-right: 1rem;
    }

    li a{
        text-decoration: none;
        color: #000;
    }
</style>