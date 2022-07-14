<template>
  <h1>Search pokemon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input 
    v-model="pokemonId"
    ref="txtSearchId"
    type="number"
    placeholder="Number pokemon"
    min="1" />
  </form>
  <br>
  <span>Hit Enter to Search</span>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const pokemonId = ref(1)
    const txtSearchId = ref(undefined)

    onActivated( () => {
      txtSearchId.value.select()
    })

    return { 
      pokemonId,
      txtSearchId,
      onSubmit: () => {
        // console.log('pokemon to search: ' + pokemonId.value)
        router.push({ name: 'pokemon-id', params: {id: pokemonId.value}})
      }
    }
  }
}
</script>
