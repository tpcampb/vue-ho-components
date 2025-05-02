<script setup lang="ts">
import '@/assets/base.css'
import type { InputVm } from '@/types/InputVm.ts'
import { onMounted } from 'vue'

interface Props {
  inputVm: InputVm;
  idPrefix?: string;
  idIndex?: number;
}
const props = defineProps<Props>()

function getId() {
  if(props.idPrefix || props.idIndex) {
    const prefix = (props.idPrefix) ? `${props.idPrefix}.` : ''
    const id = props.idIndex ? props.idIndex : 0;

    return `${prefix}${id}.${props.inputVm.name}`;
  }

  return undefined;
}

onMounted(() => {
  console.log(props.inputVm);
});

function handleInputChange(event: any) {
  console.log('handleInputChange inner');
  console.log(event);
  event.preventDefault();
}

</script>

<template>
  <input type="text"
         v-model="props.inputVm.value"
         v-if="props.inputVm.isVisible"
         :disabled="!props.inputVm.isEnabled"
         :class="{ 'nvu-input-error': props.inputVm.hasError }"
         :id="getId()"
  >
  <!--         @input.prevent="handleInputChange"-->
</template>

<style scoped>

</style>