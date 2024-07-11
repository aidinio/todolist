<script setup>
import TextInput from './components/TextInput.vue'
import AddButton from './components/AddButton.vue'
import TodoAdd from './components/TodoAdd.vue'
import TodoItem from './components/TodoItem.vue'
</script>

<template>
  <section class="flex flex-col justify-center items-center h-[100vh] text-[1rem]">
    <div class="w-[55%] max-w-[960px] flex flex-col gap-[53px]">
      <TodoAdd />
      <div class="flex flex-col gap-[13px]">
        <TodoItem>This is a sample todo item that has an interesting text which is interesting.</TodoItem>
        <TodoItem>Second todo item. Let's do it!</TodoItem>
        <TodoItem>Lorem ipsum and third todo.</TodoItem>
        <TodoItem>Fourth todo.</TodoItem>
        <TodoItem>And finally the last todo!</TodoItem>
      </div>
    </div>
  </section>
</template>