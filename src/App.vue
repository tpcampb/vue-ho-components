<script setup lang="ts">
import { ref } from 'vue'
import type { InputVm } from '@/types/InputVm.ts'
import { useId } from 'vue'
import Cfei from '@/components/Cfei.vue'
import DatePicker from 'primevue/datepicker'
import NvuInputCheckbox from '@/components/NvuInputCheckbox.vue'
import NvuInputText from '@/components/NvuInputText.vue'
import { useElementIdGen } from '@/composables/useElementIdGen.ts'
import NvuInputDatepicker from '@/components/NvuInputDatepicker.vue'
import Test from '@/components/Test.vue'

const testInputVm = ref<InputVm>({
  group: 'Make',
  name: 'ddlMake',
  value: 'FORD',
  options: [
    {
      display: '-- Select --',
      value: '-1',
    },
    {
      display: 'AUDI',
      value: 'AUDI',
    },
    {
      display: 'TOYOTA',
      value: 'TOYT',
    },
  ],
  isVisible: true,
  isEnabled: true,
  hasError: false,
  properties: new Map<string, string>([['prop1', 'prop1 value']]),
})
const testCheckboxInputVm = ref<InputVm>({
  group: 'Cfei',
  name: 'chkCfei',
  value: 'true',
  options: [],
  isVisible: true,
  isEnabled: true,
  hasError: false,
  properties: new Map<string, string>(),
})
const testDateInputVm = ref<InputVm>({
  "group": "PurchasedDate",
  "name": "txtPurchasedDate",
  "value": "5/16/2022",
  "options": [],
  "isVisible": true,
  "isEnabled": true,
  "hasError": false,
  "properties": new Map<string, string>(),
})

const date = ref(new Date())

const props = ref({
  isChecked: 'true',
})


function handleInputChange(event: any) {
  console.log('handleInputChange inner')
  console.log(event)
  event.preventDefault()
}

function click(event: any) {
  // console.log(event);
  // console.log(testCheckboxInputVm.value.value);
  //console.log(props);
  //console.log(`${typeof props.value.isChecked} - ${props.value.isChecked}`);
  console.log(testInputVm.value)
}
</script>

<template>
  <p>hi</p>

  <div>
    <NvuInputText v-model:inputVm="testInputVm" :idPrefix="'nvu'" :idIndex="1"></NvuInputText>
    <p>
      {{ testInputVm.value }}
    </p>
  </div>

  <div>
    <NvuInputCheckbox :input-vm="testCheckboxInputVm" :idPrefix="'nvu'" :idIndex="2"></NvuInputCheckbox>

    <p>
      {{ testCheckboxInputVm.value }}
    </p>

  </div>

  <div>
    <Test></Test>
  </div>

<!--  <div>-->
<!--    <NvuInputDatepicker ref="test"></NvuInputDatepicker>-->
<!--  </div>-->


  <div><button type="button" @click="click">Click</button>--></div>
  <!--  <Cfei></Cfei>-->
  <!--  <div>-->
  <!--    <input @input="handleInputChange">-->
  <!--    <br>-->
  <!--    <NvuInputText :inputVm="testInputVm"></NvuInputText>-->
  <!--    <br>-->
  <!--    <NvuInputCheckbox :inputVm="testCheckboxInputVm"></NvuInputCheckbox>-->
  <!--    <br>-->
  <!--    <button type="button" @click="click">Click</button>-->
  <!--    <p>s</p>-->
  <!--    <DatePicker v-model="date" showIcon showButtonBar :pt="{-->
  <!--      header: 'my-dp-header',-->
  <!--      dayView: 'my-dp-dayView',-->
  <!--      tableHeader: 'my-dp-tableHeader',-->
  <!--      tableHeaderCell: 'my-dp-tableHeaderCell',-->
  <!--      tableBody: 'my-dp-tableBody',-->
  <!--      dayCell: 'my-dp-dayCell'-->
  <!--    }"/>-->
  <!--</div>-->
</template>

<style>
@import 'assets/base.css';

.my-datepicker {
  .p-datepicker-input {
    background-color: green;
  }

  .p-datepicker {
    background-color: red !important;
  }

  .p-datepicker-day {
    color: red !important;
  }
}

.my-dp-header {
  background-color: #525552 !important;
  color: #fff !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.my-dp-header button {
  background-color: #525552 !important;
  box-shadow: none !important;
  border: none !important;
  color: #fff !important;
}

.my-dp-dayView {
  width: 100%;
  background-color: #777 !important;
}

.my-dp-tableHeaderCell {
  background-color: #777 !important;
  color: white !important;
  align-items: center;
}

.my-dp-tableBody {
  background-color: #eee !important;
}

.my-dp-dayCell {
  text-align: center;
}
</style>
