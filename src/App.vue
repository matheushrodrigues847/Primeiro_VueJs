<template>
  <div class="container">
    <meu-menu :rotas="routes"/>

    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {
  components:{ 
    'meu-menu': Menu
  },

  data(){
    return {
      routes
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  .container{
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .pagina-enter, .pagina-leave-active{
    opacity:0;
  }
  .pagina-enter-active, .pagina-leave-active{
    transition: opacity .12s;
  }

</style>
