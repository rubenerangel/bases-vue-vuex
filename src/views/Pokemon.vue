<template>
  <h1 v-if="!pokemon && !errorMessage">Search ...</h1>
  <h1 v-else-if="errorMessage">{{errorMessage}}</h1>
  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img class="img-fluid" :src="pokemon.sprites.front_default" :alt="pokemon.name">
    <br />
    <router-link :to="{ name: 'pokemon-search' }">Back</router-link>
  </template>
</template>

<script>
// import { ref } from 'vue'
// This es to route -> Este es para la ruta
import { watch } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import usePokemon from '../composables/Pokemon/usePokemon'

export default {
  setup() {
    const route = useRoute()
    // console.log(route.params)

    const { errorMessage,isLoading,pokemon, searchPokemon} = usePokemon( route.params.id )

    watch(
      () => route.params.id,
      // ( value, prevValue ) => { // Se puede tener el valor anterior y el actual
      () => {
        // console.log(value, prevValue)
        searchPokemon(route.params.id)
      }
    )

    onBeforeRouteLeave(() => {
      console.log('onBeforeRouteLeave')
      const answer = window.confirm('Are you sure you want to leave')

      if ( !answer ) return false
    })

    return { 
      errorMessage,
      isLoading,
      pokemon,
    }
  }
}
</script>
