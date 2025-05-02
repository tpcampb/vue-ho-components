<script setup lang="ts">

import DatePicker from 'primevue/datepicker'
import { ref, onMounted, watch } from 'vue';


const date = ref(new Date())

const test = ref(null)

onMounted(() => {

})

</script>

<template>
  <div class="my-datepicker">
    <DatePicker v-model="date" :showIcon="true" class="my-datepicker"/>
  </div>
</template>

<style scoped>

.my-datepicker input {
  background-color: blue;
}
</style>