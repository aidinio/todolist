<script setup>
import { reactive, ref } from 'vue';
import TodoAdd from './components/TodoAdd.vue'
import TodoItem from './components/TodoItem.vue'

const todoId = ref(0)

const todos = reactive([
  {
    id: todoId.value++,
    text: "This is a sample todo item that has an interesting text which is interesting.",
    done: false
  },
  {
    id: todoId.value++,
    text: "Second todo item. Let's do it!",
    done: false
  },
  {
    id: todoId.value++,
    text: "Second todo item. Let's do it!",
    done: false
  },
  {
    id: todoId.value++,
    text: "Second todo item. Let's do it!",
    done: false
  },
  {
    id: todoId.value++,
    text: "Second todo item. Let's do it!",
    done: false
  },
])

function addTodo(text) {
  todos.push({id: todoId.value++, text: text.value, done: false})
}
</script>

<template>
  <section class="flex flex-col justify-center items-center h-[100vh] text-[1rem]">
    <div class="w-[55%] max-w-[960px] flex flex-col gap-[53px]">
      <TodoAdd @addTodo="(todoText) => addTodo(todoText)"/>
      <div class="flex flex-col gap-[13px]">
        <TodoItem v-for="todo in todos" :key="todo.id">{{ todo.text }}</TodoItem>
      </div>
    </div>
  </section>
</template>