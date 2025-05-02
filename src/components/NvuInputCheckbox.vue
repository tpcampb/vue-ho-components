//TODO::Add ability to set true and false value
<script setup lang="ts">
import type { InputVm } from '@/types/InputVm.ts'
import { useElementIdGen } from '@/composables/useElementIdGen.ts'

interface Props {
  inputVm: InputVm
  idPrefix?: string
  idIndex?: number
}

const props = defineProps<Props>()
const inputVm = defineModel<InputVm>( 'inputVm', {
  required: true,
});
const { getElementId } = useElementIdGen(inputVm.value);
const trueValue = 'true';
const falseValue = 'false';

</script>

<template>
  <input
    type="checkbox"
    v-model="props.inputVm.value"
    v-if="props.inputVm.isVisible"
    :disabled="!props.inputVm.isEnabled"
    :class="{ 'nvu-input-error': props.inputVm.hasError }"
    :id="getElementId(props.idPrefix, props.idIndex)"
  />
</template>