<script setup>
import TextInput from './TextInput.vue'
import AddButton from './AddButton.vue'
import { ref, defineEmits } from 'vue'

const todoText = ref('');
const clearInput = ref(false)
const emit = defineEmits()

function clickHandler() {
    if (todoText) emit('addTodo', todoText)
    clearInput.value = true
    console.log(`[TodoAdd.vue] clearInput is: ${clearInput.value}`)
}
</script>

<template>
    <div class="flex w-[100%] gap-[7px] h-[60px]">
        <TextInput @clearedText="clearInput = undefined" :clearInput="clearInput" @textChange="(text) => {todoText = text}" class="flex-[87]" />
        <AddButton @click="clickHandler" class="flex-[13]" />
    </div>
</template>