<script setup lang="ts">
import { ref } from 'vue'
import DatePicker from 'primevue/datepicker'

const date = ref(new Date())
</script>

<template>
  <p class="tst-p">Test.vue Text</p>
  <div>
    <DatePicker v-model="date" :showIcon="true" class="tst-datepicker"/>
  </div>
</template>

<style scoped>

</style>