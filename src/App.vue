<script setup>
import { PhPlusCircle } from '@phosphor-icons/vue'
import Button from './components/Button.vue'
</script>

<template>
  <section class="flex flex-col justify-center items-center h-[100vh] text-[1rem]">
    <div class="w-[50%] max-w-[960px]">
      
      <div class="flex w-[100%] gap-[4px] h-[60px]">
        <input type="text" name="" id="" placeholder="Enter the todo description" class="flex-grow-[85] focus:outline-none pl-[30px] text-blue-foreground rounded-[17px] bg-blue-background-2 placeholder:opacity-100 placeholder:text-blue-foreground meow">
        <button class="flex-grow-[12] bg-green-background rounded-[17px] text-green-foreground focus:outline-none meow2"><PhPlusCircle :size="18" class="inline-block align-top mr-[5px]"/>Add</button>
        <Button></Button>
      </div>
    </div>
  </section>
</template>