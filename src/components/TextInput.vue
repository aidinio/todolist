<script setup>
import { ref, watch } from 'vue'

const inputText = ref('')
const props = defineProps(['clearInput'])
const emit = defineEmits(['clearedText'])

setInterval(() => console.log(props.clearInput), 1000)
watch(() => props.clearInput, (val, oldVal) => {
  console.log(`[TextInput.vue] clearInput is ${val}`)
  console.log(`[TextInput.vue] Clearing ${inputText.value} from the text input.`)
  if (val == true) {
    inputText.value = ''
    emit('clearedText')
  }
})
</script>

<template>
    <input v-model="inputText" @input="$emit(`textChange`, inputText)" type="text" name="" id="" placeholder="Enter the todo description" class="focus:outline-none pl-[30px] text-blue-foreground rounded-[17px] bg-blue-background-2 placeholder:opacity-100 placeholder:text-blue-foreground text-shadow shrink-0">
</template>