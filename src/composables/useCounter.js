import { ref } from 'vue'

const useCounter = ( val = 11 ) => {
  const counter = ref(val)

    // const increase = () => {
    //   counter.value++
    // }

    // const decrease = () => {
    //   counter.value--
    // }

  return { 
    counter,
    increase: () => counter.value++,
    decrease: () => counter.value--
  }
}

export default useCounter;
