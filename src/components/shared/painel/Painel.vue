<template>
    <div class="painel" :class="{ padrao: visivel }">
        <div class="painel__titulo" @click="visivel = !visivel">
            <h2>{{ titulo }}</h2>
        </div>
        <transition name="painel-fade">
          <div class="painel__conteudo" v-show="visivel">  
            <slot>
            </slot>
            <!--
              
                <slot name="rodape"></slot>
            -->
          </div>
        </transition>
        
    </div>       
</template>

<script>

export default {
  props: ['titulo'],

  data(){
    return{
      visivel:true
    }
  },
}
</script>

<style scoped>

  .painel{
    width: 200px;
    min-height:87px;
    transition: min-height .2s ease-in;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    
    box-shadow: 5px 5px 10px grey;
    cursor: pointer;

  }
  .painel.padrao{
    min-height:230px;
    transition: min-height .1s ease-out;
  }
  .painel:hover{
    box-shadow: 5px 5px 15px grey;
    
  }
  .painel__titulo{
    text-align: center;
    min-height: 55px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: lightblue;
  }

  .painel__conteudo{
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  
  
  .painel-fade-enter, .painel-fade-leave-active{
    opacity:0;
  }
  .painel-fade-enter-active, .painel-fade-leave-active{
    transition: opacity .12s;
  }

</style>
