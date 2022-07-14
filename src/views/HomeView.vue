<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h2>{{ ironman }}</h2>
    <h2>{{ hulk }}</h2>
  </div>

  <button @click="changeIronman">Change Iron</button>
  <button @click="changeHulk">Change hulk</button>

  <h3>IronMan: {{ ironManIsAlive }}</h3>
  <h3>Hulk: {{ hulkManIsAlive }}</h3>
  <button @click="changeStatus">Change Status</button>

</template>

<script>
import { ref, reactive } from 'vue'
// @ is an alias to /src


export default {
  name: 'HomeView',
  setup() {
    const ironman = ref({ name: 'Tony', age: 50 })
    const hulk = reactive({ name: 'Bruce', age: 45 })

    const ironManIsAlive = reactive(false);
    const hulkManIsAlive = ref(false);

    const changeStatus = () => {
      hulkManIsAlive.value = !hulkManIsAlive.value
    }

    return { 
      ironman,
      hulk,
      ironManIsAlive,
      hulkManIsAlive,
      changeStatus,
      changeIronman: () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 55
      },
      changeHulk: () => {
        hulk.name = 'Bruce Banner', 
        hulk.age = 43
      }
    }
  }
}
</script>
