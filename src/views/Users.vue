<template>
  <h2 v-if="isLoading">Please wait...</h2>
  <h2 v-else>Users</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length">
    <ul>
      <li v-for="{first_name, last_name, email, id} in users" :key="id">
        <h4>{{ first_name }} {{ last_name }}</h4>
        <h6>{{ email }}</h6>
      </li>
    </ul>
  </div>
  
  <button @click="prevPage">Back</button>
  <button @click="nextPage">Next</button>
  <span>Current page: {{ currentPage }}</span>
</template>


<script>
import useUsers from '../composables/users/useUsers'

export default {
  setup() {
    const {
      currentPage,
      errorMessage, 
      isLoading, 
      nextPage, 
      prevPage, 
      users
    } = useUsers()
    return {
      currentPage,
      errorMessage, 
      isLoading, 
      nextPage, 
      prevPage, 
      users
      // ...useUsers()
    }
  }

}
</script>

<style scoped>
h2 { 
  text-align: center;
  width: 100%;
}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul { 
  width: 250px;
}
</style>