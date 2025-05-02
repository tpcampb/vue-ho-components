<script setup lang="ts">

import type { InputVm } from '@/types/InputVm.ts'
import { useElementIdGen } from '@/composables/useElementIdGen.ts'

interface Props {
  idPrefix?: string;
  idIndex?: number;
}

const props = defineProps<Props>();
const inputVm = defineModel<InputVm>( 'inputVm', {
  required: true,
});

const { getElementId } = useElementIdGen(inputVm.value);

</script>

<template>
  <input type="text"
         v-model="inputVm.value"
         v-if="inputVm.isVisible"
         :disabled="!inputVm.isEnabled"
         :class="{ 'nvu-input-error': inputVm.hasError }"
         :id="getElementId(props.idPrefix, props.idIndex)"
  >
</template>